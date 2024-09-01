import os
import time
import asyncio
import aiohttp


class WzGame:
    url = 'https://pvp.qq.com/web201605/js/herolist.json'
    skin_url = 'https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/{}/{}-bigskin-{}.jpg'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                      'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
    }

    async def get_skin_info(self):
        async with aiohttp.ClientSession() as client:
            response = await client.get(self.url, headers=self.headers)
            info_list = await response.json(content_type=None)

            task_list = list()
            for wz_info in info_list:
                e_name = wz_info['ename']
                c_name = wz_info['cname']
                coroutine_obj = self.get_wz_image(client, e_name, c_name)
                task = asyncio.create_task(coroutine_obj)
                task_list.append(task)
            await asyncio.wait(task_list)

    async def get_wz_image(self, client, e_name, c_name):
        for num in range(30):
            response = await client.get(self.skin_url.format(e_name, e_name, num), headers=self.headers)
            if response.status == 200:
                if not os.path.exists('./wz_images'):
                    os.mkdir('./wz_images')

                img_content = await response.read()

                with open('./wz_images/' + c_name + '-' + str(num) + '.jpg', 'wb') as f:
                    f.write(img_content)
                    print('下载成功: ', c_name + '-' + str(num))


if __name__ == '__main__':
    start = time.time()
    wz_game = WzGame()
    asyncio.run(wz_game.get_skin_info())
    end = time.time()
    print('耗时:', end - start)
