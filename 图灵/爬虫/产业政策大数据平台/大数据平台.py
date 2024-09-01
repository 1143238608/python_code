import requests
import execjs
import base64


class dsj():
    def __init__(self):
        self.url = 'http://www.spolicy.com/info_api/policyType/showPolicyType'
        self.headers = {
            # 'Content-Type':'application/octet-stream',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        }
        self.data = {
            "policyType": "4",
            "province": "",
            "city": "",
            "downtown": "",
            "garden": "",
            "centralId": "",
            "sort": 0,
            "homePageFlag": 1,
            "pageNum": 1,
            "pageSize": 7
        }
        self.js = execjs.compile(open('1.js', encoding='utf-8').read())

    def request_data(self):
        data = self.js.call('PolicyInfoByTypeIdParam$encode', self.data)
        # print(base64.b64decode(data))
        print(data)
        # res = requests.post(self.url, headers=self.headers, data=base64.b64decode(data))
        res = requests.post(self.url, headers=self.headers, data=bytes(data['data']))
        print(res.text)


if __name__ == '__main__':
    ds = dsj()
    ds.request_data()
