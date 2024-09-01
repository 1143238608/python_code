import requests, execjs, json

js = execjs.compile(open('./1.js', encoding='utf-8').read())

session = requests.session()


def get_list():
    dta = js.call('main', 'get', '/v1/web/api/node/list?domainId=12')
    headers = {
        "Content-Md5": dta['headers']['Content-Md5'],
        "Origin": "https://www.baosteel.com",
        "Referer": "https://www.baosteel.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "X-Date": str(dta['headers']['x-date']),
        "X-Nonce": dta['headers']['x-nonce'],
        "X-Signature": dta['headers']['x-signature'],
        "X-User": '0/56f5cff3cad14853a44782c2c689ab2a'
    }
    url = "https://cmsauth.baowugroup.com/v1/web/api/node/list"

    params = {
        "domainId": "12"
    }
    response = session.get(url, headers=headers, params=params)

    print(response.text)


def get_data():
    data = {"pageNo": 0, "pageSize": 10, "condition": {"nodeId": 1198}}
    dta = js.call('main', 'post', '/v1/web/api/content/list?domainId=12', data)
    headers = {
        "Content-Md5": dta['headers']['Content-Md5'],
        "Origin": "https://www.baosteel.com",
        "Referer": "https://www.baosteel.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "X-Date": str(dta['headers']['x-date']),
        "X-Nonce": dta['headers']['x-nonce'],
        "X-Signature": dta['headers']['x-signature'],
        "X-User": '0/56f5cff3cad14853a44782c2c689ab2a'
    }
    url = "https://cmsauth.baowugroup.com/v1/web/api/content/list?domainId=12"
    print(headers)
    response = session.post(url, headers=headers, json=data)

    print(response.text)
    print(response)


if __name__ == '__main__':
    # get_list()
    get_data()
