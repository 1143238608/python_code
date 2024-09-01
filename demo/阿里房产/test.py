import requests

url = 'http://www.baidu.com'

response = requests.get(url=url)
print(response.cookies.get('BAIDUID_BFESS'))