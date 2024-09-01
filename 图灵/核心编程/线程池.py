# 模拟网页请求
import time
from concurrent.futures import ThreadPoolExecutor


def get_html(time_attr):
    time.sleep(time_attr)
    print(f'get page {time_attr} success')
    return time_attr


# 创建线程池对象
executor = ThreadPoolExecutor(max_workers=2)

# 通过submit提交需要执行的函数到线程池中，并且submit是立即返回对象不会堵塞
task_1 = executor.submit(get_html, 3)
task_2 = executor.submit(get_html, 2)
print(task_1)
# done方法用于判定某个任务是否完成
print('task_1完成情况:', task_1.done())

# 可以使用cancel取消任务 但是运行中的任务无法取消，可以将线程数量修改成1
# print('task_2任务取消:', task_2.cancel())

# result方法可以获取任务的返回值 当前获取为阻塞
print('task_1返回结果:', task_1.result())