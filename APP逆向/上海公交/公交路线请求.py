import requests, execjs

url = 'https://apps.eshimin.com/jtkBus/bus/busInformation'

headers = {
    "sec-fetch-mode": "cors",
    "referer": "https://apps.eshimin.com/publicTransportation/busSearch",
    "sec-ch-ua": "",
    "sec-fetch-site": "same-origin",
    "sec-ch-ua-mobile": "?1",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Mobile/15E148 iOS/15.1 Brand/iPhone Display/414.000000*736.000000 EshiminApp/7.3.5 smyapp/EshiminApp FromApp/Eshimin",
    "sec-fetch-dest": "empty",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": "295",
    "Host": "apps.eshimin.com",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip"
}
aes_key = "9cd26944ea443663"
# {"name":"933路"}
aes_encrypt_word = '{"name":"933路","lineid":"093300"}'
js = execjs.compile(open('./1.js', encoding='utf-8').read())
content = js.call("AES_Encrypt", aes_encrypt_word, aes_key)
params = {
    "data": "I8avxef7M7lLIXalmx+5t7q3VDPJOrojNJACN7AbuMetsIqQDVt43xqT1jMp+9zjArDZUPHVbt5o0UpsrPIVsQLMYgK1cO99y+lQNS929yvJjNyoZNbtVXugyZPfhzp+tJ43zMZ6SwGulS0rPxCzjkEfyyhwq1gSTmuMjRIXzUs=",
    "expire_time": "1720551600125",
    "content": content
}
response = requests.post(url=url, headers=headers, data=params).json()
print(response)
data = response['data']
print(data)
de_data = js.call('AES_Decrypt', data, aes_key)
print(de_data)
