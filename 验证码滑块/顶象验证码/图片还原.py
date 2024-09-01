import requests, execjs
from PIL import Image
import io


class Slide:
    def __init__(self):
        self.headers = {
            "Origin": "https://www.dingxiang-inc.com",
            "Referer": "https://www.dingxiang-inc.com/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        }
        self.pic_headers = {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "https://www.dingxiang-inc.com/",
            "Sec-Fetch-Dest": "image",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        self.pic_url = None
        self.hy_args = None
        self.hy_array = None

    def get_pic(self):
        url = "https://cap.dingxiang-inc.com/api/a"
        params = {
            "w": "380",
            "h": "165",
            "s": "50",
            "ak": "99de95ad1f23597c23b3558d932ded3c",
            "c": "65b8d3a24xmvNQCC0Y89zus5GjX5OMQeZe3DKrd1",
            "jsv": "5.1.46",
            "aid": "dx-1706614664412-11517372-7",
            "wp": "1",
            "de": "0",
            "uid": "",
            "lf": "0",
            "tpc": "",
            "cid": "87932201",
            "_r": "0.25979004033647013"
        }
        response = requests.get(url, headers=self.headers, params=params).json()

        self.pic_url = 'https://static.dingxiang-inc.com/picture' + response['p1']
        self.hy_args = response['p1'].split('/')[-1].split('.')[0]

    def get_hy_array(self):
        js = execjs.compile(open('dx_hy.js', encoding='utf-8').read())
        self.hy_array = js.call('hy_pic', self.hy_args)
        print(self.hy_array)
        return self.hy_array

    def save_pic(self):
        with open('pic/p1.jpg', 'wb') as f:
            pic_content = requests.get(url=self.pic_url, headers=self.pic_headers).content
            f.write(pic_content)
            print('图片保存成功')

    def restore_img(self, wrong_img: bytes, right_list: list):
        fp = io.BytesIO(wrong_img)
        img = Image.open(fp)
        new_img = Image.new('RGB', (384, 200), 255)
        new_x, new_y = 0, 0
        for i in range(len(right_list)):
            x = right_list[i] * 12
            y = 0
            im = img.crop((x, y, x + 12, y + 200))
            new_img.paste(im, (new_x, new_y))
            new_x += 12
        new_img.save('./pic/p2.jpg')

    # def reduce_pic(self, wrong_img: bytes):
    #     fp = io.BytesIO(wrong_img)
    #     img = Image.open(fp)
    #     img = img.resize((384, 200))
    #     img.save('pic/reduce.jpg')


if __name__ == '__main__':
    slide = Slide()
    slide.get_pic()
    slide.save_pic()
    # with open('pic/p1.jpg', 'rb') as f:
    #     gap = f.read()
    # slide.reduce_pic(gap)
    right_list = slide.get_hy_array()
    with open('pic/p1.jpg', 'rb') as f:
        gap1 = f.read()
    slide.restore_img(gap1, right_list)
