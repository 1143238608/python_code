const CryptoJS = require('crypto-js')

eu = function (e, t, time) {
    var n = t + e + time;
    return n = CryptoJS.MD5(n).toString()
}
tu = function (e) {
    var t = iu(e)
        , n = "";
    for (var i in t) {
        var r = nu(e[t[i]]);
        null != r && "" != r.toString() && (n += t[i] + "=" + r + "&")
    }
    return n
}
nu = function e(t) {
    var n;
    if (Array.isArray(t)) {
        for (var r in n = new Array,
            t) {
            var o = t[r];
            for (var i in o)
                null == o[i] ? delete t[r][i] : Array.isArray(t[r][i]) && e(t[r][i])
        }
        return n = t,
            JSON.stringify(n).replace(/^(\s|")+|(\s|")+$/g, "")
    }
    return n = t && t.constructor === Object ? JSON.stringify(t) : t
}
iu = function (e) {
    var t = new Array
        , n = 0;
    for (var i in e)
        t[n] = i,
            n++;
    return t.sort()
}
param = {
    "enterpriseAchievementQueryDto": [],
    "achievementQueryType": "and",
    "page": {
        "page": 2,
        "limit": 20,
        "field": "",
        "order": "desc"
    }
}
time = (new Date).getTime()
function get_sign(param,time){
    var sign = (param,
    t = tu(param),
    eu("ghaepVf6IhcHmgnk4NCTXLApxQkBcvh1", eu("mwMlWOdyM7OXbjzQPulT1ndRZIAjShDB", eu("ZuSj0gwgsKXP4fTEz55oAG2q2p1SVGKK", t, time), time), time))
    return sign;
}

// console.log(get_sign(param,1700964071132))
// console.log(CryptoJS.MD5('123456').toString())