import requests

url = 'https://pcw-api.iqiyi.com/search/recommend/list'

headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
}

params = {
    'channel_id': '2',
    'data_type': '1',
    'mode': '11',
    'page_id': '2',
    'ret_num': '48',
    'session': '32fd9802f81b493c40c3d96ed62e9bb2',
    'three_category_id': '15;must'
}

response = requests.get(url=url,headers=headers,params=params).json()

print(response)