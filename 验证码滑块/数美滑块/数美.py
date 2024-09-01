import io
from PIL import Image
import ddddocr
import requests, json, execjs
from GetTrack import Track
import time
import math, random
import numpy as np


# pip install -i https://pypi.tuna.tsinghua.edu.cn/simple
class Slide:
    def __init__(self):
        self.headers = {
            "Origin": "https://castatic.fengkongcloud.cn",
            "Referer": "https://castatic.fengkongcloud.cn/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        }
        self.bg_pic = None
        self.fg_pic = None
        self.session = requests.session()
        self.rid = None
        self._x = None

    def request_conf(self):
        headers = {
            "Origin": "https://castatic.fengkongcloud.cn",
            "Referer": "https://castatic.fengkongcloud.cn/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        }
        url = "https://captcha1.fengkongcloud.cn/ca/v1/conf"
        params = {
            "model": "slide",
            "lang": "zh-cn",
            "callback": "sm_" + str(int(time.time() * 1000)),
            "organization": "RlokQwRlVjUrTUlkIqOg",
            "channel": "DEFAULT",
            "rversion": "1.0.4",
            "appId": "default",
            "sdkver": "1.1.3",
            "captchaUuid": "20240223194826bPeRA7HeCtjamdjfP4"
        }
        response = self.session.get(url, headers=headers, params=params).text

        print(response)

    def get_slide(self):
        url = "https://captcha1.fengkongcloud.cn/ca/v1/register"
        params = {
            "channel": "DEFAULT",
            "sdkver": "1.1.3",
            "appId": "default",
            "lang": "zh-cn",
            "data": "^%^7B^%^7D",
            "model": "slide",
            "captchaUuid": "20240223194826bPeRA7HeCtjamdjfP4",
            "organization": "RlokQwRlVjUrTUlkIqOg",
            "rversion": "1.0.4",
            "callback": "sm_" + str(int(time.time() * 1000))
        }
        response = self.session.get(url, headers=self.headers, params=params).text
        self.bg_pic = 'https://castatic.fengkongcloud.cn/' + json.loads(response[17:-1])['detail']['bg']
        self.fg_pic = 'https://castatic.fengkongcloud.cn/' + json.loads(response[17:-1])['detail']['fg']
        self.rid = json.loads(response[17:-1])['detail']['rid']
        print(response[17:-1])

    def save_slide(self):
        bg_res = self.session.get(url=self.bg_pic, headers=self.headers).content
        fg_res = self.session.get(url=self.fg_pic, headers=self.headers).content
        with open('./pic/bg.jpg', 'wb') as f:
            f.write(bg_res)
        with open('./pic/fg.jpg', 'wb') as f:
            f.write(fg_res)
        print('图片保存成功')

    def verify(self):
        _slide = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)

        with open('./pic/fg.jpg', 'rb') as f:
            target_bytes = f.read()

        with open('./pic/bg.jpg', 'rb') as f:
            background_bytes = f.read()

        res = _slide.slide_match(target_bytes, background_bytes, simple_target=True)
        self._x = int(res['target'][0] / 2)

        print(res)

    def get_track(self, distance):
        x = [0, 0]
        y = [0, 0, 0]
        z = [0]
        count = np.linspace(-math.pi / 2, math.pi / 2, random.randrange(20, 30))
        func = list(map(math.sin, count))
        nx = [1 + 1 for i in func]
        add = random.randrange(10, 15)
        sadd = distance + add
        x.extend(list(map(lambda x: x * (sadd / 2), nx)))
        x.extend(np.linspace(sadd, distance, 3 if add > 12 else 2))
        x = [math.floor(i) for i in x]
        for i in range(len(x) - 2):
            if y[-1] < 30:
                y.append(y[-1] + random.choice([0, 0, 1, 1, 2, 2, 1, 2, 0, 0, 3, 3]))
            else:
                y.append(y[-1] + random.choice([0, 0, -1, -1, -2, -2, -1, -2, 0, 0, -3, -3]))
            for i in range(len(x) - 1):
                z.append((z[-1] // 100 * 100) + 100 + random.choice([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2]))
            trace = list(map(list, zip(x, y, z)))
            times = trace[-1][-1] + random.randint(1, 5)
            # logger.info（f模拟的轨迹--->>>{trace}）#logger.info(f'times--->>>{times})
            return trace, times

    def fverify(self):
        # track = Track()
        # slide_info = track.get_slide_track(self._x+random.randrange(10, 15))

        slide_info = self.get_track(self._x)
        js = execjs.compile(open('./数美.js', encoding='utf-8').read())
        je = js.call('DES_Encrypt', self._x / 300, "5ea96022")
        mu = js.call('DES_Encrypt', str(slide_info[0]), 'e7e1eb0d')  # 滑动的轨迹
        ww = js.call('DES_Encrypt', slide_info[1], '17a94a08')  # 滑行时间差
        print(je)
        headers = {
            "Host": "captcha1.fengkongcloud.cn",
            "Origin": "https://castatic.fengkongcloud.cn",
            "Referer": "https://castatic.fengkongcloud.cn/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        params = {
            "nu": "C0kH/bWLjw8=",
            "oc": "h9oFKi8cHpg=",
            "xy": "YabT6nmJOC0=",
            "callback": "sm_" + str(int(time.time() * 1000)),
            "tb": "3jSn4gNaAVM=",
            "protocol": "180",
            "mp": "WYfkIZp7GoA=",
            "act.os": "web_pc",
            "dy": "Rfpr5oqb5y4=",
            "organization": "RlokQwRlVjUrTUlkIqOg",
            "kq": "mtlOTdT5LOE=",
            "jo": "l3aEINYnwpY=",
            "rid": self.rid,
            "en": "y+ugz9NIWys=",
            "sdkver": "1.1.3",
            "captchaUuid": "20240223194826bPeRA7HeCtjamdjfP4",
            "rversion": "1.0.4",
            "ostype": "web",
            "ww": ww,
            "je": je,
            "mu": mu,
        }
        response = self.session.get(url='https://captcha1.fengkongcloud.cn/ca/v2/fverify', headers=headers,
                                    params=params).text
        print(response)


if __name__ == '__main__':
    slide = Slide()
    slide.request_conf()
    slide.get_slide()
    slide.save_slide()
    slide.verify()
    slide.fverify()
