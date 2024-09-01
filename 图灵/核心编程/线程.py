from threading import Thread

import requests


def install_image():
    url_list = [
        'http://pic.bizhi360.com/bbpic/98/10798.jpg',
        'http://pic.bizhi360.com/bbpic/92/10792.jpg',
        'http://pic.bizhi360.com/bbpic/86/10386.jpg'
    ]

    for url in url_list:
        response = requests.get(url).content
        with open(url.split('/')[-1], 'wb') as f:
            f.write(response)


t = Thread(target=install_image)

t.start()
