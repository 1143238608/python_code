import requests,execjs

js = execjs.compile(open('今日头条_jsvmp.js',encoding='utf-8').read())
_signature = js.call('get_sign')
headers = {
    "referer": "https://www.toutiao.com/?wid=1704007012815",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}

url = "https://www.toutiao.com/api/pc/list/feed"
params = {
    "channel_id": "0",
    "max_behot_time": "1704012134",
    "offset": "0",
    "category": "pc_profile_recommend",
    "aid": "24",
    "app_name": "toutiao_web",
    "_signature": _signature
}
response = requests.get(url, headers=headers, params=params)

print(response.text)
# print(response)