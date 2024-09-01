from collections.abc import Iterable


class Test:
    def __iter__(self):
        pass


test = Test()

print(isinstance(test, Iterable))

lis = [1,2,3]

iter_obj = iter(lis)
print(dir(lis))
print(iter_obj)
print(iter_obj.__next__())