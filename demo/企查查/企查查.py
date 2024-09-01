import requests, execjs


# 案例网站
# https://www.qcc.com/cfengxian/5dffb644394922f9073544a08f38be9f.html


def get_data(page):
    url = 'https://www.qcc.com/api/datalist/stockPledge'

    js = execjs.compile(open('1.js', encoding='utf-8').read())

    args = "/api/datalist/stockpledge?isnewagg=true&keyno=5dffb644394922f9073544a08f38be9f&pageindex=" + page
    header_key = js.call('get_key', args)
    header_value = js.call('get_value', args)
    headers = {
        'Cookie': 'QCCSESSID=cb807f7d2f844983c541963c5d; qcc_did=9496144f-fe07-4c74-b9f4-b95e368ea86b; UM_distinctid=18c2dad2220163e-0a029ccf716364-26031051-384000-18c2dad22211f93; CNZZDATA1254842228=1492569507-1701573370-https%253A%252F%252Fwww.baidu.com%252F%7C1701573486; acw_tc=77605a5017015767911612736e5de1f52867e7433c04e80c838a466ff1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'X-Pid': 'c4dedf8e1f5347a0af62b2b4407b2e24',
        'Referer': 'https://www.qcc.com/cfengxian/5dffb644394922f9073544a08f38be9f.html'
    }
    headers[header_key] = header_value
    params = {
        'isNewAgg': 'true',
        'keyNo': '5dffb644394922f9073544a08f38be9f',
        'pageIndex': page
    }
    # print(headers)
    response = requests.get(url=url, headers=headers, params=params).text

    print(response)


if __name__ == '__main__':
    for i in range(1, 10):
        get_data(str(i))
