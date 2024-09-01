import requests


headers = {
    "aut": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4MzY3OTMwIiwiaXNzIjoiIiwiaWF0IjoxNzE0MzA4MzgwLCJuYmYiOjE3MTQzMDgzODAsImV4cCI6MTg3MTk4ODM4MH0.gTwke4a466_lHC84HMjOqFn2gJclOsjYcwFA-4hhk14",
    "s": "27e7dced334801d01656ac30ca4f1bb4",
    "t": "1715085208564",
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; Pixel 2 Build/QQ3A.200805.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.79 Mobile Safari/537.36;SuiRui/twitter/ver=9.9.9",
    "Host": "iomgew.uur3v9.xyz"
}
url = "https://iomgew.uur3v9.xyz/api/m3u8/decode/authPath"
params = {
    "auth_key": "1715085207-18367930-2-aac4baffc095867ec218104044e76c19",
    "path": "bzc/90/wa/t0/md/26e1198924dc497aaea09e81012e1180.m3u8"
}
response = requests.get(url, headers=headers, params=params)

print(response.text)
print(response)