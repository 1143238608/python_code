import math

import ddddocr
import execjs
from loguru import logger
import requests


class Slide:
    def __init__(self):
        self.headers = {
            "origin": "https://account.youzan.com",
            "referer": "https://account.youzan.com/login?from_source=360_sem_pp1_a92617",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        self.token = None
        self.randomStr = None
        self.userBehaviorData = None
        self.cy = None
        self.cx = None
        self.session = requests.session()

    def get_token(self):
        url = "https://passport.youzan.com/api/captcha/get-behavior-captcha-token-v2.json"
        params = {
            "bizType": "15",
            "version": "1.0"
        }
        response = self.session.get(url, headers=self.headers, params=params).json()
        self.token = response['data']['token']
        self.randomStr = response['data']['randomStr']
        logger.debug(response)

    def get_pic(self):
        url = 'https://passport.youzan.com/api/captcha/get-behavior-captcha-data.json'
        params = {
            'token': self.token,
            'captchaType': '1'
        }
        response = self.session.get(url=url, headers=self.headers, params=params).json()
        self.cy = math.ceil(response['data']['captchaObtainInfoResult']['cy'] / 2)
        bg_pic = response['data']['captchaObtainInfoResult']['bigUrl']
        fg_pic = response['data']['captchaObtainInfoResult']['smallUrl']
        bg_res = self.session.get(url=bg_pic, headers=self.headers).content
        fg_res = self.session.get(url=fg_pic, headers=self.headers).content
        with open('./pic/bg.png', 'wb') as f:
            f.write(bg_res)
        with open('./pic/fg.png', 'wb') as f:
            f.write(fg_res)
        logger.debug(response)

    def verify(self):
        det = ddddocr.DdddOcr(det=False, ocr=False)
        with open('./pic/fg.png', 'rb') as f:
            target_bytes = f.read()
        with open('./pic/bg.png', 'rb') as f:
            background_bytes = f.read()
        res = det.slide_match(target_bytes, background_bytes)
        self.cx = math.ceil((res["target"][0]+2) / 2)
        logger.debug(f'识别的滑动距离是{res["target"][0]},{self.cx}')

    def get_userBehaviorData(self):
        js = execjs.compile(open('./1.js', encoding='utf-8').read())
        userBehaviorData = js.call('aesEncrypt', self.cx, self.cy, self.randomStr)
        self.userBehaviorData = userBehaviorData
        logger.debug(f'userBehaviorData->{userBehaviorData},cx->{self.cx},cy->{self.cy},randomStr->{self.randomStr}')

    def check(self):
        url = 'https://passport.youzan.com/api/captcha/check-behavior-captcha-data.json'
        data = {
            "bizData": "",
            "bizType": "15",
            "captchaType": "1",
            "token": self.token,
            "userBehaviorData": self.userBehaviorData
        }
        response = self.session.post(url=url, headers=self.headers, data=data).text
        print(response)


if __name__ == '__main__':
    slide = Slide()
    slide.get_token()
    slide.get_pic()
    slide.verify()
    slide.get_userBehaviorData()
    slide.check()
