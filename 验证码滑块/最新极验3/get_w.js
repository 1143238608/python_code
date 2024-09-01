const CryptoJS = require("crypto-js");
var v_saf;
!function () {
    var n = Function.toString, t = [], i = [], o = [].indexOf.bind(t), e = [].push.bind(t), r = [].push.bind(i);

    function u(n, t) {
        return -1 == o(n) && (e(n), r(`function ${t || n.name || ""}() { [native code] }`)), n
    }

    Object.defineProperty(Function.prototype, "toString", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
            return "function" == typeof this && i[o(this)] || n.call(this)
        }
    }), u(Function.prototype.toString, "toString"), v_saf = u
}();


function _inherits(t, e) {
    t.prototype = Object.create(e.prototype, {
        constructor: {value: t, writable: !0, configurable: !0}
    }), e && Object.setPrototypeOf(t, e)
}

Object.defineProperty(Object.prototype, Symbol.toStringTag, {
    get() {
        return Object.getPrototypeOf(this).constructor.name
    }
});
var v_new_toggle = true
Object.freeze(console)//only for javascript-obfuscator anti console debug.
var v_console_logger = console.log
var v_console_log = function () {
    if (!v_new_toggle) {
        v_console_logger.apply(this, arguments)
    }
}
var v_random = (function () {
    var seed = 276951438;
    return function random() {
        return seed = (seed * 9301 + 49297) % 233280, (seed / 233280)
    }
})()
var v_new = function (v) {
    var temp = v_new_toggle;
    v_new_toggle = true;
    var r = new v;
    v_new_toggle = temp;
    return r
}


EventTarget = v_saf(function EventTarget() {
    ;
})
Navigator = v_saf(function Navigator() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;this._plugins = typeof PluginArray == 'undefined' ? [] : v_new(PluginArray);
    this._mimeTypes = typeof MimeTypeArray == 'undefined' ? [] : v_new(MimeTypeArray)
})
HTMLCollection = v_saf(function HTMLCollection() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
NodeList = v_saf(function NodeList() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
DOMTokenList = v_saf(function DOMTokenList() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
Crypto = v_saf(function Crypto() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
    this.getRandomValues = function () {
        v_console_log('  [*] Crypto -> getRandomValues[func]')
        var e = arguments[0];
        return e.map(function (x, i) {
            return e[i] = v_random() * 1073741824
        });
    }
    this.randomUUID = function () {
        v_console_log('  [*] Crypto -> randomUUID[func]')

        function get2() {
            return (v_random() * 255 ^ 0).toString(16).padStart(2, '0')
        }

        function rpt(func, num) {
            var r = [];
            for (var i = 0; i < num; i++) {
                r.push(func())
            }
            ;
            return r.join('')
        }

        return [rpt(get2, 4), rpt(get2, 2), rpt(get2, 2), rpt(get2, 2), rpt(get2, 6)].join('-')
    }
})
WebGLRenderingContext = v_saf(function WebGLRenderingContext() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;

    function WebGLBuffer() {
    }

    function WebGLProgram() {
    }

    function WebGLShader() {
    }

    this._toggle = {}
    this.createBuffer = function () {
        v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]');
        return v_new(WebGLBuffer)
    }
    this.createProgram = function () {
        v_console_log('  [*] WebGLRenderingContext -> createProgram[func]');
        return v_new(WebGLProgram)
    }
    this.createShader = function () {
        v_console_log('  [*] WebGLRenderingContext -> createShader[func]');
        return v_new(WebGLShader)
    }
    this.getSupportedExtensions = function () {
        v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
        return [
            "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
            "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
            "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
            "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
            "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
            "WEBGL_depth_texture", "WEBKIT_WEBGL_depth_texture", "WEBGL_draw_buffers", "WEBGL_lose_context", "WEBKIT_WEBGL_lose_context", "WEBGL_multi_draw",
        ]
    }
    var self = this
    this.getExtension = function (key) {
        v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)

        class WebGLDebugRendererInfo {
            get UNMASKED_VENDOR_WEBGL() {
                self._toggle[37445] = 1;
                return 37445
            }

            get UNMASKED_RENDERER_WEBGL() {
                self._toggle[37446] = 1;
                return 37446
            }
        }

        class EXTTextureFilterAnisotropic {
        }

        class WebGLLoseContext {
            loseContext() {
            }

            restoreContext() {
            }
        }

        if (key == 'WEBGL_debug_renderer_info') {
            var r = new WebGLDebugRendererInfo
        }
        if (key == 'EXT_texture_filter_anisotropic') {
            var r = new EXTTextureFilterAnisotropic
        }
        if (key == 'WEBGL_lose_context') {
            var r = new WebGLLoseContext
        } else {
            var r = new WebGLDebugRendererInfo
        }
        return r
    }
    this.getParameter = function (key) {
        v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
        if (this._toggle[key]) {
            if (key == 37445) {
                return "Google Inc. (NVIDIA)"
            }
            if (key == 37446) {
                return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)"
            }
        } else {
            if (key == 33902) {
                return new Float32Array([1, 1])
            }
            if (key == 33901) {
                return new Float32Array([1, 1024])
            }
            if (key == 35661) {
                return 32
            }
            if (key == 34047) {
                return 16
            }
            if (key == 34076) {
                return 16384
            }
            if (key == 36349) {
                return 1024
            }
            if (key == 34024) {
                return 16384
            }
            if (key == 34930) {
                return 16
            }
            if (key == 3379) {
                return 16384
            }
            if (key == 36348) {
                return 30
            }
            if (key == 34921) {
                return 16
            }
            if (key == 35660) {
                return 16
            }
            if (key == 36347) {
                return 4095
            }
            if (key == 3386) {
                return new Int32Array([32767, 32767])
            }
            if (key == 3410) {
                return 8
            }
            if (key == 7937) {
                return "WebKit WebGL"
            }
            if (key == 35724) {
                return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)"
            }
            if (key == 3415) {
                return 0
            }
            if (key == 7936) {
                return "WebKit"
            }
            if (key == 7938) {
                return "WebGL 1.0 (OpenGL ES 2.0 Chromium)"
            }
            if (key == 3411) {
                return 8
            }
            if (key == 3412) {
                return 8
            }
            if (key == 3413) {
                return 8
            }
            if (key == 3414) {
                return 24
            }
            return null
        }
    }
    this.getContextAttributes = function () {
        v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
        return {
            alpha: true,
            antialias: true,
            depth: true,
            desynchronized: false,
            failIfMajorPerformanceCaveat: false,
            powerPreference: "default",
            premultipliedAlpha: true,
            preserveDrawingBuffer: false,
            stencil: false,
            xrCompatible: false,
        }
    }
    this.getShaderPrecisionFormat = function (a, b) {
        v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')

        function WebGLShaderPrecisionFormat() {
        }

        var r1 = v_new(WebGLShaderPrecisionFormat)
        r1.rangeMin = 127
        r1.rangeMax = 127
        r1.precision = 23
        var r2 = v_new(WebGLShaderPrecisionFormat)
        r2.rangeMin = 31
        r2.rangeMax = 30
        r2.precision = 0
        if (a == 35633 && b == 36338) {
            return r1
        }
        if (a == 35633 && b == 36337) {
            return r1
        }
        if (a == 35633 && b == 36336) {
            return r1
        }
        if (a == 35633 && b == 36341) {
            return r2
        }
        if (a == 35633 && b == 36340) {
            return r2
        }
        if (a == 35633 && b == 36339) {
            return r2
        }
        if (a == 35632 && b == 36338) {
            return r1
        }
        if (a == 35632 && b == 36337) {
            return r1
        }
        if (a == 35632 && b == 36336) {
            return r1
        }
        if (a == 35632 && b == 36341) {
            return r2
        }
        if (a == 35632 && b == 36340) {
            return r2
        }
        if (a == 35632 && b == 36339) {
            return r2
        }
        throw Error('getShaderPrecisionFormat')
    }
    v_saf(this.createBuffer, 'createBuffer')
    v_saf(this.createProgram, 'createProgram')
    v_saf(this.createShader, 'createShader')
    v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
    v_saf(this.getExtension, 'getExtension')
    v_saf(this.getParameter, 'getParameter')
    v_saf(this.getContextAttributes, 'getContextAttributes')
    v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')
})
DOMRectReadOnly = v_saf(function DOMRectReadOnly() {
    ;
})
Event = v_saf(function Event() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
Image = v_saf(function Image() {
    ;
    return v_new(HTMLImageElement)
})
PluginArray = v_saf(function PluginArray() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
    this[0] = v_new(Plugin);
    this[0].description = "Portable Document Format";
    this[0].filename = "internal-pdf-viewer";
    this[0].length = 2;
    this[0].name = "PDF Viewer";
    this[1] = v_new(Plugin);
    this[1].description = "Portable Document Format";
    this[1].filename = "internal-pdf-viewer";
    this[1].length = 2;
    this[1].name = "Chrome PDF Viewer";
    this[2] = v_new(Plugin);
    this[2].description = "Portable Document Format";
    this[2].filename = "internal-pdf-viewer";
    this[2].length = 2;
    this[2].name = "Chromium PDF Viewer";
    this[3] = v_new(Plugin);
    this[3].description = "Portable Document Format";
    this[3].filename = "internal-pdf-viewer";
    this[3].length = 2;
    this[3].name = "Microsoft Edge PDF Viewer";
    this[4] = v_new(Plugin);
    this[4].description = "Portable Document Format";
    this[4].filename = "internal-pdf-viewer";
    this[4].length = 2;
    this[4].name = "WebKit built-in PDF";
})
Plugin = v_saf(function Plugin() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
MimeTypeArray = v_saf(function MimeTypeArray() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
    this[0] = v_new(Plugin);
    this[0].description = "Portable Document Format";
    this[0].enabledPlugin = {"0": {}, "1": {}};
    this[0].suffixes = "pdf";
    this[0].type = "application/pdf";
    this[1] = v_new(Plugin);
    this[1].description = "Portable Document Format";
    this[1].enabledPlugin = {"0": {}, "1": {}};
    this[1].suffixes = "pdf";
    this[1].type = "text/pdf";
})
MimeType = v_saf(function MimeType() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
Selection = v_saf(function Selection() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
Node = v_saf(function Node() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(Node, EventTarget)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(XMLHttpRequestEventTarget, EventTarget)
UIEvent = v_saf(function UIEvent() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(UIEvent, Event)
Document = v_saf(function Document() {
    ;
});
_inherits(Document, Node)
Element = v_saf(function Element() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(Element, Node)
XMLHttpRequest = v_saf(function XMLHttpRequest() {
    ;
});
_inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
MouseEvent = v_saf(function MouseEvent() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(MouseEvent, UIEvent)
HTMLElement = v_saf(function HTMLElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLElement, Element)
HTMLScriptElement = v_saf(function HTMLScriptElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLScriptElement, HTMLElement)
HTMLCanvasElement = v_saf(function HTMLCanvasElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLCanvasElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLLinkElement, HTMLElement)
HTMLAnchorElement = v_saf(function HTMLAnchorElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;v_hook_href(this, 'HTMLAnchorElement', location.href)
});
_inherits(HTMLAnchorElement, HTMLElement)
HTMLImageElement = v_saf(function HTMLImageElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLImageElement, HTMLElement)
HTMLTextAreaElement = v_saf(function HTMLTextAreaElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLTextAreaElement, HTMLElement)
Window = v_saf(function Window() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(Window, EventTarget)
Screen = v_saf(function Screen() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(Screen, EventTarget)
HTMLDocument = v_saf(function HTMLDocument() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;Object.defineProperty(this, 'location', {
        get() {
            return location
        }
    })
});
_inherits(HTMLDocument, Document)
HTMLHeadElement = v_saf(function HTMLHeadElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLHeadElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLBodyElement, HTMLElement)
Location = v_saf(function Location() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
Performance = v_saf(function Performance() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(Performance, EventTarget)
PerformanceEntry = v_saf(function PerformanceEntry() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
PerformanceElementTiming = v_saf(function PerformanceElementTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformanceElementTiming, PerformanceEntry)
PerformanceEventTiming = v_saf(function PerformanceEventTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformanceEventTiming, PerformanceEntry)
PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformanceLongTaskTiming, PerformanceEntry)
PerformanceMark = v_saf(function PerformanceMark() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformanceMark, PerformanceEntry)
PerformanceMeasure = v_saf(function PerformanceMeasure() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformanceMeasure, PerformanceEntry)
PerformanceNavigation = v_saf(function PerformanceNavigation() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformanceResourceTiming, PerformanceEntry)
PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
PerformanceObserver = v_saf(function PerformanceObserver() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
PerformancePaintTiming = v_saf(function PerformancePaintTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PerformancePaintTiming, PerformanceEntry)
PerformanceServerTiming = v_saf(function PerformanceServerTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
PerformanceTiming = v_saf(function PerformanceTiming() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
HTMLMediaElement = v_saf(function HTMLMediaElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLMediaElement, HTMLElement)
HTMLUnknownElement = v_saf(function HTMLUnknownElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLUnknownElement, HTMLElement)
Storage = v_saf(function Storage() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
Touch = v_saf(function Touch() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
})
TouchEvent = v_saf(function TouchEvent() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(TouchEvent, UIEvent)
PointerEvent = v_saf(function PointerEvent() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(PointerEvent, MouseEvent)
HTMLDivElement = v_saf(function HTMLDivElement() {
    if (!v_new_toggle) {
        throw TypeError("Illegal constructor")
    }
    ;
});
_inherits(HTMLDivElement, HTMLElement)
Object.defineProperties(EventTarget.prototype, {
    removeEventListener: {
        value: v_saf(function removeEventListener() {
            v_console_log("  [*] EventTarget -> removeEventListener[func]", [].slice.call(arguments));
        })
    },
    dispatchEvent: {
        value: v_saf(function dispatchEvent() {
            v_console_log("  [*] EventTarget -> dispatchEvent[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "EventTarget", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Navigator.prototype, {
    userAgent: {
        get() {
            v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
            return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
    },
    appName: {
        get() {
            v_console_log("  [*] Navigator -> appName[get]", "Netscape");
            return "Netscape"
        }
    },
    webdriver: {
        get() {
            v_console_log("  [*] Navigator -> webdriver[get]", false);
            return false
        }
    },
    hardwareConcurrency: {
        get() {
            v_console_log("  [*] Navigator -> hardwareConcurrency[get]", 16);
            return 16
        }
    },
    plugins: {
        get() {
            v_console_log("  [*] Navigator -> plugins[get]", this._plugins || []);
            return this._plugins || []
        }
    },
    mimeTypes: {
        get() {
            v_console_log("  [*] Navigator -> mimeTypes[get]", this._mimeTypes || []);
            return this._mimeTypes || []
        }
    },
    [Symbol.toStringTag]: {value: "Navigator", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLCollection.prototype, {
    length: {
        get() {
            v_console_log("  [*] HTMLCollection -> length[get]", 0);
            return 0
        }
    },
    [Symbol.toStringTag]: {value: "HTMLCollection", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(NodeList.prototype, {
    length: {
        get() {
            v_console_log("  [*] NodeList -> length[get]", 1);
            return 1
        }
    },
    [Symbol.toStringTag]: {value: "NodeList", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(DOMTokenList.prototype, {
    length: {
        get() {
            v_console_log("  [*] DOMTokenList -> length[get]", 0);
            return 0
        }
    },
    [Symbol.toStringTag]: {value: "DOMTokenList", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
    cssText: {
        set() {
            v_console_log("  [*] CSSStyleDeclaration -> cssText[set]", [].slice.call(arguments));
        }
    },
    getPropertyValue: {
        value: v_saf(function getPropertyValue() {
            v_console_log("  [*] CSSStyleDeclaration -> getPropertyValue[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "CSSStyleDeclaration", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Crypto.prototype, {
    [Symbol.toStringTag]: {value: "Crypto", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(WebGLRenderingContext.prototype, {
    DEPTH_BUFFER_BIT: {"value": 256, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BUFFER_BIT: {"value": 1024, "writable": false, "enumerable": true, "configurable": false},
    COLOR_BUFFER_BIT: {"value": 16384, "writable": false, "enumerable": true, "configurable": false},
    POINTS: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    LINES: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    LINE_LOOP: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    LINE_STRIP: {"value": 3, "writable": false, "enumerable": true, "configurable": false},
    TRIANGLES: {"value": 4, "writable": false, "enumerable": true, "configurable": false},
    TRIANGLE_STRIP: {"value": 5, "writable": false, "enumerable": true, "configurable": false},
    TRIANGLE_FAN: {"value": 6, "writable": false, "enumerable": true, "configurable": false},
    ZERO: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    ONE: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    SRC_COLOR: {"value": 768, "writable": false, "enumerable": true, "configurable": false},
    ONE_MINUS_SRC_COLOR: {"value": 769, "writable": false, "enumerable": true, "configurable": false},
    SRC_ALPHA: {"value": 770, "writable": false, "enumerable": true, "configurable": false},
    ONE_MINUS_SRC_ALPHA: {"value": 771, "writable": false, "enumerable": true, "configurable": false},
    DST_ALPHA: {"value": 772, "writable": false, "enumerable": true, "configurable": false},
    ONE_MINUS_DST_ALPHA: {"value": 773, "writable": false, "enumerable": true, "configurable": false},
    DST_COLOR: {"value": 774, "writable": false, "enumerable": true, "configurable": false},
    ONE_MINUS_DST_COLOR: {"value": 775, "writable": false, "enumerable": true, "configurable": false},
    SRC_ALPHA_SATURATE: {"value": 776, "writable": false, "enumerable": true, "configurable": false},
    FUNC_ADD: {"value": 32774, "writable": false, "enumerable": true, "configurable": false},
    BLEND_EQUATION: {"value": 32777, "writable": false, "enumerable": true, "configurable": false},
    BLEND_EQUATION_RGB: {"value": 32777, "writable": false, "enumerable": true, "configurable": false},
    BLEND_EQUATION_ALPHA: {"value": 34877, "writable": false, "enumerable": true, "configurable": false},
    FUNC_SUBTRACT: {"value": 32778, "writable": false, "enumerable": true, "configurable": false},
    FUNC_REVERSE_SUBTRACT: {"value": 32779, "writable": false, "enumerable": true, "configurable": false},
    BLEND_DST_RGB: {"value": 32968, "writable": false, "enumerable": true, "configurable": false},
    BLEND_SRC_RGB: {"value": 32969, "writable": false, "enumerable": true, "configurable": false},
    BLEND_DST_ALPHA: {"value": 32970, "writable": false, "enumerable": true, "configurable": false},
    BLEND_SRC_ALPHA: {"value": 32971, "writable": false, "enumerable": true, "configurable": false},
    CONSTANT_COLOR: {"value": 32769, "writable": false, "enumerable": true, "configurable": false},
    ONE_MINUS_CONSTANT_COLOR: {"value": 32770, "writable": false, "enumerable": true, "configurable": false},
    CONSTANT_ALPHA: {"value": 32771, "writable": false, "enumerable": true, "configurable": false},
    ONE_MINUS_CONSTANT_ALPHA: {"value": 32772, "writable": false, "enumerable": true, "configurable": false},
    BLEND_COLOR: {"value": 32773, "writable": false, "enumerable": true, "configurable": false},
    ARRAY_BUFFER: {"value": 34962, "writable": false, "enumerable": true, "configurable": false},
    ELEMENT_ARRAY_BUFFER: {"value": 34963, "writable": false, "enumerable": true, "configurable": false},
    ARRAY_BUFFER_BINDING: {"value": 34964, "writable": false, "enumerable": true, "configurable": false},
    ELEMENT_ARRAY_BUFFER_BINDING: {"value": 34965, "writable": false, "enumerable": true, "configurable": false},
    STREAM_DRAW: {"value": 35040, "writable": false, "enumerable": true, "configurable": false},
    STATIC_DRAW: {"value": 35044, "writable": false, "enumerable": true, "configurable": false},
    DYNAMIC_DRAW: {"value": 35048, "writable": false, "enumerable": true, "configurable": false},
    BUFFER_SIZE: {"value": 34660, "writable": false, "enumerable": true, "configurable": false},
    BUFFER_USAGE: {"value": 34661, "writable": false, "enumerable": true, "configurable": false},
    CURRENT_VERTEX_ATTRIB: {"value": 34342, "writable": false, "enumerable": true, "configurable": false},
    FRONT: {"value": 1028, "writable": false, "enumerable": true, "configurable": false},
    BACK: {"value": 1029, "writable": false, "enumerable": true, "configurable": false},
    FRONT_AND_BACK: {"value": 1032, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_2D: {"value": 3553, "writable": false, "enumerable": true, "configurable": false},
    CULL_FACE: {"value": 2884, "writable": false, "enumerable": true, "configurable": false},
    BLEND: {"value": 3042, "writable": false, "enumerable": true, "configurable": false},
    DITHER: {"value": 3024, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_TEST: {"value": 2960, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_TEST: {"value": 2929, "writable": false, "enumerable": true, "configurable": false},
    SCISSOR_TEST: {"value": 3089, "writable": false, "enumerable": true, "configurable": false},
    POLYGON_OFFSET_FILL: {"value": 32823, "writable": false, "enumerable": true, "configurable": false},
    SAMPLE_ALPHA_TO_COVERAGE: {"value": 32926, "writable": false, "enumerable": true, "configurable": false},
    SAMPLE_COVERAGE: {"value": 32928, "writable": false, "enumerable": true, "configurable": false},
    NO_ERROR: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    INVALID_ENUM: {"value": 1280, "writable": false, "enumerable": true, "configurable": false},
    INVALID_VALUE: {"value": 1281, "writable": false, "enumerable": true, "configurable": false},
    INVALID_OPERATION: {"value": 1282, "writable": false, "enumerable": true, "configurable": false},
    OUT_OF_MEMORY: {"value": 1285, "writable": false, "enumerable": true, "configurable": false},
    CW: {"value": 2304, "writable": false, "enumerable": true, "configurable": false},
    CCW: {"value": 2305, "writable": false, "enumerable": true, "configurable": false},
    LINE_WIDTH: {"value": 2849, "writable": false, "enumerable": true, "configurable": false},
    ALIASED_POINT_SIZE_RANGE: {"value": 33901, "writable": false, "enumerable": true, "configurable": false},
    ALIASED_LINE_WIDTH_RANGE: {"value": 33902, "writable": false, "enumerable": true, "configurable": false},
    CULL_FACE_MODE: {"value": 2885, "writable": false, "enumerable": true, "configurable": false},
    FRONT_FACE: {"value": 2886, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_RANGE: {"value": 2928, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_WRITEMASK: {"value": 2930, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_CLEAR_VALUE: {"value": 2931, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_FUNC: {"value": 2932, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_CLEAR_VALUE: {"value": 2961, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_FUNC: {"value": 2962, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_FAIL: {"value": 2964, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_PASS_DEPTH_FAIL: {"value": 2965, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_PASS_DEPTH_PASS: {"value": 2966, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_REF: {"value": 2967, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_VALUE_MASK: {"value": 2963, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_WRITEMASK: {"value": 2968, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BACK_FUNC: {"value": 34816, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BACK_FAIL: {"value": 34817, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BACK_PASS_DEPTH_FAIL: {"value": 34818, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BACK_PASS_DEPTH_PASS: {"value": 34819, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BACK_REF: {"value": 36003, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BACK_VALUE_MASK: {"value": 36004, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BACK_WRITEMASK: {"value": 36005, "writable": false, "enumerable": true, "configurable": false},
    VIEWPORT: {"value": 2978, "writable": false, "enumerable": true, "configurable": false},
    SCISSOR_BOX: {"value": 3088, "writable": false, "enumerable": true, "configurable": false},
    COLOR_CLEAR_VALUE: {"value": 3106, "writable": false, "enumerable": true, "configurable": false},
    COLOR_WRITEMASK: {"value": 3107, "writable": false, "enumerable": true, "configurable": false},
    UNPACK_ALIGNMENT: {"value": 3317, "writable": false, "enumerable": true, "configurable": false},
    PACK_ALIGNMENT: {"value": 3333, "writable": false, "enumerable": true, "configurable": false},
    MAX_TEXTURE_SIZE: {"value": 3379, "writable": false, "enumerable": true, "configurable": false},
    MAX_VIEWPORT_DIMS: {"value": 3386, "writable": false, "enumerable": true, "configurable": false},
    SUBPIXEL_BITS: {"value": 3408, "writable": false, "enumerable": true, "configurable": false},
    RED_BITS: {"value": 3410, "writable": false, "enumerable": true, "configurable": false},
    GREEN_BITS: {"value": 3411, "writable": false, "enumerable": true, "configurable": false},
    BLUE_BITS: {"value": 3412, "writable": false, "enumerable": true, "configurable": false},
    ALPHA_BITS: {"value": 3413, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_BITS: {"value": 3414, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_BITS: {"value": 3415, "writable": false, "enumerable": true, "configurable": false},
    POLYGON_OFFSET_UNITS: {"value": 10752, "writable": false, "enumerable": true, "configurable": false},
    POLYGON_OFFSET_FACTOR: {"value": 32824, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_BINDING_2D: {"value": 32873, "writable": false, "enumerable": true, "configurable": false},
    SAMPLE_BUFFERS: {"value": 32936, "writable": false, "enumerable": true, "configurable": false},
    SAMPLES: {"value": 32937, "writable": false, "enumerable": true, "configurable": false},
    SAMPLE_COVERAGE_VALUE: {"value": 32938, "writable": false, "enumerable": true, "configurable": false},
    SAMPLE_COVERAGE_INVERT: {"value": 32939, "writable": false, "enumerable": true, "configurable": false},
    COMPRESSED_TEXTURE_FORMATS: {"value": 34467, "writable": false, "enumerable": true, "configurable": false},
    DONT_CARE: {"value": 4352, "writable": false, "enumerable": true, "configurable": false},
    FASTEST: {"value": 4353, "writable": false, "enumerable": true, "configurable": false},
    NICEST: {"value": 4354, "writable": false, "enumerable": true, "configurable": false},
    GENERATE_MIPMAP_HINT: {"value": 33170, "writable": false, "enumerable": true, "configurable": false},
    BYTE: {"value": 5120, "writable": false, "enumerable": true, "configurable": false},
    UNSIGNED_BYTE: {"value": 5121, "writable": false, "enumerable": true, "configurable": false},
    SHORT: {"value": 5122, "writable": false, "enumerable": true, "configurable": false},
    UNSIGNED_SHORT: {"value": 5123, "writable": false, "enumerable": true, "configurable": false},
    INT: {"value": 5124, "writable": false, "enumerable": true, "configurable": false},
    UNSIGNED_INT: {"value": 5125, "writable": false, "enumerable": true, "configurable": false},
    FLOAT: {"value": 5126, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_COMPONENT: {"value": 6402, "writable": false, "enumerable": true, "configurable": false},
    ALPHA: {"value": 6406, "writable": false, "enumerable": true, "configurable": false},
    RGB: {"value": 6407, "writable": false, "enumerable": true, "configurable": false},
    RGBA: {"value": 6408, "writable": false, "enumerable": true, "configurable": false},
    LUMINANCE: {"value": 6409, "writable": false, "enumerable": true, "configurable": false},
    LUMINANCE_ALPHA: {"value": 6410, "writable": false, "enumerable": true, "configurable": false},
    UNSIGNED_SHORT_4_4_4_4: {"value": 32819, "writable": false, "enumerable": true, "configurable": false},
    UNSIGNED_SHORT_5_5_5_1: {"value": 32820, "writable": false, "enumerable": true, "configurable": false},
    UNSIGNED_SHORT_5_6_5: {"value": 33635, "writable": false, "enumerable": true, "configurable": false},
    FRAGMENT_SHADER: {"value": 35632, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_SHADER: {"value": 35633, "writable": false, "enumerable": true, "configurable": false},
    MAX_VERTEX_ATTRIBS: {"value": 34921, "writable": false, "enumerable": true, "configurable": false},
    MAX_VERTEX_UNIFORM_VECTORS: {"value": 36347, "writable": false, "enumerable": true, "configurable": false},
    MAX_VARYING_VECTORS: {"value": 36348, "writable": false, "enumerable": true, "configurable": false},
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value": 35661, "writable": false, "enumerable": true, "configurable": false},
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value": 35660, "writable": false, "enumerable": true, "configurable": false},
    MAX_TEXTURE_IMAGE_UNITS: {"value": 34930, "writable": false, "enumerable": true, "configurable": false},
    MAX_FRAGMENT_UNIFORM_VECTORS: {"value": 36349, "writable": false, "enumerable": true, "configurable": false},
    SHADER_TYPE: {"value": 35663, "writable": false, "enumerable": true, "configurable": false},
    DELETE_STATUS: {"value": 35712, "writable": false, "enumerable": true, "configurable": false},
    LINK_STATUS: {"value": 35714, "writable": false, "enumerable": true, "configurable": false},
    VALIDATE_STATUS: {"value": 35715, "writable": false, "enumerable": true, "configurable": false},
    ATTACHED_SHADERS: {"value": 35717, "writable": false, "enumerable": true, "configurable": false},
    ACTIVE_UNIFORMS: {"value": 35718, "writable": false, "enumerable": true, "configurable": false},
    ACTIVE_ATTRIBUTES: {"value": 35721, "writable": false, "enumerable": true, "configurable": false},
    SHADING_LANGUAGE_VERSION: {"value": 35724, "writable": false, "enumerable": true, "configurable": false},
    CURRENT_PROGRAM: {"value": 35725, "writable": false, "enumerable": true, "configurable": false},
    NEVER: {"value": 512, "writable": false, "enumerable": true, "configurable": false},
    LESS: {"value": 513, "writable": false, "enumerable": true, "configurable": false},
    EQUAL: {"value": 514, "writable": false, "enumerable": true, "configurable": false},
    LEQUAL: {"value": 515, "writable": false, "enumerable": true, "configurable": false},
    GREATER: {"value": 516, "writable": false, "enumerable": true, "configurable": false},
    NOTEQUAL: {"value": 517, "writable": false, "enumerable": true, "configurable": false},
    GEQUAL: {"value": 518, "writable": false, "enumerable": true, "configurable": false},
    ALWAYS: {"value": 519, "writable": false, "enumerable": true, "configurable": false},
    KEEP: {"value": 7680, "writable": false, "enumerable": true, "configurable": false},
    REPLACE: {"value": 7681, "writable": false, "enumerable": true, "configurable": false},
    INCR: {"value": 7682, "writable": false, "enumerable": true, "configurable": false},
    DECR: {"value": 7683, "writable": false, "enumerable": true, "configurable": false},
    INVERT: {"value": 5386, "writable": false, "enumerable": true, "configurable": false},
    INCR_WRAP: {"value": 34055, "writable": false, "enumerable": true, "configurable": false},
    DECR_WRAP: {"value": 34056, "writable": false, "enumerable": true, "configurable": false},
    VENDOR: {"value": 7936, "writable": false, "enumerable": true, "configurable": false},
    RENDERER: {"value": 7937, "writable": false, "enumerable": true, "configurable": false},
    VERSION: {"value": 7938, "writable": false, "enumerable": true, "configurable": false},
    NEAREST: {"value": 9728, "writable": false, "enumerable": true, "configurable": false},
    LINEAR: {"value": 9729, "writable": false, "enumerable": true, "configurable": false},
    NEAREST_MIPMAP_NEAREST: {"value": 9984, "writable": false, "enumerable": true, "configurable": false},
    LINEAR_MIPMAP_NEAREST: {"value": 9985, "writable": false, "enumerable": true, "configurable": false},
    NEAREST_MIPMAP_LINEAR: {"value": 9986, "writable": false, "enumerable": true, "configurable": false},
    LINEAR_MIPMAP_LINEAR: {"value": 9987, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_MAG_FILTER: {"value": 10240, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_MIN_FILTER: {"value": 10241, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_WRAP_S: {"value": 10242, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_WRAP_T: {"value": 10243, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE: {"value": 5890, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_CUBE_MAP: {"value": 34067, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_BINDING_CUBE_MAP: {"value": 34068, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_CUBE_MAP_POSITIVE_X: {"value": 34069, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_CUBE_MAP_NEGATIVE_X: {"value": 34070, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_CUBE_MAP_POSITIVE_Y: {"value": 34071, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value": 34072, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_CUBE_MAP_POSITIVE_Z: {"value": 34073, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value": 34074, "writable": false, "enumerable": true, "configurable": false},
    MAX_CUBE_MAP_TEXTURE_SIZE: {"value": 34076, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE0: {"value": 33984, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE1: {"value": 33985, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE2: {"value": 33986, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE3: {"value": 33987, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE4: {"value": 33988, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE5: {"value": 33989, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE6: {"value": 33990, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE7: {"value": 33991, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE8: {"value": 33992, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE9: {"value": 33993, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE10: {"value": 33994, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE11: {"value": 33995, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE12: {"value": 33996, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE13: {"value": 33997, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE14: {"value": 33998, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE15: {"value": 33999, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE16: {"value": 34000, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE17: {"value": 34001, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE18: {"value": 34002, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE19: {"value": 34003, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE20: {"value": 34004, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE21: {"value": 34005, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE22: {"value": 34006, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE23: {"value": 34007, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE24: {"value": 34008, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE25: {"value": 34009, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE26: {"value": 34010, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE27: {"value": 34011, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE28: {"value": 34012, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE29: {"value": 34013, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE30: {"value": 34014, "writable": false, "enumerable": true, "configurable": false},
    TEXTURE31: {"value": 34015, "writable": false, "enumerable": true, "configurable": false},
    ACTIVE_TEXTURE: {"value": 34016, "writable": false, "enumerable": true, "configurable": false},
    REPEAT: {"value": 10497, "writable": false, "enumerable": true, "configurable": false},
    CLAMP_TO_EDGE: {"value": 33071, "writable": false, "enumerable": true, "configurable": false},
    MIRRORED_REPEAT: {"value": 33648, "writable": false, "enumerable": true, "configurable": false},
    FLOAT_VEC2: {"value": 35664, "writable": false, "enumerable": true, "configurable": false},
    FLOAT_VEC3: {"value": 35665, "writable": false, "enumerable": true, "configurable": false},
    FLOAT_VEC4: {"value": 35666, "writable": false, "enumerable": true, "configurable": false},
    INT_VEC2: {"value": 35667, "writable": false, "enumerable": true, "configurable": false},
    INT_VEC3: {"value": 35668, "writable": false, "enumerable": true, "configurable": false},
    INT_VEC4: {"value": 35669, "writable": false, "enumerable": true, "configurable": false},
    BOOL: {"value": 35670, "writable": false, "enumerable": true, "configurable": false},
    BOOL_VEC2: {"value": 35671, "writable": false, "enumerable": true, "configurable": false},
    BOOL_VEC3: {"value": 35672, "writable": false, "enumerable": true, "configurable": false},
    BOOL_VEC4: {"value": 35673, "writable": false, "enumerable": true, "configurable": false},
    FLOAT_MAT2: {"value": 35674, "writable": false, "enumerable": true, "configurable": false},
    FLOAT_MAT3: {"value": 35675, "writable": false, "enumerable": true, "configurable": false},
    FLOAT_MAT4: {"value": 35676, "writable": false, "enumerable": true, "configurable": false},
    SAMPLER_2D: {"value": 35678, "writable": false, "enumerable": true, "configurable": false},
    SAMPLER_CUBE: {"value": 35680, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_ATTRIB_ARRAY_ENABLED: {"value": 34338, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_ATTRIB_ARRAY_SIZE: {"value": 34339, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_ATTRIB_ARRAY_STRIDE: {"value": 34340, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_ATTRIB_ARRAY_TYPE: {"value": 34341, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value": 34922, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_ATTRIB_ARRAY_POINTER: {"value": 34373, "writable": false, "enumerable": true, "configurable": false},
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value": 34975, "writable": false, "enumerable": true, "configurable": false},
    IMPLEMENTATION_COLOR_READ_TYPE: {"value": 35738, "writable": false, "enumerable": true, "configurable": false},
    IMPLEMENTATION_COLOR_READ_FORMAT: {"value": 35739, "writable": false, "enumerable": true, "configurable": false},
    COMPILE_STATUS: {"value": 35713, "writable": false, "enumerable": true, "configurable": false},
    LOW_FLOAT: {"value": 36336, "writable": false, "enumerable": true, "configurable": false},
    MEDIUM_FLOAT: {"value": 36337, "writable": false, "enumerable": true, "configurable": false},
    HIGH_FLOAT: {"value": 36338, "writable": false, "enumerable": true, "configurable": false},
    LOW_INT: {"value": 36339, "writable": false, "enumerable": true, "configurable": false},
    MEDIUM_INT: {"value": 36340, "writable": false, "enumerable": true, "configurable": false},
    HIGH_INT: {"value": 36341, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER: {"value": 36160, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER: {"value": 36161, "writable": false, "enumerable": true, "configurable": false},
    RGBA4: {"value": 32854, "writable": false, "enumerable": true, "configurable": false},
    RGB5_A1: {"value": 32855, "writable": false, "enumerable": true, "configurable": false},
    RGB565: {"value": 36194, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_COMPONENT16: {"value": 33189, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_INDEX8: {"value": 36168, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_STENCIL: {"value": 34041, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_WIDTH: {"value": 36162, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_HEIGHT: {"value": 36163, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_INTERNAL_FORMAT: {"value": 36164, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_RED_SIZE: {"value": 36176, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_GREEN_SIZE: {"value": 36177, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_BLUE_SIZE: {"value": 36178, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_ALPHA_SIZE: {"value": 36179, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_DEPTH_SIZE: {"value": 36180, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_STENCIL_SIZE: {"value": 36181, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value": 36048, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value": 36049, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {
        "value": 36050,
        "writable": false,
        "enumerable": true,
        "configurable": false
    },
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {
        "value": 36051,
        "writable": false,
        "enumerable": true,
        "configurable": false
    },
    COLOR_ATTACHMENT0: {"value": 36064, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_ATTACHMENT: {"value": 36096, "writable": false, "enumerable": true, "configurable": false},
    STENCIL_ATTACHMENT: {"value": 36128, "writable": false, "enumerable": true, "configurable": false},
    DEPTH_STENCIL_ATTACHMENT: {"value": 33306, "writable": false, "enumerable": true, "configurable": false},
    NONE: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_COMPLETE: {"value": 36053, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value": 36054, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {
        "value": 36055,
        "writable": false,
        "enumerable": true,
        "configurable": false
    },
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value": 36057, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_UNSUPPORTED: {"value": 36061, "writable": false, "enumerable": true, "configurable": false},
    FRAMEBUFFER_BINDING: {"value": 36006, "writable": false, "enumerable": true, "configurable": false},
    RENDERBUFFER_BINDING: {"value": 36007, "writable": false, "enumerable": true, "configurable": false},
    MAX_RENDERBUFFER_SIZE: {"value": 34024, "writable": false, "enumerable": true, "configurable": false},
    INVALID_FRAMEBUFFER_OPERATION: {"value": 1286, "writable": false, "enumerable": true, "configurable": false},
    UNPACK_FLIP_Y_WEBGL: {"value": 37440, "writable": false, "enumerable": true, "configurable": false},
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value": 37441, "writable": false, "enumerable": true, "configurable": false},
    CONTEXT_LOST_WEBGL: {"value": 37442, "writable": false, "enumerable": true, "configurable": false},
    UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value": 37443, "writable": false, "enumerable": true, "configurable": false},
    BROWSER_DEFAULT_WEBGL: {"value": 37444, "writable": false, "enumerable": true, "configurable": false},
    [Symbol.toStringTag]: {value: "WebGLRenderingContext", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(DOMRectReadOnly.prototype, {
    right: {
        get() {
            v_console_log("  [*] DOMRectReadOnly -> right[get]", 0);
            return 0
        }
    },
    left: {
        get() {
            v_console_log("  [*] DOMRectReadOnly -> left[get]", 1188.21875);
            return 1188.21875
        }
    },
    top: {
        get() {
            v_console_log("  [*] DOMRectReadOnly -> top[get]", 301.875);
            return 301.875
        }
    },
    [Symbol.toStringTag]: {value: "DOMRectReadOnly", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Event.prototype, {
    type: {
        get() {
            v_console_log("  [*] Event -> type[get]", "mousemove");
            return "mousemove"
        }
    },
    NONE: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    CAPTURING_PHASE: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    AT_TARGET: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    BUBBLING_PHASE: {"value": 3, "writable": false, "enumerable": true, "configurable": false},
    [Symbol.toStringTag]: {value: "Event", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Image.prototype, {
    src: {
        set() {
            v_console_log("  [*] Image -> src[set]", [].slice.call(arguments));
        }
    },
    [Symbol.toStringTag]: {value: "Image", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PluginArray.prototype, {
    length: {
        get() {
            v_console_log("  [*] PluginArray -> length[get]", 5);
            return 5
        }
    },
    [Symbol.toStringTag]: {value: "PluginArray", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {value: "Plugin", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(MimeTypeArray.prototype, {
    length: {
        get() {
            v_console_log("  [*] MimeTypeArray -> length[get]", 2);
            return 2
        }
    },
    [Symbol.toStringTag]: {value: "MimeTypeArray", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {value: "MimeType", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Selection.prototype, {
    rangeCount: {
        get() {
            v_console_log("  [*] Selection -> rangeCount[get]", 0);
            return 0
        }
    },
    [Symbol.toStringTag]: {value: "Selection", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Node.prototype, {
    appendChild: {
        value: v_saf(function appendChild() {
            v_console_log("  [*] Node -> appendChild[func]", [].slice.call(arguments));
        })
    },
    nodeType: {
        get() {
            v_console_log("  [*] Node -> nodeType[get]", 1);
            return 1
        }
    },
    parentNode: {
        get() {
            v_console_log("  [*] Node -> parentNode[get]", {});
            return {}
        }
    },
    ownerDocument: {
        get() {
            v_console_log("  [*] Node -> ownerDocument[get]", {});
            return {}
        }
    },
    nodeName: {
        get() {
            v_console_log("  [*] Node -> nodeName[get]", "DIV");
            return "DIV"
        }
    },
    firstChild: {
        get() {
            v_console_log("  [*] Node -> firstChild[get]", {});
            return {}
        }
    },
    removeChild: {
        value: v_saf(function removeChild() {
            v_console_log("  [*] Node -> removeChild[func]", [].slice.call(arguments));
        })
    },
    contains: {
        value: v_saf(function contains() {
            v_console_log("  [*] Node -> contains[func]", [].slice.call(arguments));
        })
    },
    childNodes: {
        get() {
            v_console_log("  [*] Node -> childNodes[get]", {});
            return {}
        }
    },
    ELEMENT_NODE: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    ATTRIBUTE_NODE: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    TEXT_NODE: {"value": 3, "writable": false, "enumerable": true, "configurable": false},
    CDATA_SECTION_NODE: {"value": 4, "writable": false, "enumerable": true, "configurable": false},
    ENTITY_REFERENCE_NODE: {"value": 5, "writable": false, "enumerable": true, "configurable": false},
    ENTITY_NODE: {"value": 6, "writable": false, "enumerable": true, "configurable": false},
    PROCESSING_INSTRUCTION_NODE: {"value": 7, "writable": false, "enumerable": true, "configurable": false},
    COMMENT_NODE: {"value": 8, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_NODE: {"value": 9, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_TYPE_NODE: {"value": 10, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_FRAGMENT_NODE: {"value": 11, "writable": false, "enumerable": true, "configurable": false},
    NOTATION_NODE: {"value": 12, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_DISCONNECTED: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_PRECEDING: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_FOLLOWING: {"value": 4, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_CONTAINS: {"value": 8, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_CONTAINED_BY: {"value": 16, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {
        "value": 32,
        "writable": false,
        "enumerable": true,
        "configurable": false
    },
    [Symbol.toStringTag]: {value: "Node", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
    [Symbol.toStringTag]: {value: "XMLHttpRequestEventTarget", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(UIEvent.prototype, {
    [Symbol.toStringTag]: {value: "UIEvent", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Document.prototype, {
    createElement: {
        value: v_saf(function createElement() {
            v_console_log("  [*] Document -> createElement[func]", [].slice.call(arguments));
            return _createElement(arguments[0])
        })
    },
    defaultView: {
        get() {
            v_console_log("  [*] Document -> defaultView[get]", {});
            return {}
        }
    },
    documentElement: {
        get() {
            v_console_log("  [*] Document -> documentElement[get]", document);
            return document
        }
    },
    createDocumentFragment: {
        value: v_saf(function createDocumentFragment() {
            v_console_log("  [*] Document -> createDocumentFragment[func]", [].slice.call(arguments));
        })
    },
    compatMode: {
        get() {
            v_console_log("  [*] Document -> compatMode[get]", "CSS1Compat");
            return "CSS1Compat"
        }
    },
    createTextNode: {
        value: v_saf(function createTextNode() {
            v_console_log("  [*] Document -> createTextNode[func]", [].slice.call(arguments));
        })
    },
    onreadystatechange: {
        get() {
            v_console_log("  [*] Document -> onreadystatechange[get]", {});
            return {}
        }
    },
    onmouseenter: {
        get() {
            v_console_log("  [*] Document -> onmouseenter[get]", {});
            return {}
        }
    },
    onmouseleave: {
        get() {
            v_console_log("  [*] Document -> onmouseleave[get]", {});
            return {}
        }
    },
    getSelection: {
        value: v_saf(function getSelection() {
            v_console_log("  [*] Document -> getSelection[func]", [].slice.call(arguments));
        })
    },
    execCommand: {
        value: v_saf(function execCommand() {
            v_console_log("  [*] Document -> execCommand[func]", [].slice.call(arguments));
        })
    },
    onreadystatechange: {"enumerable": true, "configurable": true},
    onmouseenter: {"enumerable": true, "configurable": true},
    onmouseleave: {"enumerable": true, "configurable": true},
    [Symbol.toStringTag]: {value: "Document", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Element.prototype, {
    innerHTML: {
        set() {
            v_console_log("  [*] Element -> innerHTML[set]", [].slice.call(arguments));
        }
    },
    getElementsByTagName: {
        value: v_saf(function getElementsByTagName() {
            v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));
        })
    },
    id: {
        get() {
            v_console_log("  [*] Element -> id[get]", "wait");
            return "wait"
        }
    },
    className: {
        get() {
            v_console_log("  [*] Element -> className[get]", "geetest_holder geetest_douyufullpage");
            return "geetest_holder geetest_douyufullpage"
        }, set() {
            v_console_log("  [*] Element -> className[set]", [].slice.call(arguments));
            return "geetest_holder geetest_douyufullpage"
        }
    },
    setAttribute: {
        value: v_saf(function setAttribute() {
            v_console_log("  [*] Element -> setAttribute[func]", [].slice.call(arguments));
        })
    },
    tagName: {
        get() {
            v_console_log("  [*] Element -> tagName[get]", this.v_tagName);
            return this.v_tagName
        }
    },
    getBoundingClientRect: {
        value: v_saf(function getBoundingClientRect() {
            v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "Element", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(XMLHttpRequest.prototype, {
    UNSENT: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    OPENED: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    HEADERS_RECEIVED: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    LOADING: {"value": 3, "writable": false, "enumerable": true, "configurable": false},
    DONE: {"value": 4, "writable": false, "enumerable": true, "configurable": false},
    [Symbol.toStringTag]: {value: "XMLHttpRequest", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(MouseEvent.prototype, {
    [Symbol.toStringTag]: {value: "MouseEvent", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLElement.prototype, {
    onerror: {
        set() {
            v_console_log("  [*] HTMLElement -> onerror[set]", [].slice.call(arguments));
        }
    },
    onload: {
        set() {
            v_console_log("  [*] HTMLElement -> onload[set]", [].slice.call(arguments));
        }
    },
    style: {
        get() {
            v_console_log("  [*] HTMLElement -> style[get]", this.v_style);
            return this.v_style
        }
    },
    offsetHeight: {
        get() {
            v_console_log("  [*] HTMLElement -> offsetHeight[get]", 0);
            return 0
        }
    },
    offsetWidth: {
        get() {
            v_console_log("  [*] HTMLElement -> offsetWidth[get]", 3);
            return 3
        }
    },
    offsetTop: {
        get() {
            v_console_log("  [*] HTMLElement -> offsetTop[get]", 0);
            return 0
        }
    },
    onmouseenter: {
        get() {
            v_console_log("  [*] HTMLElement -> onmouseenter[get]", {});
            return {}
        }
    },
    onmouseleave: {
        get() {
            v_console_log("  [*] HTMLElement -> onmouseleave[get]", {});
            return {}
        }
    },
    onmouseenter: {"enumerable": true, "configurable": true},
    onmouseleave: {"enumerable": true, "configurable": true},
    [Symbol.toStringTag]: {value: "HTMLElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLScriptElement.prototype, {
    charset: {
        set() {
            v_console_log("  [*] HTMLScriptElement -> charset[set]", [].slice.call(arguments));
        }
    },
    async: {
        set() {
            v_console_log("  [*] HTMLScriptElement -> async[set]", [].slice.call(arguments));
        }
    },
    src: {
        set() {
            v_console_log("  [*] HTMLScriptElement -> src[set]", [].slice.call(arguments));
        }
    },
    crossOrigin: {
        set() {
            v_console_log("  [*] HTMLScriptElement -> crossOrigin[set]", [].slice.call(arguments));
        }
    },
    [Symbol.toStringTag]: {value: "HTMLScriptElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLCanvasElement.prototype, {
    getContext: {
        value: v_saf(function getContext() {
            v_console_log("  [*] HTMLCanvasElement -> getContext[func]", [].slice.call(arguments));
            if (arguments[0] == '2d') {
                var r = v_new(CanvasRenderingContext2D);
                return r
            }
            ;
            if (arguments[0] == 'webgl' || arguments[0] == 'experimental-webgl') {
                var r = v_new(WebGLRenderingContext);
                r._canvas = this;
                return r
            }
            ;
            return null
        })
    },
    [Symbol.toStringTag]: {value: "HTMLCanvasElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLLinkElement.prototype, {
    href: {
        set() {
            v_console_log("  [*] HTMLLinkElement -> href[set]", [].slice.call(arguments));
        }
    },
    rel: {
        set() {
            v_console_log("  [*] HTMLLinkElement -> rel[set]", [].slice.call(arguments));
        }
    },
    [Symbol.toStringTag]: {value: "HTMLLinkElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLAnchorElement.prototype, {
    target: {
        set() {
            v_console_log("  [*] HTMLAnchorElement -> target[set]", [].slice.call(arguments));
        }
    },
    href: {
        set() {
            v_console_log("  [*] HTMLAnchorElement -> href[set]", [].slice.call(arguments));
        }
    },
    [Symbol.toStringTag]: {value: "HTMLAnchorElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLImageElement.prototype, {
    src: {
        set() {
            v_console_log("  [*] HTMLImageElement -> src[set]", [].slice.call(arguments));
        }
    },
    [Symbol.toStringTag]: {value: "HTMLImageElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLTextAreaElement.prototype, {
    value: {
        set() {
            v_console_log("  [*] HTMLTextAreaElement -> value[set]", [].slice.call(arguments));
        }
    },
    select: {
        value: v_saf(function select() {
            v_console_log("  [*] HTMLTextAreaElement -> select[func]", [].slice.call(arguments));
        })
    },
    [Symbol.toStringTag]: {value: "HTMLTextAreaElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Window.prototype, {
    TEMPORARY: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    PERSISTENT: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    [Symbol.toStringTag]: {value: "Window", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Screen.prototype, {
    [Symbol.toStringTag]: {value: "Screen", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: {value: "HTMLDocument", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLHeadElement.prototype, {
    [Symbol.toStringTag]: {value: "HTMLHeadElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLBodyElement.prototype, {
    [Symbol.toStringTag]: {value: "HTMLBodyElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {value: "Location", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
    [Symbol.toStringTag]: {value: "CanvasRenderingContext2D", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Performance.prototype, {
    [Symbol.toStringTag]: {value: "Performance", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceEntry.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceEntry", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceElementTiming.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceElementTiming", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceEventTiming.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceEventTiming", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceLongTaskTiming.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceLongTaskTiming", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceMark.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceMark", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceMeasure.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceMeasure", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceNavigation.prototype, {
    TYPE_NAVIGATE: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    TYPE_RELOAD: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    TYPE_BACK_FORWARD: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    TYPE_RESERVED: {"value": 255, "writable": false, "enumerable": true, "configurable": false},
    [Symbol.toStringTag]: {value: "PerformanceNavigation", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceResourceTiming", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceNavigationTiming.prototype, {
    [Symbol.toStringTag]: {
        value: "PerformanceNavigationTiming",
        writable: false,
        enumerable: false,
        configurable: true
    },
})
Object.defineProperties(PerformanceObserver.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceObserver", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceObserverEntryList.prototype, {
    [Symbol.toStringTag]: {
        value: "PerformanceObserverEntryList",
        writable: false,
        enumerable: false,
        configurable: true
    },
})
Object.defineProperties(PerformancePaintTiming.prototype, {
    [Symbol.toStringTag]: {value: "PerformancePaintTiming", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceServerTiming.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceServerTiming", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PerformanceTiming.prototype, {
    [Symbol.toStringTag]: {value: "PerformanceTiming", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLMediaElement.prototype, {
    NETWORK_EMPTY: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    NETWORK_IDLE: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    NETWORK_LOADING: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    NETWORK_NO_SOURCE: {"value": 3, "writable": false, "enumerable": true, "configurable": false},
    HAVE_NOTHING: {"value": 0, "writable": false, "enumerable": true, "configurable": false},
    HAVE_METADATA: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    HAVE_CURRENT_DATA: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    HAVE_FUTURE_DATA: {"value": 3, "writable": false, "enumerable": true, "configurable": false},
    HAVE_ENOUGH_DATA: {"value": 4, "writable": false, "enumerable": true, "configurable": false},
    [Symbol.toStringTag]: {value: "HTMLMediaElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLUnknownElement.prototype, {
    [Symbol.toStringTag]: {value: "HTMLUnknownElement", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {value: "Storage", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(Touch.prototype, {
    [Symbol.toStringTag]: {value: "Touch", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(TouchEvent.prototype, {
    [Symbol.toStringTag]: {value: "TouchEvent", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(PointerEvent.prototype, {
    [Symbol.toStringTag]: {value: "PointerEvent", writable: false, enumerable: false, configurable: true},
})
Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {value: "HTMLDivElement", writable: false, enumerable: false, configurable: true},
})


if (typeof __dirname != 'undefined') {
    __dirname = undefined
}
if (typeof __filename != 'undefined') {
    __filename = undefined
}
if (typeof require != 'undefined') {
    require = undefined
}
if (typeof exports != 'undefined') {
    exports = undefined
}
if (typeof module != 'undefined') {
    module = undefined
}
if (typeof Buffer != 'undefined') {
    Buffer = undefined
}
var __globalThis__ = typeof global != 'undefined' ? global : this
var window = new Proxy(v_new(Window), {
    get(a, b) {
        return a[b] || __globalThis__[b]
    },
    set(a, b, c) {
        if (b == 'onclick' && typeof c == 'function') {
            window.addEventListener('click', c)
        }
        if (b == 'onmousedown' && typeof c == 'function') {
            window.addEventListener('mousedown', c)
        }
        if (b == 'onmouseup' && typeof c == 'function') {
            window.addEventListener('mouseup', c)
        }
        __globalThis__[b] = a[b] = c
    },
})
var v_hasOwnProperty = Object.prototype.hasOwnProperty
Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty() {
    if (this == window) {
        return v_hasOwnProperty.apply(__globalThis__, arguments)
    }
    return v_hasOwnProperty.apply(this, arguments)
})
Object.defineProperties(__globalThis__, {[Symbol.toStringTag]: {value: 'Window'}})
Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
window.parent = window
window.top = window
window.frames = window
window.self = window
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.clientInformation = navigator
window.performance = v_new(Performance)
window.crypto = v_new(Crypto)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)

function _createElement(name) {
    var htmlmap = {
        "HTMLElement": ["abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "code", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "hgroup", "i", "kbd", "main", "mark", "nav", "noscript", "rp", "rt", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr"],
        "HTMLScriptElement": ["script"],
        "HTMLCanvasElement": ["canvas"],
        "HTMLLinkElement": ["link"],
        "HTMLAnchorElement": ["a"],
        "HTMLImageElement": ["img"],
        "HTMLTextAreaElement": ["textarea"],
        "HTMLHeadElement": ["head"],
        "HTMLBodyElement": ["body"],
        "HTMLMediaElement": [],
        "HTMLUnknownElement": []
    }
    var ret, htmlmapkeys = Object.keys(htmlmap)
    name = name.toLocaleLowerCase()
    for (var i = 0; i < htmlmapkeys.length; i++) {
        if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1) {
            ret = v_new(window[htmlmapkeys[i]])
            break
        }
    }
    if (!ret) {
        ret = v_new(HTMLUnknownElement)
    }
    if (typeof CSSStyleDeclaration != 'undefined') {
        ret.v_style = v_new(CSSStyleDeclaration)
    }
    ret.v_tagName = name.toUpperCase()
    return ret
}

function init_cookie(cookie) {
    var cache = (cookie || "").trim();
    if (!cache) {
        cache = ''
    } else if (cache.charAt(cache.length - 1) != ';') {
        cache += '; '
    } else {
        cache += ' '
    }
    Object.defineProperty(Document.prototype, 'cookie', {
        get: function () {
            var r = cache.slice(0, cache.length - 2);
            v_console_log('  [*] document -> cookie[get]', r)
            return r
        },
        set: function (c) {
            v_console_log('  [*] document -> cookie[set]', c)
            var ncookie = c.split(";")[0].split("=");
            if (!ncookie.slice(1).join('')) {
                return c
            }
            var key = ncookie[0].trim()
            var val = ncookie.slice(1).join('').trim()
            var newc = key + '=' + val
            var flag = false;
            var temp = cache.split("; ").map(function (a) {
                if (a.split("=")[0] === key) {
                    flag = true;
                    return newc;
                }
                return a;
            })
            cache = temp.join("; ");
            if (!flag) {
                cache += newc + "; ";
            }
            return cache;
        }
    });
}

function v_hook_href(obj, name, initurl) {
    var r = Object.defineProperty(obj, 'href', {
        get: function () {
            if (!(this.protocol) && !(this.host)) {
                r = ''
            } else {
                r = this.protocol + "//" + this.host + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
            }
            v_console_log(`  [*] ${name || obj.constructor.name} -> href[get]:`, JSON.stringify(r))
            return r
        },
        set: function (href) {
            href = href.trim()
            v_console_log(`  [*] ${name || obj.constructor.name} -> href[set]:`, JSON.stringify(href))
            if (href.startsWith("http://") || href.startsWith("https://")) {/*ok*/
            } else if (href.startsWith("//")) {
                href = (this.protocol ? this.protocol : 'http:') + href
            } else {
                href = this.protocol + "//" + this.host + (this.port ? ":" + this.port : "") + '/' + ((href[0] == '/') ? href.slice(1) : href)
            }
            var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
            this.protocol = a[1] ? a[1] : "";
            this.host = a[2] ? a[2] : "";
            this.port = a[3] ? a[3] : "";
            this.pathname = a[4] ? a[4] : "";
            this.search = a[5] ? a[5] : "";
            this.hash = a[6] ? a[6] : "";
            this.hostname = this.host;
            this.origin = this.protocol + "//" + this.host + (this.port ? ":" + this.port : "");
        }
    });
    if (initurl && initurl.trim()) {
        var temp = v_new_toggle;
        v_new_toggle = true;
        r.href = initurl;
        v_new_toggle = temp;
    }
    return r
}

function v_hook_storage() {
    Storage.prototype.clear = v_saf(function () {
        v_console_log(`  [*] Storage -> clear[func]:`);
        var self = this;
        Object.keys(self).forEach(function (key) {
            delete self[key];
        });
    }, 'clear')
    Storage.prototype.getItem = v_saf(function (key) {
        v_console_log(`  [*] Storage -> getItem[func]:`, key);
        var r = (this.hasOwnProperty(key) ? String(this[key]) : null);
        return r
    }, 'getItem')
    Storage.prototype.setItem = v_saf(function (key, val) {
        v_console_log(`  [*] Storage -> setItem[func]:`, key, val);
        this[key] = (val === undefined) ? null : String(val)
    }, 'setItem')
    Storage.prototype.key = v_saf(function (key) {
        v_console_log(`  [*] Storage -> key[func]:`, key);
        return Object.keys(this)[key || 0];
    }, 'key')
    Storage.prototype.removeItem = v_saf(function (key) {
        v_console_log(`  [*] Storage -> removeItem[func]:`, key);
        delete this[key];
    }, 'removeItem')
    Object.defineProperty(Storage.prototype, 'length', {
        get: function () {
            if (this === Storage.prototype) {
                throw TypeError('Illegal invocation')
            }
            return Object.keys(this).length
        }
    })
    window.sessionStorage = new Proxy(sessionStorage, {
        set: function (a, b, c) {
            v_console_log(`  [*] Storage -> [set]:`, b, c);
            return a[b] = String(c)
        }, get: function (a, b) {
            v_console_log(`  [*] Storage -> [get]:`, b, a[b]);
            return a[b]
        },
    })
    window.localStorage = new Proxy(localStorage, {
        set: function (a, b, c) {
            v_console_log(`  [*] Storage -> [set]:`, b, c);
            return a[b] = String(c)
        }, get: function (a, b) {
            v_console_log(`  [*] Storage -> [get]:`, b, a[b]);
            return a[b]
        },
    })
}

function v_init_document() {
    Document.prototype.getElementById = v_saf(function getElementById(name) {
        var r = v_getele(name, 'getElementById');
        v_console_log('  [*] Document -> getElementById', name, r);
        return r
    })
    Document.prototype.querySelector = v_saf(function querySelector(name) {
        var r = v_getele(name, 'querySelector');
        v_console_log('  [*] Document -> querySelector', name, r);
        return r
    })
    Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name) {
        var r = v_geteles(name, 'getElementsByClassName');
        v_console_log('  [*] Document -> getElementsByClassName', name, r);
        return r
    })
    Document.prototype.getElementsByName = v_saf(function getElementsByName(name) {
        var r = v_geteles(name, 'getElementsByName');
        v_console_log('  [*] Document -> getElementsByName', name, r);
        return r
    })
    Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name) {
        var r = v_geteles(name, 'getElementsByTagName');
        v_console_log('  [*] Document -> getElementsByTagName', name, r);
        return r
    })
    Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name) {
        var r = v_geteles(name, 'getElementsByTagNameNS');
        v_console_log('  [*] Document -> getElementsByTagNameNS', name, r);
        return r
    })
    Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name) {
        var r = v_geteles(name, 'querySelectorAll');
        v_console_log('  [*] Document -> querySelectorAll', name, r);
        return r
    })
    var v_head = v_new(HTMLHeadElement)
    var v_body = v_new(HTMLBodyElement)
    Object.defineProperties(Document.prototype, {
        head: {
            get() {
                v_console_log("  [*] Document -> head[get]", v_head);
                return v_head
            }
        },
        body: {
            get() {
                v_console_log("  [*] Document -> body[get]", v_body);
                return v_body
            }
        },
    })
}

function v_init_canvas() {
    HTMLCanvasElement.prototype.getContext = function () {
        if (arguments[0] == '2d') {
            var r = v_new(CanvasRenderingContext2D);
            return r
        }
        ;
        if (arguments[0] == 'webgl' || arguments[0] == 'experimental-webgl') {
            var r = v_new(WebGLRenderingContext);
            r._canvas = this;
            return r
        }
        ;
        return null
    }
    HTMLCanvasElement.prototype.toDataURL = function () {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"
    }
}

var v_start_stamp = +new Date
var v_fake_stamp = +new Date

function v_init_event_target() {
    v_events = {}

    function add_event(_this, x) {
        if (!v_events[x[0]]) {
            v_events[x[0]] = []
        }
        v_events[x[0]].push([_this, x[1].bind(_this)])
    }

    function _mk_mouse_event(type, canBubble, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget) {
        if (type == 'click') {
            var m = new v_saf(function PointerEvent() {
            })
            m.pointerType = "mouse"
        } else {
            var m = new v_saf(function MouseEvent() {
            })
        }
        m.isTrusted = true
        m.type = type
        m.canBubble = canBubble
        m.cancelable = cancelable
        m.view = view
        m.detail = detail
        m.screenX = screenX;
        m.movementX = screenX
        m.screenY = screenY;
        m.movementY = screenY
        m.clientX = clientX;
        m.layerX = clientX;
        m.offsetX = clientX;
        m.pageX = clientX;
        m.x = clientX;
        m.clientY = clientY;
        m.layerY = clientY;
        m.offsetY = clientY;
        m.pageY = clientY;
        m.y = clientY;
        m.ctrlKey = ctrlKey
        m.altKey = altKey
        m.shiftKey = shiftKey
        m.metaKey = metaKey
        m.button = button
        m.relatedTarget = relatedTarget
        return m
    }

    function make_mouse(type, x, y) {
        return _mk_mouse_event(type, true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null)
    }

    function mouse_click(x, y) {
        for (var i = 0; i < (v_events['click'] || []).length; i++) {
            v_events['click'][i][1](make_mouse('click', x, y))
        }
        for (var i = 0; i < (v_events['mousedown'] || []).length; i++) {
            v_events['mousedown'][i][1](make_mouse('mousedown', x, y))
        }
        for (var i = 0; i < (v_events['mouseup'] || []).length; i++) {
            v_events['mouseup'][i][1](make_mouse('mouseup', x, y))
        }
    }

    var offr = Math.random()

    function make_touch(_this, type, x, y, timeStamp) {
        var offx = Math.random()
        var offy = Math.random()
        var t = v_new(new v_saf(function Touch() {
        }))
        t = clientX = offx + x
        t = clientY = offy + y
        t = force = 1
        t = identifier = 0
        t = pageX = offx + x
        t = pageY = offy + y
        t = radiusX = 28 + offr
        t = radiusY = 28 + offr
        t = rotationAngle = 0
        t = screenX = 0
        t = screenY = 0
        var e = v_new(new v_saf(function TouchEvent() {
        }))
        e.isTrusted = true
        e.altKey = false
        e.bubbles = true
        e.cancelBubble = false
        e.cancelable = false
        e.changedTouches = e.targetTouches = e.touches = [t]
        e.composed = true
        e.ctrlKey = false
        e.currentTarget = null
        e.defaultPrevented = false
        e.detail = 0
        e.eventPhase = 0
        e.metaKey = false
        e.path = _this == window ? [window] : [_this, window]
        e.returnValue = true
        e.shiftKey = false
        e.sourceCapabilities = new v_saf(function InputDeviceCapabilities() {
            this.firesTouchEvents = true
        })
        e.srcElement = _this
        e.target = _this
        e.type = type
        e.timeStamp = timeStamp == undefined ? (new Date - v_start_stamp) : ((v_fake_stamp += Math.random() * 20) - v_start_stamp)
        e.view = window
        e.which = 0
        return e
    }

    function make_trace(x1, y1, x2, y2) {
        // 贝塞尔曲线
        function step_len(x1, y1, x2, y2) {
            var ln = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
            return (ln / 10) ^ 0
        }

        var slen = step_len(x1, y1, x2, y2)
        if (slen < 3) {
            return []
        }

        function factorial(x) {
            for (var y = 1; x > 1; x--) {
                y *= x
            }
            return y;
        }

        var lp = Math.random()
        var rp = Math.random()
        var xx1 = (x1 + (x2 - x1) / 12 * (4 - lp * 4)) ^ 0
        var yy1 = (y1 + (y2 - y1) / 12 * (8 + lp * 4)) ^ 0
        var xx2 = (x1 + (x2 - x1) / 12 * (8 + rp * 4)) ^ 0
        var yy2 = (y1 + (y2 - y1) / 12 * (4 - rp * 4)) ^ 0
        var points = [[x1, y1], [xx1, yy1], [xx2, yy2], [x2, y2]]
        var N = points.length
        var n = N - 1
        var traces = []
        var step = slen
        for (var T = 0; T < step + 1; T++) {
            var t = T * (1 / step)
            var x = 0
            var y = 0
            for (var i = 0; i < N; i++) {
                var B = factorial(n) * t ** i * (1 - t) ** (n - i) / (factorial(i) * factorial(n - i))
                x += points[i][0] * B
                y += points[i][1] * B
            }
            traces.push([x ^ 0, y ^ 0])
        }
        return traces
    }

    function touch(x1, y1, x2, y2) {
        if (x2 == undefined && y2 == undefined) {
            x2 = x1
            y2 = y1
        }
        var traces = make_trace(x1, y1, x2, y2)
        console.log('traces:', traces)
        for (var i = 0; i < (v_events['touchstart'] || []).length; i++) {
            v_events['touchstart'][i][1](make_touch(v_events['touchstart'][i][0], 'touchstart', x1, y1))
        }
        for (var j = 0; j < traces.length; j++) {
            var x = traces[j][0]
            var y = traces[j][0]
            for (var i = 0; i < (v_events['touchmove'] || []).length; i++) {
                v_events['touchmove'][i][1](make_touch(v_events['touchmove'][i][0], 'touchmove', x, y))
            }
        }
        for (var i = 0; i < (v_events['touchend'] || []).length; i++) {
            v_events['touchend'][i][1](make_touch(v_events['touchend'][i][0], 'touchend', x2, y2))
        }
    }

    function mouse_move(x1, y1, x2, y2) {
        if (x2 == undefined && y2 == undefined) {
            x2 = x1
            y2 = y1
        }
        var traces = make_trace(x1, y1, x2, y2)
        console.log('traces:', traces)
        for (var j = 0; j < traces.length; j++) {
            var x = traces[j][0]
            var y = traces[j][0]
            for (var i = 0; i < (v_events['mousemove'] || []).length; i++) {
                v_events['mousemove'][i][1](make_touch(v_events['mousemove'][i][0], 'mousemove', x, y))
            }
        }
    }

    window.make_mouse = make_mouse
    window.mouse_click = mouse_click
    window.mouse_move = mouse_move
    window.touch = touch
    EventTarget.prototype.addEventListener = function () {
        v_console_log('  [*] EventTarget -> addEventListener[func]', this === window ? '[Window]' : this === document ? '[Document]' : this, [].slice.call(arguments));
        add_event(this, [].slice.call(arguments));
        return null
    }
    EventTarget.prototype.dispatchEvent = function () {
        v_console_log('  [*] EventTarget -> dispatchEvent[func]', this === window ? '[Window]' : this === document ? '[Document]' : this, [].slice.call(arguments));
        add_event(this, [].slice.call(arguments));
        return null
    }
    EventTarget.prototype.removeEventListener = function () {
        v_console_log('  [*] EventTarget -> removeEventListener[func]', this === window ? '[Window]' : this === document ? '[Document]' : this, [].slice.call(arguments));
        add_event(this, [].slice.call(arguments));
        return null
    }
}

function v_init_Element_prototype() {
    Element.prototype.getAnimations = Element.prototype.getAnimations || v_saf(function getAnimations() {
        v_console_log("  [*] Element -> getAnimations[func]", [].slice.call(arguments));
    })
    Element.prototype.getAttribute = Element.prototype.getAttribute || v_saf(function getAttribute() {
        v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));
    })
    Element.prototype.getAttributeNS = Element.prototype.getAttributeNS || v_saf(function getAttributeNS() {
        v_console_log("  [*] Element -> getAttributeNS[func]", [].slice.call(arguments));
    })
    Element.prototype.getAttributeNames = Element.prototype.getAttributeNames || v_saf(function getAttributeNames() {
        v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments));
    })
    Element.prototype.getAttributeNode = Element.prototype.getAttributeNode || v_saf(function getAttributeNode() {
        v_console_log("  [*] Element -> getAttributeNode[func]", [].slice.call(arguments));
    })
    Element.prototype.getAttributeNodeNS = Element.prototype.getAttributeNodeNS || v_saf(function getAttributeNodeNS() {
        v_console_log("  [*] Element -> getAttributeNodeNS[func]", [].slice.call(arguments));
    })
    Element.prototype.getBoundingClientRect = Element.prototype.getBoundingClientRect || v_saf(function getBoundingClientRect() {
        v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));
    })
    Element.prototype.getClientRects = Element.prototype.getClientRects || v_saf(function getClientRects() {
        v_console_log("  [*] Element -> getClientRects[func]", [].slice.call(arguments));
    })
    Element.prototype.getElementsByClassName = Element.prototype.getElementsByClassName || v_saf(function getElementsByClassName() {
        v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));
    })
    Element.prototype.getElementsByTagName = Element.prototype.getElementsByTagName || v_saf(function getElementsByTagName() {
        v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));
    })
    Element.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS || v_saf(function getElementsByTagNameNS() {
        v_console_log("  [*] Element -> getElementsByTagNameNS[func]", [].slice.call(arguments));
    })
    Element.prototype.getInnerHTML = Element.prototype.getInnerHTML || v_saf(function getInnerHTML() {
        v_console_log("  [*] Element -> getInnerHTML[func]", [].slice.call(arguments));
    })
    Element.prototype.hasAttribute = Element.prototype.hasAttribute || v_saf(function hasAttribute() {
        v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments));
    })
    Element.prototype.hasAttributeNS = Element.prototype.hasAttributeNS || v_saf(function hasAttributeNS() {
        v_console_log("  [*] Element -> hasAttributeNS[func]", [].slice.call(arguments));
    })
    Element.prototype.hasAttributes = Element.prototype.hasAttributes || v_saf(function hasAttributes() {
        v_console_log("  [*] Element -> hasAttributes[func]", [].slice.call(arguments));
    })
    Element.prototype.hasPointerCapture = Element.prototype.hasPointerCapture || v_saf(function hasPointerCapture() {
        v_console_log("  [*] Element -> hasPointerCapture[func]", [].slice.call(arguments));
    })
    Element.prototype.webkitMatchesSelector = Element.prototype.webkitMatchesSelector || v_saf(function webkitMatchesSelector() {
        v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments));
    })
}

function v_init_DOMTokenList_prototype() {
    DOMTokenList.prototype.add = DOMTokenList.prototype.add || v_saf(function add() {
        v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.contains = DOMTokenList.prototype.contains || v_saf(function contains() {
        v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.entries = DOMTokenList.prototype.entries || v_saf(function entries() {
        v_console_log("  [*] DOMTokenList -> entries[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.forEach = DOMTokenList.prototype.forEach || v_saf(function forEach() {
        v_console_log("  [*] DOMTokenList -> forEach[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.item = DOMTokenList.prototype.item || v_saf(function item() {
        v_console_log("  [*] DOMTokenList -> item[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.keys = DOMTokenList.prototype.keys || v_saf(function keys() {
        v_console_log("  [*] DOMTokenList -> keys[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.length = DOMTokenList.prototype.length || v_saf(function length() {
        v_console_log("  [*] DOMTokenList -> length[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.remove = DOMTokenList.prototype.remove || v_saf(function remove() {
        v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.replace = DOMTokenList.prototype.replace || v_saf(function replace() {
        v_console_log("  [*] DOMTokenList -> replace[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.supports = DOMTokenList.prototype.supports || v_saf(function supports() {
        v_console_log("  [*] DOMTokenList -> supports[func]", [].slice.call(arguments));
    })
    DOMTokenList.prototype.toggle = DOMTokenList.prototype.toggle || v_saf(function toggle() {
        v_console_log("  [*] DOMTokenList -> toggle[func]", [].slice.call(arguments));
    })
}

function v_init_CSSStyleDeclaration_prototype() {
    CSSStyleDeclaration.prototype["zoom"] = ''
    CSSStyleDeclaration.prototype["resize"] = ''
    CSSStyleDeclaration.prototype["text-rendering"] = ''
    CSSStyleDeclaration.prototype["text-align-last"] = ''
}

function v_init_PointerEvent_prototype() {
    PointerEvent.prototype.getCoalescedEvents = v_saf(function getCoalescedEvents() {
        v_console_log("  [*] PointerEvent -> getCoalescedEvents[func]", [].slice.call(arguments));
    })
    PointerEvent.prototype.getPredictedEvents = v_saf(function getPredictedEvents() {
        v_console_log("  [*] PointerEvent -> getPredictedEvents[func]", [].slice.call(arguments));
    })
}

function v_init_PerformanceTiming_prototype() {
    try {
        Object.defineProperties(PerformanceTiming.prototype, {
            connectEnd: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function connectEnd() {
                    v_console_log("  [*] PerformanceTiming -> connectEnd[get]", [].slice.call(arguments));
                })
            },
            connectStart: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function connectStart() {
                    v_console_log("  [*] PerformanceTiming -> connectStart[get]", [].slice.call(arguments));
                })
            },
            domComplete: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function domComplete() {
                    v_console_log("  [*] PerformanceTiming -> domComplete[get]", [].slice.call(arguments));
                })
            },
            domContentLoadedEventEnd: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function domContentLoadedEventEnd() {
                    v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", [].slice.call(arguments));
                })
            },
            domContentLoadedEventStart: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function domContentLoadedEventStart() {
                    v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", [].slice.call(arguments));
                })
            },
            domInteractive: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function domInteractive() {
                    v_console_log("  [*] PerformanceTiming -> domInteractive[get]", [].slice.call(arguments));
                })
            },
            domLoading: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function domLoading() {
                    v_console_log("  [*] PerformanceTiming -> domLoading[get]", [].slice.call(arguments));
                })
            },
            domainLookupEnd: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function domainLookupEnd() {
                    v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", [].slice.call(arguments));
                })
            },
            domainLookupStart: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function domainLookupStart() {
                    v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", [].slice.call(arguments));
                })
            },
            fetchStart: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function fetchStart() {
                    v_console_log("  [*] PerformanceTiming -> fetchStart[get]", [].slice.call(arguments));
                })
            },
            loadEventEnd: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventEnd() {
                    v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", [].slice.call(arguments));
                })
            },
            loadEventStart: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function loadEventStart() {
                    v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", [].slice.call(arguments));
                })
            },
            navigationStart: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function navigationStart() {
                    v_console_log("  [*] PerformanceTiming -> navigationStart[get]", [].slice.call(arguments));
                })
            },
            redirectEnd: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectEnd() {
                    v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", [].slice.call(arguments));
                })
            },
            redirectStart: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectStart() {
                    v_console_log("  [*] PerformanceTiming -> redirectStart[get]", [].slice.call(arguments));
                })
            },
            requestStart: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function requestStart() {
                    v_console_log("  [*] PerformanceTiming -> requestStart[get]", [].slice.call(arguments));
                })
            },
            responseEnd: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function responseEnd() {
                    v_console_log("  [*] PerformanceTiming -> responseEnd[get]", [].slice.call(arguments));
                })
            },
            responseStart: {
                set: undefined, enumerable: true, configurable: true, get: v_saf(function responseStart() {
                    v_console_log("  [*] PerformanceTiming -> responseStart[get]", [].slice.call(arguments));
                })
            },
            secureConnectionStart: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function secureConnectionStart() {
                    v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", [].slice.call(arguments));
                })
            },
            unloadEventEnd: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function unloadEventEnd() {
                    v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", [].slice.call(arguments));
                })
            },
            unloadEventStart: {
                set: undefined,
                enumerable: true,
                configurable: true,
                get: v_saf(function unloadEventStart() {
                    v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", [].slice.call(arguments));
                })
            },
        })
    } catch (e) {
    }
}

function mk_atob_btoa(r) {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        t = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    return {
        atob: function (r) {
            var a, e, o, h, c, i, n;
            for (i = r.length, c = 0, n = ""; c < i;) {
                do {
                    a = t[255 & r.charCodeAt(c++)]
                } while (c < i && -1 == a);
                if (-1 == a) break;
                do {
                    e = t[255 & r.charCodeAt(c++)]
                } while (c < i && -1 == e);
                if (-1 == e) break;
                n += String.fromCharCode(a << 2 | (48 & e) >> 4);
                do {
                    if (61 == (o = 255 & r.charCodeAt(c++))) return n;
                    o = t[o]
                } while (c < i && -1 == o);
                if (-1 == o) break;
                n += String.fromCharCode((15 & e) << 4 | (60 & o) >> 2);
                do {
                    if (61 == (h = 255 & r.charCodeAt(c++))) return n;
                    h = t[h]
                } while (c < i && -1 == h);
                if (-1 == h) break;
                n += String.fromCharCode((3 & o) << 6 | h)
            }
            return n
        }, btoa: function (r) {
            var t, e, o, h, c, i;
            for (o = r.length, e = 0, t = ""; e < o;) {
                if (h = 255 & r.charCodeAt(e++), e == o) {
                    t += a.charAt(h >> 2), t += a.charAt((3 & h) << 4), t += "==";
                    break
                }
                if (c = r.charCodeAt(e++), e == o) {
                    t += a.charAt(h >> 2), t += a.charAt((3 & h) << 4 | (240 & c) >> 4), t += a.charAt((15 & c) << 2), t += "=";
                    break
                }
                i = r.charCodeAt(e++), t += a.charAt(h >> 2), t += a.charAt((3 & h) << 4 | (240 & c) >> 4), t += a.charAt((15 & c) << 2 | (192 & i) >> 6), t += a.charAt(63 & i)
            }
            return t
        }
    }
}

var atob_btoa = mk_atob_btoa()
window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')

init_cookie("")
v_hook_href(window.location, 'location', "https://www.geetest.com/demo/click-float.html")
v_hook_storage()
v_init_document()
v_init_canvas()
v_init_event_target()
v_init_Element_prototype()
v_init_DOMTokenList_prototype()
v_init_CSSStyleDeclaration_prototype()
v_init_PointerEvent_prototype()
v_init_PerformanceTiming_prototype()
window.innerWidth = 2560
window.innerHeight = 582
window.outerHeight = 1392
window.outerWidth = 2560
window.isSecureContext = true
window.origin = location.origin

function v_getele(name, func) {
    if (name == "text" && func == "getElementById") {
        return v_new(HTMLDivElement)
    }
    if (name == "wait" && func == "getElementById") {
        return v_new(HTMLDivElement)
    }
    if (name == "btn" && func == "getElementById") {
        return v_new(HTMLDivElement)
    }
    if (name == "captcha" && func == "getElementById") {
        return v_new(HTMLDivElement)
    }
    return null
}

function v_geteles(name, func) {
    if (name == "head" && func == "getElementsByTagName") {
        return [v_new(HTMLHeadElement)]
    }
    if (name == "body" && func == "getElementsByTagName") {
        return [v_new(HTMLBodyElement)]
    }
    if (name == "td" && func == "getElementsByTagName") {
        return []
    }
    return null
}

var v_Date = Date;
var v_base_time = +new Date;
(function () {
    function ftime() {
        return new v_Date() - v_base_time + v_to_time
    }

    Date = function (_Date) {
        var bind = Function.bind;
        var unbind = bind.bind(bind);

        function instantiate(constructor, args) {
            return new (unbind(constructor, null).apply(null, args));
        }

        var names = Object.getOwnPropertyNames(_Date);
        for (var i = 0; i < names.length; i++) {
            if (names[i] in Date)
                continue;
            var desc = Object.getOwnPropertyDescriptor(_Date, names[i]);
            Object.defineProperty(Date, names[i], desc);
        }

        function Date() {
            var date = instantiate(_Date, [ftime()]);
            return date;
        }

        Date.prototype = _Date.prototype
        return v_saf(Date);
    }(Date);
    Date.now = v_saf(function now() {
        return ftime()
    })
})();
var v_to_time = +new v_Date
// var v_to_time = +new v_Date('Sat Sep 03 2022 11:11:58 GMT+0800') // 自定义起始时间
v_new_toggle = undefined;


function vjekb() {
}

!function () {
    !function (e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module["exports"] ? module["exports"] = e["document"] ? t(e, !0) : function (e) {
            if (!e["document"]) throw new Error("Geetest requires a window with a document");
            return t(e);
        } : t(e);
    }("undefined" != typeof window ? window : this, function (window, e) {
        function $_BAy(e, t, n) {
            var r = e["split"]("."),
                i = r[0] || "div",
                s = new ie(r)["$_BBH"](1)["$_BCa"](function (e, t, n) {
                    return j + e;
                })["$_BDh"](" "),
                o = new oe(i);
            return n("." + r[1], o), "input" == i && o["$_BEI"]({
                "type": "hidden",
                "name": s
            }), o["$_BFK"]({
                "className": s
            }), G(t) ? o["$_BGu"](t) : new se(t)["$_BHH"](function (e, t) {
                o["$_BIk"]($_BAy(e, t, n));
            }), o;
        }

        function $_JL(e) {
            return {
                ".popup_ghost": {},
                ".popup_box": e
            };
        }

        function $_IX(e) {
            try {
                return (e / le)["toFixed"](4) + ce;
            } catch (t) {
                return e + "px";
            }
        }

        function $_Ho(n, e) {
            new se(e)["$_BHH"](function (e, t) {
                n[e] = t;
            });
        }

        function $_GW() {
            var e = new Date(),
                t = e["getFullYear"](),
                n = e["getMonth"]() + 1,
                r = e["getDate"](),
                i = e["getHours"](),
                s = e["getMinutes"](),
                o = e["getSeconds"]();
            return 1 <= n && n <= 9 && (n = "0" + n), 0 <= r && r <= 9 && (r = "0" + r), 0 <= i && i <= 9 && (i = "0" + i), 0 <= s && s <= 9 && (s = "0" + s), 0 <= o && o <= 9 && (o = "0" + o), t + "-" + n + "-" + r + " " + i + ":" + s + ":" + o;
        }

        function $_FB() {
            return new Date()["getTime"]();
        }

        function $_EP() {
            var n = {};
            return function (e, t) {
                if (!t) return n[e["replace"](j, "")];
                n[e] = t;
            };
        }

        function Q() {
            return parseInt(1e4 * Math["random"]()) + new Date()["valueOf"]();
        }

        function Z(e) {
            return "function" == typeof e;
        }

        function W(e) {
            return "boolean" == typeof e;
        }

        function G(e) {
            return "string" == typeof e;
        }

        function J(e) {
            return "number" == typeof e;
        }

        function F(n) {
            return console && console["error"] && console["error"](n), new $(function (e, t) {
                t(n);
            });
        }

        function q(e, t, n) {
            var r = t["$_BJw"],
                i = (t["$_CAR"], "GeetestError");
            return n && (i = "UserCallBackError", e["detail"] = n, r["error_code"] = "604", r["msg"] = e["msg"], c(B(r, "./usercallback/" + (e["detail"] && e["detail"]["type"])), r["post"], r["protocol"])), t["$_CBz"](e), new Error(i + ": " + (e && e["msg"]));
        }

        function I(e, t, n) {
            var r = t["$_BJw"];
            return r["error_code"] = e["error_code"], c(B(r, n), r["post"], r["protocol"]), q({
                "msg": (e = e || {})["error"],
                "code": e["error_code"],
                "error_code": e["error_code"],
                "user_error": e["user_error"]
            }, t);
        }

        function P(e, t, n) {
            var r = {
                "api_appendTo": {
                    "msg": "传给appendTo接口的参数有误：只接受id选择器和DOM元素，并且需保证其存在于页面中",
                    "code": "error_100"
                },
                "api_bindOn": {
                    "msg": "传给bindOn接口的参数有误：只接受id选择器和DOM元素，并且需保证其存在于页面中",
                    "code": "error_101"
                },
                "api_onXxx": {
                    "msg": "传给各回调的参数不是函数类型：请传入函数类型参数",
                    "code": "error_102"
                },
                "config_gt": {
                    "msg": "配置参数gt有误：请检查初始化时传入的配置参数gt（对应申请时的ID）",
                    "code": "error_103"
                },
                "url_get": {
                    "msg": "/get.php请求报错：1.请保持网络畅通；2.检查初始化时传入的配置参数gt和challenge",
                    "code": "error_104"
                },
                "url_ajax": {
                    "msg": "/ajax.php请求报错：1.请保持网络畅通；2.请联系极验官网客服",
                    "code": "error_105"
                },
                "url_refresh": {
                    "msg": "/refresh.php请求报错：1.请保持网络畅通；2.刷新次数本身有限制（10次以内），超过限制请刷新整个页面再试",
                    "code": "error_106"
                },
                "url_skin": {
                    "msg": "皮肤加载失败：1.请保持网络畅通；2.请联系极验官网客服",
                    "code": "error_107"
                },
                "url_picture": {
                    "msg": "验证图片加载失败：1.请保持网络畅通；2.请联系极验官网客服",
                    "code": "error_108"
                },
                "url_reset": {
                    "msg": "/reset.php请求报错：1.请保持网络畅通；2.请联系极验官网客服",
                    "code": "error_109"
                },
                "js_not_exist": {
                    "msg": "验证的js地址不存在",
                    "code": "error_110"
                },
                "js_unload": {
                    "msg": "验证的js地址无法加载",
                    "code": "error_111"
                },
                "config_area": {
                    "msg": "配置参数area有误：只接受id选择器和DOM元素，并且需保证其存在于页面中",
                    "code": "error_112"
                },
                "server_forbidden": {
                    "msg": "服务端forbidden： 请联系极验官网客服",
                    "code": "error_113"
                },
                "config_lack": {
                    "msg": "initGeetest里面的gt或者challenge参数缺少: 请检查初始化参数",
                    "code": "error_114"
                },
                "url_voice": {
                    "msg": "语音文件加载失败：1.请保持网络畅通；2.请联系极验官网客服",
                    "code": "error_115"
                },
                "user_callback": {
                    "msg": "用户回调函数执行异常",
                    "code": "error_116"
                },
                "unknown": {
                    "msg": "无此类错误类型",
                    "code": "error_117"
                },
                "api_bindForm": {
                    "msg": "传给bindForm接口的参数有误：只接受id选择器和DOM元素，并且需保证其存在于页面中",
                    "code": "error_118"
                }
            };
            r[e] || (e = "unknown");
            var i = r[e],
                s = t["$_CAR"];
            return i["user_error"] = function (e, t) {
                var n = {
                        "neterror": {
                            "zh-cn": "网络不给力",
                            "en": "Network failure",
                            "zh-tw": "網絡不給力"
                        },
                        "configerror": {
                            "zh-cn": "配置错误",
                            "en": "Configuration Error",
                            "zh-tw": "配置錯誤"
                        }
                    },
                    r = function (e) {
                        var t = {
                            "neterror": ["error_104", "error_105", "error_106", "error_107", "error_108", "error_109", "error_110", "error_111", "error_113", "error_115"],
                            "configerror": ["error_100", "error_101", "error_102", "error_103", "error_112", "error_114", "error_116", "error_117", "error_118"]
                        };
                        for (var n in t) {
                            var r = t[n];
                            if (r["length"]) for (var i = r["length"] - 1; 0 <= i; i--) if (r[i] === e) return n;
                        }
                        return "";
                    }(e),
                    i = function (e) {
                        var t = (e = (e = e || "zh-cn")["toLowerCase"]())["indexOf"]("-"),
                            n = -1 < t ? e["slice"](0, t) : e;
                        return "zh" === n && (-1 < e["indexOf"]("tw") || -1 < e["indexOf"]("hk") ? n += "-tw" : n += "-cn"), n;
                    }(t);
                return n[r] && n[r][i] || n[r]["en"];
            }(i["code"], s["lang"]), i["error_code"] = i["code"], q(i, t, n);
        }

        function R(e, t, n) {
            return e["offline"] ? Offline["$_CCp"](e, t, n) : void 0 !== _ && _["$_CDF"]() && e["post"] ? function (i, s, o) {
                return new $(function (t, n) {
                    for (var e in o) o["hasOwnProperty"](e) && "number" == typeof o[e] && (o[e] = "" + o[e]);
                    o["a"] && (o["a"] = decodeURIComponent(o["a"]));
                    var r = D(i["protocol"], i["api_server"] || i["apiserver"], s);
                    _["$_CEt"](r, o, function (e) {
                        t(e);
                    }, function (e) {
                        i["error_code"] = 508, c(B(i, r), !0, i["protocol"]), n(e);
                    });
                });
            }(e, t, n) : function (e, i, s) {
                return new $(function (n, t) {
                    var r = "geetest_" + Q();
                    window[r] = function (e) {
                        n(e), window[r] = undefined;
                        try {
                            delete window[r];
                        } catch (t) {
                        }
                    }, s["callback"] = r, M(e, "js", e["protocol"], [e["api_server"] || e["apiserver"]], i, s)["$_CFX"](function () {
                    }, function (e) {
                        t(e);
                    });
                });
            }(e, t, n);
        }

        function B(e, t) {
            var n = "",
                r = 0;
            return e["$_CGS"] && (n = e["$_CGS"]["ip"], r = e["$_CGS"]["pt"]), {
                "time": $_GW(),
                "user_ip": n,
                "captcha_id": e["gt"],
                "challenge": e["challenge"],
                "pt": r,
                "exception_url": t,
                "error_code": e["error_code"] || "",
                "msg": e["msg"] || ""
            };
        }

        function M(r, e, t, n, i, s, o) {
            var _;
            "js" == e ? _ = S : "css" == e ? _ = T : "img" == e ? _ = O : "audio" === e && (_ = A);
            for (var a = function (n) {
                return function (e, t) {
                    _(n, r["timeout"], r, o)["$_CFX"](function (e) {
                        t(e);
                    }, function () {
                        e();
                    });
                };
            }, c = [], l = 0, u = n["length"]; l < u; l += 1) c["push"](a(D(t, n[l], i, s)));
            return new $(function (t, e) {
                $["step"](c)["$_CFX"](function () {
                    e();
                }, function (e) {
                    t(e);
                });
            });
        }

        function D(e, t, n, r) {
            t = function (e) {
                return e["replace"](/^https?:\/\/|\/$/g, "");
            }(t);
            var i = function (e) {
                return 0 !== (e = e["replace"](/\/+/g, "/"))["indexOf"]("/") && (e = "/" + e), e;
            }(n) + function (e) {
                if (!e) return "";
                var n = "?";
                return new se(e)["$_BHH"](function (e, t) {
                    (G(t) || J(t) || W(t)) && (n = n + encodeURIComponent(e) + "=" + encodeURIComponent(t) + "&");
                }), "?" === n && (n = ""), n["replace"](/&$/, "");
            }(r);
            return t && (i = e + t + i), i;
        }

        function A(r, i, s) {
            return new $(function (e, t) {
                var n = new oe("audio");
                n["$_BFK"]({
                    "onerror": function () {
                        c(B(s, r), s["post"], s["protocol"]), t(N);
                    },
                    "onloadedmetadata": function () {
                        e(n);
                    }
                }), n["$_BEI"]({
                    "src": r
                }), f(function () {
                    t(L);
                }, i || C);
            });
        }

        function O(r, i, s, o) {
            return new $(function (e, t) {
                var n = new oe("img");
                n["$_BFK"]({
                    "onerror": function () {
                        c(B(s, r), s["post"], s["protocol"]), t(N);
                    },
                    "onload": function () {
                        e(n);
                    }
                }), !1 !== o && n["$_BFK"]({
                    "crossOrigin": "anonymous"
                })["$_BEI"]({
                    "crossorigin": "anonymous"
                }), n["$_BEI"]({
                    "src": r
                }), f(function () {
                    t(L);
                }, i || C);
            });
        }

        function T(i, s, o) {
            return new $(function (e, t) {
                var n = new oe("link"),
                    r = !1;
                f(function () {
                    r = !0, e(n);
                }, 2e3), n["$_BFK"]({
                    "onerror": function () {
                        c(B(o, i), o["post"], o["protocol"]), n["$_CHG"](), t(N);
                    },
                    "onload": function () {
                        r = !0, e(n);
                    },
                    "href": i,
                    "rel": "stylesheet"
                })["$_CIg"](new oe(d)), f(function () {
                    r || n["$_CHG"](), t(L);
                }, s || C);
            });
        }

        function S(o, _, a) {
            return new $(function (e, t) {
                function s() {
                    i || r["readyState"] && "loaded" !== r["readyState"] && "complete" !== r["readyState"] || (i = !0, f(function () {
                        e(n);
                    }, 0));
                }

                var n = new oe("script"),
                    r = n["$_CJE"],
                    i = !1;
                /static\.geetest\.com/g["test"](o) && n["$_BFK"]({
                    "crossOrigin": "anonymous"
                }), n["$_BFK"]({
                    "charset": "UTF-8",
                    "aysnc": !1,
                    "onload": s,
                    "onreadystatechange": s,
                    "onerror": function () {
                        a["error_code"] = 508, a["gt"] && c(B(a, o["split"]("?")[0]), a["post"], a["protocol"]), n["$_CHG"](), i = !0, t(N);
                    },
                    "src": o
                })["$_CIg"](new oe(d)), f(function () {
                    i || (n["$_CHG"](), a["gt"] && (a["error_code"] = 408, c(B(a, o["split"]("?")[0]), a["post"], a["protocol"]))), t(L);
                }, _ || C);
            });
        }

        function v(e) {
            window["clearTimeout"](e);
        }

        function f(e, t) {
            return window["setTimeout"](e, t);
        }

        function u(e, t) {
            if (e && e["filename"] && /static\.geetest\.com/g["test"](e["filename"]) || t) {
                try {
                    var n = {
                        "captcha_id": window && window["GeeGT"] || "",
                        "challenge": window && window["GeeChallenge"] || "",
                        "error_code": t ? "603" : "602",
                        "exception_url": e["filename"] || "",
                        "pt": /Mobi/i["test"](window["navigator"]["userAgent"]) ? "3" : "0",
                        "time": function _() {
                            var e = new Date(),
                                t = e["getFullYear"](),
                                n = e["getMonth"]() + 1,
                                r = e["getDate"](),
                                i = e["getHours"](),
                                s = e["getMinutes"](),
                                o = e["getSeconds"]();
                            return 1 <= n && n <= 9 && (n = "0" + n), 0 <= r && r <= 9 && (r = "0" + r), 0 <= i && i <= 9 && (i = "0" + i), 0 <= s && s <= 9 && (s = "0" + s), 0 <= o && o <= 9 && (o = "0" + o), t + "-" + n + "-" + r + " " + i + ":" + s + ":" + o;
                        }(),
                        "msg": e["error"] && e["error"]["message"] || e["message"] || "",
                        "stack": e["error"] && e["error"]["stack"] || e["stack"] || ""
                    };
                    a["$_CDF"]() && a["$_CEt"]("https://monitor.geetest.com/monitor/send", n, function (e) {
                    }, function (e) {
                    });
                } catch (r) {
                }
            }
        }

        function o(e, r) {
            return new $(function (t, n) {
                _["$_CEt"](r + "monitor.geetest.com/monitor/send", e, function (e) {
                    t(e);
                }, function (e) {
                    n(e);
                });
            });
        }

        function s(n, r) {
            return new $(function (e, t) {
                M({
                    "timeout": 3e3
                }, "js", r, ["monitor.geetest.com"], "/monitor/send", n)["$_CFX"](function () {
                }, function (e) {
                    t(e);
                });
            });
        }

        function c(e, t, n) {
            if (void 0 !== _ && _["$_CDF"]() && t) try {
                o(e, n);
            } catch (r) {
            } else try {
                s(e, n);
            } catch (r) {
            }
        }

        var t,
            n,
            r,
            i,
            a = {
                "$_CDF": function () {
                    return (window["XDomainRequest"] || window["XMLHttpRequest"] && "withCredentials" in new window["XMLHttpRequest"]()) && window["JSON"];
                },
                "$_CEt": function (e, t, n, r, i) {
                    var s = null;
                    if (s = "string" == typeof t ? t : window["JSON"]["stringify"](t), !window["XMLHttpRequest"] || "withCredentials" in new window["XMLHttpRequest"]()) {
                        if (window["XMLHttpRequest"]) {
                            var o = new window["XMLHttpRequest"]();
                            o["open"]("POST", e, !0), o["setRequestHeader"]("Content-Type", "text/plain;charset=utf-8"), o["setRequestHeader"]("Accept", "application/json"), o["withCredentials"] = !0, o["timeout"] = i || 3e4, o["onload"] = function () {
                                n(window["JSON"]["parse"](o["responseText"]));
                            }, o["onreadystatechange"] = function () {
                                4 === o["readyState"] && (200 === o["status"] ? n(window["JSON"]["parse"](o["responseText"])) : r({
                                    "error": "status: " + o["status"]
                                }));
                            }, o["send"](s);
                        }
                    } else {
                        var _ = window["location"]["protocol"],
                            a = new window["XDomainRequest"]();
                        a["timeout"] = i || 3e4, -1 === e["indexOf"](_) && (e = e["replace"](/^https?:/, _)), a["ontimeout"] = function () {
                            "function" == typeof r && r({
                                "error": "timeout"
                            });
                        }, a["onerror"] = function () {
                            "function" == typeof r && r({
                                "error": "error"
                            });
                        }, a["onload"] = function () {
                            "function" == typeof n && n(window["JSON"]["parse"](a["responseText"]));
                        }, a["open"]("POST", e), f(function () {
                            a["send"](s);
                        }, 0);
                    }
                }
            },
            _ = {
                "$_CDF": function () {
                    return (window["XDomainRequest"] || window["XMLHttpRequest"] && "withCredentials" in new window["XMLHttpRequest"]()) && window["JSON"];
                },
                "$_CEt": function (e, t, n, r, i) {
                    var s = null;
                    if (s = "string" == typeof t ? t : window["JSON"]["stringify"](t), !window["XMLHttpRequest"] || "withCredentials" in new window["XMLHttpRequest"]()) {
                        if (window["XMLHttpRequest"]) {
                            var o = new window["XMLHttpRequest"]();
                            o["open"]("POST", e, !0), o["setRequestHeader"]("Content-Type", "text/plain;charset=utf-8"), o["setRequestHeader"]("Accept", "application/json"), o["withCredentials"] = !0, o["timeout"] = i || 3e4, o["onload"] = function () {
                                n(window["JSON"]["parse"](o["responseText"]));
                            }, o["onreadystatechange"] = function () {
                                4 === o["readyState"] && (200 === o["status"] ? n(window["JSON"]["parse"](o["responseText"])) : r({
                                    "error": "status: " + o["status"]
                                }));
                            }, o["send"](s);
                        }
                    } else {
                        var _ = window["location"]["protocol"],
                            a = new window["XDomainRequest"]();
                        a["timeout"] = i || 3e4, -1 === e["indexOf"](_) && (e = e["replace"](/^https?:/, _)), a["ontimeout"] = function () {
                            "function" == typeof r && r({
                                "error": "timeout"
                            });
                        }, a["onerror"] = function () {
                            "function" == typeof r && r({
                                "error": "error"
                            });
                        }, a["onload"] = function () {
                            "function" == typeof n && n(window["JSON"]["parse"](a["responseText"]));
                        }, a["open"]("POST", e), f(function () {
                            a["send"](s);
                        }, 0);
                    }
                }
            },
            w = {
                "$_DAH": {
                    "$_DBV": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
                    "$_DCS": ".",
                    "$_DDU": 7274496,
                    "$_DEf": 9483264,
                    "$_DFC": 19220,
                    "$_DG_": 235,
                    "$_DHY": 24
                },
                "$_DBV": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
                "$_DCS": ".",
                "$_DDU": 7274496,
                "$_DEf": 9483264,
                "$_DFC": 19220,
                "$_DG_": 235,
                "$_DHY": 24,
                "$_DIG": function (e) {
                    for (var t = [], n = 0, r = e["length"]; n < r; n += 1) t["push"](e["charCodeAt"](n));
                    return t;
                },
                "$_DJx": function (e) {
                    for (var t = "", n = 0, r = e["length"]; n < r; n += 1) t += String["fromCharCode"](e[n]);
                    return t;
                },
                "$_EAu": function (e) {
                    var t = this["$_DBV"];
                    return e < 0 || e >= t["length"] ? "." : t["charAt"](e);
                },
                "$_EBs": function (e) {
                    return this["$_DBV"]["indexOf"](e);
                },
                "$_ECc": function (e, t) {
                    return e >> t & 1;
                },
                "$_EDb": function (e, i) {
                    var s = this;
                    i || (i = s);
                    for (var t = function (e, t) {
                        for (var n = 0, r = i["$_DHY"] - 1; 0 <= r; r -= 1) 1 === s["$_ECc"](t, r) && (n = (n << 1) + s["$_ECc"](e, r));
                        return n;
                    }, n = "", r = "", o = e["length"], _ = 0; _ < o; _ += 3) {
                        var a;
                        if (_ + 2 < o) a = (e[_] << 16) + (e[_ + 1] << 8) + e[_ + 2], n += s["$_EAu"](t(a, i["$_DDU"])) + s["$_EAu"](t(a, i["$_DEf"])) + s["$_EAu"](t(a, i["$_DFC"])) + s["$_EAu"](t(a, i["$_DG_"])); else {
                            var c = o % 3;
                            2 == c ? (a = (e[_] << 16) + (e[_ + 1] << 8), n += s["$_EAu"](t(a, i["$_DDU"])) + s["$_EAu"](t(a, i["$_DEf"])) + s["$_EAu"](t(a, i["$_DFC"])), r = i["$_DCS"]) : 1 == c && (a = e[_] << 16, n += s["$_EAu"](t(a, i["$_DDU"])) + s["$_EAu"](t(a, i["$_DEf"])), r = i["$_DCS"] + i["$_DCS"]);
                        }
                    }
                    return {
                        "res": n,
                        "end": r
                    };
                },
                "$_EEs": function (e) {
                    var t = this["$_EDb"](this["$_DIG"](e));
                    return t["res"] + t["end"];
                },
                "$_EFO": function (e) {
                    var t = this["$_EDb"](e);
                    return t["res"] + t["end"];
                },
                "$_EGQ": function (e, s) {
                    var o = this;
                    s || (s = o);
                    for (var t = function (e, t) {
                        if (e < 0) return 0;
                        for (var n = 5, r = 0, i = s["$_DHY"] - 1; 0 <= i; i -= 1) 1 === o["$_ECc"](t, i) && (r += o["$_ECc"](e, n) << i, n -= 1);
                        return r;
                    }, n = e["length"], r = "", i = 0; i < n; i += 4) {
                        var _ = t(o["$_EBs"](e["charAt"](i)), s["$_DDU"]) + t(o["$_EBs"](e["charAt"](i + 1)), s["$_DEf"]) + t(o["$_EBs"](e["charAt"](i + 2)), s["$_DFC"]) + t(o["$_EBs"](e["charAt"](i + 3)), s["$_DG_"]),
                            a = _ >> 16 & 255;
                        if (r += String["fromCharCode"](a), e["charAt"](i + 2) !== s["$_DCS"]) {
                            var c = _ >> 8 & 255;
                            if (r += String["fromCharCode"](c), e["charAt"](i + 3) !== s["$_DCS"]) {
                                var l = 255 & _;
                                r += String["fromCharCode"](l);
                            }
                        }
                    }
                    return r;
                },
                "$_EHE": function (e) {
                    var t = 4 - e["length"] % 4;
                    if (t < 4) for (var n = 0; n < t; n += 1) e += this["$_DCS"];
                    return this["$_EGQ"](e);
                },
                "$_EIZ": function (e) {
                    return this["$_EHE"](e);
                }
            };
        window._w = w;
        l = window["document"],
            h = window["location"],
            p = l["body"] || l["getElementsByTagName"]("body")[0],
            d = l["head"] || l["getElementsByTagName"]("head")[0],
            g = (l["documentElement"], h["protocol"] + "//"),
            ue = window["navigator"],
            m = (t = l["createElement"]("canvas"), n = t["getContext"] && t["getContext"]("2d"), r = /msie/i["test"](ue["userAgent"]), !n && r),
            x = /Mobi/i["test"](ue["userAgent"]),
            y = /msie 6\.0/i["test"](ue["userAgent"]),
            b = /msie 7\.0/i["test"](ue["userAgent"]),
            k = (l["compatMode"], parseFloat(ue["userAgent"]["slice"](ue["userAgent"]["indexOf"]("Android") + 8)) < 5),
            E = (parseFloat(ue["userAgent"]["slice"](ue["userAgent"]["indexOf"]("Android") + 8)), -1 < ue["userAgent"]["indexOf"]("Android")),
            C = 3e4,
            j = "geetest_",
            N = "err001",
            L = "err002",
            z = (i = [], {
                "$_EJI": function (e, t) {
                    i[e] = t;
                },
                "$_FAE": function (e) {
                    return i[e];
                }
            });
        Ne["jscrambler"] = "Start";
        Ne["jscrambler"] = "End", Ne["jscrambler"] = "Start controlFlowFlattening";
        var H = function () {
            function n() {
                this["i"] = 0, this["j"] = 0, this["S"] = [];
            }

            n["prototype"]["init"] = function E(e) {
                var t, n, r;
                for (t = 0; t < 256; ++t) this["S"][t] = t;
                for (t = n = 0; t < 256; ++t) n = n + this["S"][t] + e[t % e["length"]] & 255, r = this["S"][t], this["S"][t] = this["S"][n], this["S"][n] = r;
                this["i"] = 0, this["j"] = 0;
            }, n["prototype"]["next"] = function C() {
                var e;
                return this["i"] = this["i"] + 1 & 255, this["j"] = this["j"] + this["S"][this["i"]] & 255, e = this["S"][this["i"]], this["S"][this["i"]] = this["S"][this["j"]], this["S"][this["j"]] = e, this["S"][e + this["S"][this["i"]] & 255];
            };
            var r,
                i,
                s,
                e,
                o = 256;
            if (null == i) {
                var t;
                if (i = [], s = 0, window["crypto"] && window["crypto"]["getRandomValues"]) {
                    var _ = new Uint32Array(256);
                    for (window["crypto"]["getRandomValues"](_), t = 0; t < _["length"]; ++t) i[s++] = 255 & _[t];
                }
                var a = 0,
                    c = function (e) {
                        if (256 <= (a = a || 0) || o <= s) window["removeEventListener"] ? (a = 0, window["removeEventListener"]("mousemove", c, !1)) : window["detachEvent"] && (a = 0, window["detachEvent"]("onmousemove", c)); else try {
                            var t = e["x"] + e["y"];
                            i[s++] = 255 & t, a += 1;
                        } catch (n) {
                        }
                    };
                window["addEventListener"] ? window["addEventListener"]("mousemove", c, !1) : window["attachEvent"] && window["attachEvent"]("onmousemove", c);
            }

            function l() {
                if (null == r) {
                    r = function t() {
                        return new n();
                    }();
                    while (s < o) {
                        var e = Math["floor"](65536 * Math["random"]());
                        i[s++] = 255 & e;
                    }
                    for (r["init"](i), s = 0; s < i["length"]; ++s) i[s] = 0;
                    s = 0;
                }
                return r["next"]();
            }

            function u() {
            }

            u["prototype"]["nextBytes"] = function S(e) {
                var t;
                for (t = 0; t < e["length"]; ++t) e[t] = l();
            };

            function w(e, t, n) {
                null != e && ("number" == typeof e ? this["fromNumber"](e, t, n) : null == t && "string" != typeof e ? this["fromString"](e, 256) : this["fromString"](e, t));
            }

            function x() {
                return new w(null);
            }

            e = "Microsoft Internet Explorer" == ue["appName"] ? (w["prototype"]["am"] = function T(e, t, n, r, i, s) {
                var o = 32767 & t,
                    _ = t >> 15;
                while (0 <= --s) {
                    var a = 32767 & this[e],
                        c = this[e++] >> 15,
                        l = _ * a + c * o;
                    i = ((a = o * a + ((32767 & l) << 15) + n[r] + (1073741823 & i)) >>> 30) + (l >>> 15) + _ * c + (i >>> 30), n[r++] = 1073741823 & a;
                }
                return i;
            }, 30) : "Netscape" != ue["appName"] ? (w["prototype"]["am"] = function O(e, t, n, r, i, s) {
                while (0 <= --s) {
                    var o = t * this[e++] + n[r] + i;
                    i = Math["floor"](o / 67108864), n[r++] = 67108863 & o;
                }
                return i;
            }, 26) : (w["prototype"]["am"] = function A(e, t, n, r, i, s) {
                var o = 16383 & t,
                    _ = t >> 14;
                while (0 <= --s) {
                    var a = 16383 & this[e],
                        c = this[e++] >> 14,
                        l = _ * a + c * o;
                    i = ((a = o * a + ((16383 & l) << 14) + n[r] + i) >> 28) + (l >> 14) + _ * c, n[r++] = 268435455 & a;
                }
                return i;
            }, 28), w["prototype"]["DB"] = e, w["prototype"]["DM"] = (1 << e) - 1, w["prototype"]["DV"] = 1 << e;
            w["prototype"]["FV"] = Math["pow"](2, 52), w["prototype"]["F1"] = 52 - e, w["prototype"]["F2"] = 2 * e - 52;
            var h,
                p,
                d = "0123456789abcdefghijklmnopqrstuvwxyz",
                g = [];
            for (h = "0"["charCodeAt"](0), p = 0; p <= 9; ++p) g[h++] = p;
            for (h = "a"["charCodeAt"](0), p = 10; p < 36; ++p) g[h++] = p;
            for (h = "A"["charCodeAt"](0), p = 10; p < 36; ++p) g[h++] = p;

            function f(e) {
                return d["charAt"](e);
            }

            function v(e) {
                var t = x();
                return t["fromInt"](e), t;
            }

            function y(e) {
                var t,
                    n = 1;
                return 0 != (t = e >>> 16) && (e = t, n += 16), 0 != (t = e >> 8) && (e = t, n += 8), 0 != (t = e >> 4) && (e = t, n += 4), 0 != (t = e >> 2) && (e = t, n += 2), 0 != (t = e >> 1) && (e = t, n += 1), n;
            }

            function m(e) {
                this["m"] = e;
            }

            function b(e) {
                this["m"] = e, this["mp"] = e["invDigit"](), this["mpl"] = 32767 & this["mp"], this["mph"] = this["mp"] >> 15, this["um"] = (1 << e["DB"] - 15) - 1, this["mt2"] = 2 * e["t"];
            }

            function k() {
                this["n"] = null, this["e"] = 0, this["d"] = null, this["p"] = null, this["q"] = null, this["dmp1"] = null, this["dmq1"] = null, this["coeff"] = null;
                this["setPublic"]("00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81", "10001");
            }

            return m["prototype"]["convert"] = function D(e) {
                return e["s"] < 0 || 0 <= e["compareTo"](this["m"]) ? e["mod"](this["m"]) : e;
            }, m["prototype"]["revert"] = function M(e) {
                return e;
            }, m["prototype"]["reduce"] = function B(e) {
                e["divRemTo"](this["m"], null, e);
            }, m["prototype"]["mulTo"] = function R(e, t, n) {
                e["multiplyTo"](t, n), this["reduce"](n);
            }, m["prototype"]["sqrTo"] = function j(e, t) {
                e["squareTo"](t), this["reduce"](t);
            }, b["prototype"]["convert"] = function N(e) {
                var t = x();
                return e["abs"]()["dlShiftTo"](this["m"]["t"], t), t["divRemTo"](this["m"], null, t), e["s"] < 0 && 0 < t["compareTo"](w["ZERO"]) && this["m"]["subTo"](t, t), t;
            }, b["prototype"]["revert"] = function L(e) {
                var t = x();
                return e["copyTo"](t), this["reduce"](t), t;
            }, b["prototype"]["reduce"] = function z(e) {
                while (e["t"] <= this["mt2"]) e[e["t"]++] = 0;
                for (var t = 0; t < this["m"]["t"]; ++t) {
                    var n = 32767 & e[t],
                        r = n * this["mpl"] + ((n * this["mph"] + (e[t] >> 15) * this["mpl"] & this["um"]) << 15) & e["DM"];
                    e[n = t + this["m"]["t"]] += this["m"]["am"](0, r, e, t, 0, this["m"]["t"]);
                    while (e[n] >= e["DV"]) e[n] -= e["DV"], e[++n]++;
                }
                e["clamp"](), e["drShiftTo"](this["m"]["t"], e), 0 <= e["compareTo"](this["m"]) && e["subTo"](this["m"], e);
            }, b["prototype"]["mulTo"] = function P(e, t, n) {
                e["multiplyTo"](t, n), this["reduce"](n);
            }, b["prototype"]["sqrTo"] = function I(e, t) {
                e["squareTo"](t), this["reduce"](t);
            }, w["prototype"]["copyTo"] = function q(e) {
                for (var t = this["t"] - 1; 0 <= t; --t) e[t] = this[t];
                e["t"] = this["t"], e["s"] = this["s"];
            }, w["prototype"]["fromInt"] = function F(e) {
                this["t"] = 1, this["s"] = e < 0 ? -1 : 0, 0 < e ? this[0] = e : e < -1 ? this[0] = e + this["DV"] : this["t"] = 0;
            }, w["prototype"]["fromString"] = function H(e, t) {
                var n;
                if (16 == t) n = 4; else if (8 == t) n = 3; else if (256 == t) n = 8; else if (2 == t) n = 1; else if (32 == t) n = 5; else {
                    if (4 != t) return void this["fromRadix"](e, t);
                    n = 2;
                }
                this["t"] = 0, this["s"] = 0;
                var r,
                    i,
                    s = e["length"],
                    o = !1,
                    _ = 0;
                while (0 <= --s) {
                    var a = 8 == n ? 255 & e[s] : (r = s, null == (i = g[e["charCodeAt"](r)]) ? -1 : i);
                    a < 0 ? "-" == e["charAt"](s) && (o = !0) : (o = !1, 0 == _ ? this[this["t"]++] = a : _ + n > this["DB"] ? (this[this["t"] - 1] |= (a & (1 << this["DB"] - _) - 1) << _, this[this["t"]++] = a >> this["DB"] - _) : this[this["t"] - 1] |= a << _, (_ += n) >= this["DB"] && (_ -= this["DB"]));
                }
                8 == n && 0 != (128 & e[0]) && (this["s"] = -1, 0 < _ && (this[this["t"] - 1] |= (1 << this["DB"] - _) - 1 << _)), this["clamp"](), o && w["ZERO"]["subTo"](this, this);
            }, w["prototype"]["clamp"] = function X() {
                var e = this["s"] & this["DM"];
                while (0 < this["t"] && this[this["t"] - 1] == e) --this["t"];
            }, w["prototype"]["dlShiftTo"] = function $(e, t) {
                var n;
                for (n = this["t"] - 1; 0 <= n; --n) t[n + e] = this[n];
                for (n = e - 1; 0 <= n; --n) t[n] = 0;
                t["t"] = this["t"] + e, t["s"] = this["s"];
            }, w["prototype"]["drShiftTo"] = function V(e, t) {
                for (var n = e; n < this["t"]; ++n) t[n - e] = this[n];
                t["t"] = Math["max"](this["t"] - e, 0), t["s"] = this["s"];
            }, w["prototype"]["lShiftTo"] = function Y(e, t) {
                var n,
                    r = e % this["DB"],
                    i = this["DB"] - r,
                    s = (1 << i) - 1,
                    o = Math["floor"](e / this["DB"]),
                    _ = this["s"] << r & this["DM"];
                for (n = this["t"] - 1; 0 <= n; --n) t[n + o + 1] = this[n] >> i | _, _ = (this[n] & s) << r;
                for (n = o - 1; 0 <= n; --n) t[n] = 0;
                t[o] = _, t["t"] = this["t"] + o + 1, t["s"] = this["s"], t["clamp"]();
            }, w["prototype"]["rShiftTo"] = function U(e, t) {
                t["s"] = this["s"];
                var n = Math["floor"](e / this["DB"]);
                if (n >= this["t"]) t["t"] = 0; else {
                    var r = e % this["DB"],
                        i = this["DB"] - r,
                        s = (1 << r) - 1;
                    t[0] = this[n] >> r;
                    for (var o = n + 1; o < this["t"]; ++o) t[o - n - 1] |= (this[o] & s) << i, t[o - n] = this[o] >> r;
                    0 < r && (t[this["t"] - n - 1] |= (this["s"] & s) << i), t["t"] = this["t"] - n, t["clamp"]();
                }
            }, w["prototype"]["subTo"] = function J(e, t) {
                var n = 0,
                    r = 0,
                    i = Math["min"](e["t"], this["t"]);
                while (n < i) r += this[n] - e[n], t[n++] = r & this["DM"], r >>= this["DB"];
                if (e["t"] < this["t"]) {
                    r -= e["s"];
                    while (n < this["t"]) r += this[n], t[n++] = r & this["DM"], r >>= this["DB"];
                    r += this["s"];
                } else {
                    r += this["s"];
                    while (n < e["t"]) r -= e[n], t[n++] = r & this["DM"], r >>= this["DB"];
                    r -= e["s"];
                }
                t["s"] = r < 0 ? -1 : 0, r < -1 ? t[n++] = this["DV"] + r : 0 < r && (t[n++] = r), t["t"] = n, t["clamp"]();
            }, w["prototype"]["multiplyTo"] = function G(e, t) {
                var n = this["abs"](),
                    r = e["abs"](),
                    i = n["t"];
                t["t"] = i + r["t"];
                while (0 <= --i) t[i] = 0;
                for (i = 0; i < r["t"]; ++i) t[i + n["t"]] = n["am"](0, r[i], t, i, 0, n["t"]);
                t["s"] = 0, t["clamp"](), this["s"] != e["s"] && w["ZERO"]["subTo"](t, t);
            }, w["prototype"]["squareTo"] = function W(e) {
                var t = this["abs"](),
                    n = e["t"] = 2 * t["t"];
                while (0 <= --n) e[n] = 0;
                for (n = 0; n < t["t"] - 1; ++n) {
                    var r = t["am"](n, t[n], e, 2 * n, 0, 1);
                    (e[n + t["t"]] += t["am"](n + 1, 2 * t[n], e, 2 * n + 1, r, t["t"] - n - 1)) >= t["DV"] && (e[n + t["t"]] -= t["DV"], e[n + t["t"] + 1] = 1);
                }
                0 < e["t"] && (e[e["t"] - 1] += t["am"](n, t[n], e, 2 * n, 0, 1)), e["s"] = 0, e["clamp"]();
            }, w["prototype"]["divRemTo"] = function Z(e, t, n) {
                var r = e["abs"]();
                if (!(r["t"] <= 0)) {
                    var i = this["abs"]();
                    if (i["t"] < r["t"]) return null != t && t["fromInt"](0), void (null != n && this["copyTo"](n));
                    null == n && (n = x());
                    var s = x(),
                        o = this["s"],
                        _ = e["s"],
                        a = this["DB"] - y(r[r["t"] - 1]);
                    0 < a ? (r["lShiftTo"](a, s), i["lShiftTo"](a, n)) : (r["copyTo"](s), i["copyTo"](n));
                    var c = s["t"],
                        l = s[c - 1];
                    if (0 != l) {
                        var u = l * (1 << this["F1"]) + (1 < c ? s[c - 2] >> this["F2"] : 0),
                            h = this["FV"] / u,
                            p = (1 << this["F1"]) / u,
                            d = 1 << this["F2"],
                            g = n["t"],
                            f = g - c,
                            v = null == t ? x() : t;
                        s["dlShiftTo"](f, v), 0 <= n["compareTo"](v) && (n[n["t"]++] = 1, n["subTo"](v, n)), w["ONE"]["dlShiftTo"](c, v), v["subTo"](s, s);
                        while (s["t"] < c) s[s["t"]++] = 0;
                        while (0 <= --f) {
                            var m = n[--g] == l ? this["DM"] : Math["floor"](n[g] * h + (n[g - 1] + d) * p);
                            if ((n[g] += s["am"](0, m, n, f, 0, c)) < m) {
                                s["dlShiftTo"](f, v), n["subTo"](v, n);
                                while (n[g] < --m) n["subTo"](v, n);
                            }
                        }
                        null != t && (n["drShiftTo"](c, t), o != _ && w["ZERO"]["subTo"](t, t)), n["t"] = c, n["clamp"](), 0 < a && n["rShiftTo"](a, n), o < 0 && w["ZERO"]["subTo"](n, n);
                    }
                }
            }, w["prototype"]["invDigit"] = function Q() {
                if (this["t"] < 1) return 0;
                var e = this[0];
                if (0 == (1 & e)) return 0;
                var t = 3 & e;
                return 0 < (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this["DV"]) % this["DV"]) ? this["DV"] - t : -t;
            }, w["prototype"]["isEven"] = function K() {
                return 0 == (0 < this["t"] ? 1 & this[0] : this["s"]);
            }, w["prototype"]["exp"] = function $_EP(e, t) {
                if (4294967295 < e || e < 1) return w["ONE"];
                var n = x(),
                    r = x(),
                    i = t["convert"](this),
                    s = y(e) - 1;
                i["copyTo"](n);
                while (0 <= --s) if (t["sqrTo"](n, r), 0 < (e & 1 << s)) t["mulTo"](r, i, n); else {
                    var o = n;
                    n = r, r = o;
                }
                return t["revert"](n);
            }, w["prototype"]["toString"] = function $_FB(e) {
                if (this["s"] < 0) return "-" + this["negate"]()["toString"](e);
                var t;
                if (16 == e) t = 4; else if (8 == e) t = 3; else if (2 == e) t = 1; else if (32 == e) t = 5; else {
                    if (4 != e) return this["toRadix"](e);
                    t = 2;
                }
                var n,
                    r = (1 << t) - 1,
                    i = !1,
                    s = "",
                    o = this["t"],
                    _ = this["DB"] - o * this["DB"] % t;
                if (0 < o--) {
                    _ < this["DB"] && 0 < (n = this[o] >> _) && (i = !0, s = f(n));
                    while (0 <= o) _ < t ? (n = (this[o] & (1 << _) - 1) << t - _, n |= this[--o] >> (_ += this["DB"] - t)) : (n = this[o] >> (_ -= t) & r, _ <= 0 && (_ += this["DB"], --o)), 0 < n && (i = !0), i && (s += f(n));
                }
                return i ? s : "0";
            }, w["prototype"]["negate"] = function $_GW() {
                var e = x();
                return w["ZERO"]["subTo"](this, e), e;
            }, w["prototype"]["abs"] = function $_Ho() {
                return this["s"] < 0 ? this["negate"]() : this;
            }, w["prototype"]["compareTo"] = function ie(e) {
                var t = this["s"] - e["s"];
                if (0 != t) return t;
                var n = this["t"];
                if (0 != (t = n - e["t"])) return this["s"] < 0 ? -t : t;
                while (0 <= --n) if (0 != (t = this[n] - e[n])) return t;
                return 0;
            }, w["prototype"]["bitLength"] = function se() {
                return this["t"] <= 0 ? 0 : this["DB"] * (this["t"] - 1) + y(this[this["t"] - 1] ^ this["s"] & this["DM"]);
            }, w["prototype"]["mod"] = function oe(e) {
                var t = x();
                return this["abs"]()["divRemTo"](e, null, t), this["s"] < 0 && 0 < t["compareTo"](w["ZERO"]) && e["subTo"](t, t), t;
            }, w["prototype"]["modPowInt"] = function $_FBK(e, t) {
                var n;
                return n = e < 256 || t["isEven"]() ? new m(t) : new b(t), this["exp"](e, n);
            }, w["ZERO"] = v(0), w["ONE"] = v(1), k["prototype"]["doPublic"] = function ae(e) {
                return e["modPowInt"](this["e"], this["n"]);
            }, k["prototype"]["setPublic"] = function ce(e, t) {
                null != e && null != t && 0 < e["length"] && 0 < t["length"] ? (this["n"] = function n(e, t) {
                    return new w(e, t);
                }(e, 16), this["e"] = parseInt(t, 16)) : console && console["error"] && console["error"]("Invalid RSA public key");
            }, k["prototype"]["encrypt"] = function le(e) {
                var t = function _(e, t) {
                    if (t < e["length"] + 11) return console && console["error"] && console["error"]("Message too long for RSA"), null;
                    var n = [],
                        r = e["length"] - 1;
                    while (0 <= r && 0 < t) {
                        var i = e["charCodeAt"](r--);
                        i < 128 ? n[--t] = i : 127 < i && i < 2048 ? (n[--t] = 63 & i | 128, n[--t] = i >> 6 | 192) : (n[--t] = 63 & i | 128, n[--t] = i >> 6 & 63 | 128, n[--t] = i >> 12 | 224);
                    }
                    n[--t] = 0;
                    var s = new u(),
                        o = [];
                    while (2 < t) {
                        o[0] = 0;
                        while (0 == o[0]) s["nextBytes"](o);
                        n[--t] = o[0];
                    }
                    return n[--t] = 2, n[--t] = 0, new w(n);
                }(e, this["n"]["bitLength"]() + 7 >> 3);
                if (null == t) return null;
                var n = this["doPublic"](t);
                if (null == n) return null;
                var r = n["toString"](16);
                return 0 == (1 & r["length"]) ? r : "0" + r;
            }, k;
        }();
        window._h = H;
        Ne["jscrambler"] = "End", Ne["jscrambler"] = "Start controlFlowFlattening";
        var X = function () {
            var e,
                n = Object["create"] || function () {
                    function n() {
                    }

                    return function (e) {
                        var t;
                        return n["prototype"] = e, t = new n(), n["prototype"] = null, t;
                    };
                }(),
                t = {},
                r = t["lib"] = {},
                i = r["Base"] = {
                    "extend": function (e) {
                        var t = n(this);
                        return e && t["mixIn"](e), t["hasOwnProperty"]("init") && this["init"] !== t["init"] || (t["init"] = function () {
                            t["$super"]["init"]["apply"](this, arguments);
                        }), (t["init"]["prototype"] = t)["$super"] = this, t;
                    },
                    "create": function () {
                        var e = this["extend"]();
                        return e["init"]["apply"](e, arguments), e;
                    },
                    "init": function () {
                    },
                    "mixIn": function (e) {
                        for (var t in e) e["hasOwnProperty"](t) && (this[t] = e[t]);
                        e["hasOwnProperty"]("toString") && (this["toString"] = e["toString"]);
                    }
                },
                l = r["WordArray"] = i["extend"]({
                    "init": function (e, t) {
                        e = this["words"] = e || [], t != undefined ? this["sigBytes"] = t : this["sigBytes"] = 4 * e["length"];
                    },
                    "concat": function (e) {
                        var t = this["words"],
                            n = e["words"],
                            r = this["sigBytes"],
                            i = e["sigBytes"];
                        if (this["clamp"](), r % 4) for (var s = 0; s < i; s++) {
                            var o = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                            t[r + s >>> 2] |= o << 24 - (r + s) % 4 * 8;
                        } else for (s = 0; s < i; s += 4) t[r + s >>> 2] = n[s >>> 2];
                        return this["sigBytes"] += i, this;
                    },
                    "clamp": function () {
                        var e = this["words"],
                            t = this["sigBytes"];
                        e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, e["length"] = Math["ceil"](t / 4);
                    }
                }),
                s = t["enc"] = {},
                u = s["Latin1"] = {
                    "parse": function (e) {
                        for (var t = e["length"], n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e["charCodeAt"](r)) << 24 - r % 4 * 8;
                        return new l["init"](n, t);
                    }
                },
                o = s["Utf8"] = {
                    "parse": function (e) {
                        return u["parse"](unescape(encodeURIComponent(e)));
                    }
                },
                _ = r["BufferedBlockAlgorithm"] = i["extend"]({
                    "reset": function () {
                        this["$_FC_"] = new l["init"](), this["$_FDW"] = 0;
                    },
                    "$_FEY": function (e) {
                        "string" == typeof e && (e = o["parse"](e)), this["$_FC_"]["concat"](e), this["$_FDW"] += e["sigBytes"];
                    },
                    "$_FFU": function (e) {
                        var t = this["$_FC_"],
                            n = t["words"],
                            r = t["sigBytes"],
                            i = this["blockSize"],
                            s = r / (4 * i),
                            o = (s = e ? Math["ceil"](s) : Math["max"]((0 | s) - this["$_FGY"], 0)) * i,
                            _ = Math["min"](4 * o, r);
                        if (o) {
                            for (var a = 0; a < o; a += i) this["$_FHR"](n, a);
                            var c = n["splice"](0, o);
                            t["sigBytes"] -= _;
                        }
                        return new l["init"](c, _);
                    },
                    "$_FGY": 0
                }),
                a = t["algo"] = {},
                c = r["Cipher"] = _["extend"]({
                    "cfg": i["extend"](),
                    "createEncryptor": function (e, t) {
                        return this["create"](this["$_FIY"], e, t);
                    },
                    "init": function (e, t, n) {
                        this["cfg"] = this["cfg"]["extend"](n), this["$_FJI"] = e, this["$_GAO"] = t, this["reset"]();
                    },
                    "reset": function () {
                        _["reset"]["call"](this), this["$_GBz"]();
                    },
                    "process": function (e) {
                        return this["$_FEY"](e), this["$_FFU"]();
                    },
                    "finalize": function (e) {
                        return e && this["$_FEY"](e), this["$_GCN"]();
                    },
                    "keySize": 4,
                    "ivSize": 4,
                    "$_FIY": 1,
                    "$_GDn": 2,
                    "$_GEQ": function (c) {
                        return {
                            "encrypt": function (e, t, n) {
                                t = u["parse"](t), n && n["iv"] || ((n = n || {})["iv"] = u["parse"]("0000000000000000"));
                                for (var r = m["encrypt"](c, e, t, n), i = r["ciphertext"]["words"], s = r["ciphertext"]["sigBytes"], o = [], _ = 0; _ < s; _++) {
                                    var a = i[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
                                    o["push"](a);
                                }
                                return o;
                            }
                        };
                    }
                }),
                h = t["mode"] = {},
                p = r["BlockCipherMode"] = i["extend"]({
                    "createEncryptor": function (e, t) {
                        return this["Encryptor"]["create"](e, t);
                    },
                    "init": function (e, t) {
                        this["$_GFL"] = e, this["$_GGK"] = t;
                    }
                }),
                d = h["CBC"] = ((e = p["extend"]())["Encryptor"] = e["extend"]({
                    "processBlock": function (e, t) {
                        var n = this["$_GFL"],
                            r = n["blockSize"];
                        (function o(e, t, n) {
                            var r = this["$_GGK"];
                            if (r) {
                                var i = r;
                                this["$_GGK"] = undefined;
                            } else var i = this["$_GHL"];
                            for (var s = 0; s < n; s++) e[t + s] ^= i[s];
                        })["call"](this, e, t, r), n["encryptBlock"](e, t), this["$_GHL"] = e["slice"](t, t + r);
                    }
                }), e),
                g = (t["pad"] = {})["Pkcs7"] = {
                    "pad": function (e, t) {
                        for (var n = 4 * t, r = n - e["sigBytes"] % n, i = r << 24 | r << 16 | r << 8 | r, s = [], o = 0; o < r; o += 4) s["push"](i);
                        var _ = l["create"](s, r);
                        e["concat"](_);
                    }
                },
                f = r["BlockCipher"] = c["extend"]({
                    "cfg": c["cfg"]["extend"]({
                        "mode": d,
                        "padding": g
                    }),
                    "reset": function () {
                        c["reset"]["call"](this);
                        var e = this["cfg"],
                            t = e["iv"],
                            n = e["mode"];
                        if (this["$_FJI"] == this["$_FIY"]) var r = n["createEncryptor"];
                        this["$_GIt"] && this["$_GIt"]["$_GJY"] == r ? this["$_GIt"]["init"](this, t && t["words"]) : (this["$_GIt"] = r["call"](n, this, t && t["words"]), this["$_GIt"]["$_GJY"] = r);
                    },
                    "$_FHR": function (e, t) {
                        this["$_GIt"]["processBlock"](e, t);
                    },
                    "$_GCN": function () {
                        var e = this["cfg"]["padding"];
                        if (this["$_FJI"] == this["$_FIY"]) {
                            e["pad"](this["$_FC_"], this["blockSize"]);
                            var t = this["$_FFU"](!0);
                        }
                        return t;
                    },
                    "blockSize": 4
                }),
                v = r["CipherParams"] = i["extend"]({
                    "init": function (e) {
                        this["mixIn"](e);
                    }
                }),
                m = r["SerializableCipher"] = i["extend"]({
                    "cfg": i["extend"](),
                    "encrypt": function (e, t, n, r) {
                        r = this["cfg"]["extend"](r);
                        var i = e["createEncryptor"](n, r),
                            s = i["finalize"](t),
                            o = i["cfg"];
                        return v["create"]({
                            "ciphertext": s,
                            "key": n,
                            "iv": o["iv"],
                            "algorithm": e,
                            "mode": o["mode"],
                            "padding": o["padding"],
                            "blockSize": e["blockSize"],
                            "formatter": r["format"]
                        });
                    }
                }),
                w = [],
                x = [],
                y = [],
                b = [],
                k = [],
                E = [],
                C = [],
                S = [],
                T = [],
                O = [];
            !function () {
                for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                var n = 0,
                    r = 0;
                for (t = 0; t < 256; t++) {
                    var i = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                    i = i >>> 8 ^ 255 & i ^ 99, w[n] = i;
                    var s = e[x[i] = n],
                        o = e[s],
                        _ = e[o],
                        a = 257 * e[i] ^ 16843008 * i;
                    y[n] = a << 24 | a >>> 8, b[n] = a << 16 | a >>> 16, k[n] = a << 8 | a >>> 24, E[n] = a;
                    a = 16843009 * _ ^ 65537 * o ^ 257 * s ^ 16843008 * n;
                    C[i] = a << 24 | a >>> 8, S[i] = a << 16 | a >>> 16, T[i] = a << 8 | a >>> 24, O[i] = a, n ? (n = s ^ e[e[e[_ ^ s]]], r ^= e[e[r]]) : n = r = 1;
                }
            }();
            var A = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                D = a["AES"] = f["extend"]({
                    "$_GBz": function () {
                        if (!this["$_HAU"] || this["$_HBr"] !== this["$_GAO"]) {
                            for (var e = this["$_HBr"] = this["$_GAO"], t = e["words"], n = e["sigBytes"] / 4, r = 4 * (1 + (this["$_HAU"] = 6 + n)), i = this["$_HCH"] = [], s = 0; s < r; s++) if (s < n) i[s] = t[s]; else {
                                var o = i[s - 1];
                                s % n ? 6 < n && s % n == 4 && (o = w[o >>> 24] << 24 | w[o >>> 16 & 255] << 16 | w[o >>> 8 & 255] << 8 | w[255 & o]) : (o = w[(o = o << 8 | o >>> 24) >>> 24] << 24 | w[o >>> 16 & 255] << 16 | w[o >>> 8 & 255] << 8 | w[255 & o], o ^= A[s / n | 0] << 24), i[s] = i[s - n] ^ o;
                            }
                            for (var _ = this["$_HDB"] = [], a = 0; a < r; a++) {
                                s = r - a;
                                if (a % 4) o = i[s]; else o = i[s - 4];
                                _[a] = a < 4 || s <= 4 ? o : C[w[o >>> 24]] ^ S[w[o >>> 16 & 255]] ^ T[w[o >>> 8 & 255]] ^ O[w[255 & o]];
                            }
                        }
                    },
                    "encryptBlock": function (e, t) {
                        this["$_HEJ"](e, t, this["$_HCH"], y, b, k, E, w);
                    },
                    "$_HEJ": function (e, t, n, r, i, s, o, _) {
                        for (var a = this["$_HAU"], c = e[t] ^ n[0], l = e[t + 1] ^ n[1], u = e[t + 2] ^ n[2], h = e[t + 3] ^ n[3], p = 4, d = 1; d < a; d++) {
                            var g = r[c >>> 24] ^ i[l >>> 16 & 255] ^ s[u >>> 8 & 255] ^ o[255 & h] ^ n[p++],
                                f = r[l >>> 24] ^ i[u >>> 16 & 255] ^ s[h >>> 8 & 255] ^ o[255 & c] ^ n[p++],
                                v = r[u >>> 24] ^ i[h >>> 16 & 255] ^ s[c >>> 8 & 255] ^ o[255 & l] ^ n[p++],
                                m = r[h >>> 24] ^ i[c >>> 16 & 255] ^ s[l >>> 8 & 255] ^ o[255 & u] ^ n[p++];
                            c = g, l = f, u = v, h = m;
                        }
                        g = (_[c >>> 24] << 24 | _[l >>> 16 & 255] << 16 | _[u >>> 8 & 255] << 8 | _[255 & h]) ^ n[p++], f = (_[l >>> 24] << 24 | _[u >>> 16 & 255] << 16 | _[h >>> 8 & 255] << 8 | _[255 & c]) ^ n[p++], v = (_[u >>> 24] << 24 | _[h >>> 16 & 255] << 16 | _[c >>> 8 & 255] << 8 | _[255 & l]) ^ n[p++], m = (_[h >>> 24] << 24 | _[c >>> 16 & 255] << 16 | _[l >>> 8 & 255] << 8 | _[255 & u]) ^ n[p++];
                        e[t] = g, e[t + 1] = f, e[t + 2] = v, e[t + 3] = m;
                    },
                    "keySize": 8
                });
            return t["AES"] = f["$_GEQ"](D), t["AES"];
        }();
        window._x = X;
        Ne["jscrambler"] = "End";
        var $ = function (e) {
            var o = function (e) {
                    return "function" == typeof e;
                },
                _ = function (e) {
                    e();
                };

            function r() {
                this["$_HFM"] = this["$_HGg"] = null;
            }

            var a = function (t, e) {
                if (t === e) t["$_HHM"](new TypeError()); else if (e instanceof l) e["then"](function (e) {
                    a(t, e);
                }, function (e) {
                    t["$_HHM"](e);
                }); else if (o(e) || function (e) {
                    return "object" == typeof e && null !== e;
                }(e)) {
                    var n;
                    try {
                        n = e["then"];
                    } catch (i) {
                        return l["$_HIU"](i), void t["$_HHM"](i);
                    }
                    var r = !1;
                    if (o(n)) try {
                        n["call"](e, function (e) {
                            r || (r = !0, a(t, e));
                        }, function (e) {
                            r || (r = !0, t["$_HHM"](e));
                        });
                    } catch (i) {
                        if (r) return;
                        r = !0, t["$_HHM"](i);
                    } else t["$_HJN"](e);
                } else t["$_HJN"](e);
            };

            function l(e) {
                var t = this;
                if (t["$_IAe"] = t["PENDING"], t["$_IBw"] = new r(), t["$_ICK"] = new r(), o(e)) try {
                    e(function (e) {
                        t["$_HJN"](e);
                    }, function (e) {
                        t["$_HHM"](e);
                    });
                } catch (n) {
                    l["$_HIU"](n);
                }
            }

            var t = !(r["prototype"] = {
                "enqueue": function (e) {
                    var t = this,
                        n = {
                            "ele": e,
                            "next": null
                        };
                    null === t["$_HFM"] ? t["$_HFM"] = this["$_HGg"] = n : (t["$_HGg"]["next"] = n, t["$_HGg"] = t["$_HGg"]["next"]);
                },
                "dequeue": function () {
                    if (null === this["$_HFM"]) throw new Error("queue is empty");
                    var e = this["$_HFM"]["ele"];
                    return this["$_HFM"] = this["$_HFM"]["next"], e;
                },
                "isEmpty": function () {
                    return null === this["$_HFM"];
                },
                "clear": function () {
                    this["$_HFM"] = this["$_IDE"] = null;
                },
                "each": function (e) {
                    this["isEmpty"]() || (e(this["dequeue"]()), this["each"](e));
                }
            });
            return l["debug"] = function () {
                t = !0;
            }, l["$_HIU"] = function (e) {
                u(e, !0), t && "undefined" != typeof console && console["error"](e);
            }, l["prototype"] = {
                "PENDING": 0,
                "RESOLVED": 1,
                "REJECTED": -1,
                "$_HJN": function (e) {
                    var t = this;
                    t["$_IAe"] === t["PENDING"] && (t["$_IAe"] = t["RESOLVED"], t["$_IEg"] = e, t["$_IFg"]());
                },
                "$_HHM": function (e) {
                    var t = this;
                    t["$_IAe"] === t["PENDING"] && (t["$_IAe"] = t["REJECTED"], t["$_IGx"] = e, t["$_IFg"]());
                },
                "$_IFg": function () {
                    var e,
                        t,
                        n = this,
                        r = n["$_IAe"];
                    r === n["RESOLVED"] ? (e = n["$_IBw"], n["$_ICK"]["clear"](), t = n["$_IEg"]) : r === n["REJECTED"] && (e = n["$_ICK"], n["$_IBw"]["clear"](), t = n["$_IGx"]), e["each"](function (e) {
                        _(function () {
                            e(r, t);
                        });
                    });
                },
                "$_IHG": function (n, r, i) {
                    var s = this;
                    _(function () {
                        if (o(r)) {
                            var e;
                            try {
                                e = r(i);
                            } catch (t) {
                                return l["$_HIU"](t), void s["$_HHM"](t);
                            }
                            a(s, e);
                        } else n === s["RESOLVED"] ? s["$_HJN"](i) : n === s["REJECTED"] && s["$_HHM"](i);
                    });
                },
                "then": function (n, r) {
                    var e = this,
                        i = new l();
                    return e["$_IBw"]["enqueue"](function (e, t) {
                        i["$_IHG"](e, n, t);
                    }), e["$_ICK"]["enqueue"](function (e, t) {
                        i["$_IHG"](e, r, t);
                    }), e["$_IAe"] === e["RESOLVED"] ? e["$_IFg"]() : e["$_IAe"] === e["REJECTED"] && e["$_IFg"](), i;
                }
            }, l["all"] = function (c) {
                return new l(function (r, i) {
                    var s = c["length"],
                        o = 0,
                        _ = !1,
                        a = [];

                    function n(e, t, n) {
                        _ || (null !== e && (_ = !0, i(e)), a[n] = t, (o += 1) === s && (_ = !0, r(a)));
                    }

                    for (var e = 0; e < s; e += 1) !function (t) {
                        var e = c[t];
                        e instanceof l || (e = new l(e)), e["then"](function (e) {
                            n(null, e, t);
                        }, function (e) {
                            n(e || !0);
                        });
                    }(e);
                });
            }, l["race"] = function (a) {
                return new l(function (n, r) {
                    var e,
                        i = a["length"],
                        s = !1,
                        o = 0;

                    function t(e, t) {
                        s || (null == e ? (s = !0, n(t)) : i <= (o += 1) && (s = !0, r(e)));
                    }

                    for (var _ = 0; _ < i; _ += 1) e = void 0, (e = a[_]) instanceof l || (e = new l(e)), e["then"](function (e) {
                        t(null, e);
                    }, function (e) {
                        t(e || !0);
                    });
                });
            }, l["step"] = function (n) {
                var r = n["length"],
                    i = new l(),
                    s = function (t, e) {
                        if (r <= t) return i["$_HJN"](e);
                        new l(n[t])["then"](function (e) {
                            s(t + 1, e);
                        }, function (e) {
                            i["$_HHM"](e);
                        });
                    };
                return new l(n[0])["then"](function (e) {
                    s(1, e);
                }, function (e) {
                    i["$_HHM"](e);
                }), i;
            }, l["prototype"]["$_CFX"] = function (e, t) {
                return this["then"](e, t);
            }, l;
        }();

        function V(e) {
            this["$_IIV"] = e, this["$_IJA"] = {};
        }

        function Y(e, t) {
            return e["type"] || (e["type"] = "slide"), new Y[e["type"]](e, t);
        }

        function U(e) {
            this["$_JAD"] = e;
        }

        $["debug"](), V["prototype"] = {
            "$_JBG": function (e, t) {
                return this["$_IJA"][e] ? this["$_IJA"][e]["push"](t) : this["$_IJA"][e] = [t], this;
            },
            "$_JCW": function (e, t) {
                var n = this,
                    r = n["$_IJA"][e];
                if (r) {
                    for (var i = 0, s = r["length"]; i < s; i += 1) try {
                        r[i](t);
                    } catch (_) {
                        var o = {
                            "error": _,
                            "type": e
                        };
                        return F(P("user_callback", n["$_IIV"], o));
                    }
                    return n;
                }
            },
            "$_JDi": function () {
                this["$_IJA"] = {};
            }
        }, Y["type"] = "shell", Y["noConflict"] = function (window, e) {
            window["Geetest"] ? window["Geetest"]["type"] === Y["type"] ? window["Geetest"][e["type"]] = e : (Y[e["type"]] = e, Y[window["Geetest"]["type"]] = window["Geetest"], window["Geetest"] = Y) : (Y[e["type"]] = e, window["Geetest"] = Y);
        }, U["prototype"] = {
            "$_EJI": function (e) {
                var t = this;
                return t["$_JEg"] = t["$_JFm"], t["$_JFm"] = e, t["$_JAD"](t["$_JFm"], t["$_JEg"]), t;
            },
            "$_FAE": function () {
                return this["$_JFm"];
            },
            "$_JGS": function (e) {
                for (var t = ie["$_JHn"](e) ? e : [e], n = 0, r = t["length"]; n < r; n += 1) if (t[n] === this["$_FAE"]()) return !0;
                return !1;
            }
        };
        var K = function () {
            function e() {
                return (65536 * (1 + Math["random"]()) | 0)["toString"](16)["substring"](1);
            }

            return function () {
                return e() + e() + e() + e();
            };
        }();

        function ie(e) {
            this["$_JIT"] = e || [];
        }

        function se(e) {
            this["$_JJC"] = e;
        }

        function oe(e) {
            this["$_CJE"] = "string" == typeof e ? l["createElement"](e) : e;
        }

        function $_FBK(e, t) {
            this["$_FBK"] = t, this["$_CJE"] = e;
        }

        ie["prototype"] = {
            "$_FAE": function (e) {
                return this["$_JIT"][e];
            },
            "$_BAAy": function () {
                return this["$_JIT"]["length"];
            },
            "$_BBH": function (e, t) {
                return new ie(J(t) ? this["$_JIT"]["slice"](e, t) : this["$_JIT"]["slice"](e));
            },
            "$_BABR": function (e) {
                return this["$_JIT"]["push"](e), this;
            },
            "$_BACx": function (e, t) {
                return this["$_JIT"]["splice"](e, t || 1);
            },
            "$_BDh": function (e) {
                return this["$_JIT"]["join"](e);
            },
            "$_BADD": function (e) {
                return new ie(this["$_JIT"]["concat"](e));
            },
            "$_BCa": function (e) {
                var t = this["$_JIT"];
                if (t["map"]) return new ie(t["map"](e));
                for (var n = [], r = 0, i = t["length"]; r < i; r += 1) n[r] = e(t[r], r, this);
                return new ie(n);
            },
            "$_BAE_": function (e) {
                var t = this["$_JIT"];
                if (t["filter"]) return new ie(t["filter"](e));
                for (var n = [], r = 0, i = t["length"]; r < i; r += 1) e(t[r], r, this) && n["push"](t[r]);
                return new ie(n);
            },
            "$_BAFA": function (e) {
                var t = this["$_JIT"];
                if (t["indexOf"]) return t["indexOf"](e);
                for (var n = 0, r = t["length"]; n < r; n += 1) if (t[n] === e) return n;
                return -1;
            },
            "$_BAGB": function (e) {
                var t = this["$_JIT"];
                if (!t["forEach"]) for (var n = arguments[1], r = 0; r < t["length"]; r++) r in t && e["call"](n, t[r], r, this);
                return t["forEach"](e);
            }
        }, ie["$_JHn"] = function (e) {
            return Array["isArray"] ? Array["isArray"](e) : "[object Array]" === Object["prototype"]["toString"]["call"](e);
        }, se["prototype"] = {
            "$_BHH": function (e) {
                var t = this["$_JJC"];
                for (var n in t) t["hasOwnProperty"](n) && e(n, t[n]);
                return this;
            },
            "$_BAHg": function () {
                var e = this["$_JJC"];
                for (var t in e) if (e["hasOwnProperty"](t)) return !1;
                return !0;
            }
        }, oe["prototype"] = {
            "$_BAIc": {
                "down": ["mousedown", "touchstart", "pointerdown", "MSPointerDown"],
                "move": ["mousemove", "touchmove", "pointermove", "MSPointerMove"],
                "up": ["mouseup", "touchend", "pointerup", "MSPointerUp"],
                "enter": ["mouseenter"],
                "leave": ["mouseleave"],
                "cancel": ["touchcancel"],
                "click": ["click"],
                "scroll": ["scroll"],
                "resize": ["resize"],
                "blur": ["blur"],
                "focus": ["focus"],
                "unload": ["unload"],
                "input": ["input"],
                "keyup": ["keyup"],
                "ended": ["ended"],
                "keydown": ["keydown"],
                "beforeunload": ["beforeunload"],
                "focusin": ["focusin"],
                "pageshow": ["pageshow"]
            },
            "$_BAJt": function () {
                var e = this["$_CJE"];
                return e["innerHTML"] = "", "input" === e["tagName"]["toLocaleLowerCase"]() && (e["value"] = ""), this;
            },
            "$_BBAT": function () {
                return this["$_sTyyle"]({
                    "display": "none"
                });
            },
            "$_BBBP": function () {
                return this["$_sTyyle"]({
                    "display": "block"
                });
            },
            "$_BBCn": function (e) {
                return this["$_sTyyle"]({
                    "opacity": e
                });
            },
            "$_BBDb": function (e) {
                return this["$_CJE"]["getAttribute"](e);
            },
            "$_BEI": function (e) {
                var n = this["$_CJE"];
                return new se(e)["$_BHH"](function (e, t) {
                    n["setAttribute"](e, t);
                }), this;
            },
            "$_BBEu": function (e) {
                var t = this["$_CJE"];
                return new ie(e)["$_BCa"](function (e) {
                    t["removeAttribute"](e);
                }), this;
            },
            "$_BFK": function (e) {
                var n = this["$_CJE"];
                return new se(e)["$_BHH"](function (e, t) {
                    n[e] = t;
                }), this;
            },
            "$_sTyyle": function (e) {
                var n = this["$_CJE"];
                return new se(e)["$_BHH"](function (e, t) {
                    n["style"][e] = t;
                }), this;
            },
            "setStyles": function (e) {
                var n = this["$_CJE"];
                return new se(e)["$_BHH"](function (e, t) {
                    n["style"][e] = t;
                }), this;
            },
            "$_BBFb": function () {
                return new oe(this["$_CJE"]["parentNode"]);
            },
            "$_CIg": function (e) {
                return e["$_CJE"]["appendChild"](this["$_CJE"]), this;
            },
            "$_BBGC": function (e) {
                var t = this["$_CJE"];
                return t["parentNode"]["removeChild"](t), this["$_CIg"](e), this;
            },
            "$_BBHD": function (e) {
                return e["$_CJE"]["parentNode"]["insertBefore"](this["$_CJE"], e["$_CJE"]), this;
            },
            "$_BIk": function (e) {
                return e["$_CIg"](this), this;
            },
            "$_CHG": function () {
                var e = this["$_CJE"],
                    t = e["parentNode"];
                return t && t["removeChild"](e), this;
            },
            "$_BBIK": function (e) {
                var t = this["$_CJE"];
                return -1 === new ie(t["className"] ? t["className"]["split"](" ") : [])["$_BAFA"](j + e) ? this["$_BBJn"](e) : this["$_BCAR"](e), this;
            },
            "$_BBJn": function (e) {
                var t = this["$_CJE"],
                    n = new ie(t["className"] ? t["className"]["split"](" ") : []);
                return e = j + e, -1 == n["$_BAFA"](e) && (n["$_BABR"](e), t["className"] = n["$_BDh"](" ")), this;
            },
            "$_BCBb": function () {
                return this["$_CJE"]["children"];
            },
            "$_BCCD": function () {
                var e = this["$_CJE"];
                return e && e["style"] && e["style"]["right"] || 0;
            },
            "$_BCAR": function (e) {
                var t = this["$_CJE"],
                    n = new ie(t["className"]["split"](" "));
                e = j + e;
                var r = n["$_BAFA"](e);
                return -1 < r && (n["$_BACx"](r), t["className"] = n["$_BDh"](" ")), this;
            },
            "$_BCDT": function (e, t) {
                return this["$_BCAR"](t)["$_BBJn"](e), this;
            },
            "$_BCEA": function (e, n) {
                function s(e) {
                    n(new $_FBK(r, e));
                }

                var r = this,
                    i = r["$_CJE"],
                    t = r["$_BAIc"][e];
                return new ie(t)["$_BCa"](function (e) {
                    if (l["addEventListener"]) i["addEventListener"](e, s); else if (l["attachEvent"]) i["attachEvent"]("on" + e, s); else {
                        var t = i["on" + e];
                        i["on" + e] = function (e) {
                            n(new $_FBK(r, e)), "function" == typeof t && t["call"](this, e);
                        };
                    }
                }), {
                    "$_JDi": function () {
                        new ie(t)["$_BCa"](function (e) {
                            l["removeEventListener"] ? i["removeEventListener"](e, s) : l["detachEvent"] ? i["detachEvent"]("on" + e, s) : i["on" + e] = null;
                        });
                    }
                };
            },
            "$_JBG": function (e, t) {
                var n = this,
                    r = n["$_BCEA"](e, t);
                return n["$_BCFA"] = n["$_BCFA"] || {}, n["$_BCFA"][e] ? n["$_BCFA"][e]["push"](r) : n["$_BCFA"][e] = [r], n;
            },
            "$_BCGr": function (e) {
                var t = this;
                if (t["$_BCFA"]) if (e) {
                    if (t["$_BCFA"][e] && 0 < t["$_BCFA"][e]["length"]) for (var n = t["$_BCFA"][e]["length"] - 1; 0 <= n; n--) t["$_BCFA"][e][n]["$_JDi"]();
                } else for (var r in t["$_BCFA"]) if (t["$_BCFA"][r] && 0 < t["$_BCFA"][r]["length"]) for (n = t["$_BCFA"][r]["length"] - 1; 0 <= n; n--) t["$_BCFA"][r][n]["$_JDi"]();
                return t;
            },
            "$_BCHh": function (e) {
                var t = this["$_CJE"]["getBoundingClientRect"]();
                return 1 !== (e = e || 1) && (t["x"] = t["x"] * e, t["y"] = t["y"] * e, t["top"] = t["top"] * e, t["left"] = t["left"] * e, t["right"] = t["right"] * e, t["bottom"] = t["bottom"] * e, t["width"] = t["width"] * e, t["height"] = t["height"] * e), t;
            },
            "$_BCIW": function (e) {
                var t = this["$_BCHh"](),
                    n = l["body"],
                    r = l["documentElement"],
                    i = window["pageYOffset"] || r["scrollTop"] || n["scrollTop"],
                    s = window["pageXOffset"] || r["scrollLeft"] || n["scrollLeft"],
                    o = r["clientTop"] || n["clientTop"] || 0,
                    _ = r["clientLeft"] || n["clientLeft"] || 0,
                    a = t["top"] + i - o,
                    c = t["left"] + s - _;
                return {
                    "top": Math["round"](a),
                    "left": Math["round"](c),
                    "width": t["right"] - t["left"],
                    "height": t["bottom"] - t["top"]
                };
            },
            "$_BGu": function (e) {
                var t = this["$_CJE"];
                return this["$_BAJt"](), t["appendChild"](l["createTextNode"](e)), this;
            },
            "$_BCJY": function (e) {
                return this["$_CJE"]["innerHTML"] = e, this;
            },
            "_style": function (e) {
                var t = this["$_CJE"];
                return l["getElementsByTagName"]("head")[0]["appendChild"](t), t["styleSheet"] ? t["styleSheet"]["cssText"] = e : t["appendChild"](l["createTextNode"](e)), this;
            },
            "$_BDAE": function (e) {
                var t,
                    n,
                    r = this["$_CJE"],
                    i = !((n = l["createElement"]("canvas"))["getContext"] && n["getContext"]("2d"));
                if (e) {
                    if (i) {
                        var s = l["createElement"]("div");
                        s["innerHTML"] = r["outerHTML"], t = new oe(s["childNodes"][0]);
                    } else t = new oe(this["$_CJE"]["cloneNode"](!0));
                    r["id"] = "origin_" + r["id"], t["$_BBEu"](["href"]);
                } else (t = new oe(this["$_CJE"]["cloneNode"](!1)))["$_BBJn"]("sandbox");
                return t;
            },
            "$_BDBw": function () {
                return this["$_CJE"]["click"](), this;
            },
            "$_BDCw": function () {
                return this["$_CJE"]["play"](), this;
            },
            "$_BDDg": function () {
                return this["$_CJE"]["currentTime"] = 0, this["$_CJE"]["play"](), this;
            },
            "$_BDEN": function () {
                return this["$_CJE"]["currentTime"] = 0, this["$_CJE"]["pause"](), this;
            },
            "$_BDFL": function () {
                return this["$_CJE"]["value"];
            },
            "$_BDGu": function () {
                return this["$_CJE"]["focus"](), this;
            },
            "$_BDHP": function () {
                var e = this["$_BCHh"]();
                return e["right"] - e["left"];
            },
            "$_BDIf": function (e) {
                var t = this["$_CJE"];
                return window["getComputedStyle"] ? window["getComputedStyle"](t)[e] : t["currentStyle"][e];
            },
            "$_BDJn": function () {
                var e, t, n;
                try {
                    var r = this["$_CJE"],
                        i = r;
                    while (i["parentNode"] != l["body"] && r["offsetTop"] - i["parentNode"]["offsetTop"] < 160) i = i["parentNode"], "hidden" == (t = "overflow", n = void 0, (e = i)["currentStyle"] ? n = e["currentStyle"][t] : window["getComputedStyle"] && (n = window["getComputedStyle"](e, null)["getPropertyValue"](t)), n) && (i["style"]["overflow"] = "visible");
                } catch (s) {
                }
                return this;
            },
            "$_BEAb": function () {
                var e = this["$_CJE"],
                    t = e["offsetLeft"],
                    n = e["offsetParent"];
                while (null !== n) t += n["offsetLeft"], n = n["offsetParent"];
                return t;
            },
            "$_BEBv": function () {
                var e = this["$_CJE"],
                    t = e["offsetTop"],
                    n = e["offsetParent"];
                while (null !== n) t += n["offsetTop"], n = n["offsetParent"];
                return t;
            }
        }, oe["$"] = function (e) {
            var t, n;
            "string" == typeof e ? "#" === e[0] ? t = l["getElementById"](e["slice"](1)) : "querySelector" in l ? t = l["querySelector"](e) : Z(window["jQuery"]) && (t = window["jQuery"](e)[0]) : t = e["length"] ? e[0] : e;
            try {
                n = Node["ELEMENT_NODE"];
            } catch (r) {
                n = 1;
            }
            try {
                if (t["nodeType"] === n) return new oe(t);
            } catch (r) {
                return !1;
            }
        }, $_FBK["prototype"] = {
            "$_BECm": function () {
                var e = this["$_FBK"];
                if (J(e["clientX"])) return e["clientX"];
                var t = e["changedTouches"] && e["changedTouches"][0];
                return t ? t["clientX"] : -1;
            },
            "$_BEDf": function () {
                var e = this["$_FBK"];
                if (J(e["clientY"])) return e["clientY"];
                var t = e["changedTouches"] && e["changedTouches"][0];
                return t ? t["clientY"] : -1;
            },
            "$_BEEh": function () {
                var e = this["$_FBK"];
                return e["cancelable"] && Z(e["preventDefault"]) ? e["preventDefault"]() : e["returnValue"] = !1, this;
            },
            "$_BEFW": function () {
                var e = this["$_FBK"];
                return Z(e["stopPropagation"]) && e["stopPropagation"](), this;
            }
        };
        var ae = function () {
                "use strict";
                var l,
                    u,
                    n,
                    h,
                    e = {},
                    t = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

                function r(e) {
                    return e < 10 ? "0" + e : e;
                }

                function i() {
                    return this["valueOf"]();
                }

                function p(e) {
                    return t["lastIndex"] = 0, t["test"](e) ? "\"" + e["replace"](t, function (e) {
                        var t = n[e];
                        return "string" == typeof t ? t : "\\u" + ("0000" + e["charCodeAt"](0)["toString"](16))["slice"](-4);
                    }) + "\"" : "\"" + e + "\"";
                }

                return "function" != typeof Date["prototype"]["toJSON"] && (Date["prototype"]["toJSON"] = function () {
                    return isFinite(this["valueOf"]()) ? this["getUTCFullYear"]() + "-" + r(this["getUTCMonth"]() + 1) + "-" + r(this["getUTCDate"]()) + "T" + r(this["getUTCHours"]()) + ":" + r(this["getUTCMinutes"]()) + ":" + r(this["getUTCSeconds"]()) + "Z" : null;
                }, Boolean["prototype"]["toJSON"] = i, Number["prototype"]["toJSON"] = i, String["prototype"]["toJSON"] = i), n = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    "\"": "\\\"",
                    "\\": "\\\\"
                }, e["stringify"] = function (e, t, n) {
                    var r;
                    if (u = l = "", "number" == typeof n) for (r = 0; r < n; r += 1) u += " "; else "string" == typeof n && (u = n);
                    if ((h = t) && "function" != typeof t && ("object" != typeof t || "number" != typeof t["length"])) throw new Error("JSON.stringify");
                    return function c(e, t) {
                        var n,
                            r,
                            i,
                            s,
                            o,
                            _ = l,
                            a = t[e];
                        switch (a && "object" == typeof a && "function" == typeof a["toJSON"] && (a = a["toJSON"](e)), "function" == typeof h && (a = h["call"](t, e, a)), typeof a) {
                            case "string":
                                return p(a);
                            case "number":
                                return isFinite(a) ? String(a) : "null";
                            case "boolean":
                            case "null":
                                return String(a);
                            case "object":
                                if (!a) return "null";
                                if (l += u, o = [], "[object Array]" === Object["prototype"]["toString"]["apply"](a)) {
                                    for (s = a["length"], n = 0; n < s; n += 1) o[n] = c(n, a) || "null";
                                    return i = 0 === o["length"] ? "[]" : l ? "[\n" + l + o["join"](",\n" + l) + "\n" + _ + "]" : "[" + o["join"](",") + "]", l = _, i;
                                }
                                if (h && "object" == typeof h) for (s = h["length"], n = 0; n < s; n += 1) "string" == typeof h[n] && (i = c(r = h[n], a)) && o["push"](p(r) + (l ? ": " : ":") + i); else for (r in a) Object["prototype"]["hasOwnProperty"]["call"](a, r) && (i = c(r, a)) && o["push"](p(r) + (l ? ": " : ":") + i);
                                return i = 0 === o["length"] ? "{}" : l ? "{\n" + l + o["join"](",\n" + l) + "\n" + _ + "}" : "{" + o["join"](",") + "}", l = _, i;
                        }
                    }("", {
                        "": e
                    });
                }, e;
            }(),
            ce = "px",
            le = 1;

        function pe() {
            var e = this;
            e["posX"] = 0, e["posY"] = 0, e["scrollLeft"] = 0, e["scrollTop"] = 0, e["lastTime"] = 0, e["$_FC_"] = [], e["$_BEGQ"] = new oe(l), e["$_BEHV"] = new oe(window), e["$_BEIU"] = null, e["$_BEJu"] = null, e["$_BFAU"] = 0, e["$_BFBP"] = 0, e["$_BFCl"] = 0, e["$_BFDn"]();
        }

        var de,
            ge = (de = {
                "mouseEvent": !(pe["prototype"] = {
                    "$_BFER": y || b || m ? 150 : 300,
                    "$_BFDn": function () {
                        var r = this;
                        r["$_BEGQ"]["$_JBG"]("move", function (e) {
                            r["$_BFFQ"](), r["posX"] = e["$_BECm"](), r["posY"] = e["$_BEDf"](), r["$_BFGo"]("move", r["posX"], r["posY"], e["$_FBK"]["type"]);
                        })["$_JBG"]("down", function (e) {
                            var t = r["$_FC_"]["length"];
                            r["$_FC_"][t - 1] && "down" === r["$_FC_"][t - 1][0] || (r["$_BFFQ"](), r["posX"] = e["$_BECm"](), r["posY"] = e["$_BEDf"](), r["$_BFGo"]("down", r["posX"], r["posY"], e["$_FBK"]["type"]), r["$_FC_"][t - 2] && "move" === r["$_FC_"][t - 2][0] && r["$_FC_"][t - 3] && "up" === r["$_FC_"][t - 3][0] && r["$_BFHA"](t - 2));
                        })["$_JBG"]("up", function (e) {
                            var t = r["$_FC_"]["length"];
                            r["$_FC_"][t - 1] && "up" === r["$_FC_"][t - 1][0] || (r["$_BFFQ"](), r["posX"] = e["$_BECm"](), r["posY"] = e["$_BEDf"](), r["$_BFGo"]("up", r["posX"], r["posY"], e["$_FBK"]["type"]), r["$_FC_"][t - 2] && "move" === r["$_FC_"][t - 2][0] && r["$_FC_"][t - 3] && "down" === r["$_FC_"][t - 3][0] && r["$_BFHA"](t - 2));
                        })["$_JBG"]("focusin", function () {
                            r["$_BFGo"]("focus");
                        }), r["$_BEHV"]["$_JBG"]("scroll", function () {
                            var e = ("pageXOffset" in window),
                                t = e ? window["pageXOffset"] : l["body"]["scrollLeft"],
                                n = e ? window["pageYOffset"] : l["body"]["scrollTop"];
                            r["posX"] = t - r["scrollLeft"] + r["posX"], r["posY"] = n - r["scrollTop"] + r["posY"], r["$_BFGo"]("scroll", t - r["scrollLeft"] + r["posX"], n - r["scrollTop"] + r["posY"]), r["$_BFFQ"]();
                        })["$_JBG"]("focus", function () {
                            r["$_BFGo"]("focus");
                        })["$_JBG"]("blur", function () {
                            r["$_BFGo"]("blur");
                        })["$_JBG"]("unload", function () {
                            r["$_BFGo"]("unload");
                        });
                    },
                    "$_BFFQ": function () {
                        var e = ("pageXOffset" in window),
                            t = e ? window["pageXOffset"] : l["body"]["scrollLeft"],
                            n = e ? window["pageYOffset"] : l["body"]["scrollTop"];
                        return {
                            "x": this["scrollLeft"] = t,
                            "y": this["scrollTop"] = n
                        };
                    },
                    "$_BFGo": function (e, t, n, r) {
                        var i = $_FB(),
                            s = this,
                            o = s["$_BFAU"],
                            _ = s["$_BFBP"],
                            a = s["$_BFCl"],
                            c = s["$_FC_"];
                        if (-1 < new ie(["move", "down", "up", "scroll"])["$_BAFA"](e)) {
                            if ("move" === e) {
                                if (t === o && n === _ || a === i) return;
                                s["$_BFAU"] = t, s["$_BFBP"] = n, s["$_BFCl"] = i;
                            }
                            c["push"]([e, s["$_BFIQ"](t), s["$_BFIQ"](n), i, r]);
                        } else c["push"]([e, i]);
                        return s;
                    },
                    "$_BFHA": function (e) {
                        this["$_FC_"]["splice"](e, 1);
                    },
                    "$_JDi": function () {
                        this["$_BEHV"]["$_BCGr"](), this["$_BEGQ"]["$_BCGr"]();
                    },
                    "$_BFJj": function (e) {
                        var t = 0,
                            n = 0,
                            r = [],
                            i = this,
                            s = i["lastTime"];
                        if (e["length"] <= 0) return [];
                        for (var o = null, _ = null, a = i["$_BGAB"](e), c = a["length"], l = c < this["$_BFER"] ? 0 : c - this["$_BFER"]; l < c; l += 1) {
                            var u = a[l],
                                h = u[0];
                            -1 < new ie(["down", "move", "up", "scroll"])["$_BAFA"](h) ? (o || (o = u), _ = u, r["push"]([h, [u[1] - t, u[2] - n], i["$_BFIQ"](s ? u[3] - s : s)]), t = u[1], n = u[2], s = u[3]) : -1 < new ie(["blur", "focus", "unload"])["$_BAFA"](h) && (r["push"]([h, i["$_BFIQ"](s ? u[1] - s : s)]), s = u[1]);
                        }
                        return i["$_BEIU"] = o, i["$_BEJu"] = _, r;
                    },
                    "$_BGAB": function (e) {
                        var t = "",
                            n = 0;
                        (e || [])["length"];
                        while (!t && e[n]) t = e[n] && e[n][4], n++;
                        if (!t) return e;
                        for (var r = "", i = ["mouse", "touch", "pointer", "MSPointer"], s = 0, o = i["length"]; s < o; s++) 0 === t["indexOf"](i[s]) && (r = i[s]);
                        for (var _ = e["slice"](), a = _["length"] - 1; 0 <= a; a--) {
                            var c = _[a],
                                l = c[0];
                            if (-1 < new ie(["move", "down", "up"])["$_BAFA"](l)) 0 !== (c[4] || "")["indexOf"](r) && _["splice"](a, 1);
                        }
                        return _;
                    },
                    "$_EEs": function (e) {
                        var h = {
                            "move": 0,
                            "down": 1,
                            "up": 2,
                            "scroll": 3,
                            "focus": 4,
                            "blur": 5,
                            "unload": 6,
                            "unknown": 7
                        };

                        function p(e, t) {
                            for (var n = e["toString"](2), r = "", i = n["length"] + 1; i <= t; i += 1) r += "0";
                            return n = r + n;
                        }

                        var d = function (e) {
                            var t = [],
                                n = e["length"],
                                r = 0;
                            while (r < n) {
                                var i = e[r],
                                    s = 0;
                                while (1) {
                                    if (16 <= s) break;
                                    var o = r + s + 1;
                                    if (n <= o) break;
                                    if (e[o] !== i) break;
                                    s += 1;
                                }
                                r = r + 1 + s;
                                var _ = h[i];
                                0 != s ? (t["push"](8 | _), t["push"](s - 1)) : t["push"](_);
                            }
                            for (var a = p(32768 | n, 16), c = "", l = 0, u = t["length"]; l < u; l += 1) c += p(t[l], 4);
                            return a + c;
                        };

                        function c(e, t) {
                            for (var n = [], r = 0, i = e["length"]; r < i; r += 1) n["push"](t(e[r]));
                            return n;
                        }

                        function g(e, t) {
                            e = function a(e) {
                                var t = 32767,
                                    n = (e = c(e, function (e) {
                                        return t < e ? t : e < -t ? -t : e;
                                    }))["length"],
                                    r = 0,
                                    i = [];
                                while (r < n) {
                                    var s = 1,
                                        o = e[r],
                                        _ = Math["abs"](o);
                                    while (1) {
                                        if (n <= r + s) break;
                                        if (e[r + s] !== o) break;
                                        if (127 <= _ || 127 <= s) break;
                                        s += 1;
                                    }
                                    1 < s ? i["push"]((o < 0 ? 49152 : 32768) | s << 7 | _) : i["push"](o), r += s;
                                }
                                return i;
                            }(e);
                            var n,
                                r = [],
                                i = [];
                            c(e, function (e) {
                                var t = Math["ceil"](function n(e, t) {
                                    return 0 === e ? 0 : Math["log"](e) / Math["log"](t);
                                }(Math["abs"](e) + 1, 16));
                                0 === t && (t = 1), r["push"](p(t - 1, 2)), i["push"](p(Math["abs"](e), 4 * t));
                            });
                            var s = r["join"](""),
                                o = i["join"]("");
                            return n = t ? c(function _(e, t) {
                                var n = [];
                                return c(e, function (e) {
                                    t(e) && n["push"](e);
                                }), n;
                            }(e, function (e) {
                                return 0 != e && e >> 15 != 1;
                            }), function (e) {
                                return e < 0 ? "1" : "0";
                            })["join"]("") : "", p(32768 | e["length"], 16) + s + o + n;
                        }

                        return function (e) {
                            for (var t = [], n = [], r = [], i = [], s = 0, o = e["length"]; s < o; s += 1) {
                                var _ = e[s],
                                    a = _["length"];
                                t["push"](_[0]), n["push"](2 === a ? _[1] : _[2]), 3 === a && (r["push"](_[1][0]), i["push"](_[1][1]));
                            }
                            var c = d(t) + g(n, !1) + g(r, !0) + g(i, !0),
                                l = c["length"];
                            return l % 6 != 0 && (c += p(0, 6 - l % 6)), function u(e) {
                                for (var t = "", n = e["length"] / 6, r = 0; r < n; r += 1) t += "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~"["charAt"](window["parseInt"](e["slice"](6 * r, 6 * (r + 1)), 2));
                                return t;
                            }(c);
                        }(e);
                    },
                    "$_BFIQ": function (e) {
                        var t = 32767;
                        return "number" != typeof e ? e : (t < e ? e = t : e < -t && (e = -t), Math["round"](e));
                    },
                    "$_BGBv": function () {
                        return this["$_EEs"](this["$_BFJj"](this["$_FC_"]))["length"];
                    },
                    "$_BGCW": function () {
                        // var e = this["$_FC_"];
                        var e = [
                            [
                                "move",
                                1204,
                                312,
                                1706339053627,
                                "pointermove"
                            ],
                            [
                                "move",
                                1205,
                                312,
                                1706339053635,
                                "pointermove"
                            ],
                            [
                                "move",
                                1205,
                                311,
                                1706339053659,
                                "pointermove"
                            ],
                            [
                                "move",
                                1206,
                                311,
                                1706339053667,
                                "pointermove"
                            ],
                            [
                                "move",
                                1207,
                                311,
                                1706339053699,
                                "pointermove"
                            ],
                            [
                                "move",
                                1208,
                                310,
                                1706339053715,
                                "pointermove"
                            ],
                            [
                                "move",
                                1209,
                                310,
                                1706339053723,
                                "pointermove"
                            ],
                            [
                                "move",
                                1210,
                                309,
                                1706339053731,
                                "pointermove"
                            ],
                            [
                                "move",
                                1211,
                                309,
                                1706339053739,
                                "pointermove"
                            ],
                            [
                                "move",
                                1213,
                                309,
                                1706339053747,
                                "pointermove"
                            ],
                            [
                                "move",
                                1216,
                                308,
                                1706339053755,
                                "pointermove"
                            ],
                            [
                                "move",
                                1218,
                                307,
                                1706339053763,
                                "pointermove"
                            ],
                            [
                                "move",
                                1221,
                                307,
                                1706339053771,
                                "pointermove"
                            ],
                            [
                                "move",
                                1224,
                                306,
                                1706339053779,
                                "pointermove"
                            ],
                            [
                                "move",
                                1228,
                                306,
                                1706339053788,
                                "pointermove"
                            ],
                            [
                                "move",
                                1232,
                                305,
                                1706339053795,
                                "pointermove"
                            ],
                            [
                                "move",
                                1237,
                                304,
                                1706339053803,
                                "pointermove"
                            ],
                            [
                                "move",
                                1241,
                                302,
                                1706339053811,
                                "pointermove"
                            ],
                            [
                                "move",
                                1246,
                                300,
                                1706339053819,
                                "pointermove"
                            ],
                            [
                                "move",
                                1250,
                                298,
                                1706339053827,
                                "pointermove"
                            ],
                            [
                                "move",
                                1254,
                                297,
                                1706339053835,
                                "pointermove"
                            ],
                            [
                                "move",
                                1257,
                                294,
                                1706339053843,
                                "pointermove"
                            ],
                            [
                                "move",
                                1260,
                                292,
                                1706339053851,
                                "pointermove"
                            ],
                            [
                                "move",
                                1264,
                                291,
                                1706339053859,
                                "pointermove"
                            ],
                            [
                                "move",
                                1266,
                                289,
                                1706339053867,
                                "pointermove"
                            ],
                            [
                                "move",
                                1267,
                                288,
                                1706339053875,
                                "pointermove"
                            ],
                            [
                                "move",
                                1269,
                                287,
                                1706339053883,
                                "pointermove"
                            ],
                            [
                                "move",
                                1271,
                                286,
                                1706339053899,
                                "pointermove"
                            ],
                            [
                                "move",
                                1271,
                                285,
                                1706339053907,
                                "pointermove"
                            ],
                            [
                                "move",
                                1272,
                                285,
                                1706339053915,
                                "pointermove"
                            ],
                            [
                                "move",
                                1273,
                                285,
                                1706339053931,
                                "pointermove"
                            ],
                            [
                                "move",
                                1275,
                                285,
                                1706339053947,
                                "pointermove"
                            ],
                            [
                                "move",
                                1276,
                                285,
                                1706339053955,
                                "pointermove"
                            ],
                            [
                                "move",
                                1277,
                                285,
                                1706339053963,
                                "pointermove"
                            ],
                            [
                                "move",
                                1278,
                                285,
                                1706339053971,
                                "pointermove"
                            ],
                            [
                                "move",
                                1281,
                                285,
                                1706339053979,
                                "pointermove"
                            ],
                            [
                                "move",
                                1283,
                                285,
                                1706339053987,
                                "pointermove"
                            ],
                            [
                                "move",
                                1287,
                                285,
                                1706339053995,
                                "pointermove"
                            ],
                            [
                                "move",
                                1293,
                                287,
                                1706339054003,
                                "pointermove"
                            ],
                            [
                                "move",
                                1300,
                                289,
                                1706339054011,
                                "pointermove"
                            ],
                            [
                                "move",
                                1308,
                                291,
                                1706339054019,
                                "pointermove"
                            ],
                            [
                                "move",
                                1319,
                                293,
                                1706339054027,
                                "pointermove"
                            ],
                            [
                                "move",
                                1331,
                                295,
                                1706339054035,
                                "pointermove"
                            ],
                            [
                                "move",
                                1343,
                                297,
                                1706339054043,
                                "pointermove"
                            ],
                            [
                                "move",
                                1355,
                                299,
                                1706339054051,
                                "pointermove"
                            ],
                            [
                                "move",
                                1366,
                                301,
                                1706339054059,
                                "pointermove"
                            ],
                            [
                                "move",
                                1377,
                                302,
                                1706339054067,
                                "pointermove"
                            ],
                            [
                                "move",
                                1386,
                                303,
                                1706339054075,
                                "pointermove"
                            ],
                            [
                                "move",
                                1394,
                                303,
                                1706339054083,
                                "pointermove"
                            ],
                            [
                                "move",
                                1401,
                                303,
                                1706339054091,
                                "pointermove"
                            ],
                            [
                                "move",
                                1406,
                                303,
                                1706339054099,
                                "pointermove"
                            ],
                            [
                                "move",
                                1409,
                                303,
                                1706339054107,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                303,
                                1706339054115,
                                "pointermove"
                            ],
                            [
                                "move",
                                1412,
                                303,
                                1706339054123,
                                "pointermove"
                            ],
                            [
                                "move",
                                1413,
                                303,
                                1706339054131,
                                "pointermove"
                            ],
                            [
                                "move",
                                1414,
                                303,
                                1706339054211,
                                "pointermove"
                            ],
                            [
                                "move",
                                1415,
                                303,
                                1706339054227,
                                "pointermove"
                            ],
                            [
                                "move",
                                1416,
                                303,
                                1706339054243,
                                "pointermove"
                            ],
                            [
                                "move",
                                1417,
                                303,
                                1706339054251,
                                "pointermove"
                            ],
                            [
                                "move",
                                1418,
                                303,
                                1706339054267,
                                "pointermove"
                            ],
                            [
                                "move",
                                1419,
                                303,
                                1706339054283,
                                "pointermove"
                            ],
                            [
                                "move",
                                1420,
                                303,
                                1706339054299,
                                "pointermove"
                            ],
                            [
                                "move",
                                1420,
                                304,
                                1706339055139,
                                "pointermove"
                            ],
                            [
                                "move",
                                1420,
                                305,
                                1706339055691,
                                "pointermove"
                            ],
                            [
                                "move",
                                1420,
                                306,
                                1706339055707,
                                "pointermove"
                            ],
                            [
                                "move",
                                1419,
                                307,
                                1706339055715,
                                "pointermove"
                            ],
                            [
                                "move",
                                1418,
                                310,
                                1706339055723,
                                "pointermove"
                            ],
                            [
                                "move",
                                1416,
                                312,
                                1706339055731,
                                "pointermove"
                            ],
                            [
                                "move",
                                1414,
                                314,
                                1706339055739,
                                "pointermove"
                            ],
                            [
                                "move",
                                1412,
                                316,
                                1706339055747,
                                "pointermove"
                            ],
                            [
                                "move",
                                1409,
                                320,
                                1706339055755,
                                "pointermove"
                            ],
                            [
                                "move",
                                1405,
                                324,
                                1706339055763,
                                "pointermove"
                            ],
                            [
                                "move",
                                1403,
                                326,
                                1706339055772,
                                "pointermove"
                            ],
                            [
                                "move",
                                1401,
                                328,
                                1706339055779,
                                "pointermove"
                            ],
                            [
                                "move",
                                1398,
                                332,
                                1706339055787,
                                "pointermove"
                            ],
                            [
                                "move",
                                1396,
                                334,
                                1706339055795,
                                "pointermove"
                            ],
                            [
                                "move",
                                1394,
                                337,
                                1706339055803,
                                "pointermove"
                            ],
                            [
                                "move",
                                1393,
                                339,
                                1706339055811,
                                "pointermove"
                            ],
                            [
                                "move",
                                1392,
                                342,
                                1706339055819,
                                "pointermove"
                            ],
                            [
                                "move",
                                1391,
                                345,
                                1706339055827,
                                "pointermove"
                            ],
                            [
                                "move",
                                1390,
                                347,
                                1706339055835,
                                "pointermove"
                            ],
                            [
                                "move",
                                1390,
                                350,
                                1706339055843,
                                "pointermove"
                            ],
                            [
                                "move",
                                1390,
                                353,
                                1706339055851,
                                "pointermove"
                            ],
                            [
                                "move",
                                1389,
                                356,
                                1706339055859,
                                "pointermove"
                            ],
                            [
                                "move",
                                1388,
                                359,
                                1706339055867,
                                "pointermove"
                            ],
                            [
                                "move",
                                1387,
                                362,
                                1706339055875,
                                "pointermove"
                            ],
                            [
                                "move",
                                1387,
                                364,
                                1706339055883,
                                "pointermove"
                            ],
                            [
                                "move",
                                1385,
                                368,
                                1706339055892,
                                "pointermove"
                            ],
                            [
                                "move",
                                1383,
                                370,
                                1706339055900,
                                "pointermove"
                            ],
                            [
                                "move",
                                1382,
                                372,
                                1706339055907,
                                "pointermove"
                            ],
                            [
                                "move",
                                1381,
                                374,
                                1706339055915,
                                "pointermove"
                            ],
                            [
                                "move",
                                1380,
                                377,
                                1706339055923,
                                "pointermove"
                            ],
                            [
                                "move",
                                1379,
                                378,
                                1706339055931,
                                "pointermove"
                            ],
                            [
                                "move",
                                1378,
                                379,
                                1706339055939,
                                "pointermove"
                            ],
                            [
                                "move",
                                1378,
                                380,
                                1706339055947,
                                "pointermove"
                            ],
                            [
                                "move",
                                1377,
                                380,
                                1706339055955,
                                "pointermove"
                            ],
                            [
                                "move",
                                1377,
                                381,
                                1706339055963,
                                "pointermove"
                            ],
                            [
                                "move",
                                1376,
                                382,
                                1706339055971,
                                "pointermove"
                            ],
                            [
                                "move",
                                1375,
                                383,
                                1706339055987,
                                "pointermove"
                            ],
                            [
                                "move",
                                1374,
                                383,
                                1706339055995,
                                "pointermove"
                            ],
                            [
                                "move",
                                1374,
                                384,
                                1706339056003,
                                "pointermove"
                            ],
                            [
                                "move",
                                1373,
                                385,
                                1706339056019,
                                "pointermove"
                            ],
                            [
                                "move",
                                1373,
                                386,
                                1706339056035,
                                "pointermove"
                            ],
                            [
                                "move",
                                1374,
                                386,
                                1706339056075,
                                "pointermove"
                            ],
                            [
                                "move",
                                1375,
                                386,
                                1706339056083,
                                "pointermove"
                            ],
                            [
                                "move",
                                1376,
                                386,
                                1706339056091,
                                "pointermove"
                            ],
                            [
                                "move",
                                1378,
                                386,
                                1706339056099,
                                "pointermove"
                            ],
                            [
                                "move",
                                1380,
                                386,
                                1706339056107,
                                "pointermove"
                            ],
                            [
                                "move",
                                1382,
                                386,
                                1706339056115,
                                "pointermove"
                            ],
                            [
                                "move",
                                1385,
                                386,
                                1706339056123,
                                "pointermove"
                            ],
                            [
                                "move",
                                1389,
                                386,
                                1706339056131,
                                "pointermove"
                            ],
                            [
                                "move",
                                1393,
                                387,
                                1706339056139,
                                "pointermove"
                            ],
                            [
                                "move",
                                1399,
                                387,
                                1706339056147,
                                "pointermove"
                            ],
                            [
                                "move",
                                1406,
                                388,
                                1706339056155,
                                "pointermove"
                            ],
                            [
                                "move",
                                1412,
                                388,
                                1706339056163,
                                "pointermove"
                            ],
                            [
                                "move",
                                1419,
                                388,
                                1706339056171,
                                "pointermove"
                            ],
                            [
                                "move",
                                1427,
                                389,
                                1706339056179,
                                "pointermove"
                            ],
                            [
                                "move",
                                1434,
                                389,
                                1706339056187,
                                "pointermove"
                            ],
                            [
                                "move",
                                1442,
                                389,
                                1706339056195,
                                "pointermove"
                            ],
                            [
                                "move",
                                1450,
                                389,
                                1706339056203,
                                "pointermove"
                            ],
                            [
                                "move",
                                1457,
                                389,
                                1706339056211,
                                "pointermove"
                            ],
                            [
                                "move",
                                1463,
                                389,
                                1706339056219,
                                "pointermove"
                            ],
                            [
                                "move",
                                1470,
                                389,
                                1706339056227,
                                "pointermove"
                            ],
                            [
                                "move",
                                1474,
                                389,
                                1706339056235,
                                "pointermove"
                            ],
                            [
                                "move",
                                1478,
                                389,
                                1706339056243,
                                "pointermove"
                            ],
                            [
                                "move",
                                1481,
                                389,
                                1706339056251,
                                "pointermove"
                            ],
                            [
                                "move",
                                1482,
                                389,
                                1706339056267,
                                "pointermove"
                            ],
                            [
                                "move",
                                1481,
                                389,
                                1706339056387,
                                "pointermove"
                            ],
                            [
                                "move",
                                1480,
                                389,
                                1706339056395,
                                "pointermove"
                            ],
                            [
                                "move",
                                1478,
                                388,
                                1706339056403,
                                "pointermove"
                            ],
                            [
                                "move",
                                1476,
                                387,
                                1706339056411,
                                "pointermove"
                            ],
                            [
                                "move",
                                1473,
                                387,
                                1706339056419,
                                "pointermove"
                            ],
                            [
                                "move",
                                1470,
                                386,
                                1706339056427,
                                "pointermove"
                            ],
                            [
                                "move",
                                1468,
                                385,
                                1706339056435,
                                "pointermove"
                            ],
                            [
                                "move",
                                1465,
                                384,
                                1706339056443,
                                "pointermove"
                            ],
                            [
                                "move",
                                1462,
                                384,
                                1706339056451,
                                "pointermove"
                            ],
                            [
                                "move",
                                1460,
                                383,
                                1706339056459,
                                "pointermove"
                            ],
                            [
                                "move",
                                1458,
                                382,
                                1706339056467,
                                "pointermove"
                            ],
                            [
                                "move",
                                1457,
                                381,
                                1706339056475,
                                "pointermove"
                            ],
                            [
                                "move",
                                1456,
                                381,
                                1706339056483,
                                "pointermove"
                            ],
                            [
                                "move",
                                1455,
                                381,
                                1706339056491,
                                "pointermove"
                            ],
                            [
                                "move",
                                1454,
                                381,
                                1706339056507,
                                "pointermove"
                            ],
                            [
                                "move",
                                1453,
                                381,
                                1706339056531,
                                "pointermove"
                            ],
                            [
                                "move",
                                1452,
                                381,
                                1706339056563,
                                "pointermove"
                            ],
                            [
                                "move",
                                1452,
                                380,
                                1706339056603,
                                "pointermove"
                            ],
                            [
                                "down",
                                1452,
                                380,
                                1706339056763,
                                "pointerdown"
                            ],
                            [
                                "up",
                                1452,
                                380,
                                1706339056835,
                                "pointerup"
                            ],
                            [
                                "move",
                                1451,
                                380,
                                1706339056979,
                                "pointermove"
                            ],
                            [
                                "move",
                                1450,
                                380,
                                1706339056995,
                                "pointermove"
                            ],
                            [
                                "move",
                                1449,
                                380,
                                1706339057011,
                                "pointermove"
                            ],
                            [
                                "move",
                                1447,
                                380,
                                1706339057019,
                                "pointermove"
                            ],
                            [
                                "move",
                                1446,
                                380,
                                1706339057027,
                                "pointermove"
                            ],
                            [
                                "move",
                                1444,
                                380,
                                1706339057035,
                                "pointermove"
                            ],
                            [
                                "move",
                                1442,
                                380,
                                1706339057043,
                                "pointermove"
                            ],
                            [
                                "move",
                                1440,
                                380,
                                1706339057052,
                                "pointermove"
                            ],
                            [
                                "move",
                                1437,
                                380,
                                1706339057059,
                                "pointermove"
                            ],
                            [
                                "move",
                                1435,
                                381,
                                1706339057068,
                                "pointermove"
                            ],
                            [
                                "move",
                                1433,
                                381,
                                1706339057075,
                                "pointermove"
                            ],
                            [
                                "move",
                                1430,
                                382,
                                1706339057083,
                                "pointermove"
                            ],
                            [
                                "move",
                                1427,
                                383,
                                1706339057091,
                                "pointermove"
                            ],
                            [
                                "move",
                                1424,
                                384,
                                1706339057099,
                                "pointermove"
                            ],
                            [
                                "move",
                                1421,
                                385,
                                1706339057107,
                                "pointermove"
                            ],
                            [
                                "move",
                                1418,
                                385,
                                1706339057115,
                                "pointermove"
                            ],
                            [
                                "move",
                                1413,
                                386,
                                1706339057123,
                                "pointermove"
                            ],
                            [
                                "move",
                                1410,
                                387,
                                1706339057131,
                                "pointermove"
                            ],
                            [
                                "move",
                                1407,
                                388,
                                1706339057139,
                                "pointermove"
                            ],
                            [
                                "move",
                                1403,
                                389,
                                1706339057147,
                                "pointermove"
                            ],
                            [
                                "move",
                                1398,
                                389,
                                1706339057155,
                                "pointermove"
                            ],
                            [
                                "move",
                                1394,
                                391,
                                1706339057163,
                                "pointermove"
                            ],
                            [
                                "move",
                                1390,
                                392,
                                1706339057171,
                                "pointermove"
                            ],
                            [
                                "move",
                                1385,
                                394,
                                1706339057179,
                                "pointermove"
                            ],
                            [
                                "move",
                                1381,
                                395,
                                1706339057187,
                                "pointermove"
                            ],
                            [
                                "move",
                                1376,
                                396,
                                1706339057195,
                                "pointermove"
                            ],
                            [
                                "move",
                                1371,
                                397,
                                1706339057203,
                                "pointermove"
                            ],
                            [
                                "move",
                                1366,
                                397,
                                1706339057211,
                                "pointermove"
                            ],
                            [
                                "move",
                                1361,
                                398,
                                1706339057219,
                                "pointermove"
                            ],
                            [
                                "move",
                                1355,
                                399,
                                1706339057227,
                                "pointermove"
                            ],
                            [
                                "move",
                                1351,
                                399,
                                1706339057235,
                                "pointermove"
                            ],
                            [
                                "move",
                                1347,
                                399,
                                1706339057243,
                                "pointermove"
                            ],
                            [
                                "move",
                                1343,
                                400,
                                1706339057251,
                                "pointermove"
                            ],
                            [
                                "move",
                                1340,
                                400,
                                1706339057259,
                                "pointermove"
                            ],
                            [
                                "move",
                                1337,
                                400,
                                1706339057267,
                                "pointermove"
                            ],
                            [
                                "move",
                                1334,
                                400,
                                1706339057275,
                                "pointermove"
                            ],
                            [
                                "move",
                                1332,
                                400,
                                1706339057283,
                                "pointermove"
                            ],
                            [
                                "move",
                                1330,
                                400,
                                1706339057291,
                                "pointermove"
                            ],
                            [
                                "move",
                                1328,
                                400,
                                1706339057299,
                                "pointermove"
                            ],
                            [
                                "move",
                                1327,
                                400,
                                1706339057307,
                                "pointermove"
                            ],
                            [
                                "move",
                                1326,
                                400,
                                1706339057315,
                                "pointermove"
                            ],
                            [
                                "move",
                                1324,
                                400,
                                1706339057323,
                                "pointermove"
                            ],
                            [
                                "move",
                                1323,
                                400,
                                1706339057339,
                                "pointermove"
                            ],
                            [
                                "move",
                                1323,
                                399,
                                1706339057379,
                                "pointermove"
                            ],
                            [
                                "move",
                                1322,
                                399,
                                1706339057387,
                                "pointermove"
                            ],
                            [
                                "move",
                                1321,
                                398,
                                1706339057395,
                                "pointermove"
                            ],
                            [
                                "move",
                                1321,
                                397,
                                1706339057403,
                                "pointermove"
                            ],
                            [
                                "move",
                                1320,
                                396,
                                1706339057411,
                                "pointermove"
                            ],
                            [
                                "move",
                                1319,
                                394,
                                1706339057419,
                                "pointermove"
                            ],
                            [
                                "move",
                                1319,
                                393,
                                1706339057427,
                                "pointermove"
                            ],
                            [
                                "move",
                                1318,
                                392,
                                1706339057435,
                                "pointermove"
                            ],
                            [
                                "move",
                                1318,
                                390,
                                1706339057443,
                                "pointermove"
                            ],
                            [
                                "move",
                                1317,
                                390,
                                1706339057451,
                                "pointermove"
                            ],
                            [
                                "move",
                                1317,
                                389,
                                1706339057459,
                                "pointermove"
                            ],
                            [
                                "move",
                                1317,
                                388,
                                1706339057467,
                                "pointermove"
                            ],
                            [
                                "move",
                                1317,
                                387,
                                1706339057475,
                                "pointermove"
                            ],
                            [
                                "move",
                                1317,
                                386,
                                1706339057491,
                                "pointermove"
                            ],
                            [
                                "move",
                                1317,
                                385,
                                1706339057515,
                                "pointermove"
                            ],
                            [
                                "move",
                                1317,
                                384,
                                1706339057539,
                                "pointermove"
                            ],
                            [
                                "move",
                                1317,
                                383,
                                1706339057547,
                                "pointermove"
                            ],
                            [
                                "move",
                                1318,
                                383,
                                1706339057555,
                                "pointermove"
                            ],
                            [
                                "move",
                                1318,
                                382,
                                1706339057563,
                                "pointermove"
                            ],
                            [
                                "move",
                                1318,
                                381,
                                1706339057579,
                                "pointermove"
                            ],
                            [
                                "move",
                                1319,
                                381,
                                1706339057587,
                                "pointermove"
                            ],
                            [
                                "move",
                                1319,
                                380,
                                1706339057603,
                                "pointermove"
                            ],
                            [
                                "move",
                                1319,
                                379,
                                1706339057627,
                                "pointermove"
                            ],
                            [
                                "move",
                                1320,
                                379,
                                1706339057635,
                                "pointermove"
                            ],
                            [
                                "down",
                                1320,
                                379,
                                1706339057683,
                                "pointerdown"
                            ],
                            [
                                "up",
                                1320,
                                379,
                                1706339057763,
                                "pointerup"
                            ],
                            [
                                "move",
                                1321,
                                379,
                                1706339057772,
                                "pointermove"
                            ],
                            [
                                "move",
                                1322,
                                379,
                                1706339057787,
                                "pointermove"
                            ],
                            [
                                "move",
                                1323,
                                379,
                                1706339057819,
                                "pointermove"
                            ],
                            [
                                "move",
                                1324,
                                378,
                                1706339057835,
                                "pointermove"
                            ],
                            [
                                "move",
                                1325,
                                378,
                                1706339057843,
                                "pointermove"
                            ],
                            [
                                "move",
                                1327,
                                376,
                                1706339057851,
                                "pointermove"
                            ],
                            [
                                "move",
                                1331,
                                374,
                                1706339057859,
                                "pointermove"
                            ],
                            [
                                "move",
                                1335,
                                371,
                                1706339057867,
                                "pointermove"
                            ],
                            [
                                "move",
                                1340,
                                368,
                                1706339057875,
                                "pointermove"
                            ],
                            [
                                "move",
                                1345,
                                364,
                                1706339057883,
                                "pointermove"
                            ],
                            [
                                "move",
                                1349,
                                361,
                                1706339057891,
                                "pointermove"
                            ],
                            [
                                "move",
                                1355,
                                357,
                                1706339057899,
                                "pointermove"
                            ],
                            [
                                "move",
                                1361,
                                353,
                                1706339057907,
                                "pointermove"
                            ],
                            [
                                "move",
                                1369,
                                348,
                                1706339057915,
                                "pointermove"
                            ],
                            [
                                "move",
                                1376,
                                344,
                                1706339057923,
                                "pointermove"
                            ],
                            [
                                "move",
                                1382,
                                340,
                                1706339057931,
                                "pointermove"
                            ],
                            [
                                "move",
                                1388,
                                337,
                                1706339057939,
                                "pointermove"
                            ],
                            [
                                "move",
                                1393,
                                334,
                                1706339057947,
                                "pointermove"
                            ],
                            [
                                "move",
                                1396,
                                332,
                                1706339057955,
                                "pointermove"
                            ],
                            [
                                "move",
                                1400,
                                329,
                                1706339057963,
                                "pointermove"
                            ],
                            [
                                "move",
                                1402,
                                327,
                                1706339057971,
                                "pointermove"
                            ],
                            [
                                "move",
                                1403,
                                325,
                                1706339057979,
                                "pointermove"
                            ],
                            [
                                "move",
                                1406,
                                324,
                                1706339057987,
                                "pointermove"
                            ],
                            [
                                "move",
                                1407,
                                322,
                                1706339057995,
                                "pointermove"
                            ],
                            [
                                "move",
                                1408,
                                321,
                                1706339058003,
                                "pointermove"
                            ],
                            [
                                "move",
                                1409,
                                320,
                                1706339058011,
                                "pointermove"
                            ],
                            [
                                "move",
                                1410,
                                318,
                                1706339058020,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                317,
                                1706339058027,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                316,
                                1706339058036,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                315,
                                1706339058052,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                314,
                                1706339058075,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                313,
                                1706339058107,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                312,
                                1706339058131,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                311,
                                1706339058147,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                310,
                                1706339058155,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                309,
                                1706339058163,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                308,
                                1706339058171,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                307,
                                1706339058179,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                306,
                                1706339058187,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                305,
                                1706339058195,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                304,
                                1706339058212,
                                "pointermove"
                            ],
                            [
                                "move",
                                1411,
                                303,
                                1706339058219,
                                "pointermove"
                            ],
                            [
                                "down",
                                1411,
                                303,
                                1706339058243,
                                "pointerdown"
                            ],
                            [
                                "up",
                                1411,
                                303,
                                1706339058316,
                                "pointerup"
                            ],
                            [
                                "move",
                                1412,
                                302,
                                1706339058427,
                                "pointermove"
                            ],
                            [
                                "move",
                                1413,
                                302,
                                1706339058436,
                                "pointermove"
                            ],
                            [
                                "move",
                                1414,
                                302,
                                1706339058443,
                                "pointermove"
                            ],
                            [
                                "move",
                                1417,
                                302,
                                1706339058453,
                                "pointermove"
                            ],
                            [
                                "move",
                                1420,
                                302,
                                1706339058459,
                                "pointermove"
                            ],
                            [
                                "move",
                                1424,
                                302,
                                1706339058467,
                                "pointermove"
                            ],
                            [
                                "move",
                                1430,
                                302,
                                1706339058475,
                                "pointermove"
                            ],
                            [
                                "move",
                                1438,
                                303,
                                1706339058483,
                                "pointermove"
                            ],
                            [
                                "move",
                                1447,
                                305,
                                1706339058491,
                                "pointermove"
                            ],
                            [
                                "move",
                                1458,
                                309,
                                1706339058499,
                                "pointermove"
                            ],
                            [
                                "move",
                                1471,
                                313,
                                1706339058507,
                                "pointermove"
                            ],
                            [
                                "move",
                                1486,
                                318,
                                1706339058515,
                                "pointermove"
                            ],
                            [
                                "move",
                                1509,
                                327,
                                1706339058523,
                                "pointermove"
                            ],
                            [
                                "move",
                                1532,
                                336,
                                1706339058531,
                                "pointermove"
                            ],
                            [
                                "move",
                                1557,
                                347,
                                1706339058539,
                                "pointermove"
                            ],
                            [
                                "move",
                                1581,
                                358,
                                1706339058547,
                                "pointermove"
                            ],
                            [
                                "move",
                                1604,
                                369,
                                1706339058555,
                                "pointermove"
                            ],
                            [
                                "move",
                                1625,
                                379,
                                1706339058563,
                                "pointermove"
                            ],
                            [
                                "move",
                                1643,
                                389,
                                1706339058571,
                                "pointermove"
                            ],
                            [
                                "move",
                                1659,
                                399,
                                1706339058579,
                                "pointermove"
                            ],
                            [
                                "move",
                                1672,
                                406,
                                1706339058587,
                                "pointermove"
                            ],
                            [
                                "move",
                                1682,
                                412,
                                1706339058595,
                                "pointermove"
                            ],
                            [
                                "move",
                                1690,
                                419,
                                1706339058603,
                                "pointermove"
                            ],
                            [
                                "move",
                                1697,
                                425,
                                1706339058611,
                                "pointermove"
                            ],
                            [
                                "move",
                                1703,
                                430,
                                1706339058619,
                                "pointermove"
                            ],
                            [
                                "move",
                                1708,
                                435,
                                1706339058627,
                                "pointermove"
                            ],
                            [
                                "move",
                                1712,
                                440,
                                1706339058636,
                                "pointermove"
                            ],
                            [
                                "move",
                                1716,
                                445,
                                1706339058643,
                                "pointermove"
                            ],
                            [
                                "move",
                                1720,
                                449,
                                1706339058651,
                                "pointermove"
                            ],
                            [
                                "move",
                                1724,
                                453,
                                1706339058659,
                                "pointermove"
                            ],
                            [
                                "move",
                                1727,
                                457,
                                1706339058667,
                                "pointermove"
                            ],
                            [
                                "move",
                                1731,
                                462,
                                1706339058675,
                                "pointermove"
                            ],
                            [
                                "move",
                                1735,
                                465,
                                1706339058683,
                                "pointermove"
                            ],
                            [
                                "move",
                                1740,
                                469,
                                1706339058691,
                                "pointermove"
                            ],
                            [
                                "move",
                                1744,
                                472,
                                1706339058699,
                                "pointermove"
                            ],
                            [
                                "move",
                                1749,
                                475,
                                1706339058707,
                                "pointermove"
                            ],
                            [
                                "move",
                                1755,
                                478,
                                1706339058715,
                                "pointermove"
                            ],
                            [
                                "move",
                                1759,
                                479,
                                1706339058723,
                                "pointermove"
                            ],
                            [
                                "move",
                                1764,
                                480,
                                1706339058731,
                                "pointermove"
                            ],
                            [
                                "move",
                                1767,
                                481,
                                1706339058739,
                                "pointermove"
                            ],
                            [
                                "move",
                                1770,
                                482,
                                1706339058747,
                                "pointermove"
                            ],
                            [
                                "move",
                                1773,
                                482,
                                1706339058755,
                                "pointermove"
                            ],
                            [
                                "move",
                                1776,
                                482,
                                1706339058763,
                                "pointermove"
                            ],
                            [
                                "move",
                                1779,
                                482,
                                1706339058771,
                                "pointermove"
                            ],
                            [
                                "move",
                                1782,
                                482,
                                1706339058779,
                                "pointermove"
                            ],
                            [
                                "move",
                                1786,
                                482,
                                1706339058787,
                                "pointermove"
                            ],
                            [
                                "move",
                                1792,
                                482,
                                1706339058795,
                                "pointermove"
                            ],
                            [
                                "move",
                                1798,
                                481,
                                1706339058803,
                                "pointermove"
                            ],
                            [
                                "move",
                                1807,
                                480,
                                1706339058811,
                                "pointermove"
                            ],
                            [
                                "move",
                                1815,
                                479,
                                1706339058819,
                                "pointermove"
                            ],
                            [
                                "move",
                                1824,
                                479,
                                1706339058827,
                                "pointermove"
                            ],
                            [
                                "move",
                                1833,
                                479,
                                1706339058836,
                                "pointermove"
                            ],
                            [
                                "move",
                                1843,
                                479,
                                1706339058843,
                                "pointermove"
                            ],
                            [
                                "move",
                                1853,
                                479,
                                1706339058851,
                                "pointermove"
                            ],
                            [
                                "move",
                                1865,
                                479,
                                1706339058859,
                                "pointermove"
                            ],
                            [
                                "move",
                                1879,
                                480,
                                1706339058867,
                                "pointermove"
                            ],
                            [
                                "move",
                                1894,
                                482,
                                1706339058875,
                                "pointermove"
                            ],
                            [
                                "move",
                                1907,
                                485,
                                1706339058883,
                                "pointermove"
                            ],
                            [
                                "move",
                                1922,
                                488,
                                1706339058891,
                                "pointermove"
                            ],
                            [
                                "move",
                                1936,
                                491,
                                1706339058899,
                                "pointermove"
                            ],
                            [
                                "move",
                                1949,
                                495,
                                1706339058907,
                                "pointermove"
                            ],
                            [
                                "move",
                                1962,
                                498,
                                1706339058915,
                                "pointermove"
                            ],
                            [
                                "move",
                                1974,
                                501,
                                1706339058923,
                                "pointermove"
                            ],
                            [
                                "move",
                                1984,
                                505,
                                1706339058931,
                                "pointermove"
                            ],
                            [
                                "move",
                                1992,
                                508,
                                1706339058939,
                                "pointermove"
                            ],
                            [
                                "move",
                                1999,
                                511,
                                1706339058947,
                                "pointermove"
                            ],
                            [
                                "move",
                                1824,
                                511,
                                1706339059692,
                                "pointermove"
                            ],
                            [
                                "move",
                                1785,
                                507,
                                1706339059699,
                                "pointermove"
                            ],
                            [
                                "move",
                                1746,
                                504,
                                1706339059707,
                                "pointermove"
                            ],
                            [
                                "move",
                                1710,
                                502,
                                1706339059715,
                                "pointermove"
                            ],
                            [
                                "move",
                                1680,
                                500,
                                1706339059723,
                                "pointermove"
                            ],
                            [
                                "move",
                                1655,
                                500,
                                1706339059731,
                                "pointermove"
                            ],
                            [
                                "move",
                                1636,
                                500,
                                1706339059739,
                                "pointermove"
                            ],
                            [
                                "move",
                                1621,
                                500,
                                1706339059747,
                                "pointermove"
                            ],
                            [
                                "move",
                                1608,
                                500,
                                1706339059755,
                                "pointermove"
                            ],
                            [
                                "move",
                                1597,
                                500,
                                1706339059763,
                                "pointermove"
                            ],
                            [
                                "move",
                                1588,
                                500,
                                1706339059771,
                                "pointermove"
                            ],
                            [
                                "move",
                                1580,
                                500,
                                1706339059779,
                                "pointermove"
                            ],
                            [
                                "move",
                                1573,
                                500,
                                1706339059787,
                                "pointermove"
                            ],
                            [
                                "move",
                                1569,
                                500,
                                1706339059795,
                                "pointermove"
                            ],
                            [
                                "move",
                                1565,
                                500,
                                1706339059803,
                                "pointermove"
                            ],
                            [
                                "move",
                                1562,
                                500,
                                1706339059812,
                                "pointermove"
                            ],
                            [
                                "move",
                                1560,
                                500,
                                1706339059820,
                                "pointermove"
                            ],
                            [
                                "move",
                                1559,
                                500,
                                1706339059827,
                                "pointermove"
                            ],
                            [
                                "move",
                                1557,
                                500,
                                1706339059835,
                                "pointermove"
                            ],
                            [
                                "move",
                                1556,
                                500,
                                1706339059843,
                                "pointermove"
                            ],
                            [
                                "move",
                                1554,
                                500,
                                1706339059851,
                                "pointermove"
                            ],
                            [
                                "move",
                                1552,
                                500,
                                1706339059859,
                                "pointermove"
                            ],
                            [
                                "move",
                                1550,
                                500,
                                1706339059867,
                                "pointermove"
                            ],
                            [
                                "move",
                                1547,
                                500,
                                1706339059875,
                                "pointermove"
                            ],
                            [
                                "move",
                                1542,
                                499,
                                1706339059883,
                                "pointermove"
                            ],
                            [
                                "move",
                                1538,
                                498,
                                1706339059891,
                                "pointermove"
                            ],
                            [
                                "move",
                                1532,
                                497,
                                1706339059899,
                                "pointermove"
                            ],
                            [
                                "move",
                                1528,
                                496,
                                1706339059907,
                                "pointermove"
                            ],
                            [
                                "move",
                                1524,
                                495,
                                1706339059915,
                                "pointermove"
                            ],
                            [
                                "move",
                                1520,
                                495,
                                1706339059923,
                                "pointermove"
                            ],
                            [
                                "move",
                                1516,
                                494,
                                1706339059931,
                                "pointermove"
                            ],
                            [
                                "move",
                                1514,
                                494,
                                1706339059939,
                                "pointermove"
                            ],
                            [
                                "move",
                                1512,
                                494,
                                1706339059947,
                                "pointermove"
                            ],
                            [
                                "move",
                                1511,
                                494,
                                1706339059955,
                                "pointermove"
                            ],
                            [
                                "move",
                                1510,
                                494,
                                1706339059963,
                                "pointermove"
                            ],
                            [
                                "move",
                                1508,
                                494,
                                1706339059971,
                                "pointermove"
                            ],
                            [
                                "move",
                                1506,
                                494,
                                1706339059979,
                                "pointermove"
                            ],
                            [
                                "move",
                                1505,
                                494,
                                1706339059987,
                                "pointermove"
                            ],
                            [
                                "move",
                                1504,
                                494,
                                1706339059995,
                                "pointermove"
                            ],
                            [
                                "move",
                                1502,
                                494,
                                1706339060003,
                                "pointermove"
                            ],
                            [
                                "move",
                                1501,
                                494,
                                1706339060019,
                                "pointermove"
                            ],
                            [
                                "down",
                                1501,
                                494,
                                1706339060092,
                                "pointerdown"
                            ],
                            [
                                "focus",
                                1706339060092
                            ],
                            [
                                "up",
                                1501,
                                494,
                                1706339060172,
                                "pointerup"
                            ]
                        ];
                        return this["$_FC_"] = [], this["$_EEs"](this["$_BFJj"](e));
                    },
                    "$_BGDT": function () {
                        return this["$_EEs"](this["$_FC_"]);
                    }
                }),
                "touchEvent": !1
            }, function ze() {
                !function e() {
                    if (window["addEventListener"]) {
                        function t(e) {
                            de["mouseEvent"] = !0, l["removeEventListener"]("mousedown", t), l["removeEventListener"]("mousemove", t), l["removeEventListener"]("mouseup", t);
                        }

                        l["addEventListener"]("mousedown", t), l["addEventListener"]("mousemove", t), l["addEventListener"]("mouseup", t);
                    }
                }(), function n() {
                    if (window["addEventListener"]) {
                        function t(e) {
                            de["touchEvent"] = !0, l["removeEventListener"]("touchstart", t), l["removeEventListener"]("touchmove", t), l["removeEventListener"]("touchend", t);
                        }

                        l["addEventListener"]("touchstart", t), l["addEventListener"]("touchmove", t), l["addEventListener"]("touchend", t);
                    }
                }();
            }(), de);
        window._pe = pe;

        function fe() {
        }

        fe["prototype"] = {
            "$_BGEd": function () {
                return window["performance"] && window["performance"]["timing"] && this["$_BGFK"]() || -1;
            },
            "$_BGFK": function () {
                var e = window["performance"]["timing"];
                return {
                    "a": e["navigationStart"],
                    "b": e["unloadEventStart"],
                    "c": e["unloadEventEnd"],
                    "d": e["redirectStart"],
                    "e": e["redirectEnd"],
                    "f": e["fetchStart"],
                    "g": e["domainLookupStart"],
                    "h": e["domainLookupEnd"],
                    "i": e["connectStart"],
                    "j": e["connectEnd"],
                    "k": e["secureConnectionStart"],
                    "l": e["requestStart"],
                    "m": e["responseStart"],
                    "n": e["responseEnd"],
                    "o": e["domLoading"],
                    "p": e["domInteractive"],
                    "q": e["domContentLoadedEventStart"],
                    "r": e["domContentLoadedEventEnd"],
                    "s": e["domComplete"],
                    "t": e["loadEventStart"],
                    "u": e["loadEventEnd"]
                };
            }
        };
        var ve,
            me = "init",
            we = "load",
            xe = "ready",
            ye = "success",
            be = "fail",
            ke = "error",
            Ee = "refresh",
            Ce = "close",
            Se = "change",
            Te = (y = /msie 6\.0/i["test"](ue["userAgent"]), function (e) {
                for (var t in e) if ("object" == typeof e && e["hasOwnProperty"](t)) return e;
                return {
                    "tip": "请在下图_依次_点击：",
                    "atip": "请按_语序_依次_点击下图文字:",
                    "small_tip": "请选中下图中所有的：",
                    "commit": "确认",
                    "refresh": "刷新验证",
                    "feedback": "帮助反馈",
                    "voice": "视觉障碍",
                    "fail": "验证失败 请按提示重新操作",
                    "success": "验证成功 您的速度已超过%s%%的用户",
                    "fail_short": "验证失败",
                    "success_short": "验证成功",
                    "loading": "加载中...",
                    "close": "关闭验证"
                };
            }),
            Oe = {
                ".widget": {
                    ".head": {
                        ".tips": {
                            ".tip_content": {},
                            ".tip_img": {}
                        },
                        ".atips": {
                            ".atip_content": {},
                            ".tip_text": {
                                ".word1": {
                                    "span": "1"
                                },
                                ".word2": {
                                    "span": "2"
                                },
                                ".word3": {
                                    "span": "3"
                                },
                                ".word4": {
                                    "span": "4"
                                },
                                ".word5": {
                                    "span": "5"
                                },
                                ".word6": {
                                    "span": "6"
                                }
                            }
                        },
                        ".tip_space": {}
                    },
                    ".table_box": {
                        ".window": {},
                        ".result_tip": {}
                    },
                    ".panel": {
                        ".small": {
                            "a.close": {
                                ".close_tip": {}
                            },
                            "a.refresh": {
                                ".refresh_tip": {}
                            },
                            "a.feedback": {
                                ".feedback_tip": {}
                            },
                            "a.voice": {
                                ".voice_tip": {}
                            }
                        },
                        "a.commit.disable": {
                            ".commit_tip": {}
                        }
                    }
                }
            };

        function Me(e) {
            var n = this,
                t = new je(e);
            t["remUnit"] && !isNaN(t["remUnit"]) && (ce = "rem", le = t["remUnit"]), t["https"] && (t["protocol"] = "https://"), e["debugConfig"] && t["$_BGGl"](e["debugConfig"]), n["$_BJw"] = t, n["$_CAR"] = e, n["$_BGHw"] = new V(n), n["$_JFm"] = new U(function (e, t) {
                n["$_BGIn"](e, t);
            }), n["$_JFm"]["$_EJI"](me), n["$_BGJB"] = x ? 3 : 0, n["$_BHAv"] = x ? "web_mobile" : "web", n["$_BHBW"] = new pe(), n["$_BJw"]["$_CGS"] = {
                "pt": n["$_BGJB"]
            };
        }

        function Be() {
            this["$_FC_"] = new ie();
        }

        function Re(e) {
            var t = this,
                n = e["$_BJw"];
            t["$_JFm"] = e["$_JFm"], t["$_IIV"] = e, t["$_BJw"] = n, t["$_CAR"] = e["$_CAR"], t["$_BGHw"] = e["$_BGHw"], t["$_BHCN"] = $_FB(), t["$_BHDz"] = [], t["$_BHEV"] = 0, t["$_BHFZ"] = !1, t["$_BHGz"] = Te(t["$_BJw"]["i18n_labels"]), t["$"] = $_EP();
            var r = ".holder." + n["theme"];
            if (x && (r += ".m"), "popup" === n["product"] || "custom" === n["product"]) {
                if (r += ".popup", "custom" === n["product"] && (r += ".custom"), t["$_BHHp"] = $_BAy(r, $_JL(Oe), t["$"]), n["width"] && (y && (n["width"] = "348px"), t["$"](".popup_box")["$_sTyyle"]({
                    "width": n["width"]
                }), "custom" === n["product"])) {
                    var i = "px",
                        s = 0,
                        o = /^(\d+\.?\d*)(.*)$/["exec"](n["width"]);
                    o && (i = o[2], s = parseInt(o[1], 10) / 2);
                    var _ = s / .78;
                    t["$"](".popup_box")["$_sTyyle"]({
                        "marginLeft": "-" + s + i,
                        "marginTop": "-" + _ + i
                    });
                }
                n["bg_color"] && t["$"](".popup_ghost")["$_sTyyle"]({
                    "backgroundColor": n["bg_color"]
                }), t["$_BHIm"](), y && "popup" === n["product"] && t["$"](".holder") && t["$"](".holder")["$_sTyyle"]({
                    "height": l["documentElement"]["clientHeight"] + "px",
                    "width": l["documentElement"]["clientWidth"] + "px"
                });
            } else t["$_BHHp"] = $_BAy(r, Oe, t["$"]);
            "embed" === n["product"] && t["$_CAR"]["isPC"] && t["$_CAR"]["$"] && (t["$_CAR"]["$"](".panel_ghost")["setStyles"]({
                "backgroundColor": n["bg_color"]
            }), t["$_BHIm"]("embed")), t["$_BHJz"] = new oe(window), t["$_BFDn"]()["$_JBG"]();
        }

        function je(e) {
            this["$_BIAe"] = Q(), this["$_BGGl"]({
                "protocol": g
            })["$_BGGl"](e);
        }

        function Ne(e, t) {
            this["$_BIBx"] = Q(), this["$_BICM"] = !0, z["$_EJI"](this["$_BIBx"], new Me(e, t));
        }

        function Le() {
            this["$_FC_"] = new ie();
        }

        Me["prototype"] = {
            "$_BIDO": function () {
                var e = this,
                    t = e["$_BJw"],
                    n = e["$_JFm"];
                return t["autoReset"] && (e["$_BIEV"] = f(function () {
                    n["$_EJI"](Ee);
                }, 54e4)), e;
            },
            "$_BGIn": function (e, t) {
                var n = this,
                    r = n["$_BIFO"],
                    i = n["$_JFm"],
                    s = n["$_BGHw"],
                    o = n["$_BJw"];
                if (e !== t) if (e === me) n["$_BIGe"] = n["$_BFDn"]()["$_CFX"](function () {
                    i["$_JGS"](ke) || (i["$_EJI"](we), s["$_JCW"](me));
                }), n["$_BIEV"] && (n["$_BIEV"] = null), n["$_BIDO"](); else if (e === we) {
                    var _ = $_FB();
                    n["$_CCp"]()["$_CFX"](function (e) {
                        r["$_BIHl"](e, o["spec"]), n["$_BIIx"] = $_FB() - _, i["$_EJI"](xe);
                    }, function () {
                        return F(P("url_picture", n));
                    });
                } else e === xe ? r["$_BIJn"]() : e === Ee ? (-1 < new ie([xe, ye, be])["$_BAFA"](t) ? (s["$_JCW"](Ee), r["$_BJAr"]()) : t !== ke && i["$_EJI"](t), v(n["$_BIEV"]), n["$_BIDO"]()) : e === ye ? (r["$_BJBC"](n["$_BJCP"], n["$_BJDy"])["$_CFX"](function () {
                    s["$_JCW"](ye, n["$_BJDy"]);
                }), n["$_BHBW"]["$_JDi"]()) : e === be ? (s["$_JCW"](be), r["$_BJEj"]()["$_CFX"](function () {
                    i["$_EJI"](Ee);
                })) : e === ke ? s["$_JCW"](ke, n["$_BJFU"]) : e === Se && s["$_JCW"](Se, "voice");
            },
            "$_CBz": function (e) {
                return this["$_BJFU"] = e, this["$_JFm"]["$_EJI"](ke), this;
            },
            "$_BFDn": function () {
                function r() {
                    return n["debugConfig"] && $_Ho(n, n["debugConfig"]), n["gct_path"] && t["$_BJGA"]()["$_CFX"](function () {
                    }), t["$_BIFO"] = new Re(t), t["$_BIFO"]["$_BJHU"];
                }

                var t = this,
                    n = t["$_BJw"];
                return n["offline"] ? (n["$_BGGl"](n["debugConfig"]), r()) : R(n, w["$_EHE"]("fFtZ0VaY4Gg"), t["$_CAR"])["$_CFX"](function (e) {
                    return e["error"] ? F(I(e, t, "/get.php")) : ($_Ho(n, e["data"]), r());
                }, function () {
                    return F(P("url_get", t));
                });
            },
            "$_BJGA": function () {
                var e = this["$_BJw"];
                return M(e, "js", e["protocol"], e["static_servers"], e["gct_path"]);
            },
            "$_CIg": function (e) {
                var t = this,
                    n = t["$_JFm"];
                return t["$_BIGe"]["$_CFX"](function () {
                    n["$_JGS"](ke) || t["$_BIFO"]["$_CIg"](e);
                }), t;
            },
            "$_CCp": function () {
                var e = this["$_BJw"],
                    t = e["protocol"],
                    n = e["resource_servers"],
                    r = e["pic"];
                return M(e, "img", t, n, r, {
                    "challenge": e["challenge"]
                }, !1);
            },
            "$_BJIZ": function (e, t) {
                var n = this,
                    r = n["$_BJw"],
                    i = n["$_JFm"],
                    s = n["$_BHBW"]["$_BGCW"](),
                    o = {
                        "lang": r["lang"] || "zh-cn",
                        "passtime": t,
                        "a": e,
                        "pic": r["pic"],
                        "tt": function (e, t, n) {
                            if (!t || !n) return e;
                            var r,
                                i = 0,
                                s = e,
                                o = t[0],
                                _ = t[2],
                                a = t[4];
                            while (r = n["substr"](i, 2)) {
                                i += 2;
                                var c = parseInt(r, 16),
                                    l = String["fromCharCode"](c),
                                    u = (o * c * c + _ * c + a) % e["length"];
                                s = s["substr"](0, u) + l + s["substr"](u);
                            }
                            return s;
                        }(s, r["c"], r["s"]),
                        "ep": n["$_BJJj"]()
                    };
                try {
                    if (window["_gct"]) {
                        var _ = {
                                "lang": o["lang"],
                                "ep": o["ep"]
                            },
                            a = window["_gct"](_);
                        if (a["lang"]) {
                            var c = function g(e) {
                                    for (var t in e) if ("ep" !== t && "lang" !== t) return t;
                                }(_),
                                l = function f(e, t, n) {
                                    for (var r = new e["gg"]["f"](t, n), i = ["n", "s", "e", "es", "en", "w", "wn", "ws"], s = i["length"] - 2, o = 0; o < n["length"]; o++) {
                                        var _,
                                            a = Math["abs"](n[o]["charCodeAt"]() - 70)["toString"]()[1];
                                        _ = s < a ? e["gg"][i[1 + s]](r) : e["gg"][i[a]](r);
                                        for (var c = Math["abs"](n[o]["charCodeAt"]() - 70)["toString"]()[0], l = 0; l < c; l++) _["cc"]();
                                    }
                                    return r["random"]["join"]("")["slice"](0, 10);
                                }(a, _, c);
                            _[c] = l;
                        }
                        !function v(e) {
                            if ("function" == typeof Object["assign"]) return Object["assign"]["apply"](Object, arguments);
                            if (null == e) throw new Error("Cannot convert undefined or null to object");
                            e = Object(e);
                            for (var t = 1; t < arguments["length"]; t++) {
                                var n = arguments[t];
                                if (null !== n) for (var r in n) Object["prototype"]["hasOwnProperty"]["call"](n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }(o, _);
                    }
                } catch (m) {
                }
                if (o["a"]) try {
                    o["rp"] = function (e) {
                        function a(e, t) {
                            return e << t | e >>> 32 - t;
                        }

                        function c(e, t) {
                            var n, r, i, s, o;
                            return i = 2147483648 & e, s = 2147483648 & t, o = (1073741823 & e) + (1073741823 & t), (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ o ^ i ^ s : n | r ? 1073741824 & o ? 3221225472 ^ o ^ i ^ s : 1073741824 ^ o ^ i ^ s : o ^ i ^ s;
                        }

                        function t(e, t, n, r, i, s, o) {
                            return c(a(e = c(e, c(c(function _(e, t, n) {
                                return e & t | ~e & n;
                            }(t, n, r), i), o)), s), t);
                        }

                        function n(e, t, n, r, i, s, o) {
                            return c(a(e = c(e, c(c(function _(e, t, n) {
                                return e & n | t & ~n;
                            }(t, n, r), i), o)), s), t);
                        }

                        function r(e, t, n, r, i, s, o) {
                            return c(a(e = c(e, c(c(function _(e, t, n) {
                                return e ^ t ^ n;
                            }(t, n, r), i), o)), s), t);
                        }

                        function i(e, t, n, r, i, s, o) {
                            return c(a(e = c(e, c(c(function _(e, t, n) {
                                return t ^ (e | ~n);
                            }(t, n, r), i), o)), s), t);
                        }

                        function s(e) {
                            var t,
                                n = "",
                                r = "";
                            for (t = 0; t <= 3; t++) n += (r = "0" + (e >>> 8 * t & 255)["toString"](16))["substr"](r["length"] - 2, 2);
                            return n;
                        }

                        var o, _, l, u, h, p, d, g, f, v;
                        for (o = function m(e) {
                            var t,
                                n = e["length"],
                                r = n + 8,
                                i = 16 * (1 + (r - r % 64) / 64),
                                s = Array(i - 1),
                                o = 0,
                                _ = 0;
                            while (_ < n) o = _ % 4 * 8, s[t = (_ - _ % 4) / 4] = s[t] | e["charCodeAt"](_) << o, _++;
                            return o = _ % 4 * 8, s[t = (_ - _ % 4) / 4] = s[t] | 128 << o, s[i - 2] = n << 3, s[i - 1] = n >>> 29, s;
                        }(e = function w(e) {
                            e = e["replace"](/\r\n/g, "\n");
                            for (var t = "", n = 0; n < e["length"]; n++) {
                                var r = e["charCodeAt"](n);
                                r < 128 ? t += String["fromCharCode"](r) : (127 < r && r < 2048 ? t += String["fromCharCode"](r >> 6 | 192) : (t += String["fromCharCode"](r >> 12 | 224), t += String["fromCharCode"](r >> 6 & 63 | 128)), t += String["fromCharCode"](63 & r | 128));
                            }
                            return t;
                        }(e)), d = 1732584193, g = 4023233417, f = 2562383102, v = 271733878, _ = 0; _ < o["length"]; _ += 16) g = i(g = i(g = i(g = i(g = r(g = r(g = r(g = r(g = n(g = n(g = n(g = n(g = t(g = t(g = t(g = t(u = g, f = t(h = f, v = t(p = v, d = t(l = d, g, f, v, o[_ + 0], 7, 3614090360), g, f, o[_ + 1], 12, 3905402710), d, g, o[_ + 2], 17, 606105819), v, d, o[_ + 3], 22, 3250441966), f = t(f, v = t(v, d = t(d, g, f, v, o[_ + 4], 7, 4118548399), g, f, o[_ + 5], 12, 1200080426), d, g, o[_ + 6], 17, 2821735955), v, d, o[_ + 7], 22, 4249261313), f = t(f, v = t(v, d = t(d, g, f, v, o[_ + 8], 7, 1770035416), g, f, o[_ + 9], 12, 2336552879), d, g, o[_ + 10], 17, 4294925233), v, d, o[_ + 11], 22, 2304563134), f = t(f, v = t(v, d = t(d, g, f, v, o[_ + 12], 7, 1804603682), g, f, o[_ + 13], 12, 4254626195), d, g, o[_ + 14], 17, 2792965006), v, d, o[_ + 15], 22, 1236535329), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 1], 5, 4129170786), g, f, o[_ + 6], 9, 3225465664), d, g, o[_ + 11], 14, 643717713), v, d, o[_ + 0], 20, 3921069994), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 5], 5, 3593408605), g, f, o[_ + 10], 9, 38016083), d, g, o[_ + 15], 14, 3634488961), v, d, o[_ + 4], 20, 3889429448), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 9], 5, 568446438), g, f, o[_ + 14], 9, 3275163606), d, g, o[_ + 3], 14, 4107603335), v, d, o[_ + 8], 20, 1163531501), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 13], 5, 2850285829), g, f, o[_ + 2], 9, 4243563512), d, g, o[_ + 7], 14, 1735328473), v, d, o[_ + 12], 20, 2368359562), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 5], 4, 4294588738), g, f, o[_ + 8], 11, 2272392833), d, g, o[_ + 11], 16, 1839030562), v, d, o[_ + 14], 23, 4259657740), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 1], 4, 2763975236), g, f, o[_ + 4], 11, 1272893353), d, g, o[_ + 7], 16, 4139469664), v, d, o[_ + 10], 23, 3200236656), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 13], 4, 681279174), g, f, o[_ + 0], 11, 3936430074), d, g, o[_ + 3], 16, 3572445317), v, d, o[_ + 6], 23, 76029189), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 9], 4, 3654602809), g, f, o[_ + 12], 11, 3873151461), d, g, o[_ + 15], 16, 530742520), v, d, o[_ + 2], 23, 3299628645), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 0], 6, 4096336452), g, f, o[_ + 7], 10, 1126891415), d, g, o[_ + 14], 15, 2878612391), v, d, o[_ + 5], 21, 4237533241), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 12], 6, 1700485571), g, f, o[_ + 3], 10, 2399980690), d, g, o[_ + 10], 15, 4293915773), v, d, o[_ + 1], 21, 2240044497), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 8], 6, 1873313359), g, f, o[_ + 15], 10, 4264355552), d, g, o[_ + 6], 15, 2734768916), v, d, o[_ + 13], 21, 1309151649), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 4], 6, 4149444226), g, f, o[_ + 11], 10, 3174756917), d, g, o[_ + 2], 15, 718787259), v, d, o[_ + 9], 21, 3951481745), d = c(d, l), g = c(g, u), f = c(f, h), v = c(v, p);
                        return (s(d) + s(g) + s(f) + s(v))["toLowerCase"]();
                    }(r["gt"] + r["challenge"] + o["passtime"]);
                    var u = n["$_CAAz"](),
                        h = X["encrypt"](ae["stringify"](o), n["$_CABL"]()),
                        p = w["$_EFO"](h),
                        d = {
                            "gt": r["gt"],
                            "challenge": r["challenge"],
                            "lang": o["lang"],
                            "pt": n["$_BGJB"],
                            "client_type": n["$_BHAv"],
                            "w": p + u
                        };
                    R(r, w["$_EHE"]("fEkexGxOwUyY"), d)["$_CFX"](function (e) {
                        if ("error" === e["status"]) return F(I(e, n, "/ajax.php"));
                        n["$_CACQ"](e["data"]);
                    }, function () {
                        return F(P("url_ajax", n));
                    });
                } catch (m) {
                    n["$_CBz"](m);
                } else i["$_EJI"](be);
            },
            "$_CACQ": function (e) {
                var t,
                    n = this["$_BJw"];
                if ("success" === e["result"]) {
                    var r = e["validate"]["split"]("|")[0];
                    this["$_BJDy"] = e["score"], this["$_BJCP"] = {
                        "geetest_challenge": n["challenge"],
                        "geetest_validate": r,
                        "geetest_seccode": r + "|jordan"
                    }, t = ye;
                } else t = "fail" == e["result"] ? be : ke;
                this["$_JFm"]["$_EJI"](t);
            },
            "$_BJAr": function () {
                return this["$_JFm"]["$_EJI"](Ee), this;
            },
            "$_CADn": function () {
                return this["$_BJCP"];
            },
            "$_JBG": function (e, t) {
                return this["$_BGHw"]["$_JBG"](e, function (e) {
                    t(e);
                }), this;
            },
            "$_BBBP": function () {
                var e = this;
                return e["$_BIGe"]["$_CFX"](function () {
                    e["$_BIFO"]["$_BBBP"]();
                }), e;
            },
            "$_BBAT": function () {
                var e = this;
                return e["$_BIGe"]["$_CFX"](function () {
                    e["$_BIFO"]["$_BBAT"]();
                }), e;
            },
            "$_JDi": function () {
                this["$_CAEo"](), this["$_BIFO"] && this["$_BIFO"]["$_JDi"](), this["$_BGHw"]["$_JDi"](), this["$_BHBW"]["$_JDi"]();
            },
            "$_CAEo": function () {
                this["$_BIEV"] && v(this["$_BIEV"]);
            },
            "$_CABL": (ve = K(), function (e) {
                return !0 === e && (ve = K()), ve;
            }),
            "$_CAAz": function (e) {
                var t = new H()["encrypt"](this["$_CABL"](e));
                while (!t || 256 !== t["length"]) t = new H()["encrypt"](this["$_CABL"](!0));
                return t;
            },
            "$_BJJj": function () {
                return {
                    "ca": this["$_BIFO"] && this["$_BIFO"]["$_BHDz"] || "",
                    "v": "3.1.0",
                    "$_FB": ge["touchEvent"],
                    "me": ge["mouseEvent"],
                    "tm": new fe()["$_BGEd"]()
                };
            }
        }, Be["prototype"] = {
            "$_CAFS": function (e, t) {
                var n = this["$_FC_"],
                    r = e + "_" + t,
                    i = n["$_BAFA"](r);
                return -1 === i ? n["$_BABR"](r) : n["$_BACx"](i), this;
            },
            "$_FAE": function () {
                return this["$_FC_"]["$_BDh"](",");
            }
        }, Re["prototype"] = {
            "$_BHIm": function (e) {
                var t = this["$_BJw"],
                    n = this["$"],
                    r = this["$_CAR"];
                if (t["area"]) {
                    var i = oe["$"](t["area"]);
                    if (i) {
                        var s = i["$_BCIW"](),
                            o = e ? r["$"](".panel") : n(".holder");
                        o && o["$_sTyyle"]({
                            "position": "absolute",
                            "left": $_IX(s["left"]),
                            "top": $_IX(s["top"]),
                            "width": $_IX(s["width"]),
                            "height": $_IX(s["height"])
                        });
                    }
                }
            },
            "$_BFDn": function () {
                var e = this,
                    t = e["$_BJw"],
                    n = e["$"],
                    r = e["$_BHGz"];
                return n(".refresh_tip")["$_BGu"](r["refresh"]), n(".feedback_tip")["$_BGu"](r["feedback"]), n(".close_tip")["$_BGu"](r["close"]), t["feedback"] ? n(".feedback")["$_BEI"]({
                    "href": t["feedback"] + "&challenge=" + t["challenge"],
                    "target": "_blank"
                }) : n(".feedback")["$_BBAT"](), n(".close")["$_BEI"]({
                    "href": "javascript:;"
                }), n(".refresh")["$_BEI"]({
                    "href": "javascript:;"
                }), n(".commit")["$_BEI"]({
                    "href": "javascript:;"
                }), n(".commit_tip")["$_BGu"](r["commit"]), t["hideClose"] && n(".geetest_close")["$_CHG"](), t["hideRefresh"] && n(".geetest_refresh")["$_CHG"](), e["$_CAGf"](t["spec"]), e["$_CAHH"](), e["$_BJHU"] = e["$_CAIz"]()["$_CFX"](function () {
                    "embed" === t["product"] && f(function () {
                        e["$_CAJN"]();
                    }, 400);
                }, function () {
                    F(P("url_skin", e["$_IIV"]));
                }), t["remUnit"] && !isNaN(t["remUnit"]) && e["$_CBAI"](), e["$_CBBF"](t["width"]), e;
            },
            "$_CBAI": function () {
                var e = function (e) {
                        return e["replace"](/(-?[\d\.]+px)/g, function (e) {
                            var t = e["slice"](0, -2);
                            return $_IX(t);
                        });
                    }(".geetest_holder.geetest_silver .geetest_border{_padding-bottom:6px}.geetest_holder.geetest_silver .geetest_border .geetest_stuff{_height:7px}.geetest_holder.geetest_silver .geetest_head .geetest_tips,.geetest_holder.geetest_silver .geetest_head .geetest_atips,.geetest_holder.geetest_silver .geetest_head .geetest_tip_space{margin-top:-10px;font-size:16px}.geetest_holder.geetest_silver .geetest_head .geetest_tips{height:20px}.geetest_holder.geetest_silver .geetest_head .geetest_tips .geetest_tip_content{line-height:20px;height:20px;_width:135px}.geetest_holder.geetest_silver .geetest_head .geetest_tips .geetest_tip_img{right:-116px;top:-10px;width:116px;height:40px}.geetest_holder.geetest_silver .geetest_head .geetest_tips.geetest_multi_click .geetest_tip_content{top:-10px}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_atip_content{margin-top:-10px}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text div{box-shadow:inset 0 2px 4px 0 rgba(0,0,0,0.1);border-radius:2px;border:1px solid #D7D7D7}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text .geetest_click_word::after,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text .geetest_click_word after{top:12px;bottom:12px;left:10px;right:10px;border-radius:18px}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text .geetest_move_word span{text-shadow:1px 0 1px rgba(0,0,0,0.2)}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_three{width:84px;top:-12px}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_three .geetest_word1,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_three .geetest_word2,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_three .geetest_word3{width:24px;height:24px;line-height:24px;font-size:16px;margin-left:4px}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_three .geetest_word1 span,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_three .geetest_word2 span,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_three .geetest_word3 span{left:6px;z-index:99}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_four{width:112px;top:-12px}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_four .geetest_word1,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_four .geetest_word2,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_four .geetest_word3,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_four .geetest_word4{width:24px;height:24px;line-height:24px;font-size:16px;margin-left:4px}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_four .geetest_word1 span,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_four .geetest_word2 span,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_four .geetest_word3 span,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_four .geetest_word4 span{left:7px}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_five{width:115px;top:-10px}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_five .geetest_word1,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_five .geetest_word2,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_five .geetest_word3,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_five .geetest_word4,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_five .geetest_word5{width:20px;height:20px;line-height:20px;font-size:15px;margin-left:3px}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_five .geetest_word1 span,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_five .geetest_word2 span,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_five .geetest_word3 span,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_five .geetest_word4 span,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_five .geetest_word5 span{left:5px}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_six{width:120px;top:-9px;display:block}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_six .geetest_word1,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_six .geetest_word2,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_six .geetest_word3,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_six .geetest_word4,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_six .geetest_word5,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_six .geetest_word6{width:18px;height:18px;line-height:18px;font-size:15px;margin-left:2px}.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_six .geetest_word1 span,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_six .geetest_word2 span,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_six .geetest_word3 span,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_six .geetest_word4 span,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_six .geetest_word5 span,.geetest_holder.geetest_silver .geetest_head .geetest_atips .geetest_tip_text.geetest_six .geetest_word6 span{left:4px}.geetest_holder.geetest_silver .geetest_head .geetest_close{height:18px;width:18px;margin-top:-9px}.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item{_width:109px;_padding-bottom:109px}.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item.geetest_big_item{*width:339px;*padding-bottom:339px}.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_item_loading .geetest_item_loading_icon{margin:42% auto 10px;width:34px;height:26px}.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_item_loading .geetest_item_loading_tip{font-size:14px}.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item.geetest_big_item .geetest_item_wrap{*width:339px;*height:339px}.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_big_mark,.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_square_mark,.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_space_mark{*width:28px;*height:28px;border:3px solid white;border-radius:50%;box-sizing:border-box;box-shadow:0 0 10px black}.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_big_mark.geetest_mark_show,.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_square_mark.geetest_mark_show,.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_space_mark.geetest_mark_show{border-width:3.01px 9}.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_big_mark .geetest_mark_no,.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_square_mark .geetest_mark_no,.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_space_mark .geetest_mark_no{margin-top:-12px;height:24px;line-height:24px;font-size:18px}.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_space_mark{box-shadow:0 1px 6px 0 rgba(17,30,39,0.4)}.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_space_mark .geetest_mark_no{width:10px;height:10px;margin-top:-5px;margin-left:-5px}.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_square_mark.geetest_mark_show{border-width:0;border:2px solid white}.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_square_mark .geetest_mark_no{margin-top:-11px}.geetest_holder.geetest_silver .geetest_table_box .geetest_window .geetest_item .geetest_square_mark{border-radius:2px;*width:28px;*height:28px}.geetest_holder.geetest_silver .geetest_table_box .geetest_result_tip{bottom:-29px;height:28px;text-indent:9px;font-size:16px;line-height:29px}.geetest_holder.geetest_silver .geetest_panel{_padding-bottom:63px}.geetest_holder.geetest_silver .geetest_panel .geetest_commit{border-radius:2px;*height:45px}.geetest_holder.geetest_silver .geetest_panel .geetest_commit .geetest_commit_tip{margin-top:-10px;height:20px;line-height:20px;font-size:16px;letter-spacing:2px}.geetest_holder.geetest_silver .geetest_panel .geetest_temp,.geetest_holder.geetest_silver .geetest_panel a.geetest_close,.geetest_holder.geetest_silver .geetest_panel a.geetest_refresh,.geetest_holder.geetest_silver .geetest_panel a.geetest_feedback,.geetest_holder.geetest_silver .geetest_panel a.geetest_voice,.geetest_holder.geetest_silver .geetest_panel .geetest_text_logo{height:20px}.geetest_holder.geetest_silver .geetest_panel .geetest_small{margin-top:-11.5px;height:20px}.geetest_holder.geetest_silver .geetest_panel a.geetest_close,.geetest_holder.geetest_silver .geetest_panel a.geetest_refresh,.geetest_holder.geetest_silver .geetest_panel a.geetest_feedback,.geetest_holder.geetest_silver .geetest_panel a.geetest_voice{margin-left:14px;width:20px}.geetest_holder.geetest_silver .geetest_panel a.geetest_close{margin-left:0}.geetest_holder.geetest_silver .geetest_panel .geetest_close_tip,.geetest_holder.geetest_silver .geetest_panel .geetest_feedback_tip,.geetest_holder.geetest_silver .geetest_panel .geetest_refresh_tip,.geetest_holder.geetest_silver .geetest_panel .geetest_voice_tip{top:-32px;left:10px;border-radius:2px;padding:0 4px;height:22px;min-width:50px;line-height:22px}.geetest_holder.geetest_silver .geetest_panel .geetest_close_tip:before,.geetest_holder.geetest_silver .geetest_panel .geetest_feedback_tip:before,.geetest_holder.geetest_silver .geetest_panel .geetest_refresh_tip:before,.geetest_holder.geetest_silver .geetest_panel .geetest_voice_tip:before{bottom:-6px;left:0;border-width:4px 6px}.geetest_holder.geetest_silver .geetest_panel .geetest_text_logo{line-height:23px;font-size:12px}.geetest_holder.geetest_silver .geetest_medium_fontsize .geetest_tip_content,.geetest_holder.geetest_silver .geetest_medium_fontsize .geetest_atip_content,.geetest_holder.geetest_silver .geetest_medium_fontsize .geetest_tip_space,.geetest_holder.geetest_silver .geetest_medium_fontsize .geetest_commit .geetest_commit_tip{font-size:14px}.geetest_holder.geetest_silver .geetest_small_fontsize .geetest_tip_content,.geetest_holder.geetest_silver .geetest_small_fontsize .geetest_atip_content,.geetest_holder.geetest_silver .geetest_small_fontsize .geetest_tip_space,.geetest_holder.geetest_silver .geetest_small_fontsize .geetest_commit .geetest_commit_tip{font-size:12px}.geetest_holder.geetest_silver .geetest_flash::after{right:-280px;width:170px}@keyframes geetest_shake{25%{margin-left:-6px}75%{margin-left:6px}100%{margin-left:0}}@-webkit-keyframes geetest_shake{25%{margin-left:-6px}75%{margin-left:6px}100%{margin-left:0}}@keyframes geetest_word_move{0%{top:18px;opacity:0}100%{opacity:1;top:0}}@-webkit-keyframes geetest_word_move{0%{top:18px;opacity:0}100%{opacity:1;top:0}}@keyframes geetest_color{25%{top:7px;bottom:7px;left:7px;right:7px;background-color:#50B1FF}75%{top:0px;bottom:0px;left:0px;right:0px;background-color:#50B1FF}100%{top:0px;bottom:0px;left:0px;right:0px;border-radius:2px;background-color:#50B1FF}}@-webkit-keyframes geetest_color{25%{top:7px;bottom:7px;left:7px;right:7px;background-color:#50B1FF}75%{top:0px;bottom:0px;left:0px;right:0px;background-color:#50B1FF}100%{top:0px;bottom:0px;left:0px;right:0px;border-radius:2px;background-color:#50B1FF}}.geetest_holder.geetest_silver.geetest_popup .geetest_popup_ghost{_width:2000px;_height:1000px}.geetest_holder.geetest_silver.geetest_popup .geetest_popup_box{max-width:348px;min-width:210px;border:1px solid #d1d1d1;border-radius:2px;margin-left:-174px;margin-top:-223px;_width:348px;_height:445px}"),
                    t = new oe("style");
                t["type"] = "text/css", t["_style"](e), t["$_CIg"](new oe(d));
            },
            "$_CBCW": function () {
                var g = this,
                    e = [],
                    f = new Le(),
                    t = g["$_BHGz"],
                    v = g["$"],
                    m = g["$_BJw"],
                    w = !1,
                    n = Math["floor"](9580) / 100,
                    r = {
                        ".item_loading": {
                            ".item_loading_icon": {},
                            ".item_loading_tip": t["loading"]
                        },
                        ".item_wrap": {
                            "img.item_img": {}
                        }
                    },
                    i = $_EP();
                g["$1"] = i;
                var x = $_BAy(".item.big_item", r, i);
                x["$_CIg"](v(".window"));
                var s = "100%";
                "space" === m["pic_type"] && (s = "112%"), e["push"](i(".item_img")["$_sTyyle"]({
                    "right": "0",
                    "top": "0",
                    "width": "100%",
                    "height": m["sign"] ? s : "112%"
                }));
                var o = i(".item_wrap");
                x["$_sTyyle"]({
                    "width": n + "%",
                    "paddingBottom": n + "%"
                }), x["$_JBG"]("click", function (e) {
                    if (w || (w = !0, g["$_CBDM"] = $_FB()), v(".commit")["$_BCAR"]("disable"), "space" === m["pic_type"]) 1 <= f["$_DHY"]() && (f["$_CHG"](f["$_FC_"]["$_JIT"][0]), g["$_CBEs"](e), e["$_BEFW"]()); else if (9 <= f["$_DHY"]()) return;
                    var t = {};
                    if (m["zoomEle"]) try {
                        var n = oe["$"](m["zoomEle"]),
                            r = n && +n["$_BDIf"]("zoom");
                        t = e["$_CJE"]["$_BCHh"](r);
                    } catch (e) {
                        t = e["$_CJE"]["$_BCHh"]();
                    } else t = e["$_CJE"]["$_BCHh"]();
                    var i = e["$_BECm"](),
                        s = e["$_BEDf"](),
                        o = t["left"],
                        _ = t["top"],
                        a = t["right"] - t["left"],
                        c = t["bottom"] - t["top"],
                        l = (i - o) / a * 100,
                        u = (s - _) / c * 100;
                    if (100 < Math["abs"](l) || 100 < Math["abs"](u)) {
                        var h = e["$_CJE"]["$_BCIW"]();
                        l = (i - (o = h["left"])) / a * 100, u = (s - (_ = h["top"])) / c * 100;
                    }
                    if (1 === g["$_BHEV"]) {
                        v(".widget");
                        var p = v(".tip_text");
                        f["$_BFGo"](new oe("div")["$_BBJn"]("square_mark")["$_sTyyle"]({
                            "left": l + "%",
                            "top": u + "%"
                        })["$_CIg"](x)["$_JBG"]("click", function (e) {
                            f["$_CBFv"](e["$_CJE"], p), f["$_CHG"](e["$_CJE"]), g["$_CBEs"](e), f["$_DHY"]() <= 0 && v(".commit")["$_BBJn"]("disable"), e["$_BEFW"]();
                        }), Math["round"](100 * l), Math["round"](100 * u))["$_CBGK"](p);
                    } else {
                        var d = "big_mark";
                        "space" === m["pic_type"] && (d = "space_mark"), f["$_BFGo"](new oe("div")["$_BBJn"](d)["$_sTyyle"]({
                            "left": l + "%",
                            "top": u + "%",
                            "transform": "translateZ(0)"
                        })["$_CIg"](x)["$_JBG"]("click", function (e) {
                            f["$_CHG"](e["$_CJE"]), g["$_CBEs"](e), f["$_DHY"]() <= 0 && v(".commit")["$_BBJn"]("disable"), e["$_BEFW"]();
                        }), Math["round"](100 * l), Math["round"](100 * u), g["$_BJw"]["pic_type"]);
                    }
                }), g["$_CBHn"] = e, g["$_CBIQ"] = f, g["$_CBJB"] = o;
            },
            "$_CCAo": function (i, s) {
                for (var o = this, _ = [], a = new Be(), c = !1, l = o["$"], u = Math["floor"](100 * (97.2 / i - 1.4)) / 100, e = 1; e <= s; e += 1) for (var t = 1; t <= i; t += 1) !function (e, t) {
                    var n = $_EP();
                    o["$1"] = n;
                    var r = $_BAy(".item", {
                        ".item_wrap": {
                            "img.item_img": {}
                        },
                        ".item_ghost": {},
                        ".item_icon": {}
                    }, n);
                    r["$_CIg"](l(".window")), _["push"](n(".item_img")["$_sTyyle"]({
                        "left": 1 - e + "00%",
                        "top": 1 - t + "00%",
                        "width": i + "00%",
                        "height": 112.4 * s + "%"
                    })), y ? r["$_sTyyle"]({
                        "width": 109 * u / 31 + "px",
                        "paddingBottom": 109 * u / 31 + "px"
                    }) : r["$_sTyyle"]({
                        "width": u + "%",
                        "paddingBottom": u + "%"
                    }), b && n(".item")["$_BBJn"]("item_ie7"), r["$_JBG"]("click", function () {
                        l(".commit")["$_BCAR"]("disable"), n(".item")["$_BBIK"]("selected"), a["$_CAFS"](e, t), a["$_FC_"]["$_BAAy"]() <= 0 && l(".commit")["$_BBJn"]("disable"), c || (c = !0, o["$_CBDM"] = $_FB());
                    });
                }(t, e);
                o["$_CBHn"] = _, o["$_CBIQ"] = a;
            },
            "$_CAGf": function (e) {
                var t = this,
                    n = e["split"]("*"),
                    r = +n[0],
                    i = +n[1];
                if (t["$_BJw"]["pic_type"]) switch (t["$_BJw"]["pic_type"]) {
                    case "phrase":
                        t["$_CBCW"](), t["$_BHEV"] = 1;
                        break;
                    case "nine":
                        t["$_CCAo"](r, i), t["$_BHEV"] = 2;
                        break;
                    case "word":
                    case "icon":
                    default:
                        t["$_CBCW"](), t["$_BHEV"] = 0;
                } else 1 == r && 1 == i ? (t["$_CBCW"](), t["$_BHEV"] = 0) : (t["$_BHEV"] = 2, t["$_CCAo"](r, i));
            },
            "$_CCBH": function (t, e, n) {
                var r = this["$"],
                    i = this["$_BHGz"],
                    s = this["$_BJw"],
                    o = r(".result_tip");
                o["$_BBJn"]("up");
                var _ = this["$_BHHp"];
                "popup" !== s["product"] && "custom" !== s["product"] || (_ = r(".popup_box"));
                var a = _["$_BDHP"]() < 285 ? "_short" : "";
                if (t === ye) {
                    if (a) {
                        var c = "success" + a;
                        o["$_BGu"](i[c]);
                    } else {
                        i = i["success"]["split"]("%s%");
                        o["$_BGu"](i[0] + (100 - e) + i[1]);
                    }
                    o["$_BBJn"]("success");
                } else {
                    c = "fail" + a;
                    o["$_BGu"](i[c]), o["$_BBJn"]("fail");
                }
                return new $(function (e) {
                    f(function () {
                        e();
                    }, n || 1500);
                })["$_CFX"](function () {
                    return new $(function (e) {
                        t === ye ? e() : (o["$_BCAR"]("up"), f(function () {
                            e(), o["$_BCAR"]("fail")["$_BCAR"]("success");
                        }, 600));
                    });
                });
            },
            "$_BIJn": function () {
                this["$"];
                return this;
            },
            "$_BJBC": function (e, t) {
                this["$_BJDy"] = t, v(this["$_IIV"]["$_BIEV"]);
                var n = this["$_CAR"];
                return n && n["hideSuccess"] ? new $(function (e) {
                    e();
                }) : this["$_CCBH"](ye, t, 400)["$_CFX"](function () {
                    return new $(function (e) {
                        e();
                    });
                });
            },
            "$_BJEj": function () {
                var e = this["$"],
                    t = this["$_BJw"];
                return "popup" !== t["product"] && "custom" !== t["product"] || (e(".popup_box")["$_BBJn"]("shake"), f(function () {
                    e(".popup_box")["$_BCAR"]("shake");
                }, 400)), this["$_CCBH"](be);
            },
            "$_BJAr": function () {
                for (var t = this, n = (t["$"], t["$_BJw"]), r = t["$_JFm"], e = t["$_CBHn"], i = 0; i < e["length"]; i++) e[i]["$_BFK"]({
                    "src": ""
                }), e[i]["$_BBAT"]();
                R(n, "/refresh.php", {
                    "gt": n["gt"],
                    "challenge": n["challenge"],
                    "lang": n["lang"] || "zh-cn",
                    "type": n["type"]
                })["$_CFX"](function (e) {
                    if (e["error"]) return F(I(e, t["$_IIV"], "/refresh.php"));
                    t["$_BHFZ"] = !0, t["$_BAJt"](), $_Ho(n, e["data"]), t["$_CAGf"](n["spec"]), r["$_EJI"](we);
                }, function () {
                    return F(P("url_refresh", t["$_IIV"]));
                });
            },
            "$_BAJt": function () {
                return (0, this["$"])(".window")["$_BAJt"](), this;
            },
            "$_BIHl": function (e) {
                for (var t = this, n = t["$"], r = t["$_CBHn"], i = e["$_CJE"]["src"], s = t["$_BJw"], o = t["$_CBJB"], _ = 0, a = r["length"]; _ < a; _ += 1) o ? o["$_sTyyle"]({
                    "backgroundImage": "url(\"" + i + "\")",
                    "backgroundSize": "100%",
                    "backgroundRepeat": "no-repeat"
                }) : r[_]["$_BFK"]({
                    "src": i
                })["$_JBG"]("click", function (e) {
                    e["$_BEEh"]();
                });
                t["$_CCC_"]();
                var c = t["$_BHHp"];
                return "popup" !== s["product"] && "custom" !== s["product"] || (c = n(".popup_box")), t["$_BHFZ"] ? (t["$_CCDe"](c["$_BDHP"]()), t["$_BHFZ"] = !1) : "embed" === t["$_BJw"]["product"] && t["$_CCEB"](), "space" === s["pic_type"] || "phrase" === s["pic_type"] ? n(".tip_img")["$_sTyyle"]({
                    "display": "none"
                }) : n(".tip_img")["$_sTyyle"]({
                    "display": "block",
                    "backgroundImage": "url(\"" + i + "\")"
                }), "embed" !== t["$_BJw"]["product"] && (t["$_CCFl"](), t["$_CCDe"](c["$_BDHP"]())), t;
            },
            "$_CAHH": function () {
                if (!y && !b) {
                    var e = this["$1"],
                        t = this["$"];
                    e && (e(".item_img")["$_BEI"]({
                        "aria-hidden": !0
                    }), t(".tip_img")["$_BEI"]({
                        "aria-hidden": !0
                    })), t(".small")["$_BEI"]({
                        "tabIndex": "-1"
                    })["$_BDGu"]()["$_sTyyle"]({
                        "outline": "none",
                        "fontSize": $_IX(12)
                    }), t(".close")["$_BEI"]({
                        "tabIndex": "-1"
                    }), t(".refresh")["$_BEI"]({
                        "tabIndex": "-1"
                    }), t(".feedback")["$_BEI"]({
                        "tabIndex": "-1"
                    });
                }
            },
            "$_CCC_": function () {
                var e = this["$"],
                    t = this["$_BHGz"],
                    n = this["$_BJw"];
                switch (n["pic_type"]) {
                    case "phrase":
                        var r = t["atip"]["split"]("_");
                        e(".atip_content")["$_BCJY"](r[0] + "<span class=\"geetest_mark\">" + r[1] + "</span>" + r[2] + r[3]), e(".atip_content")["$_sTyyle"]({
                            "fontSize": ""
                        });
                        var i = e(".tip_text"),
                            s = [e(".word1"), e(".word2"), e(".word3"), e(".word4"), e(".word5"), e(".word6")];
                        i["$_BCAR"]("three"), i["$_BCAR"]("four"), i["$_BCAR"]("five"), i["$_BCAR"]("six");
                        for (var o = 0, _ = s["length"]; o < _; o++) s[o]["$_BCAR"]("click_IE9"), s[o]["$_BCAR"]("move_word"), s[o]["$_BCAR"]("click_word");
                        switch (n["num"]) {
                            case 3:
                                i["$_BBJn"]("three");
                                break;
                            case 4:
                                i["$_BBJn"]("four");
                                break;
                            case 5:
                                i["$_BBJn"]("five");
                                break;
                            case 6:
                                i["$_BBJn"]("six");
                        }
                        break;
                    case "nine":
                        r = t["small_tip"]["split"]("_");
                        e(".tip_content")["$_BCJY"](r[0]);
                        break;
                    case "space":
                        r = n["sign"]["split"]("_") || [];
                        e(".tip_space")["$_BCJY"](r[0] + "<span class=\"geetest_mark\">" + (r[1] || "") + "</span>" + (r[2] || ""));
                        break;
                    case "icon":
                    case "word":
                    default:
                        r = "1*1" === n["spec"] ? t["tip"]["split"]("_") : t["small_tip"]["split"]("_");
                        e(".tip_content")["$_BCJY"](r[0] + "<span class=\"geetest_mark\">" + r[1] + "</span>" + r[2]);
                }
            },
            "$_CBBF": function (e) {
                if (e) {
                    var t = this["$_BJw"],
                        n = this["$"];
                    return "embed" === t["product"] && n(".holder")["$_sTyyle"]({
                        "width": e
                    }), this;
                }
            },
            "$_JBG": function () {
                var n = this,
                    r = n["$"],
                    e = n["$_BJw"],
                    i = n["$_IIV"];
                "popup" === e["product"] || "custom" === e["product"] ? (r(".popup_ghost")["$_JBG"]("click", function () {
                    n["$_CCGf"]();
                }), r(".close")["$_JBG"]("click", function () {
                    n["$_CCGf"]();
                })) : r(".close")["$_JBG"]("click", function () {
                    n["$_BGHw"]["$_JCW"](Ce);
                }), r(".refresh")["$_JBG"]("click", function (e) {
                    var t = n["$_JFm"];
                    t["$_JGS"]([we, ke, ye, be]) || (r(".commit")["$_BBJn"]("disable"), t["$_EJI"](Ee), e["$_BEEh"]());
                }), r(".commit")["$_JBG"]("click", function (e) {
                    var t = n["$_JFm"];
                    r(".commit")["$_BBJn"]("disable"), t["$_JGS"](xe) && f(function () {
                        i["$_BJIZ"](n["$_CBIQ"]["$_FAE"](), $_FB() - n["$_CBDM"]);
                    }, 0);
                }), n["$_CCHK"](), n["$_BHJz"]["$_JBG"]("resize", function () {
                    n["$_CAJN"]();
                });
            },
            "$_CIg": function (e) {
                var t = this,
                    n = t["$_BJw"];
                if (t["$_CCIj"] = oe["$"](e), !t["$_CCIj"]) return F(P("api_appendTo", t["$_IIV"]));
                "popup" === n["product"] || "custom" === n["product"] ? t["$_BHHp"]["$_CIg"](new oe(p)) : t["$_BHHp"]["$_CIg"](t["$_CCIj"]), t["$_BJw"]["show_voice"] && t["$_CCJY"](), t["$_CDAu"] = $_FB();
            },
            "$_CCJY": function () {
                var t = this,
                    e = t["$"],
                    n = t["$_BHGz"],
                    r = t["$_JFm"];
                e(".voice_tip")["$_BGu"](n["voice"]), e(".voice")["$_BEI"]({
                    "tabIndex": "0",
                    "role": "button",
                    "aria-label": n["voice"]
                })["$_BDGu"]()["$_sTyyle"]({
                    "display": "inline-block"
                }), e(".voice")["$_JBG"]("keydown", function (e) {
                    13 === e["$_FBK"]["keyCode"] && (r["$_EJI"](Se), t["$_IIV"]["$_JDi"]());
                }), e(".voice")["$_JBG"]("click", function () {
                    r["$_EJI"](Se), t["$_IIV"]["$_JDi"]();
                });
            },
            "$_BBBP": function () {
                return this["$_CDBM"](), this;
            },
            "$_BBAT": function () {
                var e = this;
                return "popup" !== e["$_BJw"]["product"] && "custom" !== e["$_BJw"]["product"] || e["$_CCGf"](), e;
            },
            "$_CDBM": function () {
                var e = this;
                "custom" === e["$_BJw"]["product"] && e["$_BHIm"](), e["$_BHHp"]["$_BBBP"](), e["$_CAJN"](), f(function () {
                    e["$_BHHp"]["$_BBCn"](1);
                }, 10);
            },
            "$_CCEB": function () {
                function s() {
                    var e = n["$_BDHP"]();
                    r === e && 0 !== r || 3 < i ? t["$_CAJN"]() : (i += 1, r = e, f(s, 200));
                }

                var t = this,
                    n = t["$_BHHp"],
                    r = n["$_BDHP"](),
                    i = 0;
                f(s, 200);
            },
            "$_CCGf": function () {
                var t = this;
                return t["$_BHHp"]["$_BBCn"](0), new $(function (e) {
                    f(function () {
                        t["$_BHHp"]["$_BBAT"](), t["$_BGHw"]["$_JCW"](Ce), e();
                    }, 0);
                });
            },
            "$_CDCL": function () {
                return new $(function (e) {
                    f(e, 1e3);
                });
            },
            "$_CAIz": function () {
                var e = this["$_BJw"],
                    t = "/static/" + e["theme"] + "/style" + ("https://" === e["protocol"] ? "_https" : "") + "." + e["theme_version"] + ".css",
                    n = e["debugConfig"];
                return n && n["skin_path"] && (t = t["replace"]("/static", n["skin_path"])), M(e, "css", e["protocol"], e["static_servers"], t);
            },
            "$_JDi": function () {
                (0, this["$"])(".holder")["$_CHG"](), this["$_BHJz"]["$_BCGr"]();
            },
            "$_CDDV": function () {
                var e = this["$"],
                    t = this["$_BJw"];
                if (-1 < new ie(["ar", "fa", "iw", "ur"])["$_BAFA"](t["lang"] && t["lang"]["split"]("-")[0])) {
                    e(".tips")["$_BBJn"]("special"), e(".tip_space")["$_BBJn"]("special"), e(".result_tip")["$_BBJn"]("special_text");
                    var n = e(".tip_img")["$_BCCD"]();
                    e(".tip_img")["$_sTyyle"]({
                        "right": "inherit",
                        "left": n
                    });
                }
            },
            "$_CAJN": function () {
                var e = this,
                    t = e["$_BJw"],
                    n = e["$"];
                if (e["$_BHHp"]) {
                    var r = e["$_BHHp"];
                    "popup" !== t["product"] && "custom" !== t["product"] || (r = n(".popup_box"));
                    var i = r["$_BDHP"]();
                    if (i) {
                        if (x && "popup" === t["product"] && "100%" == t["width"]) {
                            r["$_sTyyle"]({
                                "width": ""
                            }), i = r["$_BDHP"]();
                            var s = e["$_CDER"](i);
                            r["$_sTyyle"]({
                                "width": s
                            }), i = r["$_BDHP"]();
                        }
                        e["$_CCDe"](i), "embed" === e["$_BJw"]["product"] && e["$_CCFl"]();
                    }
                }
            },
            "$_CDER": function (e) {
                var t = "",
                    n = (0, this["$"])(".popup_ghost")["$_BDIf"]("font-family");
                if ("landscape" === n || "portrait" === n) var r = "landscape" === n; else r = 90 === Math["abs"](window["orientation"]);
                if (r) {
                    var i = 1.28 * e,
                        s = Math["min"](screen["availHeight"], screen["availWidth"]);
                    if ((s = E ? s : s - 30) < i) {
                        var o = .85 * s;
                        t = $_IX(Math["ceil"](o / 1.28));
                    }
                }
                return t;
            },
            "$_CCDe": function (e) {
                var t = this,
                    n = t["$_BJw"];
                switch (t["$_CDFq"](e), (y || b) && t["$1"] && t["$1"](".item_wrap") && t["$1"](".item_wrap")["$_sTyyle"]({
                    "width": e + "px",
                    "height": e + "px"
                }), n["pic_type"]) {
                    case "phrase":
                        t["$_CDGP"](e);
                        break;
                    case "space":
                        t["$_CDHI"](e);
                        break;
                    case "nine":
                    case "word":
                    case "icon":
                        t["$_CDIE"](e), t["$_CDDV"]();
                }
            },
            "$_CDFq": function (e) {
                var t = (0, this["$"])(".widget");
                t["$_BCAR"]("medium_fontsize"), t["$_BCAR"]("small_fontsize"), 260 <= e ? e <= 270 && t["$_BBJn"]("medium_fontsize") : t["$_BBJn"]("small_fontsize");
            },
            "$_CDIE": function (e) {
                var t = (0, this["$"])(".tip_img");
                if (260 <= e) t["$_sTyyle"]({
                    "width": $_IX(116),
                    "height": $_IX(40),
                    "right": $_IX(-116),
                    "top": $_IX(-10)
                }); else {
                    var n = .15 * e,
                        r = 2.9 * n;
                    t["$_sTyyle"]({
                        "width": $_IX(r),
                        "height": $_IX(n),
                        "right": $_IX("-" + r),
                        "top": $_IX("-" + (n - 20) / 2)
                    });
                }
            },
            "$_CDHI": function () {
                var e = (0, this["$"])(".tip_space"),
                    t = e["$_BCHh"](),
                    n = t["bottom"] - t["top"];
                0 < n && e["$_sTyyle"]({
                    "marginTop": $_IX("-" + n / 2)
                });
            },
            "$_CDGP": function (i) {
                var s = this,
                    e = s["$"],
                    o = e(".atip_content"),
                    _ = e(".tip_text");
                !function a(e) {
                    var t = o["$_BDHP"]();
                    var n = _["$_BDHP"]();
                    if (.95 * i < t + n) switch (e) {
                        case 1:
                            o["$_sTyyle"]({
                                "fontSize": $_IX(14)
                            }), a(2);
                            break;
                        case 2:
                            o["$_sTyyle"]({
                                "fontSize": $_IX(12)
                            }), a(3);
                            break;
                        case 3:
                            var r = s["$_BHGz"]["atip"]["split"]("_");
                            o["$_BCJY"](r[0] + "<span class=\"geetest_mark\">" + r[1] + "</span>" + r[2] + "<div>" + r[3] + "</div>");
                    }
                }(1);
                var t = o["$_BCHh"](),
                    n = t["bottom"] - t["top"];
                0 < n && o["$_sTyyle"]({
                    "marginTop": $_IX("-" + n / 2)
                });
            },
            "$_CCFl": function () {
                var e,
                    t = this["$"],
                    n = t(".head")["$_BDHP"]();
                t(".tip_content")["$_BDHP"]() <= 0 || (e = 260 <= n ? 116 : .15 * n * 2.9, n < t(".tip_content")["$_BDHP"]() + e + 12 && t(".tips")["$_BBJn"]("multi_click"));
            },
            "$_CCHK": function () {
                var l = this,
                    u = l["$_BJw"],
                    h = l["$"];

                function p(e, t) {
                    if (e === t) return !0;
                    while (t && l["$_BHHp"]["$_CJE"] != t && (t = t["parentNode"])) if (t === e) return !0;
                    return !1;
                }

                l["$_BHHp"]["$_JBG"]("click", function (e) {
                    var t = e["$_FBK"]["target"] || e["$_FBK"]["srcElement"],
                        n = h(".close")["$_CJE"],
                        r = h(".refresh")["$_CJE"],
                        i = h(".feedback")["$_CJE"],
                        s = h(".commit")["$_CJE"],
                        o = l["$1"](".item_img")["$_CJE"],
                        _ = {
                            "x": e["$_BECm"](),
                            "y": e["$_BEDf"]()
                        };
                    if (p(o, t) ? _["t"] = 1 : p(s, t) ? _["t"] = 3 : p(r, t) ? _["t"] = 4 : p(n, t) ? _["t"] = 5 : p(i, t) ? _["t"] = 6 : _["t"] = 0, "1*1" !== u["spec"]) {
                        var a = t["className"] || "";
                        if (0 <= a["indexOf"](j + "item_ghost")) {
                            var c = 0 <= a["indexOf"](j + "selected");
                            _["t"] = c ? 1 : 2;
                        }
                        0 <= a["indexOf"](j + "item_icon") && (_["t"] = 2);
                    }
                    l["$_CDJi"](_), l["$_BHDz"]["push"](_), l["$_CEAn"]();
                });
            },
            "$_CBEs": function (e) {
                var t = {
                    "x": e["$_BECm"](),
                    "y": e["$_BEDf"](),
                    "t": 2
                };
                this["$_CDJi"](t), this["$_BHDz"]["push"](t), this["$_CEAn"]();
            },
            "$_CDJi": function (e) {
                e["dt"] = $_FB() - this["$_BHCN"], this["$_BHCN"] = $_FB();
            },
            "$_CEAn": function (e) {
                if (e = e || 10, this["$_BHDz"]["length"] > e) {
                    var t = this["$_BHDz"]["length"] - e;
                    this["$_BHDz"]["splice"](0, t);
                }
            },
            "$_CEBN": function (t, n) {
                var r = 0;
                return function () {
                    var e = $_FB();
                    n < e - r && (t["apply"](this, arguments), r = e);
                };
            }
        }, je["prototype"] = {
            "challenge": "",
            "gt": "",
            "apiserver": "api.geetest.com",
            "staticservers": ["static.geetest.com", "static.geevisit.com"],
            "image_servers": [],
            "spec": "1*1",
            "sign": "依次点击图片的_xxx_3个字",
            "pic_sign": 0,
            "protocol": "http://",
            "lang": "zh-cn",
            "theme": "silver",
            "theme_version": "1.5.4",
            "version": "3.1.0",
            "feedback": "http://www.geetest.com/contact",
            "homepage": "https://www.geetest.com/first_page",
            "logo": !0,
            "autoReset": !0,
            "product": "popup",
            "area_ele": "",
            "width": $_IX(348),
            "$_BGGl": function (e) {
                return $_Ho(this, e), this;
            }
        }, Ne["type"] = "click", Ne["prototype"] = {
            "appendTo": function (e) {
                return this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_CIg"](e), this;
            },
            "refresh": function () {
                return this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_BJAr"](), this;
            },
            "getValidate": function () {
                return !!this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_CADn"]();
            },
            "onChangeCaptcha": function (e) {
                this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_JBG"](Se, e);
            },
            "onReady": function (e) {
                return this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_JBG"](me, e), this;
            },
            "onRefresh": function (e) {
                return this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_JBG"](Ee, e), this;
            },
            "onSuccess": function (e) {
                return this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_JBG"](ye, e), this;
            },
            "onFail": function (e) {
                return this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_JBG"](be, e), this;
            },
            "onError": function (e) {
                return this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_JBG"](ke, e), this;
            },
            "onClose": function (e) {
                return this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_JBG"](Ce, e), this;
            },
            "close": function () {
                return this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_CECN"](), this;
            },
            "preventRefresh": function () {
                return this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_CEDv"](), this;
            },
            "allowRefresh": function () {
                return this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_CEEE"](), this;
            },
            "show": function () {
                return this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_BBBP"](), this;
            },
            "hide": function () {
                return this["$_BICM"] && z["$_FAE"](this["$_BIBx"])["$_BBAT"](), this;
            },
            "destroy": function () {
                this["$_BICM"] && (this["$_BICM"] = !1, z["$_FAE"](this["$_BIBx"])["$_JDi"](), z["$_EJI"](this["$_BIBx"], null));
            }
        }, Le["prototype"] = {
            "$_DHY": function () {
                return this["$_FC_"]["$_BAAy"]();
            },
            "$_CBGK": function (e) {
                var t = this["$_FC_"]["$_JIT"]["length"] - 1,
                    n = e["$_BCBb"]()[t];
                return n && (this["getIEVersion"]() < 10 && 5 < this["getIEVersion"]() || k ? n["className"] = n["className"] + " geetest_click_IE9 geetest_move_word" : n["className"] = n["className"] + " geetest_click_word geetest_move_word"), this;
            },
            "$_BFGo": function (e, t, n, r) {
                var i = this["$_FC_"];
                return i["$_BABR"](e), e["$_CEFp"] = i["$_BAAy"]() - 1, e["$_CEGt"] = t, e["$_CEHV"] = n, this["$_CEIW"](e, r), f(function () {
                    e["$_BBJn"]("mark_show");
                }, 10), this;
            },
            "$_CEIW": function (e, t) {
                return "space" === t ? new oe("div")["$_BBJn"]("mark_no")["$_CIg"](e) : new oe("div")["$_BBJn"]("mark_no")["$_BGu"](e["$_CEFp"] + 1)["$_CIg"](e);
            },
            "$_CBFv": function (e, r) {
                for (var i = this, t = i["$_FC_"], n = e["$_CEFp"], s = t["$_BAAy"](); n < s; n += 1) !function (e) {
                    var t = r["$_BCBb"]()[e["$_CEFp"]];
                    if (t) if (i["getIEVersion"]() < 10 && 5 < i["getIEVersion"]() || k) {
                        var n = t["className"]["replace"](" geetest_click_IE9 geetest_move_word", "");
                        t["className"] = n, t["className"] = n;
                    } else {
                        n = t["className"]["replace"](" geetest_click_word geetest_move_word", "");
                        t["className"] = n;
                    }
                }(t["$_FAE"](n));
                return i;
            },
            "$_CHG": function (e) {
                for (var t = this["$_FC_"], n = e["$_CEFp"], r = t["$_BAAy"](); n < r; n += 1) !function (e) {
                    e["$_BCAR"]("mark_show"), p && ("transition" in p["style"] || "webkitTransition" in p["style"] || "mozTransition" in p["style"] || "msTransition" in p["style"]) ? f(function () {
                        e["$_CHG"]();
                    }, 300) : e["$_CHG"]();
                }(t["$_FAE"](n));
                return this["$_FC_"] = t["$_BBH"](0, e["$_CEFp"]), this;
            },
            "$_FAE": function () {
                var e = this["$_FC_"],
                    t = new ie();
                return e["$_BCa"](function (e) {
                    t["$_BABR"](e["$_CEGt"] + "_" + e["$_CEHV"]);
                }), t["$_BDh"](",");
            },
            "getIEVersion": function () {
                var e = ue["userAgent"],
                    t = -1 < e["indexOf"]("compatible") && -1 < e["indexOf"]("MSIE"),
                    n = -1 < e["indexOf"]("Edge") && !t,
                    r = -1 < e["indexOf"]("Trident") && -1 < e["indexOf"]("rv:11.0");
                if (t) {
                    new RegExp("MSIE (\\d+\\.\\d+);")["test"](e);
                    var i = parseFloat(RegExp["$1"]);
                    return 7 == i ? 7 : 8 == i ? 8 : 9 == i ? 9 : 10 == i ? 10 : 6;
                }
                return n ? "edge" : r ? 11 : -1;
            }
        }, Y["noConflict"](window, Ne);
    });
}();
var K = function () {
    function e() {
        return (65536 * (1 + Math["random"]()) | 0)["toString"](16)["substring"](1);
    }

    return function () {
        return e() + e() + e() + e();
    };
}();

args = '62f48f6408fff3b8';

function get_u() {
    var u = new window._h()["encrypt"](args);
    console.log("u---->",u);
    return u;

}

function get_o(gj,challenge,gt,r_pic,r_c,r_s) {
    // var _s = n["$_BHBW"]["$_BGCW"]();
    var _s = window._pe.prototype.$_BGCW();
    var r = {
        "pic": r_pic,//"/captcha_v3/custom_batch/v3/85/2024-01-26T18/icon/d15872f2faa24f209260fb53a9336f9a.jpg",
        "c": r_c,
        "s": r_s
    };
    var e = gj; //"6704_6975,2745_6945,5474_4665"
    var t = 1769;
    var o = {
        "lang": r["lang"] || "zh-cn",  //"zh-cn"
        "passtime": t,  //3337
        'h9s9': "1816378497",
        "a": e, //"6704_6975,2745_6945,5474_4665"
        "pic": r["pic"],  //"/captcha_v3/custom_batch/v3/85/2024-01-26T18/icon/d15872f2faa24f209260fb53a9336f9a.jpg"
        "tt": function (e, t, n) {
            if (!t || !n)
                return e;
            var r, i = 0, s = e, o = t[0], _ = t[2], a = t[4];
            while (r = n["substr"](i, 2)) {
                i += 2;
                var c = parseInt(r, 16)
                    , l = String["fromCharCode"](c)
                    , u = (o * c * c + _ * c + a) % e["length"];
                s = s["substr"](0, u) + l + s["substr"](u);
            }
            return s;
        }(_s, r["c"], r["s"]),
        "ep": {
            "ca": [
                {
                    "x": 1452,
                    "y": 380,
                    "t": 1,
                    "dt": 3470
                },
                {
                    "x": 1320,
                    "y": 379,
                    "t": 1,
                    "dt": 927
                },
                {
                    "x": 1411,
                    "y": 303,
                    "t": 1,
                    "dt": 553
                },
                {
                    "x": 1501,
                    "y": 494,
                    "t": 3,
                    "dt": 1856
                }
            ],
            "v": "3.1.0",
            "$_FB": false,
            "me": true,
            "tm": {
                "a": 1706339051684,
                "b": 1706339051885,
                "c": 1706339051885,
                "d": 0,
                "e": 0,
                "f": 1706339051690,
                "g": 1706339051711,
                "h": 1706339051711,
                "i": 1706339051711,
                "j": 1706339051774,
                "k": 1706339051730,
                "l": 1706339051774,
                "m": 1706339051881,
                "n": 1706339051882,
                "o": 1706339051887,
                "p": 1706339051985,
                "q": 1706339051985,
                "r": 1706339051987,
                "s": 1706339051987,
                "t": 1706339051987,
                "u": 1706339051987
            }
        },
        'rp':CryptoJS.MD5(gt+challenge+t).toString()
    };
    console.log(o);
    return o;
}

function get_h(gj,challenge,gt,r_pic,r_c,r_s) {
    var o = get_o(gj,challenge,gt,r_pic,r_c,r_s);
    var h = window._x.encrypt(JSON["stringify"](o), args);
    console.log(h);
    return h;
}

function get_p(gj,challenge,gt,r_pic,r_c,r_s) {
    var p = window._w.$_EFO(get_h(gj,challenge,gt,r_pic,r_c,r_s));
    console.log(p);
    return p;
}

function get_w(gj,challenge,gt,r_pic,r_c,r_s) {
    var w = get_p(gj,challenge,gt,r_pic,r_c,r_s) + get_u();
    console.log(w);
    return w;
}

function main(gt,challenge,gj,pic,r_c,r_s){
    var u = new window._h()["encrypt"](args);
    console.log(u);
    var _s = window._pe.prototype.$_BGCW();
    var r = {
        "pic": pic,//"/captcha_v3/custom_batch/v3/85/2024-01-26T18/icon/d15872f2faa24f209260fb53a9336f9a.jpg",
        "c": r_c,
        "s": r_s
    };
    var e = gj; //"6704_6975,2745_6945,5474_4665"
    var t = "3337";
    var o = {
        "lang": r["lang"] || "zh-cn",  //"zh-cn"
        "passtime": t,  //3337
        'h9s9': "1816378497",
        "a": e, //"6704_6975,2745_6945,5474_4665"
        "pic": pic,  //"/captcha_v3/custom_batch/v3/85/2024-01-26T18/icon/d15872f2faa24f209260fb53a9336f9a.jpg"
        "tt": function (e, t, n) {
            if (!t || !n)
                return e;
            var r, i = 0, s = e, o = t[0], _ = t[2], a = t[4];
            while (r = n["substr"](i, 2)) {
                i += 2;
                var c = parseInt(r, 16)
                    , l = String["fromCharCode"](c)
                    , u = (o * c * c + _ * c + a) % e["length"];
                s = s["substr"](0, u) + l + s["substr"](u);
            }
            return s;
        }(_s, r_c, r_s),
        "ep": {
            "ca": [
                {
                    "x": 1452,
                    "y": 380,
                    "t": 1,
                    "dt": 3470
                },
                {
                    "x": 1320,
                    "y": 379,
                    "t": 1,
                    "dt": 927
                },
                {
                    "x": 1411,
                    "y": 303,
                    "t": 1,
                    "dt": 553
                },
                {
                    "x": 1501,
                    "y": 494,
                    "t": 3,
                    "dt": 1856
                }
            ],
            "v": "3.1.0",
            "$_FB": false,
            "me": true,
            "tm": {
                "a": 1706339051684,
                "b": 1706339051885,
                "c": 1706339051885,
                "d": 0,
                "e": 0,
                "f": 1706339051690,
                "g": 1706339051711,
                "h": 1706339051711,
                "i": 1706339051711,
                "j": 1706339051774,
                "k": 1706339051730,
                "l": 1706339051774,
                "m": 1706339051881,
                "n": 1706339051882,
                "o": 1706339051887,
                "p": 1706339051985,
                "q": 1706339051985,
                "r": 1706339051987,
                "s": 1706339051987,
                "t": 1706339051987,
                "u": 1706339051987
            }
        },
        'rp':CryptoJS.MD5(gt+challenge+t).toString()
    };
    return o;
}
console.log(main('','','1686_1841,7026_6371',"/captcha_v3/custom_batch/v3/85/2024-01-26T18/icon/d15872f2faa24f209260fb53a9336f9a.jpg",[
    12,
    58,
    98,
    36,
    43,
    95,
    62,
    15,
    12
],'3f6f7374'))

// get_w('1715_1482,5058_6627,1802_7063','6e1d7307d935889c0bc1e2a6dbddad36','6216680937717fdab947ed9e71a3aaa1',)
// console.log(get_u())