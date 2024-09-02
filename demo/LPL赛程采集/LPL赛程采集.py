# https://tiyu.baidu.com/match/lpl/tab/%E8%B5%9B%E7%A8%8B
import hashlib

import pymysql
import redis
import requests
import datetime

from loguru import logger


class LOL:
    def __init__(self):
        self.lpl_url = 'https://tiyu.baidu.com/match/lpl/tab/%E8%B5%9B%E7%A8%8B'  # LPL
        self.lck_url = 'https://tiyu.baidu.com/match/lck/tab/%E8%B5%9B%E7%A8%8B'  # Lck
        self.redis_client = redis.Redis(host='47.98.150.68', port=6379, decode_responses=True)
        self.connection = pymysql.connect(host='47.98.150.68',
                                          user='root',
                                          password='112233',
                                          database='wz_db',
                                          port=3306)
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
        }
        self.query = "INSERT INTO lol (time, weekday,left_name,left_logo,right_name,right_logo,score,winner,district) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        self.cursor = self.connection.cursor()
        # self.redis_client.delete('lolInfo:filter')

    def getInfo(self):
        start_date = datetime.date(2024, 1, 1)
        end_date = datetime.date(2024, 9, 4)
        current_date = start_date
        lol_info = {}
        while current_date <= end_date:
            his_lpl_url = 'https://tiyu.baidu.com/api/match/lpl/live/date/' + str(
                current_date) + '/direction/forward?from=self'
            his_lck_url = 'https://tiyu.baidu.com/api/match/lck/live/date/' + str(
                current_date) + '/direction/forward?from=self'
            response = requests.get(url=his_lpl_url, headers=self.headers).json()
            lol_info['time'] = response['data'][0]['time']
            lol_info['weekday'] = response['data'][0]['weekday']
            lol_info['leftName'] = response['data'][0]['list'][0]['leftLogo']['name']
            lol_info['leftLogo'] = response['data'][0]['list'][0]['leftLogo']['logo']
            lol_info['rightName'] = response['data'][0]['list'][0]['rightLogo']['name']
            lol_info['rightLogo'] = response['data'][0]['list'][0]['rightLogo']['logo']
            lol_info['score'] = response['data'][0]['list'][0]['scoreInfo']['leftRegularScore'] + ':' + \
                                response['data'][0]['list'][0]['scoreInfo']['rightRegularScore']
            lol_info['winner'] = response['data'][0]['list'][0]['winner']
            lol_info['district'] = 'LPL'
            print(lol_info)
            self.save_info(lol_info, self.query)
            # print(current_date)
            current_date += datetime.timedelta(days=1)

    @staticmethod
    def get_md5(value):
        md5_hash = hashlib.md5(str(value).encode('utf-8')).hexdigest()
        return md5_hash

    def save_info(self, item, sql):
        value = self.get_md5(item)
        result = self.redis_client.sadd('lolInfo:filter', value)
        if result:
            self.cursor.execute(sql, (
                item['time'], item['weekday'], item['leftName'], item['leftLogo'], item['rightName'], item['rightLogo'],
                item['score'], item['winner'], item['district']))
            self.connection.commit()
            print('插入数据成功', result)
        else:
            print('数据重复')

    def main(self):
        self.getInfo()
        self.cursor.close()
        self.connection.close()


if __name__ == '__main__':
    lol = LOL()
    lol.main()
