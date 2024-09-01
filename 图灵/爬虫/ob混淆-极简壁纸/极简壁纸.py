import json

import requests, execjs
#https://bz.zzzmh.cn/index

headers = {
    "origin": "https://bz.zzzmh.cn",
    "referer": "https://bz.zzzmh.cn/",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}


def get_pic(id):
    url_ = "https://api.zzzmh.cn/bz/v3/getUrl/" + id + "20"
    response_ = requests.get(url_, headers=headers, allow_redirects=False)
    print(response_.headers.get('Location'))
    save_pic(response_.headers.get('Location'))


def save_pic(url):
    response__ = requests.get(url, headers=headers).content
    pic_name = 'pic/' + url[-7:-1] + '.jpg'
    with open(pic_name, 'wb') as f:
        f.write(response__)


url = "https://api.zzzmh.cn/bz/v3/getData"
data = {
    "category": "0",
    "categoryId": "0",
    "color": "0",
    "current": "5",
    "ratio": "0",
    "resolution": "0",
    "size": "24",
    "sort": "0"
}
response = requests.post(url=url, headers=headers, json=data).json()
js = execjs.compile(open('1.js', encoding='utf-8').read())
pic_info = js.call('_0x58b5da', response['result'])
print(response)
print(pic_info)
if __name__ == '__main__':
    for pic in json.loads(pic_info)['list']:
        get_pic(pic['i'])
