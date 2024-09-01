import base64
import hashlib

import requests, time, execjs


def md5(data):
    m = hashlib.md5()
    m.update(data.encode())
    return m.hexdigest()


def base64_encode(data):
    return base64.b64encode(data.encode())


def base64_decode(data):
    return base64.b64decode(data)


# r0ysue课程学习 = execjs.compile(open('1.r0ysue课程学习', encoding='utf-8').read())
params_1 = md5(str(int(time.time())))
# params_2 = r0ysue课程学习.call('B64_Encrypt', (str(int(time.time())) + ',' + params_1))
# print(params_2)
params_2 = base64_encode((str(int(time.time())) + ',' + params_1))
url = 'http://spiderbuf.cn/h05/api/' + params_2.decode()
print(url)
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                  'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
}

response = requests.get(url=url, headers=headers).text
print(response)
