import pymysql
import requests


# url = 'https://careers.tencent.com/tencentcareer/api/post/Query'
#
# headers = {
#     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
# }
#
# params = {
#     "timestamp": "1702203303262",
#     "countryId": "",
#     "cityId": "",
#     "bgIds": "",
#     "productId": "",
#     "categoryId": "",
#     "parentCategoryId": "",
#     "attrId": "",
#     "keyword": "python",
#     "pageIndex": "2",
#     "pageSize": "10",
#     "language": "zh-cn",
#     "area": "cn"
# }
#
# response = requests.get(url=url, headers=headers, params=params).json()
#
# print(response)


class TXWork:
    url = 'https://careers.tencent.com/tencentcareer/api/post/Query'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
    }

    def __init__(self):
        # self.db = pymysql.connect(host='8.134.103.4', user='root', password='112233', port=3307, db='db_test')
        self.db = pymysql.connect(host='localhost', user='root', password='root', port=3306, db='py_spider')
        self.cursor = self.db.cursor()

    @classmethod
    def get_info(cls):
        for i in range(1, 10):
            params = {
                "timestamp": "1702203303262",
                "countryId": "",
                "cityId": "",
                "bgIds": "",
                "productId": "",
                "categoryId": "",
                "parentCategoryId": "",
                "attrId": "",
                "keyword": "python",
                "pageIndex": str(i),
                "pageSize": "10",
                "language": "zh-cn",
                "area": "cn"
            }
            response = requests.get(url=cls.url, headers=cls.headers, params=params).json()
            print(f'正在抓取第{i}页')
            work_list = response['Data']['Posts']
            yield work_list

    def creat_table(self):
        sql = """
            create table if not exists tx_work(
                id int primary key auto_increment,
                work_name varchar(100) not null,
                country_name varchar(50),
                city_name varchar(50),
                work_desc text
            );
        """
        try:
            self.cursor.execute(sql)
            print('创建表成功！')
        except Exception as e:
            print('创建表失败！', e)

    def insert_info(self, *args):

        sql = """
                    insert into tx_work(
                        id,
                        work_name,
                        country_name,
                        city_name,
                        work_desc
                    ) values (%s, %s, %s, %s, %s);
                """
        try:
            self.cursor.execute(sql, args)
            self.db.commit()
            print('数据插入成功！')
        except Exception as e:
            print('数据插入失败！', e)
            self.db.rollback()

    def main(self):
        self.creat_table()
        all_work_generator_object = self.get_info()
        work_id = 0
        for work_generator_object in all_work_generator_object:
            for work_info in work_generator_object:
                print(work_info)
                work_name = work_info['RecruitPostName']
                country_name = work_info['CountryName']
                city_name = work_info['LocationName']
                work_desc = work_info['Responsibility']
                self.insert_info(work_id, work_name, country_name, city_name, work_desc)
        self.db.close()


if __name__ == '__main__':
    tx_work = TXWork()
    tx_work.main()
