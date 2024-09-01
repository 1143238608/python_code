var CryptoJS = require('crypto-js')


function DES_Encrypt(word,_key) {
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var key = CryptoJS.enc.Utf8.parse(_key);
    var encrypted = CryptoJS.DES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.ZeroPadding
    });
    return encrypted.toString();
}

// console.log(DES_Encrypt('0.12333333333333334'))