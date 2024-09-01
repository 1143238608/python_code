import frida, requests, time, json
import sys

rdev = frida.get_remote_device()
print(rdev)
process = rdev.enumerate_processes()  # 获取手机所有进程
print(process)
# session = rdev.attach("com.yuanrenxue.match2022")  # 获取手机app
session = rdev.attach('猿人学2022')  # 获取手机app

with open('./1.js', encoding='utf-8') as f:
    script = session.create_script(f.read())


def on_message(message, data):
    if message["type"] == "send":
        print(message['payloay'])


script.on("message", on_message)
script.load()

# arg = 'page=81663676986'


s = 0
for page in range(1, 101):
    t = int(time.time())
    arg = 'page=' + str(page) + str(t)
    sign = script.exports.getsign(arg)
    print(sign)
    params = {
        'page': page,
        'sign': sign,
        't': t,
    }
    response = requests.post(url='https://appmatch.yuanrenxue.cn/app1', data=params).text
    data = json.loads(response)['data']
    for d in data:
        s += int(d['value'])
        print(d['value'])
print(s)
# sys.stdin.read()
