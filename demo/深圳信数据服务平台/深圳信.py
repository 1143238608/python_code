import requests, execjs, time

# https://webapi.cninfo.com.cn/#/marketDataZhishu

js = execjs.compile(open('./EncKey.js', encoding='utf-8').read())
t = int(time.time())
EncKey = js.call('AES_Encrypt', t)

headers = {
    "Accept-EncKey": EncKey,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://webapi.cninfo.com.cn",
    "Referer": "https://webapi.cninfo.com.cn/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
}
cookies = {
    "Hm_lvt_489bd07e99fbfc5f12cbb4145adb0a9b": "1708424159",
    "Hm_lpvt_489bd07e99fbfc5f12cbb4145adb0a9b": "1708424159",
    "MALLSSID": "6D65656646744B492F31475763585967547A53484E73656B575A4F3962705672376A36536554517A706F576351437258676D6E72543149782B72794A71365435"
}
url = "https://webapi.cninfo.com.cn/api/sysapi/p_sysapi1015"
data = {
    "tdate": "2024-02-19",
    "scode": "399001"
}
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
