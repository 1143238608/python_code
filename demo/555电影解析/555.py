import requests, execjs, re, json

js = execjs.compile(open('555.js', encoding='utf-8').read())


def get_html_info(url):

    headers = {
        "Host": "5dy1.vip",

        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",

        "Sec-Fetch-Mode": "navigate",

        "Referer": "https://5dy1.vip/voddetail/445260.html"
    }

    response = requests.get(url=url, headers=headers).text
    html_info, = re.findall('var player_aaaa=(.*?)</script>', response)
    print(html_info)
    return html_info


def get_en_video(html_info):
    en_url = json.loads(html_info)['url']
    video_header = js.call('get_headers', en_url)
    video_header[
        'User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
    video_header['Origin'] = "https://5dy1.vip"
    video_header['Host'] = "player.ddzyku.com:3653"
    video_params = js.call('get_data')
    video_response = requests.get(url='https://player.ddzyku.com:3653/api/get_play_url', headers=video_header,
                                  params=video_params).text
    print(video_response)
    return video_response


def parse_video(video_response):
    de_video = js.call('decryptPackData', video_response)
    print(de_video)



if __name__ == '__main__':
    url = 'https://5dy1.vip/vodplay/445260-2-1.html'
    html_info = get_html_info(url)
    video_response = get_en_video(html_info)
    # parse_video(video_response)
