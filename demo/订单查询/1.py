import json
import threading

import requests


def query_():
    url = 'https://qqdsw.kkxdn.com/ajax.php?act=query'

    headers = {
        'Referer': 'https://qqdsw.kkxdn.com/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'Cookie':
            'mysid=bf47cd6f85324f53568667b5c4254a44; _aihecong_chat_visitorlimit=%7B%22limitVisit%22%3Atrue%2C%22limitMarktTime%22%3A1700660039300%7D; PHPSESSID=fu52f1184c2fo6b79nd6qqckpp; sec_defend=af26d55b8503d04fd5c42a08c04c636fb03b1914a53cae317f4a2e5af550bbf7; op=false; counter=1; _aihecong_chat_visibility=true'
    }

    params = {
        'type': '0',
        'qq': '1143238608',
        'page': '1'
    }

    response = requests.get(url=url, headers=headers, params=params).text
    print(json.loads(response)['data'])
    print(response)


if __name__ == '__main__':

    threads = []
    for i in range(100):
        thread = threading.Thread(target=query_)
        threads.append(thread)
    for thread in threads:
        thread.start()
    for thread in threads:
        thread.join()
