import requests, time, execjs

js = execjs.compile(open('Hmacsha1.js', encoding='utf-8').read())
_t = str(int(time.time()))
word = 'GET&%2Fapi%2Fv2%2Felendil%2Frecommend_feed&' + str(int(time.time()))
_sig = js.call('HmacSHA1_Encrypt', word, "bf7dddc7c9cfe6f7")

headers = {
    "User-Agent": "api-client/1 com.douban.frodo/7.73.0(287) Android/29 product/walleye vendor/Google model/Pixel 2 brand/google  rom/android  network/wifi  udid/378348391ac32956a852bac25e0dc89e02645c08  platform/mobile nd/1",
    # "Accept-Encoding": "br,gzip",
    "Host": "frodo.douban.com",
    "Connection": "Keep-Alive"
}

params = {
    "screen_width": "1080",
    "boot_mark": "7ced04c7-de3c-4592-aec0-385ab8aa43f4",
    "screen_height": "1794",
    "wx_api_ver": "0",
    "opensdk_ver": "638058496",
    "webview_ua": "Mozilla/5.0 (Linux; Android 10; Pixel 2 Build/QQ3A.200805.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.79 Mobile Safari/537.36",
    "sugar": "0",
    "update_mark": "6071.673335890",
    "network": "wifi",
    "enable_sdk_bidding": "1",
    "apikey": "0dad551ec0f84ed02907ff5c42e8ec70",
    "channel": "ali_market",
    "udid": "378348391ac32956a852bac25e0dc89e02645c08",
    "os_rom": "android",
    "oaid": "EdGi3zYQCRzmwwB1YR7WKg==",
    "timezone": "Asia/Shanghai",
    "_sig": _sig,
    "_ts": _t
}
url = 'https://frodo.douban.com/api/v2/elendil/recommend_feed'
response = requests.get(url=url,headers=headers,params=params).json()
print(response)