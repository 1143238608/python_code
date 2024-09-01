import requests

url = 'https://cp.pavidcdn.com/stream/full/asia/2300/2024050101.ff/000.ts'

response = requests.get(url=url).content

with open('./video/000.ts', 'wb') as fs:
    fs.write(response)
