import requests

# http://spiderbuf.cn/list
url = 'http://spiderbuf.cn/static/js/h04/udSL29.js'

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                  'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
}

response = requests.get(url=url, headers=headers).text
print(response)
