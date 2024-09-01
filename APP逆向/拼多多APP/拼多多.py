import time

import requests
import frida
import sys
import time

rdev = frida.get_remote_device()
process = rdev.enumerate_processes()  # 获取手机所有进程
session = rdev.attach("拼多多") #获取手机app
#非标准端口进行转发
#session = frida.get_device_manager().add_remote_device('127.0.0.1:9999').attach('com.xiaojianbang.app')


with open('fridaHook.js', encoding='utf-8')as f:
    script = session.create_script(f.read())


def on_message(message, data):
    if message["type"] == "send":
        print(message['payloay'])


script.on("message", on_message)
script.load()

# print(script.exports.hookInfo2(str(time.time()*1000)))   #rpc主动调用
print(script.exports.hookdeviceinfo2(str(int(time.time()*1000))))   #rpc主动调用

sys.stdin.read()

# headers = {
#     "Host": "api.pinduoduo.com",
#     "etag": "tS4iX7wc",
#     "accesstoken": "OK4DYCLDHAXSAJCD3I4BHQ24S6TQOJ3LWFF6M4VFIKQUHPLNWJBQ123b222",
#     "referer": "Android",
#     "content-type": "application/json;charset=UTF-8",
#     "p-appname": "pinduoduo",
#     "p-proc-time": "103775",
#     "x-pdd-info": "bold_free%3Dfalse%26bold_product%3D%26front%3D1",
#     "x-pdd-queries": "width=1080&height=1794&net=1&brand=google&model=Pixel+2&osv=10&appv=6.28.0&pl=2",
#     "x-yak-llt": "1712368069881",
#     "p-proc": "main",
#     "p-mediainfo": "player=1.0.3&rtc=1.0.0",
#     "x-b3-ptracer": "hctrue3b3d49e8e0b2421ba66ca10269",
#     "user-agent": "android Mozilla/5.0 (Linux; Android 10; Pixel 2 Build/QQ3A.200805.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.79 Mobile Safari/537.36  phh_android_version/6.28.0 phh_android_build/0b22768b5067c064e6c17d3d38937512cd8ce550 phh_android_channel/hw pversion/0",
#     "pdd-config": "V4:001.062800",
#     "multi-set": "1,1",
#     "anti-token": "2af5lghy4KzO2lcwVW6IEaYD5qM0hAZohfUCTbNJZdxWAkWE7B2NLRLZ3MhmWEhv3BGSVVC9IxgM0u99Ltr3n237hBhF/YTY6EwKIthZgkUJWmHbdfVWGCUw+Ye+PbZd444o3nfFzJIb3U/KAPBZZv/HorJ2Y6YVjn1XjdA0H3/jy1q7ma0YUbtygc+mUdVShCU2t1FFLqBpUZfpICBDiG7qXOtknIf1u2w5l4dxY2FxlvN9fp6aTkLD7nqSRDR5zbuFnGSCuUq/WE5rk/0VduQGnxg8HK2942pSBZUC67APn9BLH7jMy09GX1L87BHKDhDQi1gfqUfrU2KOXD6kcGinr2uQz7fC1+1h6NwHYqw02dfhDy+nz0ZjnFDmpH8b+9qY7JLmZ9j/Wo4OXfd0oTB8Q==",
#     "vip": "81.69.208.27"
# }
# cookies = {
#     "acid": "c73aa26dfb52b78d1e47f04639d97732",
#     "api_uid": "CiZ5MWYQqXcsLQBhppo/Ag=="
# }
# url = "https://api.pinduoduo.com/api/caterham/query/subfenlei_gyl_label"
# params = {
#     "offset": "0",
#     "list_id": "24809_991c16a09f",
#     "count": "20",
#     "goods_id": "532313379901",
#     "opt_id": "24809",
#     "req_list_action_type": "6",
#     "page_sn": "10028",
#     "support_types": "0",
#     "page_id": "catgoods.html",
#     "content_goods_num": "4",
#     "size": "20",
#     "opt_type": "2",
#     "req_action_type": "6",
#     "engine_version": "2.0",
#     "pdduid": "9106007488434"
# }
# response = requests.get(url, headers=headers, cookies=cookies, params=params)
#
# print(response.text)
