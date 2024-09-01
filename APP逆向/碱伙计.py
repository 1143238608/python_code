import os

import requests, json


def get_video(id):
    url = 'http://k8b6.m72b.com/v1/video/info'

    headers = {
        'Authorization': '',
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 2 Build/QQ3A.200805.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.79 Mobile Safari/537.36 Html5Plus/1.0 (Immersed/24.0)',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': '9',
        'Host': 'k8b6.m72b.com',
        'Connection': 'Keep-Alive',
        'Accept-Encoding': 'gzip'
    }

    params = {
        'id': id,  # bb5m3f   qiangtui
    }
    response = requests.post(url=url, headers=headers, data=params).json()

    print(response)


def get_m3u8(url):
    url = url
    headers = {
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; Pixel 2 Build/QQ3A.200805.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.79 Mobile Safari/537.36 Html5Plus/1.0 (Immersed/24.0)",
        "Accept": "*/*",
        "Range": "bytes=0-",
        "Connection": "close",
        "Host": "cp.pavidcdn.com",
        "Icy-MetaData": "1"
    }
    response = requests.get(url=url, headers=headers).text
    # with open('./video/'+url.split('/')[-1],'w') as f:
    #     f.write(response)
    # print(response)
    m3u8_ts = 'https://cp.pavidcdn.com/stream/full/asia/2300/'
    for ts in response.split('\n'):
        if '.ts' in ts:
            _url = m3u8_ts + ts
            with open('./video/' + ts.split('/')[-1], 'wb') as fs:
                fs.write(requests.get(m3u8_ts + ts).content)
            print(ts)
    return response


def merge_ts():
    path = os.getcwd() + '\\video'
    merge_cmd = 'copy /b ' + path + '\*.ts ' + path + '\\new1.mp4'
    os.system(merge_cmd)
    print('合并完成')


url = 'http://k8b6.m72b.com/v1/video/list'
headers = {
    'Authorization': '',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 2 Build/QQ3A.200805.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.79 Mobile Safari/537.36 Html5Plus/1.0 (Immersed/24.0)',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': '12',
    'Host': 'k8b6.m72b.com',
    'Connection': 'Keep-Alive',
    'Accept-Encoding': 'gzip'
}
params = {
    'id': '23',  # 28  日本有码    23国产
    'page': '1'
}

response = requests.post(url=url, headers=headers, data=params).json()

video_list = response['data']
for video in video_list:
    video_id = video['id']
    print(video_id)
    video_info = get_video(video_id)
# get_m3u8('https://cp.pavidcdn.com/stream/full/asia/2300/2024050102.ff.m3u8')
# merge_ts()
# get_video('bb5m3f')
# get_m3u8('https://cp.pavidcdn.com/stream/full/asia/1400/G1101.m3u8')
