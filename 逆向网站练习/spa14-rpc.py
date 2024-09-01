import asyncio
import websockets
import requests


def get_res(page, sign):

    headers = {
        "Referer": "https://spa14.scrape.center/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    }
    url = "https://spa14.scrape.center/api/movie/"
    params = {
        "limit": "10",
        "offset": page,
        "sign": sign
    }
    response = requests.get(url, headers=headers, params=params)

    print(response.text)


async def echo(websocket):
    # 使用WebSocket在客户端和服务器之间建立全双工双向连接后，就可以在连接打开时调用send()方法。
    message = 'hello world'
    # 发送数据
    await websocket.send(message)
    return True


async def recv_msg(websocket):
    while 1:
        # 接收数据
        recv_text = await websocket.recv()
        for i in range(0, 100, 10):
            print(i)
            get_res(str(i), recv_text)
            print(recv_text)


async def main_logic(websocket, path):
    await echo(websocket)
    await recv_msg(websocket)


start_server = websockets.serve(main_logic, '127.0.0.1', 8080)
loop = asyncio.get_event_loop()
loop.run_until_complete(start_server)
# 创建了一个连接对象之后，需要不断监听返回的数据，则调用 run_forever 方法，要保持长连接即可
loop.run_forever()
