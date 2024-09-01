import time
from concurrent.futures import ThreadPoolExecutor


def get_html(time_attr):
    time.sleep(time_attr)
    print(f'get page {time_attr} success')
    return time_attr


with ThreadPoolExecutor(max_workers=2) as pool:
    future_list = [pool.submit(get_html, i) for i in range(5)]
