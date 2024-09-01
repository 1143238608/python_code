import os
import multiprocessing


def get_pid():
    print(f'当前进程的pid是{os.getpid()},父进程的pid是{os.getppid()}')


if __name__ == '__main__':
    p = multiprocessing.Process(target=get_pid)
    p.start()
    print('pid',os.getpid())
    print('ppid',os.getppid())

