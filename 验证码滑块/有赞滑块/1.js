var CryptoJS = require('crypto-js')

function aesEncrypt(cx,cy,randonStr) {
    var enc_data = {
    "cx": cx,
    "cy": cy,
    "scale": 0.5,
    "slidingEvents": [
    {
        "mx": 33,
        "my": 196,
        "ts": 1709035816860
    },
    {
        "mx": 1,
        "my": 0,
        "ts": 13
    },
    {
        "mx": 1,
        "my": 0,
        "ts": 7
    },
    {
        "mx": 1,
        "my": 0,
        "ts": 8
    },
    {
        "mx": 2,
        "my": 0,
        "ts": 9
    },
    {
        "mx": 1,
        "my": 0,
        "ts": 7
    },
    {
        "mx": 1,
        "my": 0,
        "ts": 8
    },
    {
        "mx": 2,
        "my": 0,
        "ts": 8
    },
    {
        "mx": 2,
        "my": 0,
        "ts": 9
    },
    {
        "mx": 4,
        "my": -1,
        "ts": 7
    },
    {
        "mx": 3,
        "my": 0,
        "ts": 9
    },
    {
        "mx": 3,
        "my": 0,
        "ts": 7
    },
    {
        "mx": 2,
        "my": 0,
        "ts": 9
    },
    {
        "mx": 3,
        "my": 0,
        "ts": 7
    },
    {
        "mx": 3,
        "my": 0,
        "ts": 9
    },
    {
        "mx": 3,
        "my": 0,
        "ts": 7
    },
    {
        "mx": 2,
        "my": 0,
        "ts": 8
    },
    {
        "mx": 2,
        "my": 0,
        "ts": 8
    },
    {
        "mx": 2,
        "my": 0,
        "ts": 9
    },
    {
        "mx": 2,
        "my": 0,
        "ts": 8
    },
    {
        "mx": 1,
        "my": 0,
        "ts": 8
    },
    {
        "mx": 2,
        "my": 0,
        "ts": 8
    },
    {
        "mx": 1,
        "my": 0,
        "ts": 7
    },
    {
        "mx": 1,
        "my": 0,
        "ts": 9
    },
    {
        "mx": 2,
        "my": 0,
        "ts": 7
    },
    {
        "mx": 2,
        "my": 0,
        "ts": 10
    }
]
    }
    var s = randonStr.split("").reverse().join("").split("@")
    console.log(s[0])
    console.log(s[1])
    var key = CryptoJS.enc.Utf8.parse(s[0]);
    var iv = CryptoJS.enc.Utf8.parse(s[1]);
    var srcs = JSON.stringify(enc_data);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Iso10126
    });
    return encrypted.toString();

}
console.log(aesEncrypt(63,27,'Cm0HgjsKfVGpgwZQ@Y24Bup1nvzd1DwXL'))