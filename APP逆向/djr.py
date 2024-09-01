import os
import re
from binascii import hexlify, unhexlify
from Crypto.Cipher import AES
import execjs

import requests


def get_video_info():
    url = 'https://tokyohot-api-aries.flypetrel.com/api/v1/video'

    headers = {
        'authdog': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTI4NjA3NTcwMTI5NTg0MTMyLTc4YmQ0MzVhLTM4YzgtNDlhYy1hOWRiLTc3ZmEzNDkzNzcwMiIsInNpdGUiOiJtZW1iZXIiLCJyb2xlIjowLCJ2ZXJzaW9uIjoiNy4xNiIsInNvdXJjZSI6ImFuZHJvaWQiLCJpcCI6IjI3LjE5LjE3My42OCIsInNob3dfaWQiOiJDQ1EtMjQ1MDk2MyIsImV4cCI6MTcxNDU3NzI3OCwiaWF0IjoxNzE0NTcwMDc4LCJpc3MiOiJOb3ZhIiwibmJmIjoxNzE0NTcwMDc4LCJzdWIiOiIxMjg2MDc1NzAxMjk1ODQxMzItNzhiZDQzNWEtMzhjOC00OWFjLWE5ZGItNzdmYTM0OTM3NzAyIn0.9qzBNBlFzhlgsqDBlQePYVsR24u3YPHr1pgVGM-f9N2W3-HnTZURSLZr9_t1utI8eWrnejapFIdTWAC9Fji7Nw',
        'user-agent': 'okhttp/4.10.0'
    }

    params = {
        'current': '1',
        'pageSize': '90',
        'actor_ids': '',
        'category_ids': '46343677617897477',
        'producer_id': '0',
        'region_id': '0',
        'tag_ids': ''
    }

    response = requests.get(url=url, headers=headers, params=params).json()

    print(response)

    for data in response['data']:
        print(data['highres_url'], data['id'], data['title'])


def get_m3u8(m3u8_url):
    url = 'https://qcbixb-ori.qpjjku.com/AI-123/AI-123_220807070601_720p.m3u8'
    url = 'https://qcbixb-ori.qpjjku.com'+m3u8_url
    headers = {
        "Referer": "https://app.nova-traffic-1688.com",
        "Accept-Encoding": "identity",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; Pixel 2 Build/QQ3A.200805.001)",
        "Host": "qcbixb-ori.qpjjku.com",
        "Connection": "Keep-Alive"
    }
    m3u8_text = requests.get(url=url, headers=headers).text
    m3u8_ts = m3u8_text.split('\n')
    ts_list = []
    print(m3u8_text)
    iv, = re.findall('IV=(.*?)\n', m3u8_text)
    print(iv)
    for ts in m3u8_ts:

        if '.ts' in ts:
            ts_list.append(ts)
    print(ts_list)
    return iv, ts_list


def get_key(key):
    # url = 'https://tokyohot-api-aries.flypetrel.com/api/v1/video/key/54353381858213893'
    url = 'https://tokyohot-api-aries.flypetrel.com/api/v1/video/key/'+key

    headers = {
        "AuthDog": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTI4NjA3NTcwMTI5NTg0MTMyLTc4YmQ0MzVhLTM4YzgtNDlhYy1hOWRiLTc3ZmEzNDkzNzcwMiIsInNpdGUiOiJtZW1iZXIiLCJyb2xlIjowLCJ2ZXJzaW9uIjoiNy4xNiIsInNvdXJjZSI6ImFuZHJvaWQiLCJpcCI6IjI3LjE5LjE3My42OCIsInNob3dfaWQiOiJDQ1EtMjQ1MDk2MyIsImV4cCI6MTcxNDU3NzI3OCwiaWF0IjoxNzE0NTcwMDc4LCJpc3MiOiJOb3ZhIiwibmJmIjoxNzE0NTcwMDc4LCJzdWIiOiIxMjg2MDc1NzAxMjk1ODQxMzItNzhiZDQzNWEtMzhjOC00OWFjLWE5ZGItNzdmYTM0OTM3NzAyIn0.9qzBNBlFzhlgsqDBlQePYVsR24u3YPHr1pgVGM-f9N2W3-HnTZURSLZr9_t1utI8eWrnejapFIdTWAC9Fji7Nw",
        "Accept-Encoding": "identity",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; Pixel 2 Build/QQ3A.200805.001)",
        "Host": "tokyohot-api-aries.flypetrel.com",
        "Connection": "Keep-Alive"
    }

    response = requests.get(url=url, headers=headers).content
    key = hexlify(response)
    print(key)
    return key


def get_video(ts, key, iv):
    # url = 'https://qcbixb-ori.qpjjku.com/AI-123/AI-123_220807070601_720p_0000.ts'
    for i, j in enumerate(ts):
        url = 'https://qcbixb-ori.qpjjku.com/' + j.split('_')[0] + '/' + j
        headers = {
            "Referer": "https://app.nova-traffic-1688.com",
            "Accept-Encoding": "identity",
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; Pixel 2 Build/QQ3A.200805.001)",
            "Host": "qcbixb-ori.qpjjku.com",
            "Connection": "Keep-Alive"
        }
        response = requests.get(url=url, headers=headers).content
        cryptor = AES.new(unhexlify(key), AES.MODE_CBC, IV=unhexlify(iv.replace('0x', '')))

        with open('./video/' + str(i + 1) + '.ts', 'wb') as fs:
            fs.write(cryptor.decrypt(response))
    print("全部保存完毕")


def merge_ts():
    path = os.getcwd() + '\\video'
    merge_cmd = 'copy /b ' + path + '\*.ts ' + path + '\\new1.mp4'
    os.system(merge_cmd)
    print('合并完成')


if __name__ == '__main__':
    get_video_info()  # 获取video信息

    # iv, ts_list = get_m3u8('/MSJ-130/MSJ-130_720p.m3u8')
    # key = get_key('48237204631191557')
    # get_video(ts_list, key, iv)
    # merge_ts()
