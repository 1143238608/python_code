import json
import random
import time

import ddddocr
import requests, execjs
from loguru import logger


class Slide:
    def __init__(self):
        self.session = requests.session()
        self.headers = {
            "Host": "passport.fang.com",
            "Origin": "https://passport.fang.com",
            "Referer": "https://passport.fang.com/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest"
        }
        self.challenge = None
        self.gt = None
        self.bg = None
        self.fg = None
        self.distance = None
        self._y = None
        self.start = None
        self.end = None
        self.validate = None

    def get_challenge_gt(self):
        url = 'https://passport.fang.com/getslidecodeinit.api'
        response = self.session.post(url=url, headers=self.headers).json()
        self.challenge = response['challenge']
        self.gt = response['gt']
        logger.debug(response)

    def get_js(self):
        url = 'https://recaptcha.fang.com/'
        headers = {
            "Host": "recaptcha.fang.com",
            "Referer": "https://passport.fang.com/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        params = {
            "c": "index",
            "a": "getType",
            "gt": self.gt,
            "challenge": self.challenge,
            "time": str(int(time.time() * 1000)),
            "callback": "fangcheck_" + str(int(time.time() * 1000)),
            "_200226": ""
        }
        response = self.session.get(url=url, headers=headers, params=params).text
        logger.debug(response)

    def get_pic(self):
        url = 'https://recaptcha.fang.com/'
        params = {
            'c': 'index',
            'a': 'jigsaw',
            'gt': self.gt,
            'challenge': self.challenge,
            'callback': 'fangcheck_' + str(int(time.time() * 1000)),
            '_200226': ''
        }
        headers = {
            "Referer": "https://passport.fang.com/",
            "Host": "recaptcha.fang.com",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        response = self.session.get(url=url, headers=headers, params=params).text
        res = json.loads(response[24:-1])
        self.bg = 'https://static.soufunimg.com/common_m/m_recaptcha/jigsawimg/' + res['url']
        self.fg = 'https://static.soufunimg.com/common_m/m_recaptcha/jigsawimg/' + res['surl']
        with open('./pic/bg.jpg', 'wb') as f:
            f.write(requests.get(url=self.bg).content)
        with open('./pic/fg.jpg', 'wb') as f:
            f.write(requests.get(url=self.fg).content)
        logger.debug(res)

    def verify(self):
        det = ddddocr.DdddOcr(det=False, ocr=False)

        with open('./pic/fg.jpg', 'rb') as f:
            target_bytes = f.read()

        with open('./pic/bg.jpg', 'rb') as f:
            background_bytes = f.read()

        res = det.slide_match(target_bytes, background_bytes)
        self.distance = res['target'][0]
        self._y = res['target'][1]
        logger.debug(res)

    def get_slide_track(self, distance, _y):
        base_gj = [{
            "x": 0,
            "y": _y,
            "t": int(time.time() * 1000),
            "e": "mousedown"
        }]
        for i in range(1, random.randint(17, 20)):
            dic = {}
            base_gj.append(dic)
            base_gj[i]['x'] = base_gj[i - 1]['x'] + random.randint(1, 10)
            base_gj[i]['y'] = _y
            base_gj[i]['t'] = base_gj[i - 1]['t'] + random.randint(1, 10)
            base_gj[i]['e'] = 'mousemove'
        base_gj[-1]['x'] = distance
        base_gj[-1]['e'] = 'mouseup'
        self.start = base_gj[0]['t']
        self.end = base_gj[-1]['t']
        logger.debug(base_gj)
        return base_gj

    def submit(self):
        url = 'https://recaptcha.fang.com/'
        headers = {
            "Host": "recaptcha.fang.com",
            "Referer": "https://passport.fang.com/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        js = execjs.compile(open('./1.js', encoding='utf-8').read())
        i = js.call('get_i')
        tt = slide.get_slide_track(int((self.distance / 320) * 300), random.randint(280, 340))
        # 注意
        time.sleep(3)
        t = js.call('get_tt', tt)
        logger.debug(f'i->{i},t->{t}')
        logger.debug(f'start->{self.start},end->{self.end}')
        params = {
            'c': 'index',
            'a': 'codeDrag',
            'start': str(self.start),
            'end': str(self.end),
            'i': i,
            't': t,
            'gt': self.gt,
            'challenge': self.challenge,
            'callback': 'fangcheck_' + str(int(time.time() * 1000)),
            '_200226': ''
        }
        response = self.session.get(url=url, headers=headers, params=params).text
        logger.debug(response)
        res = json.loads(response[24:-1])
        self.validate = res['validate']


    def login(self):
        url = 'https://passport.fang.com/loginsendmsm.api'
        headers = {
            "Host": "passport.fang.com",
            "Origin": "https://passport.fang.com",
            "Referer": "https://passport.fang.com/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        params = {
            "MobilePhone": "18235015508",
            "Operatetype": "0",
            "Service": "soufun-passport-web",
            "Gt": self.gt,
            "Challenge": self.challenge,
            "Validate": self.validate
        }
        response = self.session.get(url=url, headers=headers, params=params).json()
        logger.debug(response)


slide = Slide()
slide.get_challenge_gt()
slide.get_js()
slide.get_pic()
slide.verify()
slide.submit()
slide.login()
