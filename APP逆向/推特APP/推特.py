import requests, execjs


def get_video_data():
    headers = {
        "Host": "iomgew.uur3v9.xyz",
        "accept-language": "zh-CN,zh;q=0.8",
        "user-agent": "Mozilla/5.0 (Linux; Android 10; Pixel 2 Build/QQ3A.200805.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.79 Mobile Safari/537.36;SuiRui/twitter/ver=9.9.9",
        "content-type": "application/json",
        "accept": "application/json",
        "deviceid": "04fcf4590b00ecb555797b01f398d09e",
        "t": "1715082307220",
        "s": "6d1c762d9c16395a7e258d098091ee00",  # md5(substr(t,3,8))
        "aut": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4MzY3OTMwIiwiaXNzIjoiIiwiaWF0IjoxNzE0MzA4MzgwLCJuYmYiOjE3MTQzMDgzODAsImV4cCI6MTg3MTk4ODM4MH0.gTwke4a466_lHC84HMjOqFn2gJclOsjYcwFA-4hhk14"
    }
    url = "https://iomgew.uur3v9.xyz/api/video/queryVideoByClassifyId"
    params = {
        "pageSize": "20",
        "page": "1",
        "classifyId": "1",
        "sortType": "1"
    }
    response = requests.get(url, headers=headers, params=params).json()
    print(response)
    encData = response['encData']
    js = execjs.compile(open('./AES.js', encoding='utf-8').read())
    data = js.call("AES_Decrypt", encData)
    print(data)


def get_m3u8():
    url = 'https://iomgew.uur3v9.xyz/api/m3u8/decode/authPath'
    # spg/20240507/1t/ko/31/xp/54111df9e3aa420a9bf0483a464bf7b8.m3u8
    params = {
        'auth_key': '1715085208-18367930-2-aac4baffc095867ec218104044e76c19',
        'path': 'spg/20240507/1t/ko/31/xp/54111df9e3aa420a9bf0483a464bf7b8.m3u8'
    }
    headers = {
        "aut": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4MzY3OTMwIiwiaXNzIjoiIiwiaWF0IjoxNzE0MzA4MzgwLCJuYmYiOjE3MTQzMDgzODAsImV4cCI6MTg3MTk4ODM4MH0.gTwke4a466_lHC84HMjOqFn2gJclOsjYcwFA-4hhk14",
        "s": "27e7dced334801d01656ac30ca4f1bb4",
        "t": "1715085208564",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; Pixel 2 Build/QQ3A.200805.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.79 Mobile Safari/537.36;SuiRui/twitter/ver=9.9.9",
        "Accept-Encoding": "gzip",
        "Host": "iomgew.uur3v9.xyz",
        "Connection": "Keep-Alive"
    }

    response = requests.get(url=url, headers=headers, params=params).text

    print(response)


if __name__ == '__main__':
    get_video_data()
    # get_m3u8()    有问题
