import io
from PIL import Image


def decodekey(key: str):
    img_list = []
    for i in list(key):
        unicode_i = ord(i)
        img_list.append(unicode_i ^ 66)
    return img_list


def restore_img(wroing_img: bytes, right_list: list):
    fp = io.BytesIO(wroing_img)
    img = Image.open(fp)
    offset = 30
    right_image_list = []
    right_image_dict = {}
    for i in range(len(right_list)):
        sx = offset * i
        sy = 0
        swidth = offset
        sheight = 400
        x = offset * i
        y = 0
        right_image_dict[right_list[i]] = img.crop((sx, sy, sx + swidth, sy + sheight))

    for i in sorted(right_image_dict):
        right_image_list.append(right_image_dict[i])

    image_size = right_image_list[0].size
    height = image_size[1]
    width = image_size[0]

    right_image = Image.new('RGB', (width * len(right_image_list), height), 255)
    x = y = 0
    for img in right_image_list:
        right_image.paste(img, (x, y))
        x += width
    new_img = right_image.crop((0, 0, 600, 400))
    new_img.save("./right_img.jpg")


if __name__ == '__main__':
    right_list = decodekey("PCNQKADOSJGBELF@RHIM")
    print(right_list)
    with open("gap.jpeg", "rb") as f:
        gap = f.read()
    restore_img(gap, right_list)
