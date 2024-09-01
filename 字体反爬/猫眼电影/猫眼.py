import re
from fontTools.ttLib import TTFont
import matplotlib.pyplot as plt
from PIL import ImageFont, Image, ImageDraw
import ddddocr, io
import requests
from lxml import etree


class MaoYan:
    def __init__(self):
        self.url = 'https://www.maoyan.com/cinemas'
        self.headers = {
            "Referer": "https://www.maoyan.com/films",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        }
        self.cookie = {
            "uuid_n_v": "v1",
            "uuid": "34826A70EF4811EEA3C20DA673AEB1D0CA4D0191CF5B4F22B89A36EBEB11D35A",
            "_csrf": "73dd5d3917c66632e8da2d1fd08ad1c6dcc3f7318bd5aac8d8926e7ea4b4392b",
            "_lx_utm": "utm_source^%^3DBaidu^%^26utm_medium^%^3Dorganic",
            "_lxsdk_cuid": "18e9405ba9bc8-0ab5f97a34d3c8-26001951-384000-18e9405ba9bc8",
            "_lxsdk": "34826A70EF4811EEA3C20DA673AEB1D0CA4D0191CF5B4F22B89A36EBEB11D35A",
            "Hm_lvt_703e94591e87be68cc8da0da7cbd0be2": "1711880387",
            "Hm_lpvt_703e94591e87be68cc8da0da7cbd0be2": "1711880400",
            "__mta": "20363015.1711880387719.1711880398120.1711880400506.3",
            "_lxsdk_s": "18e9405ba9c-4a2-27-bf6^%^7C^%^7C6"
        }

    def get_html(self, offset):
        params = {
            'offset': offset
        }
        response = requests.get(url=self.url, headers=self.headers, cookies=self.cookie, params=params).text
        font_url = 'https:' + re.findall('url\("([^"]+)"\)', response)[-1]
        print(font_url)
        with open('./font.woff', 'wb') as f:
            f.write(requests.get(font_url).content)
        # print(response)
        return response

    def parse_font(self):
        font_dict = {}
        tfont = TTFont('./font.woff')
        # 获取数字或字体对应的unicode
        uni_list = tfont.getGlyphOrder()[2:]
        print('uni列表：', uni_list)
        ocr = ddddocr.DdddOcr()
        charList = []
        font = ImageFont.truetype("./font.woff", 40)
        # 将10个uni字符画到im，进而使用ocr识别获得对应数字
        for uchar in uni_list:
            unknown_char = f"\\u{uchar[3:]}".encode().decode("unicode_escape")
            im = Image.new(mode='RGB', size=(42, 40), color="white")
            draw = ImageDraw.Draw(im=im)
            draw.text(xy=(0, 0), text=unknown_char, fill=0, font=font)
            img_byte = io.BytesIO()
            im.save(img_byte, format='JPEG')
            # im.show()
            charList.append(ocr.classification(img_byte.getvalue()))
        print('对应字符：', charList)
        # &#xed8f;&#xec4b;.&#xec4b;
        for i in range(len(uni_list)):
            k = uni_list[i].replace('uni', '&#x').lower()
            font_dict[k] = charList[i]
        print(font_dict)
        return font_dict

    def get_data(self, font_dict, html):
        for k, v in font_dict.items():
            html = html.replace(k, v)
        html_Data = etree.HTML(html)
        price_xpath = '//*[@id="app"]/div[2]/div/div[3]/span[2]/span/text()'
        cinema_address = '//*[@id="app"]/div[2]/div/div[1]/a/text()'
        for i in range(len(html_Data.xpath(price_xpath))):
            print(html_Data.xpath(cinema_address)[i], html_Data.xpath(price_xpath)[i].replace(';', ''))


if __name__ == '__main__':
    maoYan = MaoYan()
    for i in range(5):
        html = maoYan.get_html(str(i * 12))
        font_dict = maoYan.parse_font()
        maoYan.get_data(font_dict, html)
