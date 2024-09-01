import json
import time,execjs

import requests
import re

session = requests.session()
js = execjs.compile(open('./1.js',encoding='utf-8').read())

html_url = 'https://search.ickey.cn/?keyword=ERJU03F1002V&bom_ab=null'
html_headers = {
    'Referer':'https://search.ickey.cn/?keyword=ERJU03F1002V&bom_ab=null',
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
}
response = session.get(url=html_url,headers=html_headers)
print(response.cookies)
js_url = re.findall('<script type="text/javascript" src="//search.ickey.cn/x/c/(.*?)"></script>',response.text)[-1]
print(js_url)
js_response = session.get(url='https://search.ickey.cn/x/c/'+js_url,headers=html_headers).text
print(js_response)
# font_ident, = re.findall('<input type="hidden" value="(.*?)" id="font_ident',response.text)
# # print(font_ident)
# _csrf = re.findall('<input type="hidden" name="_csrf" value="(.*?)" />',response.text)[0]
# # print(_csrf)
# t = str(int(time.time()*1000))
# login_url = 'https://www.ickey.cn/site/islogin'
# login_params = {
#     'sname': 'https://search.ickey.cn/?keyword=ERJU03F1002V&bom_ab=null',
#     'callback': 'jQuery111105840376699889225_'+t,
#     '_': str(int(t)+1)
# }
# login_res = session.get(url=login_url,headers=html_headers,params=login_params).text
# seaut = json.loads(login_res[42:-1])['guest_id']
# print(seaut)
#
# p = js.call('get_p',str(int(t)+347))
# headers = {
#     "Referer": "https://search.ickey.cn/?keyword=ERJU03F1002V&bom_ab=null",
#     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
# }
#
# url = "https://search.ickey.cn/main/search/ajax-get-res-v001"
# cookies = {
#     "seaut": seaut,
# }
# params = {
#     "keyword": "RVJKVTAzRjEwMDJW",
#     "encode": "base64",
#     "v_": "_0x107687",
#     "font_ident": font_ident,
#     "v": str(int(t)+347),
#     "p": p,
#     "_csrf": _csrf,
#     "ab_version": "v5001"
# }
# response = session.get(url, headers=headers, cookies=cookies,params=params)
# print(params)
# print(response.cookies)
# print(response.text)

