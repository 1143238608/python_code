import time

import requests, execjs


class GetData:
    def __init__(self):
        self.headers = {
            "Origin": "https://zc-paimai.taobao.com",
            "Pragma": "no-cache",
            "Referer": "https://zc-paimai.taobao.com/",
            "Sec-Ch-Ua-Mobile": "?0",
            "Sec-Ch-Ua-Platform": "Windows",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        self.url = "https://h5api.m.taobao.com/h5/mtop.taobao.datafront.invoke.auctionwalle/1.0/"
        self.data = {
            'data': '{"dfApp":"auctionwalle","dfApiName":"auctionwalle.datou.getPageModulesData","dfVariables":"{"pageId":1900755,"moduleIds":"1285901750,5143927030,2860107850,3538045080,9018433170,4034701870,1897328980,global","context":{"scm":"20140647.julang.pm.sem","a_keywordid":"485319658184","bd_vid":"3321230096280739901","userInfo":"{}","sceneCode":"20210823QCG72BUD","firstScreen":"true","device":"pc"}}","dfUniqueId":"1900755.1285901750,5143927030,2860107850,3538045080,9018433170,4034701870,1897328980,global","dfVariablesRecover":"{}"}'
        }
        self.js = execjs.compile(open('./1.js', encoding='utf-8').read())
        self.session = requests.session()
        self.token = None

    def get_cookie(self):
        t = int(time.time() * 1000)
        sign = self.js.call('sign', 'undefined', t)
        print(sign)
        url = 'https://h5api.m.taobao.com/h5/mtop.taobao.datafront.invoke.auctionwalle/1.0/?jsv=2.6.1&appKey=12574478&t=' + str(t) + '&sign=' + sign + '&bxPageId=1900755&api=mtop.taobao.datafront.invoke.auctionwalle&v=1.0&type=originaljson&dataType=json&requiredParams=dfApiName%2CdfUniqueId'

        params = {
            "jsv": "2.6.1",
            "appKey": "12574478",
            "t": str(t),
            "sign": sign,
            "bxPageId": "1900755",
            "api": "mtop.taobao.datafront.invoke.auctionwalle",
            "v": "1.0",
            "type": "originaljson",
            "dataType": "json",
            "requiredParams": "dfApiName,dfUniqueId"
        }
        response = self.session.post(url=url, headers=self.headers, data=self.data)
        self.token = response.cookies.get('_m_h5_tk').split('_')[0]
        print(self.token)
        print(response.text)

    def get_data(self):
        t = int(time.time() * 1000)
        sign = self.js.call('sign', self.token, t)
        url = 'https://h5api.m.taobao.com/h5/mtop.taobao.datafront.invoke.auctionwalle/1.0/?jsv=2.6.1&appKey=12574478&t='+str(t)+'&sign='+sign+'&bxPageId=1900755&api=mtop.taobao.datafront.invoke.auctionwalle&v=1.0&type=originaljson&dataType=json&requiredParams=dfApiName%2CdfUniqueId'
        print(sign)
        param = {
            "jsv": "2.6.1",
            "appKey": "12574478",
            "t": str(t),
            "sign": sign,
            "bxPageId": "1900755",
            "api": "mtop.taobao.datafront.invoke.auctionwalle",
            "v": "1.0",
            "type": "originaljson",
            "dataType": "json",
            "requiredParams": "dfApiName,dfUniqueId"
        }
        response = self.session.post(url=url, headers=self.headers, data=self.data)
        print(response.text)


gt = GetData()
gt.get_cookie()
gt.get_data()
