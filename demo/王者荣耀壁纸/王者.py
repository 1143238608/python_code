import time
from loguru import logger
import requests
from urllib.parse import unquote
import pymysql


class WZ:
    def __init__(self):
        # 连接MySQL数据库
        self.connection = pymysql.connect(host='47.98.150.68',
                                          user='root',
                                          password='112233',
                                          database='wz_db',
                                          port=3306)
        # 创建一个游标对象
        self.cursor = self.connection.cursor()
        self.headers = {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        self.url = "https://apps.game.qq.com/cgi-bin/ams/module/ishow/V1.0/query/workList_inc.cgi"

    def get_info(self, page):
        params = {
            "activityId": "2735",
            "sVerifyCode": "ABCD",
            "sDataType": "JSON",
            "iListNum": "20",
            "totalpage": "0",
            "page": str(page),
            "iOrder": "0",
            "iSortNumClose": "1",
            "iAMSActivityId": "51991",
            "_everyRead": "true",
            "iTypeId": "2",
            "iFlowId": "267733",
            "iActId": "2735",
            "iModuleId": "2735",
            "_": str(int(time.time() * 1000))
        }
        response = requests.get(url=self.url, headers=self.headers, params=params).json()
        query = "INSERT INTO heroes (hero_name, image_url) VALUES (%s, %s)"
        for hero_info in response['List']:
            hero_img = unquote(hero_info['sProdImgNo_8'])
            hero_name = unquote(hero_info['sProdName'])
            self.cursor.execute(query, (hero_name, hero_img))
            self.connection.commit()
            logger.debug(f'皮肤名称:{hero_name},皮肤地址:{hero_img}')

        # logger.debug(response)

    def main(self):
        for i in range(5):
            self.get_info(i)
        self.cursor.close()
        self.connection.close()


if __name__ == '__main__':
    wz = WZ()
    wz.main()
