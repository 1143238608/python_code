import time

from DrissionPage import ChromiumPage

# 用 d 模式创建页面对象（默认模式）
page = ChromiumPage()
# 跳转到登录页面
page.get('http://www.baidu.com')

time.sleep(3)
page.quit()
