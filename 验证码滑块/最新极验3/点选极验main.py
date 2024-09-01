import base64
import json
import time

import execjs
import requests
from loguru import logger
from sklearn.linear_model import LinearRegression

from ClickVerify import YdmVerify


class JiYan:
    def __init__(self):
        self.session = requests.session()
        self.gt = None
        self.challenge = None
        self._custom_url = "http://api.jfbym.com/api/YmServer/customApi"
        self._headers = {
            'Content-Type': 'application/json'
        }
        self.headers = {
            "referer": "https://www.geetest.com/",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        }
        self.pic = None
        self.c = None
        self.s = None
        self.click_point = None
        self.gj = None
        self.w = None

    def one_request(self):
        url = 'https://www.geetest.com/demo/gt/register-click-official'
        params = {
            't': str(int((time.time() * 1000)))
        }
        response = self.session.get(url=url, headers=self.headers, params=params).json()
        self.gt = response['gt']
        self.challenge = response['challenge']
        logger.debug(response)

    def two_request(self):
        url = 'https://api.geetest.com/get.php'
        params = {
            'gt': self.gt,
            'challenge': self.challenge,
            'lang': 'zh-cn',
            'pt': '0',
            'client_type': 'web',
            'w': '',
            'callback': 'geetest_' + str(int((time.time() * 1000)))
        }
        response = self.session.get(url=url, headers=self.headers, params=params).text[22:-1]
        logger.debug(json.loads(response))

    def three_request(self):
        url = 'https://api.geevisit.com/ajax.php'
        params = {
            'gt': self.gt,
            'challenge': self.challenge,
            'lang': 'zh-cn',
            'pt': '0',
            'client_type': 'web',
            'w': '',
            'callback': 'geetest_' + str(int((time.time() * 1000)))
        }
        response = self.session.get(url=url, params=params).text
        logger.debug(response)

    def four_request(self):
        url = 'https://api.geevisit.com/get.php'
        params = {
            "is_next": "true",
            "type": "click",
            "gt": self.gt,
            "challenge": self.challenge,
            "lang": "zh-cn",
            "https": "true",
            "protocol": "https://",
            "offline": "false",
            "product": "float",
            "api_server": "api.geevisit.com",
            "isPC": "true",
            "autoReset": "true",
            "width": "100%",
            'callback': 'geetest_' + str(int((time.time() * 1000)))
        }
        response = self.session.get(url=url, headers=self.headers, params=params).text[22:-1]
        logger.debug(json.loads(response))
        self.c = json.loads(response)['data']['c']
        self.s = json.loads(response)['data']['s']
        self.pic = json.loads(response)['data']['pic']

    # def save_pic(self):
    #     url = 'https://static.geetest.com' + self.pic
    #     param = {
    #         'challenge': self.challenge
    #     }
    #     pic_content = self.session.get(url=url, headers=self.headers, params=param).content
    #     with open('./pic/click.jpg', 'wb') as f:
    #         f.write(pic_content)
    #     logger.debug('图片保存成功')

    # 识别点击字体的位置坐标
    def click_verify(self, image, extra=None, verify_type="30103"):
        payload = {
            "image": base64.b64encode(image).decode(),
            "extra": 'click',
            "token": "9LWHX_B0NMdXw310e4prb4ofhYeIDWKQWzscYL4TCls",
            "type": verify_type
        }
        if extra:
            payload['extra'] = extra
        resp = self.session.post(self._custom_url, headers=self._headers, data=json.dumps(payload))
        # print(resp.text)
        return resp.json()['data']['data']

    # 将坐标进行转换
    def geetest_click(self, click_xy):
        # 坐标还原
        click_point_array = click_xy.split('|')
        click_point_true = []
        for item in click_point_array:
            x, y = item.split(',')
            point = str(int(int(x) / 344 * 10000)) + '_' + str(int(int(y) / 344 * 10000))
            click_point_true.append(point)
        click_true_str = ','.join(click_point_true)
        return click_true_str

    def parse_data(self, pic, s, c):
        img_res = self.session.get('https://static.geetest.com' + pic, headers=self.headers)
        open('dd.png', 'wb').write(img_res.content)
        xy = self.click_verify(img_res.content)
        print(xy)
        click_true_str = self.geetest_click(xy)
        print(click_true_str)
        # print(click_true_str, pic, s, c, self.gt, self.challenge)
        js = execjs.compile(open('./get_w.js', encoding='utf-8').read())
        data_w = js.call('get_w', click_true_str, self.challenge, self.gt, pic, c, s)
        return data_w

    def five_request(self):
        # js = execjs.compile(open('./get_w.js', encoding='utf-8').read())
        # w = js.call('get_w', self.gj, self.challenge, self.gt, self.pic, self.c, self.s)
        w = self.parse_data(self.pic, self.s, self.c)
        url = 'https://api.geevisit.com/ajax.php'
        params = {
            "gt": self.gt,
            "challenge": self.challenge,
            "lang": "zh-cn",
            "pt": "0",
            "client_type": "web",
            "w": w,
            # 'callback': 'geetest_' + str(int((time.time() * 1000)))
        }

        time.sleep(2)
        response = self.session.get(url=url, headers=self.headers, params=params).text
        logger.debug(response)


if __name__ == '__main__':
    jiyan = JiYan()
    jiyan.one_request()
    # jiyan.requests_js()
    jiyan.two_request()
    jiyan.three_request()
    jiyan.four_request()
    jiyan.five_request()
