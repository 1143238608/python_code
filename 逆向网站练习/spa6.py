import requests, execjs,time

headers = {
    "Referer": "https://spa6.scrape.center/page/3",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",

}
url = "https://spa6.scrape.center/api/movie/"

js = execjs.compile(open('spa6.js',encoding='utf-8').read())
t = int(time.time())
en_1 = js.call('SHA1_Encrypt','/api/movie,'+str(t))
en_2 = en_1 + ',' + str(t)
token = js.call('B64_Encrypt',en_2)
params = {
    "limit": "0",
    "offset": "40",
    "token": token
}
response = requests.get(url, headers=headers, params=params).text

print(response)
