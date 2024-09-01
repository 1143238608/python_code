import asyncio
import aiomysql


# 一个游标对象无法在多个task任务重并发读写, 需要在多个task任务重创建多个游标对象
async def conn_mysql_one():
    # 创建一个mysql的链接对象
    conn = await aiomysql.connect(user='root', password='root', db='py_spider')

    # 使用链接对象创建游标对象
    cursor = await conn.cursor()

    await cursor.execute('select * from tx_work;')
    result = await cursor.fetchall()
    print(result)

    # 任务完成之后需要关闭游标对象与连接对象
    await cursor.close()
    conn.close()


# 使用连接池对象进行并发读写
async def conn_mysql_many():
    # 通过连接池的方式创建连接对象
    pool = await aiomysql.create_pool(user='root', password='root', db='py_spider')

    # 使用异步上下文管理器的方式自动关闭连接对象与游标对象
    async with pool.acquire() as conn:
        async with conn.cursor() as cursor:
            await cursor.execute('select * from tx_work;')
            result = await cursor.fetchall()
            print(result)


# asyncio.run(conn_mysql_one())
asyncio.run(conn_mysql_many())
