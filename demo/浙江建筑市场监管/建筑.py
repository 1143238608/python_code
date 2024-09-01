import ddddocr
import execjs
import requests, time
from loguru import logger


class Jianzhu:
    def __init__(self):
        self.session = requests.session()
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        }

    def get_pic(self):
        response = self.session.get(url='https://jzsc.jst.zj.gov.cn/publishserver/OTMklqqwpvnsggce/OTMphwhsygy').content
        with open('pic/verify.jpg', 'wb') as f:
            f.write(response)
        logger.debug('保存验证码成功！')

    def verify(self):
        ocr = ddddocr.DdddOcr(beta=True)
        with open("pic/verify.jpg", 'rb') as f:
            image = f.read()
        res = ocr.classification(image)
        logger.debug(res)
        url = 'https://jzsc.jst.zj.gov.cn/publishserver/OTMklqqwpvnsggce/OTMqqcjzcQqrhqec'
        params = {
            'verificationCode': res
        }
        response = self.session.get(url=url, headers=self.headers, params=params).text
        logger.debug(response)

    def get_info(self):
        t = int((time.time()) * 1000)
        js = execjs.compile(open('建筑.js', encoding='utf-8').read())
        token = js.call('AES_Encrypt', t)
        headers = {
            'Host': 'jzsc.jst.zj.gov.cn',
            "Origin": "https://jzsc.jst.zj.gov.cn",
            "Referer": "https://jzsc.jst.zj.gov.cn/PublicWeb/index.html",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Token": token,
            "X-Forwarded-For": "192.168.1.1"
        }

        url = "https://jzsc.jst.zj.gov.cn/publishserver/OTMcFFFRCkyjxngHcjSly/OTMujrt/OTMmMyejptkytoReuz/OTMgjpdewvwphgVqke"
        data = {
            'COUNTY': "",
            'CertID': "",
            'City': "温州市",
            'EndDate': "",
            'Zzmark': "",
            'pageIndex': '1',
            'pageSize': '10'
        }
        _response = self.session.post(url=url, headers=headers, json=data).text
        print(_response)


if __name__ == '__main__':
    jianzhu = Jianzhu()
    jianzhu.get_pic()
    jianzhu.verify()
    jianzhu.get_info()
