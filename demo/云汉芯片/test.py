import requests


headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://search.ickey.cn/?keyword=ERJU03F1002V&bom_ab=null",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": "^\\^Not_A",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^"
}
cookies = {
    "seaut": "5bbb5df621ffaf0ed92f1fcda5e21f57",
}
url = "https://search.ickey.cn/main/search/ajax-get-res-v001"
params = {
    "keyword": "RVJKVTAzRjEwMDJW",
    "encode": "base64",
    "v_": "_0x107687",
    "font_ident": "02859127a83b62f4",
    "v": "1711160651632",
    "p": "bce500ce8064c41810f325b9742ed36f",
    "_csrf": "MnJ4bEpiNzFBFCkpOC4AY0FKOwUVAFkASyg.G3xRdlBKMxEZfC5.Sw^%^3D^%^3D",
    "ab_version": "v5001"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)