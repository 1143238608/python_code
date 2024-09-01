import time

import requests, pymysql
from concurrent.futures import ThreadPoolExecutor


class BaiDuWork:
    url = 'https://talent.baidu.com/httservice/getPostListNew'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                      'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'Origin': 'https://talent.baidu.com',
        'Referer': 'https://talent.baidu.com/jobs/social-list?search=python'
    }

    def __init__(self):
        self.db = pymysql.connect(host='localhost', user='root', password='root', db='py_spider')
        self.cursor = self.db.cursor()

    @classmethod
    def get_work(cls, page):
        params = {
            'recruitType': 'SOCIAL',
            'pageSize': '10',
            'keyWord': 'python',
            'curPage': page,
            'projectType': ''
        }
        response = requests.post(url=cls.url, headers=cls.headers, data=params).json()
        return response

    def parse_work(self, response):
        work_list = response['data']['list']
        for work in work_list:
            work_name = work['name']
            work_type = work['postType']
            service_condition = work['serviceCondition']
            self.save_work(work_name, work_type, service_condition)

    def creat_work_table(self):
        sql = """
            create table if not exists bd_work(
                id int primary key auto_increment,
                work_name varchar(50) not null,
                work_type varchar(20) not null,
                service_condition text
            );
        """

        try:
            self.cursor.execute(sql)
        except Exception as e:
            print('工作表创建失败', e)

    def save_work(self, *args):
        sql = """
            insert into bd_work(id, work_name, work_type, service_condition) values (
                %s, %s, %s, %s
            );
        """
        try:
            self.cursor.execute(sql, (0, args[0], args[1], args[2]))
            self.db.commit()
            print('数据插入成功', args)
        except Exception as e:
            print('数据插入失败', e, args)
            self.db.rollback()

    def main(self):
        self.creat_work_table()
        with ThreadPoolExecutor(max_workers=5) as pool:
            for i in range(1, 33):
                response = pool.submit(self.get_work, i)
                self.parse_work(response.result())
        self.db.close()


if __name__ == '__main__':
    start = time.time()
    baidu_work = BaiDuWork()
    baidu_work.main()
    print('总耗时：', time.time() - start)
