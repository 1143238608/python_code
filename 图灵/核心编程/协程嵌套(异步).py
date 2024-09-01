import asyncio


async def others1():
    print('others1任务开始执行')
    await asyncio.sleep(3)
    print('others1任务执行结束')
    return '1234'


async def others2():  # <coroutine object work_2 at 0x03A2B5A8>
    print('others2任务开始执行')
    await asyncio.sleep(3)
    print('others2任务执行结束')
    return '5678'


# 方式一
async def main():
    # 将任务打包成task对象
    tasks = [asyncio.create_task(others1()), asyncio.create_task(others2())]
    done, pending = await asyncio.wait(tasks)
    print(done, pending)
asyncio.run(main())

# 方式二
# task = [others1(), others2()]
# asyncio.run(asyncio.wait(task))
