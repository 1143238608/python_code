def test_1(num_1):
    def test_2():
        print(num_1)
    return test_2

@test_1
def test_3():
    print('1111')
    return '1234'

obj = test_1(1111)

obj()

