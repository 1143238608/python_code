import requests, time, threading
import pymongo
from queue import Queue


class Movieinfo:
    url = 'https://pcw-api.iqiyi.com/search/recommend/list?' \
          'channel_id=2&data_type=1&mode=11&' \
          'page_id={}' \
          '&ret_num=48&session=341d985394cd801b4bfd808b8dd34a04&three_category_id=15;must'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                      'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
    }

    def __init__(self):
        self.client = pymongo.MongoClient(host='47.98.150.68', username='admin', password='admin', port=27017)
        self.collection = self.client['spider_movie']['info_1']

        self.url_queue = Queue()
        self.response_queue = Queue()
        self.save_queue = Queue()

    # 构建url
    def get_url(self):
        for i in range(1, 5):
            self.url_queue.put(self.url.format(i))

    # 获取数据
    def get_movie_info(self):
        while True:
            url = self.url_queue.get()
            response = requests.get(url=url, headers=self.headers).json()
            self.response_queue.put(response)
            self.url_queue.task_done()

    # 解析数据
    def parse_data(self):
        while True:
            json_response = self.response_queue.get()
            movie_info_list = json_response['data']['list']
            for movie in movie_info_list:
                item = dict()
                item['name'] = movie['name']
                item['description'] = movie['description']
                item['playUrl'] = movie['playUrl']
                self.save_queue.put(item)
            self.response_queue.task_done()

    # 保存数据
    def save_data(self):
        while True:
            item = self.save_queue.get()
            self.collection.insert_one(item)
            print(item)
            self.save_queue.task_done()

    def main(self):
        # 保存线程对象的线程列表
        thread_list = list()

        # 创建一个获取url的线程对象并将线程对象添加到线程列表中
        t_url = threading.Thread(target=self.get_url)
        thread_list.append(t_url)

        # 创建3个线程对象用于网站数据请求
        for _ in range(3):
            t_get_info = threading.Thread(target=self.get_movie_info)
            thread_list.append(t_get_info)

        # 创建1个线程对象用于数据提取
        t_response = threading.Thread(target=self.parse_data)
        thread_list.append(t_response)

        # 创建1个线程对象用于数据保存
        t_save = threading.Thread(target=self.save_data)
        thread_list.append(t_save)

        for t_obj in thread_list:
            # 将线程对象设置为守护线程
            # 主线程任务完成直接退出, 子线程随着主线程退出子线程死亡
            t_obj.setDaemon(True)
            # t_obj.daemon = True
            t_obj.start()

        # 判断所有队列中的计数器是否为0, 如果为0, 主线程解堵塞
        for queue in [self.url_queue, self.response_queue, self.save_queue]:
            # 是用来堵塞我们的主线程 只有当队列计数器为0才能接堵塞 退出程序
            queue.join()


if __name__ == '__main__':
    start = time.time()
    movie_info = Movieinfo()
    movie_info.main()
    print('耗时：',time.time()-start)
