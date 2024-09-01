import multiprocessing
import time


def work_1():
    for _ in range(5):
        print('任务一')
        time.sleep(1)


def work_2():
    for _ in range(5):
        print('任务二')
        time.sleep(1)


if __name__ == '__main__':
    p1 = multiprocessing.Process(target=work_1)
    p2 = multiprocessing.Process(target=work_2)

    p1.start()
    p2.start()
