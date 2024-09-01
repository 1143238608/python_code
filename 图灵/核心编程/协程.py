import asyncio


async def work_1():
    for _ in range(5):
        print('异步任务1...', _)
        await asyncio.sleep(1)


async def work_2():  # <coroutine object work_2 at 0x03A2B5A8>
    for _ in range(5):
        print('异步任务2...', _)
        await asyncio.sleep(1)


# 方式一  python3.6
# 必须创建列表保存任务
# tasks = [work_1(), work_2()]
# 创建循环事件
# loop = asyncio.get_event_loop()
# loop.run_until_complete(asyncio.wait(tasks))


# 方式二  python3.8
tasks = [work_1(), work_2()]
asyncio.run(asyncio.wait(tasks))
