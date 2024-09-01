def login_required(func):
    # 定义登录装饰器

    def wrapper():
        # 包装函数，用于验证登录信息

        username = input("请输入用户名: ")
        password = input("请输入密码: ")

        # 在实际应用中，这里应该与用户数据库或其他安全存储进行比较
        if username == "root" and password == "root":
            print("登录成功！")
            func()  # 执行原始函数
        else:
            print("登录失败，请检查用户名和密码。")

    return wrapper

@login_required
def run():
    # 被装饰的函数
    print('开始执行函数')

# 使用装饰器后，调用 run 会先执行登录验证
run()
