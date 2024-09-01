import execjs
import requests


def get_xb(cursor, count):
    js = execjs.compile(open('X-Bogus.js', encoding='utf-8').read())
    xb = js.call('get_xb', cursor, count)
    print(xb)
    return xb


def get_data(cursor, count):
    headers = {
        "referer": "https://www.douyin.com/",

        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
    }
    cookies = {
        "ttwid": "1^%^7CdinfM1txDaUhO1hy0YiNe30s4nrtflm94Xn39u47LpY^%^7C1701009255^%^7Cbf75dc8e5047e9373c5f9e5d95fc76d5a8328eb0845e4791c083c5cf83a128a8",
        "sessionid_ss": "584cec5911d65981e7245ddfc8bade1a",
    }
    url = "https://www.douyin.com/aweme/v1/web/comment/list/"
    bogus = get_xb(cursor, count)
    params = {
        # "device_platform": "webapp",
        # "aid": "6383",
        # "channel": "channel_pc_web",
        "aweme_id": "7318316636216265994",
        "cursor": cursor,
        "count": count,
        # "item_type": "0",
        # "insert_ids": "",
        # "whale_cut_token": "",
        # "cut_version": "1",
        # "rcFT": "",
        # "pc_client_type": "1",
        # "version_code": "170400",
        # "version_name": "17.4.0",
        # "cookie_enabled": "true",
        # "screen_width": "2560",
        # "screen_height": "1440",
        # "browser_language": "zh-CN",
        # "browser_platform": "Win32",
        # "browser_name": "Chrome",
        # "browser_version": "119.0.0.0",
        # "browser_online": "true",
        # "engine_name": "Blink",
        # "engine_version": "119.0.0.0",
        # "os_name": "Windows",
        # "os_version": "10",
        # "cpu_core_num": "16",
        # "device_memory": "8",
        # "platform": "PC",
        # "downlink": "10",
        # "effective_type": "4g",
        # "round_trip_time": "50",
        # "webid": "7305779068400813583",
        # "msToken": "K-87q5b9gdma2alCkrAi72EkRp6ipcTScQ1TPXAyPSZpxtBnxJTQO2qFWsePdBybMBk5iO3PAvze4g4PjvKFQHptG-RyPTM2YES4hgT4tBcm18mkHg==",
        # "X-Bogus": bogus
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    print(response.text)
    print(response)


if __name__ == '__main__':
    get_data('20','20')
