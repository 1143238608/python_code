import json

import requests


class GetSlice:

    def get_slice(self, slider_info):
        url_slice = 'https://static.geetest.com/' + slider_info['slice']
        url_fullbg = 'https://static.geetest.com/' + slider_info['fullbg']
        url_bg = 'https://static.geetest.com/' + slider_info['bg']
        print(url_slice, url_fullbg, url_bg)
        with open('pic/slice.jpg', 'wb') as f:
            f.write(requests.get(url_slice).content)
        with open('pic/wrong_fullbg.jpg', 'wb') as f:
            f.write(requests.get(url_fullbg).content)
        with open('pic/wrong_bg.jpg', 'wb') as f:
            f.write(requests.get(url_bg).content)
        print('保存图片成功！')
