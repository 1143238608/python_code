from DrissionPage import ChromiumPage

# 用 d 模式创建页面对象（默认模式）
page = ChromiumPage()
# 跳转到登录页面
page.get('https://gitee.com/login')

# 定位到账号文本框并输入账号
page.ele('#user_login').input('18235015508')
# 定位到密码文本框并输入密码
page.ele('#user_password').input('mxy19981028')

# 点击登录按钮
page.ele('@value=登 录').click()

page.quit()
