import time

from DrissionPage import ChromiumPage
from DrissionPage.common import Keys
from DrissionPage.common import ActionChains
# 用 d 模式创建页面对象（默认模式）
page = ChromiumPage()
ac = ActionChains(page)
# 跳转到登录页面
page.get('https://kyfw.12306.cn/otn/resources/login.html')

# page.ele('#J-userName').input('DKxiaoyuyu123')
#
# page.ele('#J-password').input('mxy199810282513')
#
# page.ele('#J-login').click()
# page.ele('.login-hd-account').click()
# page.wait.ele_display('xpath://*[@id="link_for_ticket"]')
time.sleep(2)
page.ele('xpath://*[@id="link_for_ticket"]').click()

page.ele('#fromStationText').input('武汉',Keys.ENTER)
time.sleep(4)
# page.ele('xpath://*[@id="citem_0"]').click()
ac.key_down(Keys.ENTER)


page.ele('#toStationText').input('北京',Keys.ENTER)
time.sleep(4)
ac.key_down(Keys.ENTER)
# page.ele('xpath://*[@id="citem_0"]').click()
page.ele('#train_date').input('2023-11-30')

page.ele('#query_ticket').click()