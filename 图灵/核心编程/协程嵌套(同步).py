import asyncio


async def others1():
    print('others1任务开始执行')
    await asyncio.sleep(3)
    print('others1任务执行结束')
    return '1234'


async def others2():
    print('others2任务开始执行')
    await asyncio.sleep(3)
    print('others2任务执行结束')
    return '5678'


async def main():
    print('main方法开始执行')
    res1 = await others1()
    res2 = await others2()
    print(res1)
    print(res2)


asyncio.run(main())
