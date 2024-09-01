import requests,execjs

js = execjs.compile(open('./get_w.js',encoding='utf-8').read())

w = js.call('get_w')

print(w)