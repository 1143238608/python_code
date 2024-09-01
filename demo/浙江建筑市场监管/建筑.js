var CryptoJS = require('crypto-js')

var key = CryptoJS.enc.Utf8.parse("255B675CDF21B04F923992E0E9F4A498");
var iv = CryptoJS.enc.Utf8.parse("255B675CDF21B04F");

function AES_Encrypt(word) {
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}