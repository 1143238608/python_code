function r(n, t) {
    if (n.includes)
        return n.includes(t);
    for (var e = 0, r = n[function (n) {
        if (!n)
            return "";
        var t = [];
        n = n.split(",");
        for (var e = 0; e < n.length; e++)
            t.push(String.fromCharCode(parseInt(n[e], 16)));
        return t.join("")
    }("6c,65,6e,67,74,68")]; e < r; e++)
        if (n[e] === t)
            return !0;
    return !1
}

function hy_pic(n) {
    for (var t = "gth", o = [], i = 0; i < n.length; i++) {
        var a = n.charCodeAt(i);
        if (32 === i)
            break;
        for (; r(o, a % 32);)
            a++;
        o.push(a % 32)
    }
    return o;
}

function je(e) {
    return String['fromCharCode']['apply'](String, e)
}


function me(n) {
	return [h(n, 8), h(n, 0)]
}
function h(n, i, a) {
	return n >> i & Math['pow'](2, 8) - 1
}


function app(o, i) {
    var a = je([o]['concat'](me(i['length'])));
    return a;
}
console.log(app(2,'12122131231'))

// console.log(hy_pic("83e6edcc82ac48d698df1d33cc43dce1"))