import requests

headers = {
    "Host": "bifen3.qiumibao.com",
    "user-agent": "Mozilla/5.0 (Linux; Android 10; Pixel 2 Build/QQ3A.200805.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.79 Mobile Safari/537.36",
    "net-msg-id": "9709b7b4007793d17148196261734627",
    "x-microservice-name": "APMS"
}
cookies = {
    "PHPSESSID": "c7e9d876047b166a43fc858d35c0cc68"
}
url = "https://bifen3.qiumibao.com/json/v2/list.htm"
params = {
    "version_code": "293",
    "personal_rec": "enable",
    "time_zone": "GMT+08:00",
    "usersports": "1,2,3,41,42,44,45,51,52,53,54,55,56,57,58,59,60,61,62,63,64",
    "_rand_key": "1714819626173",
    "_platform": "android",
    "market": "yingyongbao",
    "version_name": "6.6.8",
    "appname": "zhibo8",
    "sports_selected": "0",
    "blacks_status": "disable",
    "push_channel": "jiguang",
    "zbb_did": "HHWUS0q9Gwt1VIyqHb0NTs/N2rHv4TJrUZI4iTBoGJgvPWmynn4wWRVA6JAh7+AeYlp8hnlwZp+e\n3xHKMpGjFZwIr8TP6kvqYhmhQQuS/CxxpG4Oe73W6SVivT1OxPbnywQAPGW+YYd2g8swP8e5kIG0\n+k1zfkT1dh7zfSe3zGlB5rbwnsaOnFfTCMzlVcgOCOhvmOmBpE+KblMaUmcuIXToLTM7VMvGMuex\nGMbzj9AZ9sFHBxbYKbkHSaE+WLguW/F1+8d3lgBJxK4qp8IkbwibwA4qJ2zBAntREPExmmu7Vlwq\nOmYFBpO12vTILUVUlMfHnrCsCNUaCF68Au7U0xsc+6YlKXOhrws1oCBiVKIsnu+GFd9DX9D+kSIo\nmSeAi9pXpVidHZCNDieotoCOBW/5A8nhQHmOCzJ1qfRB4JesVqB1JQi6CsrqY37KecViw+8GDKQA\nfKdqZbKJlkI8appDFw6+zwN+f49EezlLhWJUz0ZVo++BQnnG8mFdZfzN+TP49jtH5hRty/c+Bmy8\nW33JsxeL0ax/w8tYa23cX4AbhQslTxTA+Wnr5rXqPct+qmT0kTnpG8nbM1Od2BHwBA==\n"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)

data_url = 'https://chat.qiumibao.com/json/2024/other/match1413604v_count.htm'
response = requests.get(data_url, headers=headers, cookies=cookies, params=params).text

print(response)
