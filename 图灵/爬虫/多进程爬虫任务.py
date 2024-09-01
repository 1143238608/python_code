import time
import pymongo
import requests
from multiprocessing import Process, JoinableQueue as Queue


class MovieInfo:
    url = 'https://pcw-api.iqiyi.com/search/recommend/list?' \
          'channel_id=2&data_type=1&mode=11&' \
          'page_id={}' \
          '&ret_num=48&session=341d985394cd801b4bfd808b8dd34a04&three_category_id=15;must'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                      'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
    }

    client = pymongo.MongoClient(host='47.98.150.68', username='admin', password='admin', port=27017)
    collection = client['spider_movie']['info_process']

    def __init__(self):
        # 分别创建网址队列、响应数据队列、保存数据的队列
        self.url_queue = Queue()
        self.response_queue = Queue()
        self.save_queue = Queue()

    def get_url(self):
        for page in range(1, 6):
            self.url_queue.put(self.url.format(page))

    def get_movie_info(self):
        while True:
            url = self.url_queue.get()
            response = requests.get(url, headers=self.headers).json()
            self.response_queue.put(response)
            self.url_queue.task_done()

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

    def save_data(self):
        while True:
            item = self.save_queue.get()
            print(item)
            self.collection.insert_one(item)
            self.save_queue.task_done()  # 获取队列中的一个元素让队列中的计数器减1

    def main(self):
        process_list = list()
        p_url = Process(target=self.get_url)

        for _ in range(3):
            p_get_info = Process(target=self.get_movie_info)
            process_list.append(p_get_info)

        p_response = Process(target=self.parse_data)
        process_list.append(p_response)

        p_save = Process(target=self.save_data)
        process_list.append(p_save)

        # 让url获取进程先运行
        p_url.start()
        p_url.join()

        for p in process_list:
            # 子进程随着主进程的退出而退出
            p.daemon = True
            p.start()

        # time.sleep(1)

        for queue in [self.url_queue, self.response_queue, self.save_queue]:
            queue.join()

        print('主进程退出...')


if __name__ == '__main__':
    now = time.time()
    movie_info = MovieInfo()
    movie_info.main()
    print('任务结束: ', time.time() - now)
