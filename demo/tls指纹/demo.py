import requests

url = 'https://tls.browserleaks.com/json'

response = requests.get(url).text

print(response)