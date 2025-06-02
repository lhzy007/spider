import requests
import execjs
import json
headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://music.163.com/",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://music.163.com/",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0"
}
cookies = {
    "NMTID": "00OpeS2TppXFifsCUzvqo6b55XVi8IAAAGUjcXeTA",
    "__remember_me": "true",
    "_iuqxldmzr_": "32",
    "_ntes_nnid": "8d0b3608d212a9d34c68e171c56504fb,1738495640867",
    "_ntes_nuid": "8d0b3608d212a9d34c68e171c56504fb",
    "ntes_kaola_ad": "1",
    "WEVNSM": "1.0.0",
    "WNMCID": "tvsxra.1738495642581.01.0",
    "WM_TID": "g%2FMv5hi5wbFBVQUEERLFZqn4xoqxkslU",
    "ntes_utid": "tid._.S912F90XAp5EAgEBBVKUhVvXcTCafa7A._.0",
    "sDeviceId": "YD-8a%2FOZ4a2eLpBQ0VAVUbEfDaAmroXiwiC",
    "__snaker__id": "fbpk3ym7EGT8Fyuy",
    "__csrf": "000990fa4e88bf73beb9a4327033ebfe",
    "gdxidpyhxdE": "nYx4D4M3ouvk%2BNku%2FbGjMCKRJUwxRk79IUJD83%5CznJZp385QNxke3KwGbto7w9bwTiHBOYvT0blLuPvdUbQ1kijZBSDjtVYwgNK7tQmmZAlSjKEv%2B554T0ItPHbobX7m5wxSu16odkvLsGNpobD4fti%5CHrOn7rtRPw6VlIAS5gCMq3v1%3A1744439510239",
    "MUSIC_U": "00260D8DF33CDAADCB7C51518B9AD43866674757214C148666689CC00231BEF559752FEE6663439F6CD56A535A818FDEA0BFA6379AE2445482D63932001407EB53A6BAE156DE11BC6F2B3C3920CEECFB450A51507A27B38E8DB99EF0669EAAA545A335D7D78E24A662F8564024EF146A716580C86BC0DC41861DC380D0AB0D6F4D77F2FFF7D00CA1D1407B8A539FFFE6E35A298FABD6709CC1CCC26E07CEBCC69E53E8DF22FC7FBCFA10566FBA5889FADB14C8E8B8FF2D484E9FBA36F40F898E5C66CF88DD16E6611867419F0B732B28704DFB0480CF43EC8E66874620DDB9F839F52B293F14860B44BA2DB2D27832563FC5A58AC08157A9CFFC566D8586EF9F8378141BDEEDF4A4C392EB6CB47A8EB68594ADC8C6B1C0AE9F91672874FCEAD895A420E0D2B3BAA61BB13BCF8D2B2FE36E67C770934845179C2FC8EBABE7BDB98BAA36114D3C8D8056347EDD11514FDF1C8AA3AD423C87CF0174843E172D3C38E2C2C1681E523A3D763459D1B6E3E648DB",
    "WM_NI": "5LM0o1eW7g9DDHC0aNNg0bkOkO%2B9s1Wry8b1KpeRwQCddebpp4WR4b3Qbw71wgKDLAwwe99J3bSbOVeoifFFDF1pVLOrPw63EBsQbAYu02qhJcr85OeGHyb9xSMMxPq8SEo%3D",
    "WM_NIKE": "9ca17ae2e6ffcda170e2e6ee90e850b297bcb3c54696ef8fa7c45b829a8aaddb6b97eebd85fc7997afbc82f62af0fea7c3b92af79483d1ee3ba789f988bc5088988dd1e4468eb90083ea45a991e5daf23b95aeb7d9e13b89b0abb3f65b81bcac86e17cb4ec99b3b76af18fae98b63bb5b985a5cf4bb5a9abdabc42f1be9d83ce5ea7b1a787c54e889aff91d5488daea098b539879ebdb2e14b9bab00d3f4648abdbed9b845a799889ae133bc8d83aefb5cb3e89da6ee37e2a3",
    "JSESSIONID-WYYY": "iSn%5CF%2FwnJOiFmxJgTqhRf4rf1GBAVvE2jFHU2fW1bbZ7qTPCsaAU1oiZpsw6Bk8peCYxkNgn6nuwt%5CFfEc3Fr2AAvGgCKhRy4HwGwgq7IzyK5VyYx7aWyOw1QvD%5C7NRtGKha3zyIBfDOw2E7EWImCWGq92IYOezz%5C%2FTsTkOmByiRQOoS%3A1744546409111",
    "playerid": "90452974"
}
params = {
    "csrf_token": "129481baa4bdeba1c8fd391422ac9dd5"
}
def get_id(xx):
    with open("1.1.js", "r", encoding="utf-8") as f:
        jscode= f.read()
    i=0
    ctx=execjs.compile(jscode).call("asrsea",xx,i)
    data = {
        "params": ctx['res1'],
        "encSecKey": ctx['result']
    }
    url = "https://music.163.com/weapi/cloudsearch/get/web"
    print(data)
    response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)
    print(response.json())
    # for i in response.json()["result"]["songs"]:
    #     print(i['name'])
    #     get_sing(i['id'])
def get_sing(id):
    with open("1.2.js", "r", encoding="utf-8") as f:
        jscode= f.read()
    ctx=execjs.compile(jscode).call("asrsea",id)
    url='https://music.163.com/weapi/song/enhance/player/url/v1'
    data = {
        "params": ctx['res1'],
        "encSecKey": ctx['result']
    }
    response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)
    if response.json()['data'][0]['url']==None:
        print('无版权')
    else:
        print(response.json()['data'][0]['url'])
if __name__ == '__main__':
    a=input('输入歌名或者歌手名：')
    # a='周杰伦'
    print('正在搜索 ',a,' 的歌曲')
    get_id(a)