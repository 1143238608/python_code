import pywasm, time, execjs
import requests

Func = pywasm.load('main.wasm')

js = execjs.compile(open('1.js', encoding='utf-8').read())


def get_res(page):
    global s
    t = js.call('get_t')
    t0 = Func.exec('encode', [t['t1'], t['t2']])
    m = f'{t0}|{t["t1"]}|{t["t2"]}'

    headers = {
        "referer": "https://match.yuanrenxue.cn/match/15",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        'Cookie': 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1704622049,1705743290,1705808398; qpfccr=true; no-alert3=true; tk=-7880905307650161256; sessionid=1k00jjrswk9jtsutb5ltq87y94jruus0; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1704622067,1705743308,1705808420; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1705808420; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1705808423'
    }
    url = "https://match.yuanrenxue.cn/api/match/15"
    params = {
        "m": m,
        "page": str(page)
    }
    response = requests.get(url, headers=headers, params=params).json()
    # print(response)
    for data in response['data']:
        s += data['value']


if __name__ == '__main__':
    s = 0
    for i in range(1, 6):
        get_res(i)
    print(s)
