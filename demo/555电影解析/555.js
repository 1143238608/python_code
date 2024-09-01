var CryptoJS = require('crypto-js');

navigator = {
    userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
}
server_url = 'https://player.ddzyku.com:3653/api';

url = '6Ryg0jYD5w5eiXTmu7Zs14LvsGpTuoo00oPKvOH04NGHM6zzAWINFxGZefo000o0pX9yJARCE1f4lcsN4rnYJIm5cayx3AO0O0OO0O0O'


function encryptPackData(url) {
    let [key, iv] = [CryptoJS["enc"]["Utf8"]["parse"]("55cc5c42a943afdc"), CryptoJS["enc"]["Utf8"]["parse"]("d11324dcscfe16c0")];
    return CryptoJS["AES"]["encrypt"](CryptoJS["enc"]["Utf8"]["parse"](url), key, {
      "iv": iv,
      "mode": CryptoJS["mode"]["CBC"],
      "padding": CryptoJS["pad"]["Pkcs7"]
    })["ciphertext"]["toString"]()["toUpperCase"]();
}

function decryptPackData(video_data) {
    let [key, iv] = [CryptoJS["enc"]["Utf8"]["parse"]("55cc5c42a943afdc"), CryptoJS["enc"]["Utf8"]["parse"]("d11324dcscfe16c0")];
    return CryptoJS["AES"]["decrypt"](CryptoJS["enc"]["Base64"]["stringify"](CryptoJS["enc"]["Hex"]["parse"](video_data)), key, {
      "iv": iv,
      "mode": CryptoJS["mode"]["CBC"],
      "padding": CryptoJS["pad"]["Pkcs7"]
    })["toString"](CryptoJS["enc"]["Utf8"]);
  }
function get_data(){
    var data =  {
        "app_key": CryptoJS["MD5"]("www.555dy.com")["toString"](),
        "client_key": CryptoJS["MD5"](navigator["userAgent"])["toString"](),
        "request_token": CryptoJS["MD5"]("https://zyz.sdljwomen.com")["toString"](),
        "access_token": CryptoJS["MD5"]((server_url + "/get_play_url")["replace"]("http:", "")["replace"]("https:", ""))["toString"]()
    }
    return data;
}
function get_headers(url){
    let _0x102cd8 = {
        "X-PLAYER-TIMESTAMP": (Math["round"](new Date() / 1000))+'',
        "X-PLAYER-SIGNATURE": CryptoJS["HmacSHA256"](encryptPackData(url), CryptoJS["MD5"](server_url + "GET" + Math["round"](new Date() / 1000) + "55ca5c4d11424dcecfe16c08a943afdc")["toString"]())["toString"](),
        "X-PLAYER-METHOD": "GET",
        "X-PLAYER-PACK": encryptPackData(url)
    };
    return _0x102cd8;
}
console.log(encryptPackData(url))
console.log(decryptPackData('1E0E579748746E951DEDAD2DDED63EA0736760C0C83FA3F01101B50C8ED349618016C253349CA5309FDD5E8706584A99FAF86E1FE87676FCDF46F8D58D37F61014D396747C2E1C6C629DD7A3E1744BE60DDBEFFFAFA3A753696D83B2C524CD23'))

