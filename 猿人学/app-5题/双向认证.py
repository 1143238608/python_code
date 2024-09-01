from requests.packages import urllib3
import requests_pkcs12

urllib3.disable_warnings()


def get_data():
    num = 0
    for i in range(1, 101):
        url = 'https://180.76.60.244:18443/api/app5'

        headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "User-Agent": "okhttp/3.14.9"
        }

        data = {
            'page': i
        }
        rsp = requests_pkcs12.post(url, headers=headers, data=data, pkcs12_filename='1.p12',
                                   pkcs12_password='roysue',verify=False)

        data = rsp.json()
        print(data)
        for value in data['data']:
            num += int(value['value'])
        print('num=>', num)


if __name__ == '__main__':
    get_data()


