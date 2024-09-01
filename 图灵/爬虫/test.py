import requests

url = 'https://tv.sohu.com/item/MTE4NDU5MA==.html'
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'

}

response = requests.get(url=url,headers=headers).text
print(response)