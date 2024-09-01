import requests

# objection -g com.goldze.mvvmhabit explore --startup-command "android sslpinning disable"

headers = {
    "log-header": "I am the log request header.",
    "Host": "app4.scrape.center",
    "User-Agent": "okhttp/3.10.0"
}
url = "https://app4.scrape.center/api/movie/"
params = {
    "offset": "0",
    "limit": "10"
}
response = requests.get(url, headers=headers, params=params)

print(response.text)
