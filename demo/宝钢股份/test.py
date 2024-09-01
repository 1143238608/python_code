import requests


headers = {
    "Content-Md5": "9d4568c009d203ab10e33ea9953a0264",
    "Origin": "https://www.baosteel.com",
    "Referer": "https://www.baosteel.com/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "x-date": "1709964161",
    "x-nonce": "5150407837",
    "x-signature": "B0A823A2A21971FC8FABA12B7E3DA6687CBA2B24",
    "x-user": "0/56f5cff3cad14853a44782c2c689ab2a"
}
url = "https://cmsauth.baowugroup.com/v1/web/api/node/list"
params = {
    "domainId": "12"
}
response = requests.get(url, headers=headers, params=params)

print(response.text)
print(response)