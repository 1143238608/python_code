import requests


def get_res(page):
    global num
    url = 'https://appmatch.yuanrenxue.cn/app8'

    headers = {
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'User-Agent': 'Mozilla/5.0 (Linux; U; Android 10; zh-cn; Pixel 2 Build/QQ3A.200805.001) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Content-Length': '50',
        'Host': 'appmatch.yuanrenxue.cn',
    }
    _url = "http://127.0.0.1:9999/getSign/" + str(page)
    response = requests.get(_url).text
    print(response)
    params = {
        's': response
    }
    res = requests.post(url=url, headers=headers, data=params).json()
    for r in res['data']:
        num += int(r['value'])
    print(res)


if __name__ == '__main__':
    num = 0
    for i in range(1, 101):
        get_res(i)
    print(num)