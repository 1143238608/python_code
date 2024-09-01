import requests
from fontTools.ttLib import TTFont
from loguru import logger
import re

from lxml import etree


class SXS:
    def __init__(self):
        self.url = 'https://www.shixiseng.com/interns'
        self.headers = {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }

    def get_html(self,page):
        params = {
            'keyword': '互联网IT',
            'city': '全国',
            'type': 'intern',
            'from': 'menu',
            'page':page
        }
        response = requests.get(url=self.url, headers=self.headers, params=params).text
        font_url = 'https://www.shixiseng.com' + \
                   re.findall('">@font-face {    font-family: myFont;    src: url\((.*?)\);}<', response)[0] + '.woff'
        res_font = requests.get(font_url)
        with open('./font.woff', 'wb') as f:
            f.write(res_font.content)
        logger.debug(font_url)

        # logger.debug(response)
        return response

    # &#xe16c&#xeec9&#xeec9-&#xe16c&#xe7ee&#xeec9/天
    def get_font(self):
        font_dict = {}
        font = TTFont('./font.woff')
        for k, v in font.getBestCmap().items():
            # 0xf7c1 uni544A  \\u00544A
            # print(hex(k), v)
            if v[3:]:
                content = '\\u00' + v[3:] if len(v[3:]) == 2 else "\\u" + v[3:]
                # print(v[3:],content)
                font_dict[hex(k).replace('0x', '&#x')] = content.encode('utf-8').decode('unicode_escape')
                # @font-face
                # print(font.getBestCmap())
        print(font_dict)
        return font_dict

    def parse_data(self, font_dict, html_data):
        for k, v in font_dict.items():
            html_data = html_data.replace(k, v)
        html_Data = etree.HTML(html_data)
        title_xpath = '//*[@id="__layout"]/div/div[2]/div[2]/div[1]/div[1]/div[1]/div/div[1]/div[1]/p[1]/a/text()'
        price_xpath = '//*[@id="__layout"]/div/div[2]/div[2]/div[1]/div[1]/div[1]/div/div[1]/div[1]/p[1]/span/text()'
        comp_xpath = '//*[@id="__layout"]/div/div[2]/div[2]/div[1]/div[1]/div[1]/div/div[1]/div[2]/p[1]/a/text()'
        for i in range(len(html_Data.xpath(title_xpath))):
            print(html_Data.xpath(title_xpath)[i],html_Data.xpath(price_xpath)[i],html_Data.xpath(comp_xpath)[i])


if __name__ == '__main__':
    sxs = SXS()
    for i in range(5):
        html_data = sxs.get_html(str(i))
        font_dict = sxs.get_font()
        sxs.parse_data(font_dict, html_data)
