window = global;

function get_i() {
    var _e = [
    97243,
    140753,
    "CSS1Compat",
    "",
    0,
    0,
    0,
    0,
    2560,
    361,
    2560,
    1392,
    "zh-CN",
    "zh-CN,zh",
    -1,
    1,
    24,
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    1,
    1,
    2560,
    1440,
    2560,
    1392,
    1,
    1,
    1,
    -1,
    "Win32",
    0,
    -8,
    -1,
    -1,
    "PDFViewer,internal-pdf-viewer,ChromePDFViewer,internal-pdf-viewer,ChromiumPDFViewer,internal-pdf-viewer,MicrosoftEdgePDFViewer,internal-pdf-viewer,WebKitbuilt-inPDF,internal-pdf-viewer",
    0,
    -1,
    1,
    16,
    -1,
    (new Date).getTime(),
    "0,0,2,32,0,0,55,1,52,2,5,5,8,194,195,214,392,393,393,0",
    300
]
    var e = encodeURIComponent(_e.join("!!"))
    console.log(e)
    return baseCompress(e, 16, function (e) {
        return toChart16(String.fromCharCode(e))
    })
};

function baseCompress(e, t, n) {
    if (null === e)
        return "";
    for (var r, a, o, i, s = {}, c = {}, l = "", d = 2, u = 3, g = 2, h = [], f = 0, v = 0, m = 0; m < e.length; m += 1)
        if (o = e.charAt(m),
        Object.prototype.hasOwnProperty.call(s, o) || (s[o] = u++,
            c[o] = !0),
            i = l + o,
            Object.prototype.hasOwnProperty.call(s, i))
            l = i;
        else {
            if (Object.prototype.hasOwnProperty.call(c, l)) {
                if (l.charCodeAt(0) < 256) {
                    for (r = 0; r < g; r++)
                        f <<= 1,
                            v === t - 1 ? (v = 0,
                                h.push(n(f)),
                                f = 0) : v++;
                    for (a = l.charCodeAt(0),
                             r = 0; r < 8; r++)
                        f = f << 1 | 1 & a,
                            v === t - 1 ? (v = 0,
                                h.push(n(f)),
                                f = 0) : v++,
                            a >>= 1
                } else {
                    for (a = 1,
                             r = 0; r < g; r++)
                        f = f << 1 | a,
                            v === t - 1 ? (v = 0,
                                h.push(n(f)),
                                f = 0) : v++,
                            a = 0;
                    for (a = l.charCodeAt(0),
                             r = 0; r < 16; r++)
                        f = f << 1 | 1 & a,
                            v === t - 1 ? (v = 0,
                                h.push(n(f)),
                                f = 0) : v++,
                            a >>= 1
                }
                0 === --d && (d = Math.pow(2, g),
                    g++),
                    delete c[l]
            } else
                for (a = s[l],
                         r = 0; r < g; r++)
                    f = f << 1 | 1 & a,
                        v === t - 1 ? (v = 0,
                            h.push(n(f)),
                            f = 0) : v++,
                        a >>= 1;
            0 === --d && (d = Math.pow(2, g),
                g++),
                s[i] = u++,
                l = String(o)
        }
    if ("" !== l) {
        if (Object.prototype.hasOwnProperty.call(c, l)) {
            if (l.charCodeAt(0) < 256) {
                for (r = 0; r < g; r++)
                    f <<= 1,
                        v === t - 1 ? (v = 0,
                            h.push(n(f)),
                            f = 0) : v++;
                for (a = l.charCodeAt(0),
                         r = 0; r < 8; r++)
                    f = f << 1 | 1 & a,
                        v === t - 1 ? (v = 0,
                            h.push(n(f)),
                            f = 0) : v++,
                        a >>= 1
            } else {
                for (a = 1,
                         r = 0; r < g; r++)
                    f = f << 1 | a,
                        v == t - 1 ? (v = 0,
                            h.push(n(f)),
                            f = 0) : v++,
                        a = 0;
                for (a = l.charCodeAt(0),
                         r = 0; r < 16; r++)
                    f = f << 1 | 1 & a,
                        v == t - 1 ? (v = 0,
                            h.push(n(f)),
                            f = 0) : v++,
                        a >>= 1
            }
            0 === --d && (d = Math.pow(2, g),
                g++),
                delete c[l]
        } else
            for (a = s[l],
                     r = 0; r < g; r++)
                f = f << 1 | 1 & a,
                    v == t - 1 ? (v = 0,
                        h.push(n(f)),
                        f = 0) : v++,
                    a >>= 1;
        0 == --d && (d = Math.pow(2, g),
            g++)
    }
    for (a = 2,
             r = 0; r < g; r++)
        f = f << 1 | 1 & a,
            v == t - 1 ? (v = 0,
                h.push(n(f)),
                f = 0) : v++,
            a >>= 1;
    for (; ;) {
        if (f <<= 1,
        v === t - 1) {
            h.push(n(f));
            break
        }
        v++
    }
    return h.join("")
}

function toChart16(e) {
    for (var t = "", n = e.length, r = 0; r < n; r++) {
        var a = e.charCodeAt(r).toString(16)
            , o = a.length;
        if (o < 4) {
            for (var i = 4 - o, s = "", c = 0; c < i; c++)
                s += "0";
            a = s + a
        } else
            4 < o && console.log("More than four", a);
        t += a
    }
    return t
}

function g(e, t) {
    for (var n = e.toString(2), r = "", a = n.length + 1; a <= t; a += 1)
        r += "0";
    return r + n
}

function d(e, t) {
    for (var n = [], r = 0, a = e.length; r < a; r += 1)
        n.push(t(e[r]));
    return n
}

function u(e, t) {
    var n = function (e) {
        for (var t = (e = d(e, function (e) {
            return e = Math.min(32767, e),
                e = Math.max(-32767, e)
        })).length, n = 0, r = []; n < t;) {
            for (var a = 1, o = e[n], i = Math.abs(o); !(t <= n + a) && e[n + a] === o && !(127 <= i || 127 <= a);)
                a += 1;
            1 < a ? r.push((o < 0 ? 49152 : 32768) | a << 7 | i) : r.push(o),
                n += a
        }
        return r
    }(e)
        , a = []
        , o = [];
    d(n, function (e) {
        var t, n, r = Math.ceil((t = Math.abs(e) + 1,
            n = 16,
            0 === t ? 0 : Math.log(t) / Math.log(n)));
        0 === r && (r = 1),
            a.push(g(r - 1, 2)),
            o.push(g(Math.abs(e), 4 * r))
    });
    var r, i, s = a.join(""), c = o.join(""), l = t ? d((r = function (e) {
        return 0 !== e && e >> 15 != 1
    }
        ,
        i = [],
        d(n, function (e) {
            r(e) && i.push(e)
        }),
        i), function (e) {
        return e < 0 ? "1" : "0"
    }).join("") : "";
    return g(32768 | n.length, 16) + s + c + l
}

var h = {
    mousemove: 0,
    mousedown: 1,
    mouseup: 2,
    scroll: 3,
    focus: 4,
    blur: 5,
    unload: 6,
    unknown: 7
};
var E = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-:@~*,.()[]/|";
function C(e) {
        return "number" != typeof e ? e : 32767 < e ? e = 32767 : e < -32767 ? e = -32767 : Math.round(e)
    }
function get_t(e) {
    for (var t = [], n = [], r = [], a = [], o = 0, i = e.length; o < i; o += 1) {
        var s = e[o]
            , c = s.length;
        t.push(s[0]),
            n.push(2 === c ? s[1] : s[2]),
        3 === c && (r.push(Math.round(s[1][0])),
            a.push(Math.round(s[1][1])))
    }
    var l = function (e) {
        for (var t = [], n = e.length, r = 0; r < n;) {
            for (var a = e[r], o = 0; !(16 <= o);) {
                var i = r + o + 1;
                if (n <= i)
                    break;
                if (e[i] !== a)
                    break;
                o += 1
            }
            r = r + 1 + o;
            var s = h[a];
            0 !== o ? (t.push(8 | s),
                t.push(o - 1)) : t.push(s)
        }
        for (var c = g(32768 | n, 16), l = "", d = 0, u = t.length; d < u; d += 1)
            l += g(t[d], 4);
        return c + l
    }(t) + u(n, !1) + u(r, !0) + u(a, !0)
        , d = l.length;
    return d % 6 != 0 && (l += g(0, 6 - d % 6)),
        function (e) {
            for (var t = "", n = e.length / 6, r = 0; r < n; r += 1)
                t += E.charAt(window.parseInt(e.slice(6 * r, 6 * (r + 1)), 2));
            return t
        }(l)
}

function click_gj(e) {
    var t = 0
        , n = 0
        , r = 0
        , a = 0
        , o = 0
        , i = [];
    if (e.length <= 0)
        return [];
    var y =300
    for (var s = e.length, c = s < y ? 0 : s - y; c < s; c += 1) {
        var l = e[c]
            , d = l.e;
        "scroll" === d ? i.push([d, [l.x - r, l.y - a], C(o ? l.t - o : 0)], r = l.x, a = l.y, o = l.t) : -1 < ["mousedown", "mousemove", "mouseup"].indexOf(d) ? (i.push([d, [l.x - t, l.y - n], C(o ? l.t - o : 0)]),
            t = l.x,
            n = l.y,
            o = l.t) : -1 < ["blur", "focus", "unload"].indexOf(d) && (i.push([d, C(o ? l.x - o : 0)]),
            o = l.x)
    }
    return i
}
function get_tt(gj){
    var _gj = click_gj(gj);
    return get_t(_gj);
}
// console.log(get_i('103892!!154838!!CSS1Compat!!!!0!!0!!0!!0!!2560!!247!!2560!!1392!!zh-CN!!zh-CN%2Czh!!-1!!1!!24!!Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F120.0.0.0%20Safari%2F537.36!!1!!1!!2560!!1440!!2560!!1392!!1!!1!!1!!-1!!Win32!!0!!-8!!-1!!-1!!PDFViewer%2Cinternal-pdf-viewer%2CChromePDFViewer%2Cinternal-pdf-viewer%2CChromiumPDFViewer%2Cinternal-pdf-viewer%2CMicrosoftEdgePDFViewer%2Cinternal-pdf-viewer%2CWebKitbuilt-inPDF%2Cinternal-pdf-viewer!!0!!-1!!1!!16!!-1!!1709347302241!!0%2C0%2C3%2C33%2C0%2C0%2C56%2C1%2C54%2C10%2C0%2C0%2C12%2C192%2C192%2C210%2C435%2C435%2C435%2C0!!300'));
// console.log(get_i())
console.log(get_i());
console.log(get_tt([
    {
        "x": 0,
        "y": 331,
        "t": 1709354751078,
        "e": "mousedown"
    },
    {
        "x": 0,
        "y": 331,
        "t": 1709354751117,
        "e": "mousemove"
    },
    {
        "x": 1,
        "y": 331,
        "t": 1709354751125,
        "e": "mousemove"
    },
    {
        "x": 2,
        "y": 331,
        "t": 1709354751133,
        "e": "mousemove"
    },
    {
        "x": 3,
        "y": 331,
        "t": 1709354751141,
        "e": "mousemove"
    },
    {
        "x": 6,
        "y": 331,
        "t": 1709354751149,
        "e": "mousemove"
    },
    {
        "x": 8,
        "y": 331,
        "t": 1709354751157,
        "e": "mousemove"
    },
    {
        "x": 10,
        "y": 331,
        "t": 1709354751165,
        "e": "mousemove"
    },
    {
        "x": 13,
        "y": 332,
        "t": 1709354751173,
        "e": "mousemove"
    },
    {
        "x": 17,
        "y": 332,
        "t": 1709354751181,
        "e": "mousemove"
    },
    {
        "x": 22,
        "y": 333,
        "t": 1709354751189,
        "e": "mousemove"
    },
    {
        "x": 28,
        "y": 333,
        "t": 1709354751197,
        "e": "mousemove"
    },
    {
        "x": 36,
        "y": 334,
        "t": 1709354751205,
        "e": "mousemove"
    },
    {
        "x": 44,
        "y": 334,
        "t": 1709354751213,
        "e": "mousemove"
    },
    {
        "x": 53,
        "y": 334,
        "t": 1709354751221,
        "e": "mousemove"
    },
    {
        "x": 63,
        "y": 334,
        "t": 1709354751230,
        "e": "mousemove"
    },
    {
        "x": 72,
        "y": 334,
        "t": 1709354751231,
        "e": "mouseup"
    }
]))

