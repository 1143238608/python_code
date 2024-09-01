from PIL import Image
import io


def restore_img(wrong_img: bytes, right_list: list):
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
    new_img.save('../pic/p33.jpg')


if __name__ == '__main__':
    with open('../pic/p1.jpg', 'rb') as f:
        gap = f.read()
    right_list = [4, 21, 2, 3, 5, 6, 7, 1, 8, 9, 18, 10, 20, 11, 22, 25, 26, 16, 23, 24, 27, 12, 13, 19, 28, 14, 29, 30, 15, 17, 31, 0]
    restore_img(gap, right_list)
