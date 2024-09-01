import requests

# url = 'http://localhost:11434/api/chat'
#
# params = {
#     "model": "llama3",
#     "messages": [
#         {"role": "user", "content": "你是谁?"}
#     ]
# }
#
# response = requests.post(url=url, json=params).text
#
# print(response)

url = 'http://localhost:11434/api/generate'

params = {
    "model": "llama3",
    "prompt": "请将一个笑话,请使用中文回答",
    "stream": False
}

response = requests.post(url=url, json=params).text
print(response)


