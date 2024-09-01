import base64
import json
import random
import time

import execjs

from SlideTrack import Track
import cv2
import ddddocr

from RestoreSlider import GetRightImg
import requests
from loguru import logger


# https://www.geetest.com/demo/slide-float.html

class JiYan:
    def __init__(self):
        self.headers = {
            "Referer": "https://www.geetest.com/demo/slide-float.html",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        self._custom_url = "http://api.jfbym.com/api/YmServer/customApi"
        self._headers = {
            'Content-Type': 'application/json'
        }
        self.session = requests.session()
        self.challenge = None
        self.gt = None
        self.pic = None
        self.fullbg = None
        self.bg = None
        self.c = None
        self.s = None
        self.x = None
        self.new_challenge = None

    def first_request(self):
        url = 'https://www.geetest.com/demo/gt/register-slide'
        params = {
            't': str(time.time() * 1000)
        }

        response = self.session.get(url=url, headers=self.headers, params=params).json()
        self.challenge = response['challenge']
        self.gt = response['gt']
        logger.debug(response)

    def second_request(self):
        url = 'https://apiv6.geetest.com/gettype.php'
        params = {
            'gt': self.gt,
            'callback': 'geetest_' + str(int((time.time() * 1000)))
        }
        headers = {
            "Referer": "https://www.geetest.com/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        response = self.session.get(url=url, headers=headers, params=params).text
        logger.debug(response)

    def third_request(self):
        url = 'https://apiv6.geetest.com/get.php'
        params = {
            "gt": self.gt,
            "challenge": self.challenge,
            "lang": "zh-cn",
            "pt": "0",
            "client_type": "web",
            "w": '',
            'callback': 'geetest_' + str(int((time.time() * 1000)))
        }
        response = self.session.get(url=url, headers=self.headers, params=params).text
        logger.debug(response)

    def four_request(self):
        url = 'https://api.geetest.com/ajax.php'
        params = {
            "gt": self.gt,
            "challenge": self.challenge,
            "lang": "zh-cn",
            "pt": "0",
            "client_type": "web",
            "w": '',
            'callback': 'geetest_' + str(int((time.time() * 1000)))
        }
        response = self.session.get(url=url, headers=self.headers, params=params).text
        logger.debug(response)

    def five_request(self):
        url = 'https://api.geetest.com/get.php'
        params = {
            "is_next": "true",
            "type": "slide3",
            "gt": self.gt,
            "challenge": self.challenge,
            "lang": "zh-cn",
            "https": "true",
            "protocol": "https://",
            "offline": "false",
            "product": "embed",
            "api_server": "api.geetest.com",
            "isPC": "true",
            "autoReset": "true",
            "width": "100%",
            'callback': 'geetest_' + str(int((time.time() * 1000)))
        }
        response = self.session.get(url=url, headers=self.headers, params=params).text[22:-1]
        logger.debug(response)
        res = json.loads(response)
        self.c = res['c']
        self.s = res['s']
        self.bg = res['bg']
        self.fullbg = res['fullbg']
        self.new_challenge = res['challenge']

    def save_pic(self):
        bg = 'https://static.geetest.com/' + self.bg
        fullbg = 'https://static.geetest.com/' + self.fullbg
        with open('./pic/wrong_bg.jpg', 'wb') as f:
            f.write(self.session.get(bg).content)
        with open('./pic/wrong_fullbg.jpg', 'wb') as f:
            f.write(self.session.get(fullbg).content)
        right_img = GetRightImg()
        right_img.get_right()
        x = self.slide_verify()['target'][0]
        self.x = x - 1
        logger.debug(self.x)

    def slide_verify(self):
        slide = ddddocr.DdddOcr(det=False, ocr=False)

        with open('./pic/right_bg.jpg', 'rb') as f:
            target_bytes = f.read()

        with open('./pic/right_fullbg.jpg', 'rb') as f:
            background_bytes = f.read()
        res = slide.slide_comparison(target_bytes, background_bytes)
        return res



    def get_track(self):
        track = Track()
        _track = track.get_slide_track(self.x)
        logger.debug(_track)
        return _track

    def six_request(self):
        js = execjs.compile(open('./get_w.js', encoding='utf-8').read())
        track = self.get_track()
        print(track)
        w = js.call('get_w', self.gt, self.new_challenge, self.x, self.c, self.s, track[-1][-1], track)
        print(self.gt, self.new_challenge, self.x, self.c, self.s, track[-1][-1])
        # print(w)
        url = 'https://api.geetest.com/ajax.php'
        params = {
            "gt": self.gt,
            "challenge": self.new_challenge,
            "lang": "zh-cn",
            "$_BCN": "0",
            "client_type": "web",
            "w": w,
            'callback': 'geetest_' + str(int((time.time() * 1000)))
        }
        headers = {
            "Referer": "https://www.geetest.com/",
            'Host': 'api.geetest.com',
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        # time.sleep(2)
        response = self.session.get(url=url, headers=headers, params=params).text
        logger.debug(response)


if __name__ == '__main__':
    jiyan = JiYan()
    jiyan.first_request()
    jiyan.second_request()
    jiyan.third_request()
    jiyan.four_request()
    jiyan.five_request()
    jiyan.save_pic()
    jiyan.six_request()
