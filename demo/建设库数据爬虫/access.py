import requests,execjs,time

url = 'https://capi.jiansheku.com/user/jsk/user/access'

js = execjs.compile(open('./1.js', encoding='utf-8').read())

param = {
    'cancelHttp': 'true'
}
t = str(int(time.time() * 1000))
print(t)
sign = js.call('get_sign', param, t)
print(sign)
headers = {

    "Content-Type": "application/json;charset=UTF-8",
    "Origin": "https://www.jiansheku.com",
    "Sign": sign,
    "Timestamp": t,
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}
response = requests.post(url=url, headers=headers, json=param).text

print(response)