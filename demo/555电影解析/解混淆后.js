;
window["setInterval"](function () {
  function _0x2baa7d(_0x3c3fc9, _0x1359a0) {
    return _0x3c3fc9 + _0x1359a0;
  }
  if (typeof _0xod9 == _0x2baa7d("undefi", "ned") && "‮" === "‮" || _0x2baa7d(_0xod9, "‮") != _0x2baa7d(_0x2baa7d(_0x2baa7d(_0x2baa7d("jsj", "iam"), "i.com.v"), _0x2baa7d("jsj", "iam")["length"]), "‮")) {
    var _0x2e1e69 = [];
    while (_0x2e1e69["length"] > -1) {
      _0x2e1e69["push"](_0x2e1e69["length"] ^ 2);
    }
  }
  _0x1a0b31();
}, 2000);
let _0x296458 = null;
let _0x42a497 = "",
  _0x22e093 = "",
  _0x58ec25 = "",
  _0x2d278e = "",
  _0x2e8ed4 = "",
  _0x4ee278 = true;
let _0x3dbe8c = {
  "getPlayUrl"(_0x5ad82) {
    if (!_0x5ad82) {
      return;
    }
    _0x42a497 = _0x5ad82;
    _0x2d278e = CryptoJS["MD5"](_0x42a497)["toString"]();
    if (_0x296458 != null) {
      _0x296458["video"]()["pause"]();
    }
    $("#loading")["show"]();
    $(".app")["hide"]();
    $("#error")["hide"]();
    this["createRequest"](_0x5ad82)["then"](_0x2bc911 => {
      try {
        _0x2bc911 = JSON["parse"](_0x2bc911);
        if (_0x2bc911["code"] !== 200) {
          _0x2bc911 = false;
        }
      } catch (_0x356a6e) {
        _0x2bc911 = false;
      }
      if (!_0x2bc911) {
        return this["showError"](true);
      } else {
        this["initPlayerInstance"](_0x2bc911["data"]["url"]);
      }
    });
  },
  "toNext"() {
    if (!_0x4ee278) {
      _0x296458["showToast"]({
        "message": "没有更多剧集了~",
        "duration": 5000
      });
      return;
    }
    if (_0x296458 != null) {
      _0x296458["video"]()["pause"]();
    }
    $("#loading")["show"]();
    $(".app")["hide"]();
    $("#error")["hide"]();
    top["postMessage"]({
      "type": "next"
    }, "*");
  },
  "createRequest"(_0x1510a7) {
    return new Promise(_0x570628 => {
      let _0x102cd8 = {
        "X-PLAYER-TIMESTAMP": Math["round"](new Date() / 1000),
        "X-PLAYER-SIGNATURE": CryptoJS["HmacSHA256"](this["encryptPackData"](_0x1510a7), CryptoJS["MD5"](server_url + "GET" + Math["round"](new Date() / 1000) + "55ca5c4d11424dcecfe16c08a943afdc")["toString"]())["toString"](),
        "X-PLAYER-METHOD": "GET",
        "X-PLAYER-PACK": this["encryptPackData"](_0x1510a7)
      };
      $["ajax"]({
        "url": server_url + "/get_play_url",
        "data": {
          "app_key": CryptoJS["MD5"]("www.555dy.com")["toString"](),
          "client_key": CryptoJS["MD5"](navigator["userAgent"])["toString"](),
          "request_token": CryptoJS["MD5"]("https://zyz.sdljwomen.com")["toString"](),
          "access_token": CryptoJS["MD5"]((server_url + "/get_play_url")["replace"]("http:", "")["replace"]("https:", ""))["toString"]()
        },
        "method": "GET",
        "headers": _0x102cd8,
        "success": _0x580efc => {
          return _0x570628(this["decryptPackData"](_0x580efc));
        },
        "error": _0x2121b1 => {
          return _0x570628(false);
        }
      });
    });
  },
  "getKeys"() {
    return [CryptoJS["enc"]["Utf8"]["parse"]("55cc5c42a943afdc"), CryptoJS["enc"]["Utf8"]["parse"]("d11324dcscfe16c0")];
  },
  "decryptPackData"(_0x671add) {
    let [_0x51c696, _0x48abff] = this["getKeys"]();
    return CryptoJS["AES"]["decrypt"](CryptoJS["enc"]["Base64"]["stringify"](CryptoJS["enc"]["Hex"]["parse"](_0x671add)), _0x51c696, {
      "iv": _0x48abff,
      "mode": CryptoJS["mode"]["CBC"],
      "padding": CryptoJS["pad"]["Pkcs7"]
    })["toString"](CryptoJS["enc"]["Utf8"]);
  },
  "encryptPackData"(_0x16eb06) {
    let [_0x2a1d3b, _0x56663e] = this["getKeys"]();
    return CryptoJS["AES"]["encrypt"](CryptoJS["enc"]["Utf8"]["parse"](_0x16eb06), _0x2a1d3b, {
      "iv": _0x56663e,
      "mode": CryptoJS["mode"]["CBC"],
      "padding": CryptoJS["pad"]["Pkcs7"]
    })["ciphertext"]["toString"]()["toUpperCase"]();
  },
  "showError"(_0x1bc223) {
    if (_0x1bc223) {
      $("#loading")["hide"]();
      $("#error")["show"]();
      $(".app")["hide"]();
    } else {
      $("#loading")["hide"]();
      $("#error")["hide"]();
      $(".app")["show"]();
    }
  },
  "initPlayerInstance"(_0x2d7548) {
    if (_0x296458) {
      _0x296458["toggleControls"]();
      _0x296458["destory"]();
    }
    var _0x29d147 = false;
    let _0xbeb940 = {
      "container": ".app",
      "themeColor": "#FF6429",
      "src": _0x2d7548,
      "title": _0x22e093,
      "showMiniProgress": false,
      "poster": "",
      "autoplay": true,
      "initFullFixed": true,
      "dragSpotShape": "circula",
      "lang": "zh-cn",
      "volume": "1",
      "showLoading": true,
      "custom": {
        "footerControls": [{
          "slot": "nextMedia",
          "position": "left",
          "tooltip": "下一集",
          "oftenShow": true,
          "click": _0x4ada12 => {
            this["toNext"]();
          },
          "style": {}
        }]
      },
      "videoAttribute": [{
        "attrKey": "webkit-playsinline",
        "attrValue": "webkit-playsinline"
      }, {
        "attrKey": "playsinline",
        "attrValue": "playsinline"
      }, {
        "attrKey": "x5-video-player-type",
        "attrValue": "h5-page"
      }],
      "plugins": [new MuiPlayerDesktopPlugin({
        "leaveHiddenControls": true,
        "customSetting": [{
          "functions": "画面比例",
          "model": "select",
          "show": true,
          "zIndex": 0,
          "childConfig": [{
            "functions": "默认",
            "fit": "default",
            "selected": true
          }, {
            "functions": "裁剪"
          }, {
            "functions": "填充"
          }],
          "onToggle": function (_0x2c6854, _0x4eb4f1, _0x4d56f5) {
            if (_0x2c6854["functions"] === "裁剪") {
              _0x296458["video"]()["style"]["objectFit"] = "cover";
            } else if (_0x2c6854["functions"] === "填充") {
              _0x296458["video"]()["style"]["objectFit"] = "fill";
            } else {
              _0x296458["video"]()["style"]["objectFit"] = "contain";
            }
            _0x4eb4f1();
          }
        }, {
          "functions": "画质增强",
          "model": "switch",
          "show": true,
          "zIndex": 0,
          "onToggle": (_0x1b3fb4, _0x21c096, _0x46325f) => {
            if (!_0x29d147) {
              _0x296458["video"]()["style"]["filter"] = "contrast(1.01) brightness(1.05) saturate(1.1)";
            } else {
              _0x296458["video"]()["style"]["filter"] = "none";
            }
            _0x29d147 = !_0x29d147;
            _0x21c096();
          }
        }],
        "fullScaling": 1,
        "contextmenu": []
      }), new MuiPlayerMobilePlugin({
        "key": "01I01I01H01J01L01K01J01I01K01J01H01D01J01G01E",
        "showMenuButton": true
      })]
    };
    if (_0x2d7548["indexOf"](".m3u8") !== -1) {
      _0xbeb940["parse"] = {
        "type": "hls",
        "loader": Hls,
        "config": {
          "debug": false
        }
      };
    }
    _0x296458 = new MuiPlayer(_0xbeb940);
    this["initListen"]();
  },
  "initListen"() {
    _0x296458["on"]("ready", () => {
      this["showError"](false);
      if (!_0x4ee278) {
        $("[slot=nextMedia]")["hide"]();
      }
      let _0x1c78c9 = 0;
      _0x296458["video"]()["addEventListener"]("loadedmetadata", () => {
        $("#loading")["hide"]();
        if (localStorage["getItem"](_0x2d278e) > 1) {
          _0x296458["video"]()["currentTime"] = localStorage["getItem"](_0x2d278e);
        }
      });
      _0x296458["video"]()["addEventListener"]("loadeddata", () => {});
      _0x296458["video"]()["addEventListener"]("canplay", () => {});
      _0x296458["video"]()["addEventListener"]("timeupdate", () => {
        if (Math["floor"](_0x296458["video"]()["currentTime"]) < 1) return;
        if (Math["floor"](_0x296458["video"]()["currentTime"]) === _0x1c78c9) {
          return;
        }
        _0x1c78c9 = Math["floor"](_0x296458["video"]()["currentTime"]);
        localStorage["setItem"](_0x2d278e, Math["floor"](_0x296458["video"]()["currentTime"]));
      });
      _0x296458["video"]()["addEventListener"]("ended", () => {
        localStorage["removeItem"](_0x2d278e);
        this["toNext"]();
      });
    });
    _0x296458["on"]("error", function (_0x254e8c) {
      console["log"](_0x254e8c);
    });
    _0x296458["on"]("volume-change", function (_0x2c5d8b) {
      _0x296458["video"]()["volume"] = _0x2c5d8b["size"];
    });
  }
};
window["addEventListener"]("message", _0x480116 => {
  let _0x16a23b = _0x480116["data"];
  if (_0x16a23b["type"] === "wait") {
    if (_0x296458 != null) {
      _0x296458["video"]()["pause"]();
    }
    $("#loading")["show"]();
    $("#error")["hide"]();
    $(".app")["hide"]();
    return;
  }
  if (_0x16a23b["type"] === "change") {
    _0x22e093 = _0x16a23b["title"];
    _0x58ec25 = _0x16a23b["jump"];
    _0x2e8ed4 = _0x16a23b["site_url"];
    _0x4ee278 = Boolean(_0x58ec25);
    _0x3dbe8c["getPlayUrl"](_0x16a23b["url"]);
  }
});
function _0x1a0b31(_0x503bc0) {
  function _0x1993be(_0x1607e9) {
    if (("" + _0x1607e9 / _0x1607e9)["length"] !== 1 || _0x1607e9 % 20 === 0) {
      ;
    }
    _0x1993be(++_0x1607e9);
  }
  try {
    if (_0x503bc0) {
      return _0x1993be;
    } else {
      _0x1993be(0);
    }
  } catch (_0x187f7e) {}
}
;
_0xod9 = "jsjiami.com.v6";