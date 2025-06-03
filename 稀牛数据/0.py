import requests
import json
import execjs
import time
headers = {
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://www.xiniudata.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.xiniudata.com/project/lib",
    "sec-ch-ua": "\"Chromium\";v=\"136\", \"Microsoft Edge\";v=\"136\", \"Not.A/Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"
}
cookies = {
    # "Hm_lvt_42317524c1662a500d12d3784dbea0f8": "1746322663",
    # "HMACCOUNT": "84CD03E0AECCAE5A",
    "btoken": "W5CRCSSJBMPR9XTOE7SZSHBS7KY4A990",
    "gr_user_id": "720a522d-8b52-4882-b8ec-3ad503387645",
    "utoken": "V7A0US52QEWPV6AVRUG8U1TMMFD5693B",
    "username": "%E5%86%85%E6%A0%BC%E5%A4%AB%E4%BA%BA",
    "zg_did": "%7B%22did%22%3A%20%2219698f1796c1c33-0f18a0674580cd8-4c657b58-146d15-19698f1796d2df3%22%7D",
    "zg_dd1a638909a643bd90c6262bec3be707": "%7B%22sid%22%3A%201746322684272%2C%22updated%22%3A%201746323033378%2C%22info%22%3A%201746322684273%2C%22superProperty%22%3A%20%22%7B%7D%22%2C%22platform%22%3A%20%22%7B%7D%22%2C%22utm%22%3A%20%22%7B%7D%22%2C%22referrerDomain%22%3A%20%22cn.bing.com%22%2C%22landHref%22%3A%20%22https%3A%2F%2Fm.xiniudata.com%2Fpro%22%7D",
    "export_notice": "true",
    "Hm_lpvt_42317524c1662a500d12d3784dbea0f8": str(int(time.time()))
}
url = "https://www.xiniudata.com/api/search3/company/search_company_for_lib"
with open("1.js", "r", encoding="utf-8") as f:
    js = f.read()
ctx = execjs.compile(js).call("first_data",1)
data = {
    "payload": ctx['f'],
    "sig": ctx['p'],
    "v": 1
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)
s=response.json()['d']
# print('SSSSS',s)
print(response)
ctx2 = execjs.compile(js).call("second_data",s)
# print(ctx2)
url2 = "https://www.xiniudata.com/api2/service/x_service/person_company4_list/list_companies4_list_by_codes"
data2 = {
    "payload": ctx2['f'],
    "sig": ctx2['p'],
    "v": 1
}
data2 = json.dumps(data2, separators=(',', ':'))
response2 = requests.post(url2, headers=headers, cookies=cookies, data=data2)
print(response2)
ctx3 = execjs.compile(js).call("parse",response2.json()['d'])
print(ctx3)
