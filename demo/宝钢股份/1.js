var CryptoJS = require('crypto-js')

function l(e) {
    for (var n = [], t = Array.of("0", "1", "2", "3", "4", "5", "6", "7", "8", "9"), a = 0; a < e; a++) {
        var c = Math.floor(10 * Math.random());
        n[a] = t[c]
    }
    return n.join("")
}

function s() {
    return parseInt((new Date).getTime() / 1e3)
}

function MD5(word) {
    return CryptoJS.MD5(word).toString();
    //反转：
    //return CryptoJS.MD5(word).toString().split("").reverse().join("");
}

function HmacSHA1(word, key) {
    return CryptoJS.HmacSHA1(word, key).toString(CryptoJS.enc.Hex);
}

function main(method,url,data) {
    var e = {
        "method": method,
        "baseURL": "https://cmsauth.baowugroup.com",
        "url": url,
        headers: {
            "common": {
                "Accept": "application/json, text/plain, */*"
            },
            "delete": {},
            "get": {},
            "head": {},
            "post": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "put": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "patch": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "x-user": "0/56f5cff3cad14853a44782c2c689ab2a",
            "x-nonce": "8270284644",
            "x-date": 1709960794,
            "Content-Md5": ""
        },
        data: data
    }
    var n = l(10)
        , t = s()
        , a = MD5(JSON.stringify(e.data))
        , c = ""
        , o = "0/56f5cff3cad14853a44782c2c689ab2a"
        , i = "13ade1de1eff43ffb821735f352a4148";
    console.log(JSON.stringify(e.data))
    console.log(a)
    e.headers["x-user"] = o,
        e.headers["x-nonce"] = n,
        // e.headers["x-nonce"] = "3522318038",
        e.headers["x-date"] = t,
        // e.headers["x-date"] = 1709965851,
        e.headers["Content-Md5"] = a,
        c = "".concat(e.method.toUpperCase(), "\n").concat(e.url.replace(e.baseURL, ""), "\nx-user:").concat(o, "\nx-nonce:").concat(n, "\nx-date:").concat(t, "\nContent-Md5:").concat(a, "\n");
    console.log(c)
    var u = HmacSHA1(c, i).toString().toUpperCase();
    e.headers["x-signature"] = u;
    return e;
}

console.log(main('post','/v1/web/api/content/list?domainId=12',{"pageNo": 0, "pageSize": 10, "condition": {"nodeId": 1198}}))

// POST\n/v1/web/api/content/list?domainId=12\nx-user:0/56f5cff3cad14853a44782c2c689ab2a\nx-nonce:3522318038\nx-date:1709965851\nContent-Md5:2acd3a78e61b299fcc54933e41a723cc\n
// POST\n/v1/web/api/content/list?domainId=12\nx-user:0/56f5cff3cad14853a44782c2c689ab2a\nx-nonce:4665906858\nx-date:1709965958\nContent-Md5:dade43e79e7f7e2da609a6a9adb28927\n