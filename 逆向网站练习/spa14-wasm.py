import pywasm, time
import requests

Func = pywasm.load('Wasm.wasm')
print(Func)


def get_res(page):
    t = int(time.time())
    sign = Func.exec('encrypt', [10 * (page - 1), t])

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    }
    url = "https://spa14.scrape.center/api/movie/"
    params = {
        "limit": "10",
        "offset": str(10 * (page - 1)),
        "sign": sign
    }
    print(str(10 * (page - 1)))
    response = requests.get(url, headers=headers, params=params)

    print(response.text)


if __name__ == '__main__':
    for i in range(1, 12):
        get_res(page=i)
