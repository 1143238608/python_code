import scrapy
from my_spider.items import MySpiderItem

class DoubanSpider(scrapy.Spider):
    name = "douban"
    allowed_domains = ["movie.douban.com"]
    start_urls = ["https://movie.douban.com/top250"]

    def parse(self, response):
        li_list = response.xpath('//*[@id="content"]/div/div[1]/ol/li')
        # print(li_list)
        for li in li_list:
            # item = dict()
            item = MySpiderItem()
            item['title'] = li.xpath('.//div/div[2]/div[1]/a/span[1]/text()').extract_first()
            # print(item)
            yield item