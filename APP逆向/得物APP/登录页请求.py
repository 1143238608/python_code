import time

import requests


headers = {
    "app_build": "5.25.1.10",
    # "ipvx": "27.19.173.68",
    "cookieToken": "",
    "webua": "Mozilla/5.0 (Linux; Android 10; Pixel 2 Build/QQ3A.200805.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.79 Mobile Safari/537.36/duapp/5.25.1(android;10)",
    "duplatform": "android",
    "appId": "duapp",
    "duchannel": "pp",
    "humeChannel": "",
    "duv": "5.25.1",
    "duloginToken": "",
    "dudeviceTrait": "Pixel+2",
    "dudeviceBrand": "google",
    # "timestamp": t,
    "shumeiid": "20240421194120598f0593c241885149059a269760f934d1a041743f4eea5d",
    "User-Agent": "duapp/5.25.1(android;10)",
    "X-Auth-Token": "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTQxMzU3NTEsImV4cCI6MTc0NTY3MTc1MSwiaXNzIjoiMWIwY2M0NzYyNGE5ODBkYSIsInN1YiI6IjFiMGNjNDc2MjRhOTgwZGEiLCJ1dWlkIjoiMWIwY2M0NzYyNGE5ODBkYSIsInVzZXJJZCI6MjIzMzE4OTY1MiwidXNlck5hbWUiOiLlvpfniallci1ZOVU0VjVWNyIsImlzR3Vlc3QiOnRydWV9.WhTF_K4bnIsxrG5gawZcFV3Q9ayWpnJw1f2slPumXdCrTJMGLEWftr4PIWB32yGTfdR7Ig3PrmO5B66S5MTTkfzp1ZNaJM_ButtblgnAKybfL63oybwXrFDx-MTKnpi-wZalS0zFbN2BlYog5LrQxEjLyLLy74MdVhTXDaAxTl8DgHZd2wvReXayq5HVvrftHIDXWVAuOISzWj7Cb2b7bOfaKnynsxGXJJjssnOKFk0Yc56OVNqTqeBwYrN0JwWLb6farIpL7lXPKYfOO-ocqVxWOU0_pS8WZ86KOCazKhA-N8h2kO8dX4i7gHAllFltpMJcARehvP5j9eRdxlBTrA",
    # "isRoot": "0",
    # "emu": "0",
    # "isProxy": "0",
    "SK": "9OppNS95vnuLHu9eaxpMeVx1YvRHdiAE1tZInozEx49JzY3llNAseLregGfRpkFW2soXZ5ICBiK00rvsxmhs8B0naf1z",
    "edk": "6C7D61656D61352E6C7D7D7D616C35396A386B6B3C3F3E3A3C693130386C692E6769616C35",
    "dps": "1",
    "sks": "0,adw2",
    "skc": "AbSqXmhFh9pMqAzsE3e94",
    "rtk": "kOsMXatf5yKLMNNjETqgWKtRRB33",
    # "Content-Type": "application/json; charset=utf-8",
    # "Transfer-Encoding": "chunked",
    "Host": "app.dewu.com",
    "Connection": "Keep-Alive",
    # "Accept-Encoding": "gzip"
}
params = {
    "cipherParam": "userName",
    "countryCode": '86',
    "loginToken": "",
    # "newSign": "c1872c0025046dbb06c9d144c7cb71f7",
    "password": "ca8f119a27ec17f98b463807cd0b6b62",
    "platform": "android",
    "timestamp": "1714183805087",
    "type": "pwd",
    "userName": "a9b71b7fecff5ea7b3a9c5dc1602fbae_1",
    "uuid": "",
    "v": "5.25.1"
}


def get_newSign(t):
    params['timestamp'] = t
    response = requests.get(url='http://localhost:8080/getnewSign', headers=headers, params=params)

    # print(response.url)
    print(response.text)
    return response.text


def login(t):
    url = 'https://app.dewu.com/api/v1/app/user_core/users/unionLogin'
    newSign = get_newSign(t)
    params['newSign'] = newSign
    headers['timestamp'] = t
    params['timestamp'] = t
    response = requests.post(url=url,headers=headers,data=params).text
    print(response)


if __name__ == '__main__':
    t = str(int(time.time() * 1000))
    login(t)
