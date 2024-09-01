import requests, time, execjs

url = 'https://frodo.douban.com/service/auth2/token?timezone=Asia%2FShanghai'

headers = {
    "User-Agent": "api-client/1 com.douban.frodo/7.30.1(234) Android/29 product/walleye vendor/Google model/Pixel 2 brand/google  rom/android  network/wifi  udid/a68ad8981b5424f922ef94f3fa9f272b6f7c13d9  platform/mobile nd/1",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "frodo.douban.com",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "Content-Length": "385"
}
js = execjs.compile(open('Hmacsha1.js', encoding='utf-8').read())
_t = str(int(time.time()))
word = 'POST&%2Fservice%2Fauth2%2Ftoken&' + str(int(time.time()))
_sig = js.call('HmacSHA1_Encrypt', word, "bf7dddc7c9cfe6f7")
params = {
    "client_id": "0dad551ec0f84ed02907ff5c42e8ec70",
    "client_secret": "bf7dddc7c9cfe6f7",
    "redirect_uri": "frodo://app/oauth/callback/",
    "disable_account_create": "false",
    "grant_type": "password",
    "username": "18235015508",
    "password": "123456",
    "apikey": "0dad551ec0f84ed02907ff5c42e8ec70",
    "channel": "ali_market",
    "udid": "a68ad8981b5424f922ef94f3fa9f272b6f7c13d9",
    "os_rom": "android",
    "_sig": _sig,
    "_ts": _t
}

response = requests.post(url=url, headers=headers, data=params).text

print(response)
