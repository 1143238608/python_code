import requests,execjs

url = "https://oauth.d.cn/auth/login"

js = execjs.compile(open('1.js',encoding='utf-8').read())

pwd = js.call('getEncryptedPassword','123456')
params = {
    "display": "web",
    "name": "11111111",
    "pwd": pwd,
    "to": "https%3A%2F%2Fwww.d.cn%2F",
}
headers = {
        'Host': 'oauth.d.cn',
        'Referer': 'https://oauth.d.cn/auth/goLogin.html',
        'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }

response = requests.get(url=url,headers=headers,params=params).text
print(response)
