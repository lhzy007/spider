import requests
import execjs

headers = {
    "Accept": "text/html, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://data.10jqka.com.cn/market/zdfph/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0",
    "X-Requested-With": "XMLHttpRequest",

    "hexin-v": "A97inTvLOgSz527gZNF0SK5BL38ln6IZNGNW_YhnSiEcq3Ah8C_yKQTzpg9b",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
url = "https://data.10jqka.com.cn/market/zdfph/field/zdf/order/desc/ajax/1/free/1/"
with open('./4.js', 'r', encoding='utf-8') as f:
    js=f.read()
ctx = execjs.compile(js).call('main')
print(ctx)
headers['hexin-v']= ctx
response = requests.get(url, headers=headers)

print(response.text)
print(response)