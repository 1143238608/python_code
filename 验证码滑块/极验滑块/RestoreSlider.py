from PIL import Image
import io
from getSlice import GetSlice
from OcrImg import Ocr

class GetRightImg():
    def restore_img(self,wrong_img: bytes, right_list: list, slider_name: str):
        fp = io.BytesIO(wrong_img)
        img = Image.open(fp)
        new_img = Image.new('RGB', (260, 160), 255)
        new_x, new_x_ = 0, 0
        for i in range(len(right_list)):
            if i < 26:
                x = right_list[i] % 26 * 12 + 1
                y = 80
                im = img.crop((x, y, x + 10, 160))
                new_img.paste(im, (new_x, 0))
                new_x += 10
            else:
                x = right_list[i] % 26 * 12 + 1
                y = 0
                im = img.crop((x, y, x + 10, 80))
                new_img.paste(im, (new_x_, 80))
                new_x_ += 10
        new_img.save(slider_name)
        # new_img.show()


    def get_right(self):
        with open('pic/wrong_bg.jpg', 'rb') as f:
            bg = f.read()
        right_list = [39, 38, 48, 49, 41, 40, 46, 47, 35, 34, 50, 51, 33, 32, 28, 29, 27, 26, 36, 37, 31, 30, 44, 45, 43,
                      42, 12, 13, 23, 22, 14, 15, 21, 20, 8, 9, 25, 24, 6, 7, 3, 2, 0, 1, 11, 10, 4, 5, 19, 18, 16, 17]
        self.restore_img(bg, right_list, 'pic/right_bg.jpg')
        with open('pic/wrong_fullbg.jpg', 'rb') as f:
            fullbg = f.read()
        self.restore_img(fullbg, right_list, 'pic/right_fullbg.jpg')



