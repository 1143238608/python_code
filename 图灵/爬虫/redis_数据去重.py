import hashlib

import redis, requests


class MovieInfo:
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                      'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
    }

    url = 'https://pianku.api.mgtv.com/rider/list/pcweb/v3'

    def __init__(self):
        self.redis_client = redis.Redis(host='47.98.150.68', port=6379, decode_responses=True)

    @classmethod
    def get_info(cls, params):
        response = requests.get(url=cls.url, headers=cls.headers, params=params).json()
        return response

    def parse_info(self, response):
        movies_list = response['data']['hitDocs']
        for movie in movies_list:
            item = dict()
            item['title'] = movie['title']
            item['subtitle'] = movie['subtitle']
            item['story'] = movie['story']
            self.save_info(item)

    @staticmethod
    def get_md5(value):
        md5_hash = hashlib.md5(str(value).encode('utf-8')).hexdigest()
        return md5_hash

    def save_info(self, item):
        value = self.get_md5(item)
        result = self.redis_client.sadd('movie:filter', value)
        if result:
            print('插入数据成功', result)
        else:
            print('数据重复')

    def main(self):
        for page in range(1, 3):
            params = {
                "allowedRC": "1",
                "platform": "pcweb",
                "channelId": "2",
                "pn": page,
                "pc": "80",
                "hudong": "1",
                "_support": "10000000",
                "kind": "19",
                "area": "10",
                "year": "all",
                "chargeInfo": "a1",
                "sort": "c2"
            }
            response = self.get_info(params=params)
            self.parse_info(response)


if __name__ == '__main__':
    movie_info = MovieInfo()
    movie_info.main()
