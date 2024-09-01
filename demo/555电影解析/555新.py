import requests, execjs, re, json


def get_html(url):
    headers = {
        "Host": "5dy1.vip",
        "Connection": "keep-alive",
        "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9"
    }
    response = requests.get(url, headers=headers).text
    video_en, = re.findall('var player_aaaa=(.*?)</script>', response)
    video_en = json.loads(video_en)
    en_str = '{"url":"' + video_en['url'] + '","next_url":"' + video_en['url_next'] + '"}'
    # print(video_en['url'])
    print(en_str)
    return en_str


def aes_encrypt(data):
    js = execjs.compile(open('AES.js', encoding='utf-8').read())
    ddd = js.call('AES_Encrypt', data)
    print(ddd)
    return ddd


def aes_decrypt(data):
    js = execjs.compile(open('AES.js', encoding='utf-8').read())
    ddd = js.call('AES_Decrypt', data)
    print(ddd)
    return ddd


def get_en_video(data):
    url = 'https://player.ddzyku.com:3653/getUrls'
    headers = {
        "Host": "player.ddzyku.com:3653",
        "Connection": "keep-alive",
        "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "sec-ch-ua-platform": "\"Windows\"",
        "Accept": "*/*",
        "Origin": "https://5dy1.vip",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9"
    }
    response = requests.get(url, headers=headers).text
    params = {
        'data': data
    }
    response = requests.get(url=url, headers=headers, params=params).text
    print(response)
    return response


def get_m3u8(url):
    headers = {
        "Host": "vip.ffzyread1.com",
        "Connection": "keep-alive",
        "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "sec-ch-ua-platform": "\"Windows\"",
        "Accept": "*/*",
        "Origin": "https://5dy1.vip",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9"
    }
    response = requests.get(url=url, headers=headers).text
    print(response)


if __name__ == '__main__':
    en_str = get_html('https://5dy1.vip/vodplay/445260-2-1.html')
    ddd = aes_encrypt(en_str)
    res = get_en_video(ddd)
    video_m3u8_data = aes_decrypt(res)
    print(json.loads(video_m3u8_data)['data']['url'])
    get_m3u8(json.loads(video_m3u8_data)['data']['url'])
# https://vip.ffzyread1.com/20231022/19945_0ef3d3c0/2000k/hls/mixed.m3u8
# https://vip.ffzyread1.com/20231022/19945_0ef3d3c0/index.m3u8