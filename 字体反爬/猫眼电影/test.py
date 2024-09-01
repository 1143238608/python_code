import re

s = 'url("//s3plus.meituan.net/v1/mss_73a511b8f91f43d0bdae92584ea6330b/font/432017e7.woff");}'
print(re.findall('url\("([^"]+)"\)', s))