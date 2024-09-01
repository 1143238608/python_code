def my_range(number):
    i = 0
    while i<number:
        value = yield i
        print('发送的值是：', value)
        i += 1

my_ = my_range(3)

print(next(my_))
print(next(my_))
print(my_.send('你好'))
# print(next(my_))