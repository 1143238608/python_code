import requests, execjs, time, json
from getSlice import GetSlice
from RestoreSlider import GetRightImg
from OcrImg import Ocr
from GetTrack import Track

session = requests.session()


def get_cs(challenge, gt):
    url = 'https://apiv6.geetest.com/get.php'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'Referer': 'https://www.geetest.com/',
        'Host': 'api.geetest.com'
    }

    params = {
        "gt": gt,
        "challenge": challenge,
        "lang": "zh-cn",
        "pt": "0",
        "client_type": "web",
        "w": "",
        "callback": "geetest_" + str(int(time.time()))
    }

    response = session.get(url=url, headers=headers, params=params).text

    print(response)


def get_type_slide(challenge, gt):
    url = 'https://api.geetest.com/ajax.php'

    params = {
        "gt": gt,
        "challenge": challenge,
        "lang": "zh-cn",
        "pt": "0",
        "client_type": "web",
        "w": "",
        "callback": "geetest_" + str(int(time.time()))
    }

    response = session.get(url=url, params=params).text
    print(response)


def get_challenge():
    url = 'https://www.geetest.com/demo/gt/register-slide'

    params = {
        't': str(time.time() * 1000)
    }

    response = session.get(url=url, params=params).text
    challenge = json.loads(response)['challenge']
    gt = json.loads(response)['gt']
    return challenge, gt


def get_slide_info(challenge, gt):
    url = 'https://api.geetest.com/get.php'
    params = {
        "is_next": "true",
        "type": "slide3",
        "gt": gt,
        "challenge": challenge,
        "lang": "zh-cn",
        "https": "true",
        "protocol": "https://",
        "offline": "false",
        "product": "embed",
        "api_server": "api.geetest.com",
        "isPC": "true",
        "autoReset": "true",
        "width": "100%",
        "callback": "geetest_" + str(int(time.time()))
    }

    response = session.get(url=url, params=params).text
    slider_info = json.loads(response.split('(')[1].split(')')[0])
    get_slice = GetSlice()
    get_slice.get_slice(slider_info)
    return slider_info['gt'], slider_info['challenge'], slider_info['s'], slider_info['c']


def restore_slider():
    slider = GetRightImg()
    slider.get_right()


def get_x():
    ocr = Ocr()
    _x = ocr.get_x()['target'][0]
    return _x


def get_track(_x):
    track = Track()
    slider_track = track.get_slide_track(_x)
    print(slider_track)
    return slider_track, slider_track[-1][-1]


def get_w(gt, challenge, x, c, s, passtime, _track):
    js = execjs.compile(open('get_w.js', encoding='utf-8').read())
    w = js.call('get_w', gt, challenge, x, c, s, passtime, _track)
    print(w)
    return w


def verify(_w, challenge, gt):
    url = 'https://api.geetest.com/ajax.php'
    headers = {
        "Host": "api.geetest.com",
        "Referer": "https://www.geetest.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    params = {
        "gt": gt,
        "challenge": challenge,
        "lang": "zh-cn",
        "$_BCN": "0",
        "client_type": "web",
        "w": _w,
        "callback": "geetest_" + str(int(time.time()))
    }
    time.sleep(2)
    response = session.get(url=url, headers=headers, params=params).text
    print(response)


if __name__ == '__main__':
    challenge, gt = get_challenge()  # 获取challenge,gt
    get_cs(challenge=challenge, gt=gt)  # 获取返回的cs(无用)
    get_type_slide(challenge, gt)  # 获取滑块类型
    gt, challenge_new, s, c = get_slide_info(challenge, gt)  # 获取新的challenge,gt,s
    restore_slider()
    x = get_x() - 2
    track, passtime = get_track(x)
    _w = get_w(gt, challenge, x, c, s, passtime, track)
    verify(_w, challenge, gt)
