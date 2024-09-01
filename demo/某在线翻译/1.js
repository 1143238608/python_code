var CryptoJS = require('crypto-js')

function MD5_Encrypt(word) {
    var _word = '6key_web_new_fanyi6dVjYLFyzfkFkk'+word;
    var en_word = CryptoJS.MD5(_word).toString();

    return AES_Encrypt(en_word.substring(0,16));
    //反转：
    //return CryptoJS.MD5(word).toString().split("").reverse().join("");
}


function AES_Encrypt(word) {
    var key = CryptoJS.enc.Utf8.parse("L4fBtD5fLC9FQw22");
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

function AES_Decrypt(word) {
    var key = CryptoJS.enc.Utf8.parse("aahc3TfyfCEmER33");
    var srcs = word;
    var decrypt = CryptoJS.AES.decrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypt.toString(CryptoJS.enc.Utf8);
}

console.log(MD5_Encrypt('computer'));