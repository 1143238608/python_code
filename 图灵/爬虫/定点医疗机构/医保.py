import time

import requests, execjs
import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")

# https://fuwu.nhsa.gov.cn/nationalHallSt/#/search/medical?code=90000&flag=false&gbFlag=true

url = 'https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryFixedHospital'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
}
js = execjs.compile(open('1.js', encoding='utf-8').read())
timestamp = int(time.time())
signData = js.call('signData', '2', str(timestamp), 20)
encData = js.call('encData', '2', str(timestamp), 20)
print(signData)
params = {
    "data": {
        "data": {
            "encData": encData
        },
        "appCode": "T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ",
        "version": "1.0.0",
        "encType": "SM4",
        "signType": "SM2",
        "timestamp": str(timestamp),
        "signData": signData
    }
}

response = requests.post(url=url, headers=headers, json=params).json()
decrypt_data = js.call('decr', response)
print(response)
print(decrypt_data)
