var CryptoJS = require('crypto-js')
const {get} = require("jsdom/lib/jsdom/named-properties-tracker");
var hexcase = 0;
var b64pad = "";
var chrsz = 16;
function hex_md5(a) {
    return binl2hex(core_md5(str2binl(a), a.length * chrsz))
}
function core_md5(p, k) {
    p[k >> 5] |= 128 << ((k) % 32);
    p[(((k + 64) >>> 9) << 4) + 14] = k;
    var o = 1732584193;
    var n = -271733879;
    var m = -1732584194;
    var l = 271733878;
    for (var g = 0; g < p.length; g += 16) {
        var j = o;
        var h = n;
        var f = m;
        var e = l;
        o = md5_ff(o, n, m, l, p[g + 0], 7, -680976936);
        l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
        m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
        n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
        o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
        l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
        m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
        n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
        o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
        l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
        m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
        n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
        o = md5_ff(o, n, m, l, p[g + 12], 7, 1804660682);
        l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
        m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
        n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
        o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
        l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
        m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
        n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
        o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
        l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
        m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
        n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
        o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
        l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
        m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
        n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
        o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
        l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
        m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
        n = md5_gg(n, m, l, o, p[g + 12], 20, -1921207734);
        o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
        l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
        m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
        n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
        o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
        l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
        m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
        n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
        o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
        l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
        m = md5_hh(m, l, o, n, p[g + 3], 16, -722881979);
        n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
        o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
        l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
        m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
        n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
        o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
        l = md5_ii(l, o, n, m, p[g + 7], 10, 11261161415);
        m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
        n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
        o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
        l = md5_ii(l, o, n, m, p[g + 3], 10, -1894446606);
        m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
        n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
        o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
        l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
        m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
        n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
        o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
        l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
        m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
        n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
        o = safe_add(o, j);
        n = safe_add(n, h);
        m = safe_add(m, f);
        l = safe_add(l, e)
    }
    return Array(o, n, m, l)
}
function md5_cmn(h, e, d, c, g, f) {
    return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
}
function md5_ff(g, f, k, j, e, i, h) {
    return md5_cmn((f & k) | ((~f) & j), g, f, e, i, h)
}
function md5_gg(g, f, k, j, e, i, h) {
    return md5_cmn((f & j) | (k & (~j)), g, f, e, i, h)
}
function md5_hh(g, f, k, j, e, i, h) {
    return md5_cmn(f ^ k ^ j, g, f, e, i, h)
}
function md5_ii(g, f, k, j, e, i, h) {
    return md5_cmn(k ^ (f | (~j)), g, f, e, i, h)
}
function safe_add(a, d) {
    var c = (a & 65535) + (d & 65535);
    var b = (a >> 16) + (d >> 16) + (c >> 16);
    return (b << 16) | (c & 65535)
}
function bit_rol(a, b) {
    return (a << b) | (a >>> (32 - b))
}
function str2binl(d) {
    var c = Array();
    var a = (1 << chrsz) - 1;
    for (var b = 0; b < d.length * chrsz; b += chrsz) {
        c[b >> 5] |= (d.charCodeAt(b / chrsz) & a) << (b % 32)
    }
    return c
}
function binl2hex(c) {
    var b = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var d = "";
    for (var a = 0; a < c.length * 4; a++) {
        d += b.charAt((c[a >> 2] >> ((a % 4) * 8 + 4)) & 15) + b.charAt((c[a >> 2] >> ((a % 4) * 8)) & 15)
    }
    return d
}

function md5(word) {
    return CryptoJS.MD5(word).toString();
    //反转：
    //return CryptoJS.MD5(word).toString().split("").reverse().join("");
}
function x18d601daae4fa07d243a350188eb05bb(_0xa86599) {
  var _0x422d0a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var _0x4be5bb = _0x422d0a["length"];
  var _0x173dea = _0x422d0a["split"]("");
  var _0x3df30a = "",
    _0x3f1f6b,
    _0x18b098,
    _0x34bf43,
    _0x15ec16;
  for (var _0x46d37d = 0; _0x46d37d < _0xa86599["length"]; _0x46d37d++) {
    _0x3f1f6b = _0xa86599["charCodeAt"](_0x46d37d);
    _0x18b098 = _0x3f1f6b % _0x4be5bb;
    _0x3f1f6b = (_0x3f1f6b - _0x18b098) / _0x4be5bb;
    _0x34bf43 = _0x3f1f6b % _0x4be5bb;
    _0x3f1f6b = (_0x3f1f6b - _0x34bf43) / _0x4be5bb;
    _0x15ec16 = _0x3f1f6b % _0x4be5bb;
    _0x3df30a += _0x173dea[_0x15ec16] + _0x173dea[_0x34bf43] + _0x173dea[_0x18b098] + "ten";
  }
  return _0x3df30a;
}


function xd8f674c1f7b3dbc33c38f2741a0e0434(_0x492a8e) {
    var _0x2ee2a2 = "PXhw7UT1B0a9kQDKZsjIASmOezxYG4CHo5Jyfg2b8FLpEvRr3WtVnlqMidu6cN",
      _0x8f8d86 = "",
      _0xaea037 = "";
    for (var _0x1851ef = 0; _0x1851ef < _0x492a8e["length"]; _0x1851ef++) {
      var _0x1b5bf1 = _0x2ee2a2["indexOf"](_0x492a8e[_0x1851ef]);
      if (_0x1b5bf1 === -1) {
        if ("Bzepi" === "Bzepi") _0xaea037 = _0x492a8e[_0x1851ef];else {
          var _0x13eb4a = 9;
          for (_0x5aeb41 = _0x20f664 ^ _0x13eb4a; _0x13eb4a < _0x3cef86 | 9; _0x13eb4a > 0) {
            _0x3e450e["href"] = _0x14fc6e["href"] + "?" + _0x13eb4a;
          }
          ;
        }
      } else _0xaea037 = _0x2ee2a2[(_0x1b5bf1 + 3) % 62];
      var _0x323894 = _0x492a8e["charCodeAt"](_0x1851ef),
        _0x1d14fd = parseInt((_0x323894 + 1) * (_0x323894 + 1) % 62, 10),
        _0x4271ab = parseInt((_0x323894 - 1) * (_0x323894 - 1) % 62, 10);
      _0x8f8d86 += _0x2ee2a2[_0x1d14fd] + _0xaea037 + _0x2ee2a2[_0x4271ab] + _0x2ee2a2[0];
    }
    return _0x8f8d86;
  }

// var p = hex_md5('1711105954067RVJKVTAzRjEwMDJW01Kten01Jten01Kten01Lten01Cten01Jten01Cten02Pten01Dten01Jten01Eten02Sten01Cten02Uten01Jten02Qten02Rten01Cten01Kten01Ften01Kten01Gten01Iten01Eten02Sten01Dten01Iten02Rten01Eten01Jten02Qten01Eten');
// console.log(p);


function get_p(p1){
    // var p1 = JSON['stringify'](new Date()['getTime']());
    var p2_ = 'RVJKVTAzRjEwMDJW';
    var tmp = md5(p1 + p2_);
    console.log(tmp);
    var code = xd8f674c1f7b3dbc33c38f2741a0e0434(tmp);
    console.log(p1+p2_+code)
    return hex_md5(p1+p2_+code);
}

console.log(get_p('1711185863038'))
// 1711113395318
// 1711113274881





