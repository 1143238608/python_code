import asyncio


async def others():
    print('开始任务...')
    await asyncio.sleep(3)
    print('任务结束...')
    return '123'


async def main():
    print('main函数开始运行...')
    result = await others()
    print(result)

asyncio.run(main())
