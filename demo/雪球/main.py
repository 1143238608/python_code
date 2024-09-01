import requests
import re
import execjs

session = requests.session()


def get_cookie():
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    }
    url = "https://xueqiu.com/today"
    response = session.get(url, headers=headers)
    arg1 = re.findall("arg1='(.*?)';", response.text)[0]
    coo = response.cookies.get('acw_tc')
    return arg1, coo


def get_data():
    arg1, coo = get_cookie()
    js = execjs.compile(open('./1.js', encoding='utf-8').read())
    print(arg1)
    acw_sc__v2 = js.call('get_arg2', arg1)
    headers = {
        'Origin': 'https://xueqiu.com',
        'Referer': 'https://xueqiu.com/today',
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    }
    cookies = {
        "acw_tc": coo,
        'acw_sc__v2': acw_sc__v2,
        'xq_a_token': "01b99d82fffd2faf8b614e98a00cbb35d6c7ddcf"
    }
    url = "https://stock.xueqiu.com/v5/stock/hot_stock/list.json"
    params = {
        'size': '8',
        '_type': '10',
        'type': '10'
    }

    response = session.get(url=url, headers=headers, cookies=cookies, params=params)
    print(response.text)


get_data()
