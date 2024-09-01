import re

import requests

url = 'http://www.zjmazhang.gov.cn/hdjlpt/published?via=pc'

session = requests.session()

headers = {
    'Host': 'www.zjmazhang.gov.cn',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}
response = session.get(url=url, headers=headers).text

_CSRF, = re.findall("var _CSRF = '(.*?)';", response)
_headers = {
    'Host': 'www.zjmazhang.gov.cn',
    'Origin': 'http://www.zjmazhang.gov.cn',
    'Referer': 'http://www.zjmazhang.gov.cn/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'X-Csrf-Token': _CSRF
}

data = {
    'offset': '0',
    'limit': '20',
    'site_id': '759010',
    'time_from': '1679414400',
    'time_to': '1710950399'
}
res = session.post(url = 'http://www.zjmazhang.gov.cn/hdjlpt/letter/pubList',headers=_headers,data=data).text

print(res)
