from threading import Thread

import requests


class ImageThread(Thread):
    def __init__(self,url):
        super().__init__()
        self.url=url

    def run(self):
        response = requests.get(self.url).content
        with open(self.url.split('/')[-1],'wb') as f:
            f.write(response)

url_list = [
            'http://pic.bizhi360.com/bbpic/98/10798.jpg',
            'http://pic.bizhi360.com/bbpic/92/10792.jpg',
            'http://pic.bizhi360.com/bbpic/86/10386.jpg'
        ]
for url in url_list:
    image_thread = ImageThread(url)
    image_thread.start()