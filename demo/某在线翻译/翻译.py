import json

import requests, execjs
from loguru import logger


word = input('请输入需要查询的单词:')
js = execjs.compile(open('./1.js', encoding='utf-8').read())
sign = js.call('MD5_Encrypt', word)

url = 'https://ifanyi.iciba.com/index.php?c=trans&m=fy&client=6&auth_user=key_web_new_fanyi&sign=' + sign
logger.debug(url)
headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://www.iciba.com",
    "Referer": "https://www.iciba.com/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}
params = {
    'from': 'en',
    'to': 'zh',
    'q': word
}

response = requests.post(url=url, headers=headers, data=params).json()
logger.debug(response)

de_content = js.call('AES_Decrypt',response['content'])
de_word = json.loads(de_content)['out']
de_ciba = json.loads(de_content)['ciba_use']

logger.debug(de_content)
logger.debug(de_ciba)
logger.debug(de_word)
