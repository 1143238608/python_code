import requests


def get_m3u8(video_url):
    headers = {
        "Referer": "https://app.nova-traffic-1688.com",
        "AuthDog": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTI0NDI5ODU3MjM1OTI3MDQzLWVlMzcyYzc3Y2M4MjBlMmYiLCJzaXRlIjoibWVtYmVyIiwicm9sZSI6MCwidmVyc2lvbiI6IjcuMTIiLCJzb3VyY2UiOiJhbmRyb2lkIiwiaXAiOiIyNy4xNi4xNzMuMjgiLCJzaG93X2lkIjoiUVVJLTc0MDI4MDAiLCJleHAiOjE3MDMwODM4MDYsImlhdCI6MTcwMzA3NjYwNiwiaXNzIjoiTm92YSIsIm5iZiI6MTcwMzA3NjYwNiwic3ViIjoiMTI0NDI5ODU3MjM1OTI3MDQzLWVlMzcyYzc3Y2M4MjBlMmYifQ.V70jijLyrL1Faqlh6NCJWNI9eGVGdOEEgOyzgzfoqoPSs-iX0bjGmUpBOPR4RMKS007jfQRuzm_rKsfxQLvh7g",
        "User-Agent": "com.polymerization.app.v3.application.MyApplication/1.6.0 (Linux;Android 10) ExoPlayerLib/2.18.1",
        "Accept-Encoding": "gzip",
        "Host": "uvudi-ori.mmboysblog.com",
        "Connection": "Keep-Alive"
    }
    response = requests.get(url = video_url, headers=headers).text
    print(response)


url = "https://tokyohot-api-aries-tra.njpdhb.com/api/v1/video"
# params = {
#     "current": "1",
#     "pageSize": "1200",
#     "actor_ids": "",
#     "category_ids": "",
#     "producer_id": "0",
#     "region_id": "37506951151616005",
#     "tag_ids": "",
#     "topic_ids": "",
#     "sortby": "created_at"
# }

params = {
    "current": "1",  #当前页数
    "pageSize": "20",  #每页展示个数
    "actor_ids": "",
    "category_ids": "91739597368721427",   # 46343677617897477
    "producer_id": "0",
    "region_id": "0",
    "tag_ids": "",
    "topic_ids": "",
    "sortby": "created_at"
}
headers = {
    "Accept-Language": "zh-CN,zh;q=0.8",
    "AuthDog": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTI0NDI5ODU3MjM1OTI3MDQzLWVlMzcyYzc3Y2M4MjBlMmYiLCJzaXRlIjoibWVtYmVyIiwicm9sZSI6MCwidmVyc2lvbiI6IjcuMTIiLCJzb3VyY2UiOiJhbmRyb2lkIiwiaXAiOiIyNy4xNi4xNzMuMjgiLCJzaG93X2lkIjoiUVVJLTc0MDI4MDAiLCJleHAiOjE3MDMwODM4MDYsImlhdCI6MTcwMzA3NjYwNiwiaXNzIjoiTm92YSIsIm5iZiI6MTcwMzA3NjYwNiwic3ViIjoiMTI0NDI5ODU3MjM1OTI3MDQzLWVlMzcyYzc3Y2M4MjBlMmYifQ.V70jijLyrL1Faqlh6NCJWNI9eGVGdOEEgOyzgzfoqoPSs-iX0bjGmUpBOPR4RMKS007jfQRuzm_rKsfxQLvh7g",
    "user-agent": "okhttp/4.10.0",
    "Host": "tokyohot-api-aries-tra.njpdhb.com",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip"
}
response = requests.get(url=url, headers=headers, params=params).json()
print(response)
for video_info in response['data']:
    video_url = 'https://uvudi-ori.mmboysblog.com' + video_info['highres_url']
    video_title = video_info['title']
    print(video_url,video_title)
    # get_m3u8(video_url)
