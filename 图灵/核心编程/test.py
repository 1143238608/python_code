import pymongo

# 建立链接
client = pymongo.MongoClient('localhost', 27017)
# 指定数据库
db = client['dba7']
# 指定集合
collection = db['student']
# 增
# 1、数据信息包含了用户以下的信息: 姓名，年龄，住址，爱好的信息
collection.insert_one({'name': 'dahai', 'age': 18, 'addr': 'changsha', 'hobby': 'football'})
# 改
collection.update_one({'name': 'dahai'}, {'$set': {'hobby': 'music'}})
#
collection.delete_one({'name': 'dahai'})
# 查  
data = collection.find()
# print(data)
for i in data:
    print(i)
