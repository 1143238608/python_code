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


function mwbxQ() {
}

!function () {
    !function (t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module["exports"] ? module["exports"] = t["document"] ? e(t, !0) : function (t) {
            if (!t["document"]) throw new Error("Geetest requires a window with a document");
            return e(t);
        } : e(t);
    }("undefined" != typeof window ? window : this, function (window, t) {
        function $_BIE(t, e, n) {
            var r = t["split"]("."),
                i = r[0] || "div",
                o = new ct(r)["$_BJS"](1)["$_CAE"](function (t, e, n) {
                    return R + t;
                })["$_CBG"](" "),
                s = new lt(i);
            return n("." + r[1], s), "input" == i && s["$_CCr"]({
                "type": "hidden",
                "name": o
            }), s["$_CDP"]({
                "className": o
            }), K(e) ? s["$_CCr"]({
                "textContent": e
            }) : new ut(e)["$_CEv"](function (t, e) {
                s["$_CFG"]($_BIE(t, e, n));
            }), s;
        }

        function $_BHP(t) {
            return {
                ".popup_ghost": {},
                ".popup_box": {
                    ".popup_header": {
                        "span.popup_tip": {},
                        "span.popup_close": {}
                    },
                    ".popup_wrap": t
                }
            };
        }

        function $_BGr(t) {
            for (var e in t) if ("object" == typeof t && t["hasOwnProperty"](e)) return t;
            return {
                "loading": "加载中...",
                "slide": "拖动左边滑块完成上方拼图",
                "refresh": "刷新验证",
                "feedback": "帮助反馈",
                "fail": "拖动滑块将悬浮图像正确拼合",
                "success": "sec 秒的速度超过 score% 的用户",
                "forbidden": "哇哦～怪物吃了拼图 3 秒后重试",
                "error": "请关闭验证重试",
                "logo": "由极验提供技术支持",
                "close": "关闭验证",
                "voice": "视觉障碍"
            };
        }

        function $_BFI(t, e) {
            var n = t["$_CGI"],
                r = n["src"],
                i = n["height"] / 2;
            e["$_CHh"]();
            for (var o = 0; o < 52; o += 1) {
                var s = Ut[o] % 26 * 12 + 1,
                    a = 25 < Ut[o] ? i : 0,
                    _ = "-" + $_BDB(s) + " -" + $_BDB(a);
                new lt("div")["$_sTyyle"]({
                    "backgroundImage": "url(" + r + ")",
                    "backgroundPosition": _
                })["$_CIP"](e);
            }
        }

        function $_BEB(t, e) {
            t = t["$_CGI"], e = e["$_CGI"];
            var n = t["width"],
                r = t["height"],
                i = h["createElement"]("canvas");
            i["width"] = n, i["height"] = r;
            var o = i["getContext"]("2d");
            o["drawImage"](t, 0, 0);
            var s = e["getContext"]("2d");
            e["height"] = r, e["width"] = 260;
            for (var a = r / 2, _ = 0; _ < 52; _ += 1) {
                var c = Ut[_] % 26 * 12 + 1,
                    u = 25 < Ut[_] ? a : 0,
                    l = o["getImageData"](c, u, 10, a);
                s["putImageData"](l, _ % 26 * 10, 25 < _ ? a : 0);
            }
        }

        function $_BDB(t) {
            try {
                return (t / mt)["toFixed"](4) + vt;
            } catch (e) {
                return t + "px";
            }
        }

        function $_BCN() {
            return new G(function (t) {
                var e = h["createElement"]("img");
                e["onload"] = e["onerror"] = function () {
                    2 === e["height"] ? t(!0) : t(!1);
                }, e["src"] = "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA";
            });
        }

        function $_BBo(t) {
            return t["status"] ? t["data"] : t;
        }

        function $_BAX(n, t) {
            new ut(t)["$_CEv"](function (t, e) {
                n[t] = e;
            });
        }

        function $_JK() {
            var t = new Date(),
                e = t["getFullYear"](),
                n = t["getMonth"]() + 1,
                r = t["getDate"](),
                i = t["getHours"](),
                o = t["getMinutes"](),
                s = t["getSeconds"]();
            return 1 <= n && n <= 9 && (n = "0" + n), 0 <= r && r <= 9 && (r = "0" + r), 0 <= i && i <= 9 && (i = "0" + i), 0 <= o && o <= 9 && (o = "0" + o), 0 <= s && s <= 9 && (s = "0" + s), e + "-" + n + "-" + r + " " + i + ":" + o + ":" + s;
        }

        function $_Ih() {
            return new Date()["getTime"]();
        }

        function $_HH() {
            var n = {};
            return function (t, e) {
                if (!e) return n[t["replace"](R, "")];
                n[t] = e;
            };
        }

        function $_GM() {
            return parseInt(1e4 * Math["random"]()) + new Date()["valueOf"]();
        }

        function $_Fk(t) {
            return "function" == typeof t;
        }

        function $_EF(t) {
            return "boolean" == typeof t;
        }

        function K(t) {
            return "string" == typeof t;
        }

        function Q(t) {
            return "number" == typeof t;
        }

        function z(n) {
            return console && console["error"] && console["error"](n), new G(function (t, e) {
                e(n);
            });
        }

        function q(t, e, n) {
            var r = e["$_CJk"],
                i = (e["$_DAE"], "GeetestError");
            return n && (i = "UserCallBackError", t["detail"] = n, r["error_code"] = "604", r["msg"] = t["msg"], c(j(r, "./usercallback/" + (t["detail"] && t["detail"]["type"])), r["post"], r["protocol"])), e["$_DBh"](t), new Error(i + ": " + (t && t["msg"]));
        }

        function F(t, e, n) {
            var r = e["$_CJk"];
            return r["error_code"] = t["error_code"], c(j(r, n), r["post"], r["protocol"]), q({
                "msg": (t = t || {})["error"],
                "code": t["error_code"],
                "error_code": t["error_code"],
                "user_error": t["user_error"]
            }, e);
        }

        function $(t, e, n) {
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
            r[t] || (t = "unknown");
            var i = r[t],
                o = e["$_DAE"];
            return i["user_error"] = function (t, e) {
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
                    r = function (t) {
                        var e = {
                            "neterror": ["error_104", "error_105", "error_106", "error_107", "error_108", "error_109", "error_110", "error_111", "error_113", "error_115"],
                            "configerror": ["error_100", "error_101", "error_102", "error_103", "error_112", "error_114", "error_116", "error_117", "error_118"]
                        };
                        for (var n in e) {
                            var r = e[n];
                            if (r["length"]) for (var i = r["length"] - 1; 0 <= i; i--) if (r[i] === t) return n;
                        }
                        return "";
                    }(t),
                    i = function (t) {
                        var e = (t = (t = t || "zh-cn")["toLowerCase"]())["indexOf"]("-"),
                            n = -1 < e ? t["slice"](0, e) : t;
                        return "zh" === n && (-1 < t["indexOf"]("tw") || -1 < t["indexOf"]("hk") ? n += "-tw" : n += "-cn"), n;
                    }(e);
                return n[r] && n[r][i] || n[r]["en"];
            }(i["code"], o["lang"]), i["error_code"] = i["code"], q(i, e, n);
        }

        function H(t, e) {
            for (var n = e["slice"](-2), r = [], i = 0; i < n["length"]; i++) {
                var o = n["charCodeAt"](i);
                r[i] = 57 < o ? o - 87 : o - 48;
            }
            n = 36 * r[0] + r[1];
            var s,
                a = Math["round"](t) + n,
                _ = [[], [], [], [], []],
                c = {},
                u = 0;
            i = 0;
            for (var l = (e = e["slice"](0, -2))["length"]; i < l; i++) c[s = e["charAt"](i)] || (c[s] = 1, _[u]["push"](s), u = 5 == ++u ? 0 : u);
            var h,
                f = a,
                d = 4,
                p = "",
                g = [1, 2, 5, 10, 50];
            while (0 < f) 0 <= f - g[d] ? (h = parseInt(Math["random"]() * _[d]["length"], 10), p += _[d][h], f -= g[d]) : (_["splice"](d, 1), g["splice"](d, 1), d -= 1);
            return p;
        }

        window._H = H;

        function I(t, e, n) {
            return t["offline"] ? $_DCD["$_DDP"](t, e, n) : void 0 !== a && a["$_DEF"]() && t["post"] ? function (i, o, s) {
                return new G(function (e, n) {
                    for (var t in s) s["hasOwnProperty"](t) && "number" == typeof s[t] && (s[t] = "" + s[t]);
                    s["a"] && (s["a"] = decodeURIComponent(s["a"]));
                    var r = O(i["protocol"], i["api_server"] || i["apiserver"], o);
                    a["$_DFb"](r, s, function (t) {
                        e(t);
                    }, function (t) {
                        i["error_code"] = 508, c(j(i, r), !0, i["protocol"]), n(t);
                    });
                });
            }(t, e, n) : function (t, i, o) {
                return new G(function (n, e) {
                    var r = "geetest_" + $_GM();
                    window[r] = function (t) {
                        n(t), window[r] = undefined;
                        try {
                            delete window[r];
                        } catch (e) {
                        }
                    }, o["callback"] = r, B(t, "js", t["protocol"], [t["api_server"] || t["apiserver"]], i, o)["$_DGp"](function () {
                    }, function (t) {
                        e(t);
                    });
                });
            }(t, e, n);
        }

        function j(t, e) {
            var n = "",
                r = 0;
            return t["$_DHX"] && (n = t["$_DHX"]["ip"], r = t["$_DHX"]["$_BCN"]), {
                "time": $_JK(),
                "user_ip": n,
                "captcha_id": t["gt"],
                "challenge": t["challenge"],
                "$_BCN": r,
                "exception_url": e,
                "error_code": t["error_code"] || "",
                "msg": t["msg"] || ""
            };
        }

        function B(r, t, e, n, i, o, s) {
            var a;
            "js" == t ? a = k : "css" == t ? a = A : "img" == t ? a = D : "audio" === t && (a = M);
            for (var _ = function (n) {
                return function (t, e) {
                    a(n, r["timeout"], r, s)["$_DGp"](function (t) {
                        e(t);
                    }, function () {
                        t();
                    });
                };
            }, c = [], u = 0, l = n["length"]; u < l; u += 1) c["push"](_(O(e, n[u], i, o)));
            return new G(function (e, t) {
                G["step"](c)["$_DGp"](function () {
                    t();
                }, function (t) {
                    e(t);
                });
            });
        }

        function O(t, e, n, r) {
            e = function (t) {
                return t["replace"](/^https?:\/\/|\/$/g, "");
            }(e);
            var i = function (t) {
                return 0 !== (t = t["replace"](/\/+/g, "/"))["indexOf"]("/") && (t = "/" + t), t;
            }(n) + function (t) {
                if (!t) return "";
                var n = "?";
                return new ut(t)["$_CEv"](function (t, e) {
                    (K(e) || Q(e) || $_EF(e)) && (n = n + encodeURIComponent(t) + "=" + encodeURIComponent(e) + "&");
                }), "?" === n && (n = ""), n["replace"](/&$/, "");
            }(r);
            return e && (i = t + e + i), i;
        }

        function M(r, i, o) {
            return new G(function (t, e) {
                var n = new lt("audio");
                n["$_CDP"]({
                    "onerror": function () {
                        c(j(o, r), o["post"], o["protocol"]), e(L);
                    },
                    "onloadedmetadata": function () {
                        t(n);
                    }
                }), n["$_CCr"]({
                    "src": r
                }), v(function () {
                    e(N);
                }, i || T);
            });
        }

        function D(r, i, o, s) {
            return new G(function (t, e) {
                var n = new lt("img");
                n["$_CDP"]({
                    "onerror": function () {
                        c(j(o, r), o["post"], o["protocol"]), e(L);
                    },
                    "onload": function () {
                        t(n);
                    }
                }), !1 !== s && n["$_CDP"]({
                    "crossOrigin": "anonymous"
                })["$_CCr"]({
                    "crossorigin": "anonymous"
                }), n["$_CCr"]({
                    "src": r
                }), v(function () {
                    e(N);
                }, i || T);
            });
        }

        function A(i, o, s) {
            return new G(function (t, e) {
                var n = new lt("link"),
                    r = !1;
                v(function () {
                    r = !0, t(n);
                }, 2e3), n["$_CDP"]({
                    "onerror": function () {
                        c(j(s, i), s["post"], s["protocol"]), n["$_DIO"](), e(L);
                    },
                    "onload": function () {
                        r = !0, t(n);
                    },
                    "href": i,
                    "rel": "stylesheet"
                })["$_CIP"](new lt(p)), v(function () {
                    r || n["$_DIO"](), e(N);
                }, o || T);
            });
        }

        function k(s, a, _) {
            return new G(function (t, e) {
                function o() {
                    i || r["readyState"] && "loaded" !== r["readyState"] && "complete" !== r["readyState"] || (i = !0, v(function () {
                        t(n);
                    }, 0));
                }

                var n = new lt("script"),
                    r = n["$_CGI"],
                    i = !1;
                /static\.geetest\.com/g["test"](s) && n["$_CDP"]({
                    "crossOrigin": "anonymous"
                }), n["$_CDP"]({
                    "charset": "UTF-8",
                    "aysnc": !1,
                    "onload": o,
                    "onreadystatechange": o,
                    "onerror": function () {
                        _["error_code"] = 508, _["gt"] && c(j(_, s["split"]("?")[0]), _["post"], _["protocol"]), n["$_DIO"](), i = !0, e(L);
                    },
                    "src": s
                })["$_CIP"](new lt(p)), v(function () {
                    i || (n["$_DIO"](), _["gt"] && (_["error_code"] = 408, c(j(_, s["split"]("?")[0]), _["post"], _["protocol"]))), e(N);
                }, a || T);
            });
        }

        function y(t) {
            window["clearTimeout"](t);
        }

        function v(t, e) {
            return window["setTimeout"](t, e);
        }

        function n(t, e) {
            if (t && t["filename"] && /static\.geetest\.com/g["test"](t["filename"]) || e) {
                try {
                    var n = {
                        "captcha_id": window && window["GeeGT"] || "",
                        "challenge": window && window["GeeChallenge"] || "",
                        "error_code": e ? "603" : "602",
                        "exception_url": t["filename"] || "",
                        "$_BCN": /Mobi/i["test"](window["navigator"]["userAgent"]) ? "3" : "0",
                        "time": function a() {
                            var t = new Date(),
                                e = t["getFullYear"](),
                                n = t["getMonth"]() + 1,
                                r = t["getDate"](),
                                i = t["getHours"](),
                                o = t["getMinutes"](),
                                s = t["getSeconds"]();
                            return 1 <= n && n <= 9 && (n = "0" + n), 0 <= r && r <= 9 && (r = "0" + r), 0 <= i && i <= 9 && (i = "0" + i), 0 <= o && o <= 9 && (o = "0" + o), 0 <= s && s <= 9 && (s = "0" + s), e + "-" + n + "-" + r + " " + i + ":" + o + ":" + s;
                        }(),
                        "msg": t["error"] && t["error"]["message"] || t["message"] || "",
                        "stack": t["error"] && t["error"]["stack"] || t["stack"] || ""
                    };
                    s["$_DEF"]() && s["$_DFb"]("https://monitor.geetest.com/monitor/send", n, function (t) {
                    }, function (t) {
                    });
                } catch (r) {
                }
            }
        }

        function o(t, r) {
            return new G(function (e, n) {
                a["$_DFb"](r + "monitor.geetest.com/monitor/send", t, function (t) {
                    e(t);
                }, function (t) {
                    n(t);
                });
            });
        }

        function i(n, r) {
            return new G(function (t, e) {
                B({
                    "timeout": 3e3
                }, "js", r, ["monitor.geetest.com"], "/monitor/send", n)["$_DGp"](function () {
                }, function (t) {
                    e(t);
                });
            });
        }

        function c(t, e, n) {
            if (void 0 !== a && a["$_DEF"]() && e) try {
                o(t, n);
            } catch (r) {
            } else try {
                i(t, n);
            } catch (r) {
            }
        }

        var s = {
                "$_DEF": function () {
                    return (window["XDomainRequest"] || window["XMLHttpRequest"] && "withCredentials" in new window["XMLHttpRequest"]()) && window["JSON"];
                },
                "$_DFb": function (t, e, n, r, i) {
                    var o = null;
                    if (o = "string" == typeof e ? e : window["JSON"]["stringify"](e), !window["XMLHttpRequest"] || "withCredentials" in new window["XMLHttpRequest"]()) {
                        if (window["XMLHttpRequest"]) {
                            var s = new window["XMLHttpRequest"]();
                            s["open"]("POST", t, !0), s["setRequestHeader"]("Content-Type", "text/plain;charset=utf-8"), s["setRequestHeader"]("Accept", "application/json"), s["withCredentials"] = !0, s["timeout"] = i || 3e4, s["onload"] = function () {
                                n(window["JSON"]["parse"](s["responseText"]));
                            }, s["onreadystatechange"] = function () {
                                4 === s["readyState"] && (200 === s["status"] ? n(window["JSON"]["parse"](s["responseText"])) : r({
                                    "error": "status: " + s["status"]
                                }));
                            }, s["send"](o);
                        }
                    } else {
                        var a = window["location"]["protocol"],
                            _ = new window["XDomainRequest"]();
                        _["timeout"] = i || 3e4, -1 === t["indexOf"](a) && (t = t["replace"](/^https?:/, a)), _["ontimeout"] = function () {
                            "function" == typeof r && r({
                                "error": "timeout"
                            });
                        }, _["onerror"] = function () {
                            "function" == typeof r && r({
                                "error": "error"
                            });
                        }, _["onload"] = function () {
                            "function" == typeof n && n(window["JSON"]["parse"](_["responseText"]));
                        }, _["open"]("POST", t), v(function () {
                            _["send"](o);
                        }, 0);
                    }
                }
            },
            m = {
                "$_DJw": {
                    "$_EAW": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
                    "$_EBT": ".",
                    "$_ECO": 7274496,
                    "$_EDf": 9483264,
                    "$_EEO": 19220,
                    "$_EFn": 235,
                    "$_EGX": 24
                },
                "$_EAW": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
                "$_EBT": ".",
                "$_ECO": 7274496,
                "$_EDf": 9483264,
                "$_EEO": 19220,
                "$_EFn": 235,
                "$_EGX": 24,
                "$_EHS": function (t) {
                    for (var e = [], n = 0, r = t["length"]; n < r; n += 1) e["push"](t["charCodeAt"](n));
                    return e;
                },
                "$_EIH": function (t) {
                    for (var e = "", n = 0, r = t["length"]; n < r; n += 1) e += String["fromCharCode"](t[n]);
                    return e;
                },
                "$_EJu": function (t) {
                    var e = this["$_EAW"];
                    return t < 0 || t >= e["length"] ? "." : e["charAt"](t);
                },
                "$_FAE": function (t) {
                    return this["$_EAW"]["indexOf"](t);
                },
                "$_FBm": function (t, e) {
                    return t >> e & 1;
                },
                "$_FCD": function (t, i) {
                    var o = this;
                    i || (i = o);
                    for (var e = function (t, e) {
                        for (var n = 0, r = i["$_EGX"] - 1; 0 <= r; r -= 1) 1 === o["$_FBm"](e, r) && (n = (n << 1) + o["$_FBm"](t, r));
                        return n;
                    }, n = "", r = "", s = t["length"], a = 0; a < s; a += 3) {
                        var _;
                        if (a + 2 < s) _ = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2], n += o["$_EJu"](e(_, i["$_ECO"])) + o["$_EJu"](e(_, i["$_EDf"])) + o["$_EJu"](e(_, i["$_EEO"])) + o["$_EJu"](e(_, i["$_EFn"])); else {
                            var c = s % 3;
                            2 == c ? (_ = (t[a] << 16) + (t[a + 1] << 8), n += o["$_EJu"](e(_, i["$_ECO"])) + o["$_EJu"](e(_, i["$_EDf"])) + o["$_EJu"](e(_, i["$_EEO"])), r = i["$_EBT"]) : 1 == c && (_ = t[a] << 16, n += o["$_EJu"](e(_, i["$_ECO"])) + o["$_EJu"](e(_, i["$_EDf"])), r = i["$_EBT"] + i["$_EBT"]);
                        }
                    }
                    return {
                        "res": n,
                        "end": r
                    };
                },
                "$_FD_": function (t) {
                    var e = this["$_FCD"](this["$_EHS"](t));
                    return e["res"] + e["end"];
                },
                "$_FEX": function (t) {
                    var e = this["$_FCD"](t);
                    return e["res"] + e["end"];
                },
                "$_FFQ": function (t, o) {
                    var s = this;
                    o || (o = s);
                    for (var e = function (t, e) {
                        if (t < 0) return 0;
                        for (var n = 5, r = 0, i = o["$_EGX"] - 1; 0 <= i; i -= 1) 1 === s["$_FBm"](e, i) && (r += s["$_FBm"](t, n) << i, n -= 1);
                        return r;
                    }, n = t["length"], r = "", i = 0; i < n; i += 4) {
                        var a = e(s["$_FAE"](t["charAt"](i)), o["$_ECO"]) + e(s["$_FAE"](t["charAt"](i + 1)), o["$_EDf"]) + e(s["$_FAE"](t["charAt"](i + 2)), o["$_EEO"]) + e(s["$_FAE"](t["charAt"](i + 3)), o["$_EFn"]),
                            _ = a >> 16 & 255;
                        if (r += String["fromCharCode"](_), t["charAt"](i + 2) !== o["$_EBT"]) {
                            var c = a >> 8 & 255;
                            if (r += String["fromCharCode"](c), t["charAt"](i + 3) !== o["$_EBT"]) {
                                var u = 255 & a;
                                r += String["fromCharCode"](u);
                            }
                        }
                    }
                    return r;
                },
                "$_FGU": function (t) {
                    var e = 4 - t["length"] % 4;
                    if (e < 4) for (var n = 0; n < e; n += 1) t += this["$_EBT"];
                    return this["$_FFQ"](t);
                },
                "$_FHQ": function (t) {
                    return this["$_FGU"](t);
                }
            },
            a = {
                "$_DEF": function () {
                    return (window["XDomainRequest"] || window["XMLHttpRequest"] && "withCredentials" in new window["XMLHttpRequest"]()) && window["JSON"];
                },
                "$_DFb": function (t, e, n, r, i) {
                    var o = null;
                    if (o = "string" == typeof e ? e : window["JSON"]["stringify"](e), !window["XMLHttpRequest"] || "withCredentials" in new window["XMLHttpRequest"]()) {
                        if (window["XMLHttpRequest"]) {
                            var s = new window["XMLHttpRequest"]();
                            s["open"]("POST", t, !0), s["setRequestHeader"]("Content-Type", "text/plain;charset=utf-8"), s["setRequestHeader"]("Accept", "application/json"), s["withCredentials"] = !0, s["timeout"] = i || 3e4, s["onload"] = function () {
                                n(window["JSON"]["parse"](s["responseText"]));
                            }, s["onreadystatechange"] = function () {
                                4 === s["readyState"] && (200 === s["status"] ? n(window["JSON"]["parse"](s["responseText"])) : r({
                                    "error": "status: " + s["status"]
                                }));
                            }, s["send"](o);
                        }
                    } else {
                        var a = window["location"]["protocol"],
                            _ = new window["XDomainRequest"]();
                        _["timeout"] = i || 3e4, -1 === t["indexOf"](a) && (t = t["replace"](/^https?:/, a)), _["ontimeout"] = function () {
                            "function" == typeof r && r({
                                "error": "timeout"
                            });
                        }, _["onerror"] = function () {
                            "function" == typeof r && r({
                                "error": "error"
                            });
                        }, _["onload"] = function () {
                            "function" == typeof n && n(window["JSON"]["parse"](_["responseText"]));
                        }, _["open"]("POST", t), v(function () {
                            _["send"](o);
                        }, 0);
                    }
                }
            };
        window._m = m;

        function _(t) {
            this["$_FIM"] = t, this["$_FJe"] = new lt(window), this["$_GAf"]();
        }

        _["prototype"] = {
            "$_GAf": function () {
                var e = this;
                try {
                    var n = window["localStorage"];
                } catch (t) {
                    n = !1;
                }
                n && e["$_FJe"]["$_GBZ"]("pageshow", function (t) {
                    t["$_DCD"]["persisted"] && (!n["bfcache_detect"] && n["setItem"]("bfcache_detect", !0), e["$_FJe"]["$_GCQ"]("pageshow"));
                });
            },
            "$_GDD": function (t) {
                var i = new window["Date"]()["getTime"]();

                function e(t) {
                    var e = new Date()["getTime"](),
                        n = window["Math"]["max"](0, 16 - (e - i)),
                        r = window["setTimeout"](function () {
                            t(e + n);
                        }, n);
                    return i = e + n, r;
                }

                var n = window["requestAnimationFrame"] || window["webkitRequestAnimationFrame"] || window["mozRequestAnimationFrame"] || e;
                try {
                    var r = window["localStorage"];
                } catch (o) {
                    r = !1;
                }
                return r && r["bfcache_detect"] && (n = e), n(t);
            },
            "$_GES": function (t) {
                return (window["cancelAnimationFrame"] || window["webkitCancelRequestAnimationFrame"] || window["mozCancelRequestAnimationFrame"] || y)(t);
            },
            "$_GFw": function () {
                return this["$_GGD"] = !0, this;
            },
            "$_GHf": function () {
                var t = this;
                return t["$_GIF"] = t["$_GDD"](function () {
                    t["$_GGD"] || (t["$_FIM"](), t["$_GHf"]());
                }), t;
            },
            "$_GJB": function () {
                return this["$_GGD"] = !1, this["$_GES"](this["$_GIF"]), this["$_GHf"]();
            }
        };
        var e,
            r,
            u,
            l,
            h = window["document"],
            f = window["location"],
            d = h["body"] || h["getElementsByTagName"]("body")[0],
            p = h["head"] || h["getElementsByTagName"]("head")[0],
            g = (h["documentElement"], f["protocol"] + "//"),
            ht = window["navigator"],
            w = (e = h["createElement"]("canvas"), r = e["getContext"] && e["getContext"]("2d"), u = /msie/i["test"](ht["userAgent"]), !r && u),
            b = /Mobi/i["test"](ht["userAgent"]),
            x = /msie 6\.0/i["test"](ht["userAgent"]),
            E = (/msie 7\.0/i["test"](ht["userAgent"]), h["compatMode"]),
            C = (parseFloat(ht["userAgent"]["slice"](ht["userAgent"]["indexOf"]("Android") + 8)), parseFloat(ht["userAgent"]["slice"](ht["userAgent"]["indexOf"]("Android") + 8)) < 4.4),
            S = -1 < ht["userAgent"]["indexOf"]("Android"),
            T = 3e4,
            R = "geetest_",
            L = "err001",
            N = "err002",
            P = (l = [], {
                "$_HAt": function (t, e) {
                    l[t] = e;
                },
                "$_HBw": function (t) {
                    return l[t];
                }
            });
        se["jscrambler"] = "Start";

        function X(t) {
            function _(t, e) {
                return t << e | t >>> 32 - e;
            }

            function c(t, e) {
                var n, r, i, o, s;
                return i = 2147483648 & t, o = 2147483648 & e, s = (1073741823 & t) + (1073741823 & e), (n = 1073741824 & t) & (r = 1073741824 & e) ? 2147483648 ^ s ^ i ^ o : n | r ? 1073741824 & s ? 3221225472 ^ s ^ i ^ o : 1073741824 ^ s ^ i ^ o : s ^ i ^ o;
            }

            function e(t, e, n, r, i, o, s) {
                return c(_(t = c(t, c(c(function a(t, e, n) {
                    return t & e | ~t & n;
                }(e, n, r), i), s)), o), e);
            }

            function n(t, e, n, r, i, o, s) {
                return c(_(t = c(t, c(c(function a(t, e, n) {
                    return t & n | e & ~n;
                }(e, n, r), i), s)), o), e);
            }

            function r(t, e, n, r, i, o, s) {
                return c(_(t = c(t, c(c(function a(t, e, n) {
                    return t ^ e ^ n;
                }(e, n, r), i), s)), o), e);
            }

            function i(t, e, n, r, i, o, s) {
                return c(_(t = c(t, c(c(function a(t, e, n) {
                    return e ^ (t | ~n);
                }(e, n, r), i), s)), o), e);
            }

            function o(t) {
                var e,
                    n = "",
                    r = "";
                for (e = 0; e <= 3; e++) n += (r = "0" + (t >>> 8 * e & 255)["toString"](16))["substr"](r["length"] - 2, 2);
                return n;
            }

            var s, a, u, l, h, f, d, p, g, v;
            for (s = function m(t) {
                var e,
                    n = t["length"],
                    r = n + 8,
                    i = 16 * (1 + (r - r % 64) / 64),
                    o = Array(i - 1),
                    s = 0,
                    a = 0;
                while (a < n) s = a % 4 * 8, o[e = (a - a % 4) / 4] = o[e] | t["charCodeAt"](a) << s, a++;
                return s = a % 4 * 8, o[e = (a - a % 4) / 4] = o[e] | 128 << s, o[i - 2] = n << 3, o[i - 1] = n >>> 29, o;
            }(t = function y(t) {
                t = t["replace"](/\r\n/g, "\n");
                for (var e = "", n = 0; n < t["length"]; n++) {
                    var r = t["charCodeAt"](n);
                    r < 128 ? e += String["fromCharCode"](r) : (127 < r && r < 2048 ? e += String["fromCharCode"](r >> 6 | 192) : (e += String["fromCharCode"](r >> 12 | 224), e += String["fromCharCode"](r >> 6 & 63 | 128)), e += String["fromCharCode"](63 & r | 128));
                }
                return e;
            }(t)), d = 1732584193, p = 4023233417, g = 2562383102, v = 271733878, a = 0; a < s["length"]; a += 16) p = i(p = i(p = i(p = i(p = r(p = r(p = r(p = r(p = n(p = n(p = n(p = n(p = e(p = e(p = e(p = e(l = p, g = e(h = g, v = e(f = v, d = e(u = d, p, g, v, s[a + 0], 7, 3614090360), p, g, s[a + 1], 12, 3905402710), d, p, s[a + 2], 17, 606105819), v, d, s[a + 3], 22, 3250441966), g = e(g, v = e(v, d = e(d, p, g, v, s[a + 4], 7, 4118548399), p, g, s[a + 5], 12, 1200080426), d, p, s[a + 6], 17, 2821735955), v, d, s[a + 7], 22, 4249261313), g = e(g, v = e(v, d = e(d, p, g, v, s[a + 8], 7, 1770035416), p, g, s[a + 9], 12, 2336552879), d, p, s[a + 10], 17, 4294925233), v, d, s[a + 11], 22, 2304563134), g = e(g, v = e(v, d = e(d, p, g, v, s[a + 12], 7, 1804603682), p, g, s[a + 13], 12, 4254626195), d, p, s[a + 14], 17, 2792965006), v, d, s[a + 15], 22, 1236535329), g = n(g, v = n(v, d = n(d, p, g, v, s[a + 1], 5, 4129170786), p, g, s[a + 6], 9, 3225465664), d, p, s[a + 11], 14, 643717713), v, d, s[a + 0], 20, 3921069994), g = n(g, v = n(v, d = n(d, p, g, v, s[a + 5], 5, 3593408605), p, g, s[a + 10], 9, 38016083), d, p, s[a + 15], 14, 3634488961), v, d, s[a + 4], 20, 3889429448), g = n(g, v = n(v, d = n(d, p, g, v, s[a + 9], 5, 568446438), p, g, s[a + 14], 9, 3275163606), d, p, s[a + 3], 14, 4107603335), v, d, s[a + 8], 20, 1163531501), g = n(g, v = n(v, d = n(d, p, g, v, s[a + 13], 5, 2850285829), p, g, s[a + 2], 9, 4243563512), d, p, s[a + 7], 14, 1735328473), v, d, s[a + 12], 20, 2368359562), g = r(g, v = r(v, d = r(d, p, g, v, s[a + 5], 4, 4294588738), p, g, s[a + 8], 11, 2272392833), d, p, s[a + 11], 16, 1839030562), v, d, s[a + 14], 23, 4259657740), g = r(g, v = r(v, d = r(d, p, g, v, s[a + 1], 4, 2763975236), p, g, s[a + 4], 11, 1272893353), d, p, s[a + 7], 16, 4139469664), v, d, s[a + 10], 23, 3200236656), g = r(g, v = r(v, d = r(d, p, g, v, s[a + 13], 4, 681279174), p, g, s[a + 0], 11, 3936430074), d, p, s[a + 3], 16, 3572445317), v, d, s[a + 6], 23, 76029189), g = r(g, v = r(v, d = r(d, p, g, v, s[a + 9], 4, 3654602809), p, g, s[a + 12], 11, 3873151461), d, p, s[a + 15], 16, 530742520), v, d, s[a + 2], 23, 3299628645), g = i(g, v = i(v, d = i(d, p, g, v, s[a + 0], 6, 4096336452), p, g, s[a + 7], 10, 1126891415), d, p, s[a + 14], 15, 2878612391), v, d, s[a + 5], 21, 4237533241), g = i(g, v = i(v, d = i(d, p, g, v, s[a + 12], 6, 1700485571), p, g, s[a + 3], 10, 2399980690), d, p, s[a + 10], 15, 4293915773), v, d, s[a + 1], 21, 2240044497), g = i(g, v = i(v, d = i(d, p, g, v, s[a + 8], 6, 1873313359), p, g, s[a + 15], 10, 4264355552), d, p, s[a + 6], 15, 2734768916), v, d, s[a + 13], 21, 1309151649), g = i(g, v = i(v, d = i(d, p, g, v, s[a + 4], 6, 4149444226), p, g, s[a + 11], 10, 3174756917), d, p, s[a + 2], 15, 718787259), v, d, s[a + 9], 21, 3951481745), d = c(d, u), p = c(p, l), g = c(g, h), v = c(v, f);
            return (o(d) + o(p) + o(g) + o(v))["toLowerCase"]();
        }

        se["jscrambler"] = "End";
        var U = function () {
            function n() {
                this["i"] = 0, this["j"] = 0, this["S"] = [];
            }

            n["prototype"]["init"] = function C(t) {
                var e, n, r;
                for (e = 0; e < 256; ++e) this["S"][e] = e;
                for (e = n = 0; e < 256; ++e) n = n + this["S"][e] + t[e % t["length"]] & 255, r = this["S"][e], this["S"][e] = this["S"][n], this["S"][n] = r;
                this["i"] = 0, this["j"] = 0;
            }, n["prototype"]["next"] = function S() {
                var t;
                return this["i"] = this["i"] + 1 & 255, this["j"] = this["j"] + this["S"][this["i"]] & 255, t = this["S"][this["i"]], this["S"][this["i"]] = this["S"][this["j"]], this["S"][this["j"]] = t, this["S"][t + this["S"][this["i"]] & 255];
            };
            var r,
                i,
                o,
                t,
                s = 256;
            if (null == i) {
                var e;
                i = [], o = 0;
                try {
                    if (window["crypto"] && window["crypto"]["getRandomValues"]) {
                        var a = new Uint32Array(256);
                        for (window["crypto"]["getRandomValues"](a), e = 0; e < a["length"]; ++e) i[o++] = 255 & a[e];
                    }
                } catch (T) {
                }
                var _ = 0,
                    c = function (t) {
                        if (256 <= (_ = _ || 0) || s <= o) window["removeEventListener"] ? (_ = 0, window["removeEventListener"]("mousemove", c, !1)) : window["detachEvent"] && (_ = 0, window["detachEvent"]("onmousemove", c)); else try {
                            var e = t["x"] + t["y"];
                            i[o++] = 255 & e, _ += 1;
                        } catch (T) {
                        }
                    };
                window["addEventListener"] ? window["addEventListener"]("mousemove", c, !1) : window["attachEvent"] && window["attachEvent"]("onmousemove", c);
            }

            function u() {
                if (null == r) {
                    r = function e() {
                        return new n();
                    }();
                    while (o < s) {
                        var t = Math["floor"](65536 * Math["random"]());
                        i[o++] = 255 & t;
                    }
                    for (r["init"](i), o = 0; o < i["length"]; ++o) i[o] = 0;
                    o = 0;
                }
                return r["next"]();
            }

            function l() {
            }

            l["prototype"]["nextBytes"] = function k(t) {
                var e;
                for (e = 0; e < t["length"]; ++e) t[e] = u();
            };

            function y(t, e, n) {
                null != t && ("number" == typeof t ? this["fromNumber"](t, e, n) : null == e && "string" != typeof t ? this["fromString"](t, 256) : this["fromString"](t, e));
            }

            function w() {
                return new y(null);
            }

            t = "Microsoft Internet Explorer" == ht["appName"] ? (y["prototype"]["am"] = function A(t, e, n, r, i, o) {
                var s = 32767 & e,
                    a = e >> 15;
                while (0 <= --o) {
                    var _ = 32767 & this[t],
                        c = this[t++] >> 15,
                        u = a * _ + c * s;
                    i = ((_ = s * _ + ((32767 & u) << 15) + n[r] + (1073741823 & i)) >>> 30) + (u >>> 15) + a * c + (i >>> 30), n[r++] = 1073741823 & _;
                }
                return i;
            }, 30) : "Netscape" != ht["appName"] ? (y["prototype"]["am"] = function D(t, e, n, r, i, o) {
                while (0 <= --o) {
                    var s = e * this[t++] + n[r] + i;
                    i = Math["floor"](s / 67108864), n[r++] = 67108863 & s;
                }
                return i;
            }, 26) : (y["prototype"]["am"] = function M(t, e, n, r, i, o) {
                var s = 16383 & e,
                    a = e >> 14;
                while (0 <= --o) {
                    var _ = 16383 & this[t],
                        c = this[t++] >> 14,
                        u = a * _ + c * s;
                    i = ((_ = s * _ + ((16383 & u) << 14) + n[r] + i) >> 28) + (u >> 14) + a * c, n[r++] = 268435455 & _;
                }
                return i;
            }, 28), y["prototype"]["DB"] = t, y["prototype"]["DM"] = (1 << t) - 1, y["prototype"]["DV"] = 1 << t;
            y["prototype"]["FV"] = Math["pow"](2, 52), y["prototype"]["F1"] = 52 - t, y["prototype"]["F2"] = 2 * t - 52;
            var h,
                f,
                d = "0123456789abcdefghijklmnopqrstuvwxyz",
                p = [];
            for (h = "0"["charCodeAt"](0), f = 0; f <= 9; ++f) p[h++] = f;
            for (h = "a"["charCodeAt"](0), f = 10; f < 36; ++f) p[h++] = f;
            for (h = "A"["charCodeAt"](0), f = 10; f < 36; ++f) p[h++] = f;

            function g(t) {
                return d["charAt"](t);
            }

            function v(t) {
                var e = w();
                return e["fromInt"](t), e;
            }

            function b(t) {
                var e,
                    n = 1;
                return 0 != (e = t >>> 16) && (t = e, n += 16), 0 != (e = t >> 8) && (t = e, n += 8), 0 != (e = t >> 4) && (t = e, n += 4), 0 != (e = t >> 2) && (t = e, n += 2), 0 != (e = t >> 1) && (t = e, n += 1), n;
            }

            function m(t) {
                this["m"] = t;
            }

            function x(t) {
                this["m"] = t, this["mp"] = t["invDigit"](), this["mpl"] = 32767 & this["mp"], this["mph"] = this["mp"] >> 15, this["um"] = (1 << t["DB"] - 15) - 1, this["mt2"] = 2 * t["t"];
            }

            function E() {
                this["n"] = null, this["e"] = 0, this["d"] = null, this["p"] = null, this["q"] = null, this["dmp1"] = null, this["dmq1"] = null, this["coeff"] = null;
                this["setPublic"]("00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81", "10001");
            }

            return m["prototype"]["convert"] = function O(t) {
                return t["s"] < 0 || 0 <= t["compareTo"](this["m"]) ? t["mod"](this["m"]) : t;
            }, m["prototype"]["revert"] = function B(t) {
                return t;
            }, m["prototype"]["reduce"] = function j(t) {
                t["divRemTo"](this["m"], null, t);
            }, m["prototype"]["mulTo"] = function I(t, e, n) {
                t["multiplyTo"](e, n), this["reduce"](n);
            }, m["prototype"]["sqrTo"] = function R(t, e) {
                t["squareTo"](e), this["reduce"](e);
            }, x["prototype"]["convert"] = function L(t) {
                var e = w();
                return t["abs"]()["dlShiftTo"](this["m"]["t"], e), e["divRemTo"](this["m"], null, e), t["s"] < 0 && 0 < e["compareTo"](y["ZERO"]) && this["m"]["subTo"](e, e), e;
            }, x["prototype"]["revert"] = function N(t) {
                var e = w();
                return t["copyTo"](e), this["reduce"](e), e;
            }, x["prototype"]["reduce"] = function P(t) {
                while (t["t"] <= this["mt2"]) t[t["t"]++] = 0;
                for (var e = 0; e < this["m"]["t"]; ++e) {
                    var n = 32767 & t[e],
                        r = n * this["mpl"] + ((n * this["mph"] + (t[e] >> 15) * this["mpl"] & this["um"]) << 15) & t["DM"];
                    t[n = e + this["m"]["t"]] += this["m"]["am"](0, r, t, e, 0, this["m"]["t"]);
                    while (t[n] >= t["DV"]) t[n] -= t["DV"], t[++n]++;
                }
                t["clamp"](), t["drShiftTo"](this["m"]["t"], t), 0 <= t["compareTo"](this["m"]) && t["subTo"](this["m"], t);
            }, x["prototype"]["mulTo"] = function H(t, e, n) {
                t["multiplyTo"](e, n), this["reduce"](n);
            }, x["prototype"]["sqrTo"] = function $(t, e) {
                t["squareTo"](e), this["reduce"](e);
            }, y["prototype"]["copyTo"] = function F(t) {
                for (var e = this["t"] - 1; 0 <= e; --e) t[e] = this[e];
                t["t"] = this["t"], t["s"] = this["s"];
            }, y["prototype"]["fromInt"] = function q(t) {
                this["t"] = 1, this["s"] = t < 0 ? -1 : 0, 0 < t ? this[0] = t : t < -1 ? this[0] = t + this["DV"] : this["t"] = 0;
            }, y["prototype"]["fromString"] = function z(t, e) {
                var n;
                if (16 == e) n = 4; else if (8 == e) n = 3; else if (256 == e) n = 8; else if (2 == e) n = 1; else if (32 == e) n = 5; else {
                    if (4 != e) return void this["fromRadix"](t, e);
                    n = 2;
                }
                this["t"] = 0, this["s"] = 0;
                var r,
                    i,
                    o = t["length"],
                    s = !1,
                    a = 0;
                while (0 <= --o) {
                    var _ = 8 == n ? 255 & t[o] : (r = o, null == (i = p[t["charCodeAt"](r)]) ? -1 : i);
                    _ < 0 ? "-" == t["charAt"](o) && (s = !0) : (s = !1, 0 == a ? this[this["t"]++] = _ : a + n > this["DB"] ? (this[this["t"] - 1] |= (_ & (1 << this["DB"] - a) - 1) << a, this[this["t"]++] = _ >> this["DB"] - a) : this[this["t"] - 1] |= _ << a, (a += n) >= this["DB"] && (a -= this["DB"]));
                }
                8 == n && 0 != (128 & t[0]) && (this["s"] = -1, 0 < a && (this[this["t"] - 1] |= (1 << this["DB"] - a) - 1 << a)), this["clamp"](), s && y["ZERO"]["subTo"](this, this);
            }, y["prototype"]["clamp"] = function X() {
                var t = this["s"] & this["DM"];
                while (0 < this["t"] && this[this["t"] - 1] == t) --this["t"];
            }, y["prototype"]["dlShiftTo"] = function U(t, e) {
                var n;
                for (n = this["t"] - 1; 0 <= n; --n) e[n + t] = this[n];
                for (n = t - 1; 0 <= n; --n) e[n] = 0;
                e["t"] = this["t"] + t, e["s"] = this["s"];
            }, y["prototype"]["drShiftTo"] = function V(t, e) {
                for (var n = t; n < this["t"]; ++n) e[n - t] = this[n];
                e["t"] = Math["max"](this["t"] - t, 0), e["s"] = this["s"];
            }, y["prototype"]["lShiftTo"] = function G(t, e) {
                var n,
                    r = t % this["DB"],
                    i = this["DB"] - r,
                    o = (1 << i) - 1,
                    s = Math["floor"](t / this["DB"]),
                    a = this["s"] << r & this["DM"];
                for (n = this["t"] - 1; 0 <= n; --n) e[n + s + 1] = this[n] >> i | a, a = (this[n] & o) << r;
                for (n = s - 1; 0 <= n; --n) e[n] = 0;
                e[s] = a, e["t"] = this["t"] + s + 1, e["s"] = this["s"], e["clamp"]();
            }, y["prototype"]["rShiftTo"] = function J(t, e) {
                e["s"] = this["s"];
                var n = Math["floor"](t / this["DB"]);
                if (n >= this["t"]) e["t"] = 0; else {
                    var r = t % this["DB"],
                        i = this["DB"] - r,
                        o = (1 << r) - 1;
                    e[0] = this[n] >> r;
                    for (var s = n + 1; s < this["t"]; ++s) e[s - n - 1] |= (this[s] & o) << i, e[s - n] = this[s] >> r;
                    0 < r && (e[this["t"] - n - 1] |= (this["s"] & o) << i), e["t"] = this["t"] - n, e["clamp"]();
                }
            }, y["prototype"]["subTo"] = function Y(t, e) {
                var n = 0,
                    r = 0,
                    i = Math["min"](t["t"], this["t"]);
                while (n < i) r += this[n] - t[n], e[n++] = r & this["DM"], r >>= this["DB"];
                if (t["t"] < this["t"]) {
                    r -= t["s"];
                    while (n < this["t"]) r += this[n], e[n++] = r & this["DM"], r >>= this["DB"];
                    r += this["s"];
                } else {
                    r += this["s"];
                    while (n < t["t"]) r -= t[n], e[n++] = r & this["DM"], r >>= this["DB"];
                    r -= t["s"];
                }
                e["s"] = r < 0 ? -1 : 0, r < -1 ? e[n++] = this["DV"] + r : 0 < r && (e[n++] = r), e["t"] = n, e["clamp"]();
            }, y["prototype"]["multiplyTo"] = function W(t, e) {
                var n = this["abs"](),
                    r = t["abs"](),
                    i = n["t"];
                e["t"] = i + r["t"];
                while (0 <= --i) e[i] = 0;
                for (i = 0; i < r["t"]; ++i) e[i + n["t"]] = n["am"](0, r[i], e, i, 0, n["t"]);
                e["s"] = 0, e["clamp"](), this["s"] != t["s"] && y["ZERO"]["subTo"](e, e);
            }, y["prototype"]["squareTo"] = function Z(t) {
                var e = this["abs"](),
                    n = t["t"] = 2 * e["t"];
                while (0 <= --n) t[n] = 0;
                for (n = 0; n < e["t"] - 1; ++n) {
                    var r = e["am"](n, e[n], t, 2 * n, 0, 1);
                    (t[n + e["t"]] += e["am"](n + 1, 2 * e[n], t, 2 * n + 1, r, e["t"] - n - 1)) >= e["DV"] && (t[n + e["t"]] -= e["DV"], t[n + e["t"] + 1] = 1);
                }
                0 < t["t"] && (t[t["t"] - 1] += e["am"](n, e[n], t, 2 * n, 0, 1)), t["s"] = 0, t["clamp"]();
            }, y["prototype"]["divRemTo"] = function Q(t, e, n) {
                var r = t["abs"]();
                if (!(r["t"] <= 0)) {
                    var i = this["abs"]();
                    if (i["t"] < r["t"]) return null != e && e["fromInt"](0), void (null != n && this["copyTo"](n));
                    null == n && (n = w());
                    var o = w(),
                        s = this["s"],
                        a = t["s"],
                        _ = this["DB"] - b(r[r["t"] - 1]);
                    0 < _ ? (r["lShiftTo"](_, o), i["lShiftTo"](_, n)) : (r["copyTo"](o), i["copyTo"](n));
                    var c = o["t"],
                        u = o[c - 1];
                    if (0 != u) {
                        var l = u * (1 << this["F1"]) + (1 < c ? o[c - 2] >> this["F2"] : 0),
                            h = this["FV"] / l,
                            f = (1 << this["F1"]) / l,
                            d = 1 << this["F2"],
                            p = n["t"],
                            g = p - c,
                            v = null == e ? w() : e;
                        o["dlShiftTo"](g, v), 0 <= n["compareTo"](v) && (n[n["t"]++] = 1, n["subTo"](v, n)), y["ONE"]["dlShiftTo"](c, v), v["subTo"](o, o);
                        while (o["t"] < c) o[o["t"]++] = 0;
                        while (0 <= --g) {
                            var m = n[--p] == u ? this["DM"] : Math["floor"](n[p] * h + (n[p - 1] + d) * f);
                            if ((n[p] += o["am"](0, m, n, g, 0, c)) < m) {
                                o["dlShiftTo"](g, v), n["subTo"](v, n);
                                while (n[p] < --m) n["subTo"](v, n);
                            }
                        }
                        null != e && (n["drShiftTo"](c, e), s != a && y["ZERO"]["subTo"](e, e)), n["t"] = c, n["clamp"](), 0 < _ && n["rShiftTo"](_, n), s < 0 && y["ZERO"]["subTo"](n, n);
                    }
                }
            }, y["prototype"]["invDigit"] = function K() {
                if (this["t"] < 1) return 0;
                var t = this[0];
                if (0 == (1 & t)) return 0;
                var e = 3 & t;
                return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this["DV"]) % this["DV"]) ? this["DV"] - e : -e;
            }, y["prototype"]["isEven"] = function $_EF() {
                return 0 == (0 < this["t"] ? 1 & this[0] : this["s"]);
            }, y["prototype"]["exp"] = function $_Fk(t, e) {
                if (4294967295 < t || t < 1) return y["ONE"];
                var n = w(),
                    r = w(),
                    i = e["convert"](this),
                    o = b(t) - 1;
                i["copyTo"](n);
                while (0 <= --o) if (e["sqrTo"](n, r), 0 < (t & 1 << o)) e["mulTo"](r, i, n); else {
                    var s = n;
                    n = r, r = s;
                }
                return e["revert"](n);
            }, y["prototype"]["toString"] = function $_GM(t) {
                if (this["s"] < 0) return "-" + this["negate"]()["toString"](t);
                var e;
                if (16 == t) e = 4; else if (8 == t) e = 3; else if (2 == t) e = 1; else if (32 == t) e = 5; else {
                    if (4 != t) return this["toRadix"](t);
                    e = 2;
                }
                var n,
                    r = (1 << e) - 1,
                    i = !1,
                    o = "",
                    s = this["t"],
                    a = this["DB"] - s * this["DB"] % e;
                if (0 < s--) {
                    a < this["DB"] && 0 < (n = this[s] >> a) && (i = !0, o = g(n));
                    while (0 <= s) a < e ? (n = (this[s] & (1 << a) - 1) << e - a, n |= this[--s] >> (a += this["DB"] - e)) : (n = this[s] >> (a -= e) & r, a <= 0 && (a += this["DB"], --s)), 0 < n && (i = !0), i && (o += g(n));
                }
                return i ? o : "0";
            }, y["prototype"]["negate"] = function rt() {
                var t = w();
                return y["ZERO"]["subTo"](this, t), t;
            }, y["prototype"]["abs"] = function $_HH() {
                return this["s"] < 0 ? this["negate"]() : this;
            }, y["prototype"]["compareTo"] = function $_Ih(t) {
                var e = this["s"] - t["s"];
                if (0 != e) return e;
                var n = this["t"];
                if (0 != (e = n - t["t"])) return this["s"] < 0 ? -e : e;
                while (0 <= --n) if (0 != (e = this[n] - t[n])) return e;
                return 0;
            }, y["prototype"]["bitLength"] = function $_JK() {
                return this["t"] <= 0 ? 0 : this["DB"] * (this["t"] - 1) + b(this[this["t"] - 1] ^ this["s"] & this["DM"]);
            }, y["prototype"]["mod"] = function $_BAX(t) {
                var e = w();
                return this["abs"]()["divRemTo"](t, null, e), this["s"] < 0 && 0 < e["compareTo"](y["ZERO"]) && t["subTo"](e, e), e;
            }, y["prototype"]["modPowInt"] = function $_BBo(t, e) {
                var n;
                return n = t < 256 || e["isEven"]() ? new m(e) : new x(e), this["exp"](t, n);
            }, y["ZERO"] = v(0), y["ONE"] = v(1), E["prototype"]["doPublic"] = function ct(t) {
                return t["modPowInt"](this["e"], this["n"]);
            }, E["prototype"]["setPublic"] = function ut(t, e) {
                null != t && null != e && 0 < t["length"] && 0 < e["length"] ? (this["n"] = function n(t, e) {
                    return new y(t, e);
                }(t, 16), this["e"] = parseInt(e, 16)) : console && console["error"] && console["error"]("Invalid RSA public key");
            }, E["prototype"]["encrypt"] = function lt(t) {
                var e = function a(t, e) {
                    if (e < t["length"] + 11) return console && console["error"] && console["error"]("Message too long for RSA"), null;
                    var n = [],
                        r = t["length"] - 1;
                    while (0 <= r && 0 < e) {
                        var i = t["charCodeAt"](r--);
                        i < 128 ? n[--e] = i : 127 < i && i < 2048 ? (n[--e] = 63 & i | 128, n[--e] = i >> 6 | 192) : (n[--e] = 63 & i | 128, n[--e] = i >> 6 & 63 | 128, n[--e] = i >> 12 | 224);
                    }
                    n[--e] = 0;
                    var o = new l(),
                        s = [];
                    while (2 < e) {
                        s[0] = 0;
                        while (0 == s[0]) o["nextBytes"](s);
                        n[--e] = s[0];
                    }
                    return n[--e] = 2, n[--e] = 0, new y(n);
                }(t, this["n"]["bitLength"]() + 7 >> 3);
                if (null == e) return null;
                var n = this["doPublic"](e);
                if (null == n) return null;
                var r = n["toString"](16);
                return 0 == (1 & r["length"]) ? r : "0" + r;
            }, E;
        }();
        window._U = U;
        se["jscrambler"] = "Start controlFlowFlattening";
        var V = function () {
            var t,
                n = Object["create"] || function () {
                    function n() {
                    }

                    return function (t) {
                        var e;
                        return n["prototype"] = t, e = new n(), n["prototype"] = null, e;
                    };
                }(),
                e = {},
                r = e["lib"] = {},
                i = r["Base"] = {
                    "extend": function (t) {
                        var e = n(this);
                        return t && e["mixIn"](t), e["hasOwnProperty"]("init") && this["init"] !== e["init"] || (e["init"] = function () {
                            e["$super"]["init"]["apply"](this, arguments);
                        }), (e["init"]["prototype"] = e)["$super"] = this, e;
                    },
                    "create": function () {
                        var t = this["extend"]();
                        return t["init"]["apply"](t, arguments), t;
                    },
                    "init": function () {
                    },
                    "mixIn": function (t) {
                        for (var e in t) t["hasOwnProperty"](e) && (this[e] = t[e]);
                        t["hasOwnProperty"]("toString") && (this["toString"] = t["toString"]);
                    }
                },
                u = r["WordArray"] = i["extend"]({
                    "init": function (t, e) {
                        t = this["words"] = t || [], e != undefined ? this["sigBytes"] = e : this["sigBytes"] = 4 * t["length"];
                    },
                    "concat": function (t) {
                        var e = this["words"],
                            n = t["words"],
                            r = this["sigBytes"],
                            i = t["sigBytes"];
                        if (this["clamp"](), r % 4) for (var o = 0; o < i; o++) {
                            var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            e[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8;
                        } else for (o = 0; o < i; o += 4) e[r + o >>> 2] = n[o >>> 2];
                        return this["sigBytes"] += i, this;
                    },
                    "clamp": function () {
                        var t = this["words"],
                            e = this["sigBytes"];
                        t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, t["length"] = Math["ceil"](e / 4);
                    }
                }),
                o = e["enc"] = {},
                l = o["Latin1"] = {
                    "parse": function (t) {
                        for (var e = t["length"], n = [], r = 0; r < e; r++) n[r >>> 2] |= (255 & t["charCodeAt"](r)) << 24 - r % 4 * 8;
                        return new u["init"](n, e);
                    }
                },
                s = o["Utf8"] = {
                    "parse": function (t) {
                        return l["parse"](unescape(encodeURIComponent(t)));
                    }
                },
                a = r["BufferedBlockAlgorithm"] = i["extend"]({
                    "reset": function () {
                        this["$_HCb"] = new u["init"](), this["$_HDN"] = 0;
                    },
                    "$_HEo": function (t) {
                        "string" == typeof t && (t = s["parse"](t)), this["$_HCb"]["concat"](t), this["$_HDN"] += t["sigBytes"];
                    },
                    "$_HFa": function (t) {
                        var e = this["$_HCb"],
                            n = e["words"],
                            r = e["sigBytes"],
                            i = this["blockSize"],
                            o = r / (4 * i),
                            s = (o = t ? Math["ceil"](o) : Math["max"]((0 | o) - this["$_HGg"], 0)) * i,
                            a = Math["min"](4 * s, r);
                        if (s) {
                            for (var _ = 0; _ < s; _ += i) this["$_HHA"](n, _);
                            var c = n["splice"](0, s);
                            e["sigBytes"] -= a;
                        }
                        return new u["init"](c, a);
                    },
                    "$_HGg": 0
                }),
                _ = e["algo"] = {},
                c = r["Cipher"] = a["extend"]({
                    "cfg": i["extend"](),
                    "createEncryptor": function (t, e) {
                        return this["create"](this["$_HIZ"], t, e);
                    },
                    "init": function (t, e, n) {
                        this["cfg"] = this["cfg"]["extend"](n), this["$_HJW"] = t, this["$_IAU"] = e, this["reset"]();
                    },
                    "reset": function () {
                        a["reset"]["call"](this), this["$_IBY"]();
                    },
                    "process": function (t) {
                        return this["$_HEo"](t), this["$_HFa"]();
                    },
                    "finalize": function (t) {
                        return t && this["$_HEo"](t), this["$_ICJ"]();
                    },
                    "keySize": 4,
                    "ivSize": 4,
                    "$_HIZ": 1,
                    "$_IDj": 2,
                    "$_IEi": function (c) {
                        return {
                            "encrypt": function (t, e, n) {
                                e = l["parse"](e), n && n["iv"] || ((n = n || {})["iv"] = l["parse"]("0000000000000000"));
                                for (var r = m["encrypt"](c, t, e, n), i = r["ciphertext"]["words"], o = r["ciphertext"]["sigBytes"], s = [], a = 0; a < o; a++) {
                                    var _ = i[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                                    s["push"](_);
                                }
                                return s;
                            }
                        };
                    }
                }),
                h = e["mode"] = {},
                f = r["BlockCipherMode"] = i["extend"]({
                    "createEncryptor": function (t, e) {
                        return this["Encryptor"]["create"](t, e);
                    },
                    "init": function (t, e) {
                        this["$_IFP"] = t, this["$_IGG"] = e;
                    }
                }),
                d = h["CBC"] = ((t = f["extend"]())["Encryptor"] = t["extend"]({
                    "processBlock": function (t, e) {
                        var n = this["$_IFP"],
                            r = n["blockSize"];
                        (function s(t, e, n) {
                            var r = this["$_IGG"];
                            if (r) {
                                var i = r;
                                this["$_IGG"] = undefined;
                            } else var i = this["$_IHq"];
                            for (var o = 0; o < n; o++) t[e + o] ^= i[o];
                        })["call"](this, t, e, r), n["encryptBlock"](t, e), this["$_IHq"] = t["slice"](e, e + r);
                    }
                }), t),
                p = (e["pad"] = {})["Pkcs7"] = {
                    "pad": function (t, e) {
                        for (var n = 4 * e, r = n - t["sigBytes"] % n, i = r << 24 | r << 16 | r << 8 | r, o = [], s = 0; s < r; s += 4) o["push"](i);
                        var a = u["create"](o, r);
                        t["concat"](a);
                    }
                },
                g = r["BlockCipher"] = c["extend"]({
                    "cfg": c["cfg"]["extend"]({
                        "mode": d,
                        "padding": p
                    }),
                    "reset": function () {
                        c["reset"]["call"](this);
                        var t = this["cfg"],
                            e = t["iv"],
                            n = t["mode"];
                        if (this["$_HJW"] == this["$_HIZ"]) var r = n["createEncryptor"];
                        this["$_IIF"] && this["$_IIF"]["$_IJb"] == r ? this["$_IIF"]["init"](this, e && e["words"]) : (this["$_IIF"] = r["call"](n, this, e && e["words"]), this["$_IIF"]["$_IJb"] = r);
                    },
                    "$_HHA": function (t, e) {
                        this["$_IIF"]["processBlock"](t, e);
                    },
                    "$_ICJ": function () {
                        var t = this["cfg"]["padding"];
                        if (this["$_HJW"] == this["$_HIZ"]) {
                            t["pad"](this["$_HCb"], this["blockSize"]);
                            var e = this["$_HFa"](!0);
                        }
                        return e;
                    },
                    "blockSize": 4
                }),
                v = r["CipherParams"] = i["extend"]({
                    "init": function (t) {
                        this["mixIn"](t);
                    }
                }),
                m = r["SerializableCipher"] = i["extend"]({
                    "cfg": i["extend"](),
                    "encrypt": function (t, e, n, r) {
                        r = this["cfg"]["extend"](r);
                        var i = t["createEncryptor"](n, r),
                            o = i["finalize"](e),
                            s = i["cfg"];
                        return v["create"]({
                            "ciphertext": o,
                            "key": n,
                            "iv": s["iv"],
                            "algorithm": t,
                            "mode": s["mode"],
                            "padding": s["padding"],
                            "blockSize": t["blockSize"],
                            "formatter": r["format"]
                        });
                    }
                }),
                y = [],
                w = [],
                b = [],
                x = [],
                E = [],
                C = [],
                S = [],
                T = [],
                k = [],
                A = [];
            !function () {
                for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                var n = 0,
                    r = 0;
                for (e = 0; e < 256; e++) {
                    var i = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                    i = i >>> 8 ^ 255 & i ^ 99, y[n] = i;
                    var o = t[w[i] = n],
                        s = t[o],
                        a = t[s],
                        _ = 257 * t[i] ^ 16843008 * i;
                    b[n] = _ << 24 | _ >>> 8, x[n] = _ << 16 | _ >>> 16, E[n] = _ << 8 | _ >>> 24, C[n] = _;
                    _ = 16843009 * a ^ 65537 * s ^ 257 * o ^ 16843008 * n;
                    S[i] = _ << 24 | _ >>> 8, T[i] = _ << 16 | _ >>> 16, k[i] = _ << 8 | _ >>> 24, A[i] = _, n ? (n = o ^ t[t[t[a ^ o]]], r ^= t[t[r]]) : n = r = 1;
                }
            }();
            var D = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                M = _["AES"] = g["extend"]({
                    "$_IBY": function () {
                        if (!this["$_JAO"] || this["$_JBo"] !== this["$_IAU"]) {
                            for (var t = this["$_JBo"] = this["$_IAU"], e = t["words"], n = t["sigBytes"] / 4, r = 4 * (1 + (this["$_JAO"] = 6 + n)), i = this["$_JCC"] = [], o = 0; o < r; o++) if (o < n) i[o] = e[o]; else {
                                var s = i[o - 1];
                                o % n ? 6 < n && o % n == 4 && (s = y[s >>> 24] << 24 | y[s >>> 16 & 255] << 16 | y[s >>> 8 & 255] << 8 | y[255 & s]) : (s = y[(s = s << 8 | s >>> 24) >>> 24] << 24 | y[s >>> 16 & 255] << 16 | y[s >>> 8 & 255] << 8 | y[255 & s], s ^= D[o / n | 0] << 24), i[o] = i[o - n] ^ s;
                            }
                            for (var a = this["$_JDs"] = [], _ = 0; _ < r; _++) {
                                o = r - _;
                                if (_ % 4) s = i[o]; else s = i[o - 4];
                                a[_] = _ < 4 || o <= 4 ? s : S[y[s >>> 24]] ^ T[y[s >>> 16 & 255]] ^ k[y[s >>> 8 & 255]] ^ A[y[255 & s]];
                            }
                        }
                    },
                    "encryptBlock": function (t, e) {
                        this["$_JEk"](t, e, this["$_JCC"], b, x, E, C, y);
                    },
                    "$_JEk": function (t, e, n, r, i, o, s, a) {
                        for (var _ = this["$_JAO"], c = t[e] ^ n[0], u = t[e + 1] ^ n[1], l = t[e + 2] ^ n[2], h = t[e + 3] ^ n[3], f = 4, d = 1; d < _; d++) {
                            var p = r[c >>> 24] ^ i[u >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & h] ^ n[f++],
                                g = r[u >>> 24] ^ i[l >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & c] ^ n[f++],
                                v = r[l >>> 24] ^ i[h >>> 16 & 255] ^ o[c >>> 8 & 255] ^ s[255 & u] ^ n[f++],
                                m = r[h >>> 24] ^ i[c >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & l] ^ n[f++];
                            c = p, u = g, l = v, h = m;
                        }
                        p = (a[c >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & h]) ^ n[f++], g = (a[u >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & c]) ^ n[f++], v = (a[l >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & u]) ^ n[f++], m = (a[h >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & l]) ^ n[f++];
                        t[e] = p, t[e + 1] = g, t[e + 2] = v, t[e + 3] = m;
                    },
                    "keySize": 8
                });
            return e["AES"] = g["$_IEi"](M), e["AES"];
        }();
        window._V = V;
        se["jscrambler"] = "End";
        var G = function (t) {
            var s = function (t) {
                    return "function" == typeof t;
                },
                a = function (t) {
                    t();
                };

            function r() {
                this["$_JFa"] = this["$_JGw"] = null;
            }

            var _ = function (e, t) {
                if (e === t) e["$_JHo"](new TypeError()); else if (t instanceof u) t["then"](function (t) {
                    _(e, t);
                }, function (t) {
                    e["$_JHo"](t);
                }); else if (s(t) || function (t) {
                    return "object" == typeof t && null !== t;
                }(t)) {
                    var n;
                    try {
                        n = t["then"];
                    } catch (i) {
                        return u["$_JIZ"](i), void e["$_JHo"](i);
                    }
                    var r = !1;
                    if (s(n)) try {
                        n["call"](t, function (t) {
                            r || (r = !0, _(e, t));
                        }, function (t) {
                            r || (r = !0, e["$_JHo"](t));
                        });
                    } catch (i) {
                        if (r) return;
                        r = !0, e["$_JHo"](i);
                    } else e["$_JJe"](t);
                } else e["$_JJe"](t);
            };

            function u(t) {
                var e = this;
                if (e["$_BAAO"] = e["PENDING"], e["$_BABH"] = new r(), e["$_BACc"] = new r(), s(t)) try {
                    t(function (t) {
                        e["$_JJe"](t);
                    }, function (t) {
                        e["$_JHo"](t);
                    });
                } catch (n) {
                    u["$_JIZ"](n);
                }
            }

            var e = !(r["prototype"] = {
                "enqueue": function (t) {
                    var e = this,
                        n = {
                            "ele": t,
                            "next": null
                        };
                    null === e["$_JFa"] ? e["$_JFa"] = this["$_JGw"] = n : (e["$_JGw"]["next"] = n, e["$_JGw"] = e["$_JGw"]["next"]);
                },
                "dequeue": function () {
                    if (null === this["$_JFa"]) throw new Error("queue is empty");
                    var t = this["$_JFa"]["ele"];
                    return this["$_JFa"] = this["$_JFa"]["next"], t;
                },
                "isEmpty": function () {
                    return null === this["$_JFa"];
                },
                "clear": function () {
                    this["$_JFa"] = this["$_BADD"] = null;
                },
                "each": function (t) {
                    this["isEmpty"]() || (t(this["dequeue"]()), this["each"](t));
                }
            });
            return u["debug"] = function () {
                e = !0;
            }, u["$_JIZ"] = function (t) {
                n(t, !0), e && "undefined" != typeof console && console["error"](t);
            }, u["prototype"] = {
                "PENDING": 0,
                "RESOLVED": 1,
                "REJECTED": -1,
                "$_JJe": function (t) {
                    var e = this;
                    e["$_BAAO"] === e["PENDING"] && (e["$_BAAO"] = e["RESOLVED"], e["$_BAED"] = t, e["$_BAFW"]());
                },
                "$_JHo": function (t) {
                    var e = this;
                    e["$_BAAO"] === e["PENDING"] && (e["$_BAAO"] = e["REJECTED"], e["$_BAGv"] = t, e["$_BAFW"]());
                },
                "$_BAFW": function () {
                    var t,
                        e,
                        n = this,
                        r = n["$_BAAO"];
                    r === n["RESOLVED"] ? (t = n["$_BABH"], n["$_BACc"]["clear"](), e = n["$_BAED"]) : r === n["REJECTED"] && (t = n["$_BACc"], n["$_BABH"]["clear"](), e = n["$_BAGv"]), t["each"](function (t) {
                        a(function () {
                            t(r, e);
                        });
                    });
                },
                "$_BAHu": function (n, r, i) {
                    var o = this;
                    a(function () {
                        if (s(r)) {
                            var t;
                            try {
                                t = r(i);
                            } catch (e) {
                                return u["$_JIZ"](e), void o["$_JHo"](e);
                            }
                            _(o, t);
                        } else n === o["RESOLVED"] ? o["$_JJe"](i) : n === o["REJECTED"] && o["$_JHo"](i);
                    });
                },
                "then": function (n, r) {
                    var t = this,
                        i = new u();
                    return t["$_BABH"]["enqueue"](function (t, e) {
                        i["$_BAHu"](t, n, e);
                    }), t["$_BACc"]["enqueue"](function (t, e) {
                        i["$_BAHu"](t, r, e);
                    }), t["$_BAAO"] === t["RESOLVED"] ? t["$_BAFW"]() : t["$_BAAO"] === t["REJECTED"] && t["$_BAFW"](), i;
                }
            }, u["all"] = function (c) {
                return new u(function (r, i) {
                    var o = c["length"],
                        s = 0,
                        a = !1,
                        _ = [];

                    function n(t, e, n) {
                        a || (null !== t && (a = !0, i(t)), _[n] = e, (s += 1) === o && (a = !0, r(_)));
                    }

                    for (var t = 0; t < o; t += 1) !function (e) {
                        var t = c[e];
                        t instanceof u || (t = new u(t)), t["then"](function (t) {
                            n(null, t, e);
                        }, function (t) {
                            n(t || !0);
                        });
                    }(t);
                });
            }, u["race"] = function (_) {
                return new u(function (n, r) {
                    var t,
                        i = _["length"],
                        o = !1,
                        s = 0;

                    function e(t, e) {
                        o || (null == t ? (o = !0, n(e)) : i <= (s += 1) && (o = !0, r(t)));
                    }

                    for (var a = 0; a < i; a += 1) t = void 0, (t = _[a]) instanceof u || (t = new u(t)), t["then"](function (t) {
                        e(null, t);
                    }, function (t) {
                        e(t || !0);
                    });
                });
            }, u["step"] = function (n) {
                var r = n["length"],
                    i = new u(),
                    o = function (e, t) {
                        if (r <= e) return i["$_JJe"](t);
                        new u(n[e])["then"](function (t) {
                            o(e + 1, t);
                        }, function (t) {
                            i["$_JHo"](t);
                        });
                    };
                return new u(n[0])["then"](function (t) {
                    o(1, t);
                }, function (t) {
                    i["$_JHo"](t);
                }), i;
            }, u["prototype"]["$_DGp"] = function (t, e) {
                return this["then"](t, e);
            }, u;
        }();

        function J(t) {
            this["$_BAIj"] = t, this["$_BAJe"] = {};
        }

        function Y(t, e) {
            return t["type"] || (t["type"] = "slide"), new Y[t["type"]](t, e);
        }

        function W(t) {
            this["$_HCb"] = [t];
        }

        function Z(t) {
            this["$_BBAV"] = t;
        }

        G["debug"](), J["prototype"] = {
            "$_GBZ": function (t, e) {
                return this["$_BAJe"][t] ? this["$_BAJe"][t]["push"](e) : this["$_BAJe"][t] = [e], this;
            },
            "$_BBBp": function (t, e) {
                var n = this,
                    r = n["$_BAJe"][t];
                if (r) {
                    for (var i = 0, o = r["length"]; i < o; i += 1) try {
                        r[i](e);
                    } catch (a) {
                        var s = {
                            "error": a,
                            "type": t
                        };
                        return z($("user_callback", n["$_BAIj"], s));
                    }
                    return n;
                }
            },
            "$_BBCE": function () {
                this["$_BAJe"] = {};
            }
        }, Y["type"] = "shell", Y["noConflict"] = function (window, t) {
            window["Geetest"] ? window["Geetest"]["type"] === Y["type"] ? window["Geetest"][t["type"]] = t : (Y[t["type"]] = t, Y[window["Geetest"]["type"]] = window["Geetest"], window["Geetest"] = Y) : (Y[t["type"]] = t, window["Geetest"] = Y);
        }, W["prototype"] = {
            "$_BBDP": function (t) {
                return this["$_HCb"]["push"](t), this;
            },
            "$_FD_": function (xxxx) {
                function n(t) {
                    var e = "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqr",
                        n = e["length"],
                        r = "",
                        i = Math["abs"](t),
                        o = parseInt(i / n);
                    n <= o && (o = n - 1), o && (r = e["charAt"](o));
                    var s = "";
                    return t < 0 && (s += "!"), r && (s += "$"), s + r + e["charAt"](i %= n);
                }

                var t = function (t) {
                        for (var e, n, r, i = [], o = 0, s = 0, a = t["length"] - 1; s < a; s++) e = Math["round"](t[s + 1][0] - t[s][0]), n = Math["round"](t[s + 1][1] - t[s][1]), r = Math["round"](t[s + 1][2] - t[s][2]), 0 == e && 0 == n && 0 == r || (0 == e && 0 == n ? o += r : (i["push"]([e, n, r + o]), o = 0));
                        return 0 !== o && i["push"]([e, n, o]), i;
                    }(xxxx),
                    r = [],
                    i = [],
                    o = [];
                return new ct(t)["$_CAE"](function (t) {
                    var e = function (t) {
                        for (var e = [[1, 0], [2, 0], [1, -1], [1, 1], [0, 1], [0, -1], [3, 0], [2, -1], [2, 1]], n = 0, r = e["length"]; n < r; n++) if (t[0] == e[n][0] && t[1] == e[n][1]) return "stuvwxyz~"[n];
                        return 0;
                    }(t);
                    e ? i["push"](e) : (r["push"](n(t[0])), i["push"](n(t[1]))), o["push"](n(t[2]));
                }), r["join"]("") + "!!" + i["join"]("") + "!!" + o["join"]("");
            },
            "$_BBED": function (t, e, n) {
                if (!e || !n) return t;
                var r,
                    i = 0,
                    o = t,
                    s = e[0],
                    a = e[2],
                    _ = e[4];
                while (r = n["substr"](i, 2)) {
                    i += 2;
                    var c = parseInt(r, 16),
                        u = String["fromCharCode"](c),
                        l = (s * c * c + a * c + _) % t["length"];
                    o = o["substr"](0, l) + u + o["substr"](l);
                }
                return o;
            },
            "$_BBFS": function (t, e, n) {
                if (!e || !n || 0 === t) return t;
                return t + (e[1] * n * n + e[3] * n + e[5]) % 50;
            }
        },
            Z["prototype"] = {
            "$_HAt": function (t) {
                var e = this;
                return e["$_BBGe"] = e["$_BBHU"], e["$_BBHU"] = t, e["$_BBAV"](e["$_BBHU"], e["$_BBGe"]), e;
            },
            "$_HBw": function () {
                return this["$_BBHU"];
            },
            "$_BBIT": function (t) {
                for (var e = ct["$_BBJN"](t) ? t : [t], n = 0, r = e["length"]; n < r; n += 1) if (e[n] === this["$_HBw"]()) return !0;
                return !1;
            }
        };
        window.gettrack = W["prototype"]['$_FD_'],
            window.getfinal = W["prototype"]['$_BBED']
        var rt = function () {
            function t() {
                return (65536 * (1 + Math["random"]()) | 0)["toString"](16)["substring"](1);
            }

            return function () {
                return t() + t() + t() + t();
            };
        }();

        function ct(t) {
            this["$_BCAO"] = t || [];
        }

        function ut(t) {
            this["$_BCBk"] = t;
        }

        function lt(t) {
            this["$_CGI"] = "string" == typeof t ? h["createElement"](t) : t;
        }

        function ft(t, e) {
            this["$_DCD"] = e, this["$_CGI"] = t;
        }

        ct["prototype"] = {
            "$_HBw": function (t) {
                return this["$_BCAO"][t];
            },
            "$_BCCz": function () {
                return this["$_BCAO"]["length"];
            },
            "$_BJS": function (t, e) {
                return new ct(Q(e) ? this["$_BCAO"]["slice"](t, e) : this["$_BCAO"]["slice"](t));
            },
            "$_BCDX": function (t) {
                return this["$_BCAO"]["push"](t), this;
            },
            "$_BCEj": function (t, e) {
                return this["$_BCAO"]["splice"](t, e || 1);
            },
            "$_CBG": function (t) {
                return this["$_BCAO"]["join"](t);
            },
            "$_BCFU": function (t) {
                return new ct(this["$_BCAO"]["concat"](t));
            },
            "$_CAE": function (t) {
                var e = this["$_BCAO"];
                if (e["map"]) return new ct(e["map"](t));
                for (var n = [], r = 0, i = e["length"]; r < i; r += 1) n[r] = t(e[r], r, this);
                return new ct(n);
            },
            "$_BCGc": function (t) {
                var e = this["$_BCAO"];
                if (e["filter"]) return new ct(e["filter"](t));
                for (var n = [], r = 0, i = e["length"]; r < i; r += 1) t(e[r], r, this) && n["push"](e[r]);
                return new ct(n);
            },
            "$_BCHs": function (t) {
                var e = this["$_BCAO"];
                if (e["indexOf"]) return e["indexOf"](t);
                for (var n = 0, r = e["length"]; n < r; n += 1) if (e[n] === t) return n;
                return -1;
            },
            "$_BCIE": function (t) {
                var e = this["$_BCAO"];
                if (!e["forEach"]) for (var n = arguments[1], r = 0; r < e["length"]; r++) r in e && t["call"](n, e[r], r, this);
                return e["forEach"](t);
            }
        }, ct["$_BBJN"] = function (t) {
            return Array["isArray"] ? Array["isArray"](t) : "[object Array]" === Object["prototype"]["toString"]["call"](t);
        }, ut["prototype"] = {
            "$_CEv": function (t) {
                var e = this["$_BCBk"];
                for (var n in e) e["hasOwnProperty"](n) && t(n, e[n]);
                return this;
            },
            "$_BCJD": function () {
                var t = this["$_BCBk"];
                for (var e in t) if (t["hasOwnProperty"](e)) return !1;
                return !0;
            }
        }, lt["prototype"] = {
            "$_BDAW": {
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
            "$_CHh": function () {
                var t = this["$_CGI"];
                return t["innerHTML"] = "", "input" === t["tagName"]["toLocaleLowerCase"]() && (t["value"] = ""), this;
            },
            "$_BDBE": function () {
                return this["$_sTyyle"]({
                    "display": "none"
                });
            },
            "$_BDCO": function () {
                return this["$_sTyyle"]({
                    "display": "block"
                });
            },
            "$_BDDb": function (t) {
                return this["$_sTyyle"]({
                    "opacity": t
                });
            },
            "$_BDEo": function (t) {
                return this["$_CGI"]["getAttribute"](t);
            },
            "$_CCr": function (t) {
                var n = this["$_CGI"];
                return new ut(t)["$_CEv"](function (t, e) {
                    n["setAttribute"](t, e);
                }), this;
            },
            "$_BDFe": function (t) {
                var e = this["$_CGI"];
                return new ct(t)["$_CAE"](function (t) {
                    e["removeAttribute"](t);
                }), this;
            },
            "$_CDP": function (t) {
                var n = this["$_CGI"];
                return new ut(t)["$_CEv"](function (t, e) {
                    n[t] = e;
                }), this;
            },
            "$_sTyyle": function (t) {
                var n = this["$_CGI"];
                return new ut(t)["$_CEv"](function (t, e) {
                    n["style"][t] = e;
                }), this;
            },
            "setStyles": function (t) {
                var n = this["$_CGI"];
                return new ut(t)["$_CEv"](function (t, e) {
                    n["style"][t] = e;
                }), this;
            },
            "$_BDGu": function () {
                return new lt(this["$_CGI"]["parentNode"]);
            },
            "$_CIP": function (t) {
                return t["$_CGI"]["appendChild"](this["$_CGI"]), this;
            },
            "$_BDHu": function (t) {
                var e = this["$_CGI"];
                return e["parentNode"]["removeChild"](e), this["$_CIP"](t), this;
            },
            "$_BDIV": function (t) {
                return t["$_CGI"]["parentNode"]["insertBefore"](this["$_CGI"], t["$_CGI"]), this;
            },
            "$_CFG": function (t) {
                return t["$_CIP"](this), this;
            },
            "$_DIO": function () {
                var t = this["$_CGI"],
                    e = t["parentNode"];
                return e && e["removeChild"](t), this;
            },
            "$_BDJX": function (t) {
                var e = this["$_CGI"];
                return -1 === new ct(e["className"] ? e["className"]["split"](" ") : [])["$_BCHs"](R + t) ? this["$_BEAP"](t) : this["$_BEBQ"](t), this;
            },
            "$_BEAP": function (t) {
                var e = this["$_CGI"],
                    n = new ct(e["className"] ? e["className"]["split"](" ") : []);
                return t = R + t, -1 == n["$_BCHs"](t) && (n["$_BCDX"](t), e["className"] = n["$_CBG"](" ")), this;
            },
            "$_BECA": function () {
                return this["$_CGI"]["children"];
            },
            "$_BEDi": function () {
                var t = this["$_CGI"];
                return t && t["style"] && t["style"]["right"] || 0;
            },
            "$_BEBQ": function (t) {
                var e = this["$_CGI"],
                    n = new ct(e["className"]["split"](" "));
                t = R + t;
                var r = n["$_BCHs"](t);
                return -1 < r && (n["$_BCEj"](r), e["className"] = n["$_CBG"](" ")), this;
            },
            "$_BEEy": function (t, e) {
                return this["$_BEBQ"](e)["$_BEAP"](t), this;
            },
            "$_BEFb": function (t, n) {
                function o(t) {
                    n(new ft(r, t));
                }

                var r = this,
                    i = r["$_CGI"],
                    e = r["$_BDAW"][t];
                return new ct(e)["$_CAE"](function (t) {
                    if (h["addEventListener"]) i["addEventListener"](t, o); else if (h["attachEvent"]) i["attachEvent"]("on" + t, o); else {
                        var e = i["on" + t];
                        i["on" + t] = function (t) {
                            n(new ft(r, t)), "function" == typeof e && e["call"](this, t);
                        };
                    }
                }), {
                    "$_BBCE": function () {
                        new ct(e)["$_CAE"](function (t) {
                            h["removeEventListener"] ? i["removeEventListener"](t, o) : h["detachEvent"] ? i["detachEvent"]("on" + t, o) : i["on" + t] = null;
                        });
                    }
                };
            },
            "$_GBZ": function (t, e) {
                var n = this,
                    r = n["$_BEFb"](t, e);
                return n["$_BEGP"] = n["$_BEGP"] || {}, n["$_BEGP"][t] ? n["$_BEGP"][t]["push"](r) : n["$_BEGP"][t] = [r], n;
            },
            "$_GCQ": function (t) {
                var e = this;
                if (e["$_BEGP"]) if (t) {
                    if (e["$_BEGP"][t] && 0 < e["$_BEGP"][t]["length"]) for (var n = e["$_BEGP"][t]["length"] - 1; 0 <= n; n--) e["$_BEGP"][t][n]["$_BBCE"]();
                } else for (var r in e["$_BEGP"]) if (e["$_BEGP"][r] && 0 < e["$_BEGP"][r]["length"]) for (n = e["$_BEGP"][r]["length"] - 1; 0 <= n; n--) e["$_BEGP"][r][n]["$_BBCE"]();
                return e;
            },
            "$_BEHA": function (t) {
                var e = this["$_CGI"]["getBoundingClientRect"]();
                return 1 !== (t = t || 1) && (e["x"] = e["x"] * t, e["y"] = e["y"] * t, e["top"] = e["top"] * t, e["left"] = e["left"] * t, e["right"] = e["right"] * t, e["bottom"] = e["bottom"] * t, e["width"] = e["width"] * t, e["height"] = e["height"] * t), e;
            },
            "$_BEIp": function (t) {
                var e = this["$_BEHA"](),
                    n = h["body"],
                    r = h["documentElement"],
                    i = window["pageYOffset"] || r["scrollTop"] || n["scrollTop"],
                    o = window["pageXOffset"] || r["scrollLeft"] || n["scrollLeft"],
                    s = r["clientTop"] || n["clientTop"] || 0,
                    a = r["clientLeft"] || n["clientLeft"] || 0,
                    _ = e["top"] + i - s,
                    c = e["left"] + o - a;
                return {
                    "top": Math["round"](_),
                    "left": Math["round"](c),
                    "width": e["right"] - e["left"],
                    "height": e["bottom"] - e["top"]
                };
            },
            "$_BEJc": function (t) {
                var e = this["$_CGI"];
                return this["$_CHh"](), e["appendChild"](h["createTextNode"](t)), this;
            },
            "$_BFAA": function (t) {
                return this["$_CGI"]["innerHTML"] = t, this;
            },
            "_style": function (t) {
                var e = this["$_CGI"];
                return h["getElementsByTagName"]("head")[0]["appendChild"](e), e["styleSheet"] ? e["styleSheet"]["cssText"] = t : e["appendChild"](h["createTextNode"](t)), this;
            },
            "$_BFBy": function (t) {
                var e,
                    n,
                    r = this["$_CGI"],
                    i = !((n = h["createElement"]("canvas"))["getContext"] && n["getContext"]("2d"));
                if (t) {
                    if (i) {
                        var o = h["createElement"]("div");
                        o["innerHTML"] = r["outerHTML"], e = new lt(o["childNodes"][0]);
                    } else e = new lt(this["$_CGI"]["cloneNode"](!0));
                    r["id"] = "origin_" + r["id"], e["$_BDFe"](["href"]);
                } else (e = new lt(this["$_CGI"]["cloneNode"](!1)))["$_BEAP"]("sandbox");
                return e;
            },
            "$_BFCj": function () {
                return this["$_CGI"]["click"](), this;
            },
            "$_BFDk": function () {
                return this["$_CGI"]["play"](), this;
            },
            "$_BFE_": function () {
                return this["$_CGI"]["currentTime"] = 0, this["$_CGI"]["play"](), this;
            },
            "$_GFw": function () {
                return this["$_CGI"]["currentTime"] = 0, this["$_CGI"]["pause"](), this;
            },
            "$_BFFn": function () {
                return this["$_CGI"]["value"];
            },
            "$_BFGi": function () {
                return this["$_CGI"]["focus"](), this;
            },
            "$_BFHh": function () {
                var t = this["$_BEHA"]();
                return t["right"] - t["left"];
            },
            "$_BFIS": function (t) {
                var e = this["$_CGI"];
                return window["getComputedStyle"] ? window["getComputedStyle"](e)[t] : e["currentStyle"][t];
            },
            "$_BFJa": function () {
                var t, e, n;
                try {
                    var r = this["$_CGI"],
                        i = r;
                    while (i["parentNode"] != h["body"] && r["offsetTop"] - i["parentNode"]["offsetTop"] < 160) i = i["parentNode"], "hidden" == (e = "overflow", n = void 0, (t = i)["currentStyle"] ? n = t["currentStyle"][e] : window["getComputedStyle"] && (n = window["getComputedStyle"](t, null)["getPropertyValue"](e)), n) && (i["style"]["overflow"] = "visible");
                } catch (o) {
                }
                return this;
            },
            "$_BGAT": function () {
                var t = this["$_CGI"],
                    e = t["offsetLeft"],
                    n = t["offsetParent"];
                while (null !== n) e += n["offsetLeft"], n = n["offsetParent"];
                return e;
            },
            "$_BGBD": function () {
                var t = this["$_CGI"],
                    e = t["offsetTop"],
                    n = t["offsetParent"];
                while (null !== n) e += n["offsetTop"], n = n["offsetParent"];
                return e;
            }
        }, lt["$"] = function (t) {
            var e, n;
            "string" == typeof t ? "#" === t[0] ? e = h["getElementById"](t["slice"](1)) : "querySelector" in h ? e = h["querySelector"](t) : $_Fk(window["jQuery"]) ? e = window["jQuery"](t)[0] : "#" === t["slice"](0, 1) && (e = h["getElementById"](t["slice"](1))) : e = t["length"] ? t[0] : t;
            try {
                n = Node["ELEMENT_NODE"];
            } catch (r) {
                n = 1;
            }
            try {
                if (e["nodeType"] === n) return new lt(e);
            } catch (r) {
                return !1;
            }
        }, ft["prototype"] = {
            "$_BGCr": function () {
                var t = this["$_DCD"];
                if (Q(t["clientX"])) return t["clientX"];
                var e = t["changedTouches"] && t["changedTouches"][0];
                return e ? e["clientX"] : -1;
            },
            "$_BGDO": function () {
                var t = this["$_DCD"];
                if (Q(t["clientY"])) return t["clientY"];
                var e = t["changedTouches"] && t["changedTouches"][0];
                return e ? e["clientY"] : -1;
            },
            "$_BGEx": function () {
                var t = this["$_DCD"];
                return t["cancelable"] && $_Fk(t["preventDefault"]) ? t["preventDefault"]() : t["returnValue"] = !1, this;
            },
            "$_BGFs": function () {
                var t = this["$_DCD"];
                return $_Fk(t["stopPropagation"]) && t["stopPropagation"](), this;
            }
        };
        var dt,
            gt = function () {
                "use strict";
                var u,
                    l,
                    n,
                    h,
                    t = {},
                    e = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

                function r(t) {
                    return t < 10 ? "0" + t : t;
                }

                function i() {
                    return this["valueOf"]();
                }

                function f(t) {
                    return e["lastIndex"] = 0, e["test"](t) ? "\"" + t["replace"](e, function (t) {
                        var e = n[t];
                        return "string" == typeof e ? e : "\\u" + ("0000" + t["charCodeAt"](0)["toString"](16))["slice"](-4);
                    }) + "\"" : "\"" + t + "\"";
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
                }, t["stringify"] = function (t, e, n) {
                    var r;
                    if (l = u = "", "number" == typeof n) for (r = 0; r < n; r += 1) l += " "; else "string" == typeof n && (l = n);
                    if ((h = e) && "function" != typeof e && ("object" != typeof e || "number" != typeof e["length"])) throw new Error("JSON.stringify");
                    return function c(t, e) {
                        var n,
                            r,
                            i,
                            o,
                            s,
                            a = u,
                            _ = e[t];
                        switch (_ && "object" == typeof _ && "function" == typeof _["toJSON"] && (_ = _["toJSON"](t)), "function" == typeof h && (_ = h["call"](e, t, _)), typeof _) {
                            case "string":
                                return f(_);
                            case "number":
                                return isFinite(_) ? String(_) : "null";
                            case "boolean":
                            case "null":
                                return String(_);
                            case "object":
                                if (!_) return "null";
                                if (u += l, s = [], "[object Array]" === Object["prototype"]["toString"]["apply"](_)) {
                                    for (o = _["length"], n = 0; n < o; n += 1) s[n] = c(n, _) || "null";
                                    return i = 0 === s["length"] ? "[]" : u ? "[\n" + u + s["join"](",\n" + u) + "\n" + a + "]" : "[" + s["join"](",") + "]", u = a, i;
                                }
                                if (h && "object" == typeof h) for (o = h["length"], n = 0; n < o; n += 1) "string" == typeof h[n] && (i = c(r = h[n], _)) && s["push"](f(r) + (u ? ": " : ":") + i); else for (r in _) Object["prototype"]["hasOwnProperty"]["call"](_, r) && (i = c(r, _)) && s["push"](f(r) + (u ? ": " : ":") + i);
                                return i = 0 === s["length"] ? "{}" : u ? "{\n" + u + s["join"](",\n" + u) + "\n" + a + "}" : "{" + s["join"](",") + "}", u = a, i;
                        }
                    }("", {
                        "": t
                    });
                }, t;
            }(),
            vt = "px",
            mt = 1,
            wt = (dt = {
                "mouseEvent": !1,
                "touchEvent": !1
            }, function le() {
                !function t() {
                    if (window["addEventListener"]) {
                        function e(t) {
                            dt["mouseEvent"] = !0, h["removeEventListener"]("mousedown", e), h["removeEventListener"]("mousemove", e), h["removeEventListener"]("mouseup", e);
                        }

                        h["addEventListener"]("mousedown", e), h["addEventListener"]("mousemove", e), h["addEventListener"]("mouseup", e);
                    }
                }(), function n() {
                    if (window["addEventListener"]) {
                        function e(t) {
                            dt["touchEvent"] = !0, h["removeEventListener"]("touchstart", e), h["removeEventListener"]("touchmove", e), h["removeEventListener"]("touchend", e);
                        }

                        h["addEventListener"]("touchstart", e), h["addEventListener"]("touchmove", e), h["addEventListener"]("touchend", e);
                    }
                }();
            }(), dt);

        function bt() {
        }

        bt["prototype"] = {
            "$_BGGX": function () {
                return window["performance"] && window["performance"]["timing"] && this["$_BGHj"]() || -1;
            },
            "$_BGHj": function () {
                var t = window["performance"]["timing"];
                return {
                    "a": t["navigationStart"],
                    "b": t["unloadEventStart"],
                    "c": t["unloadEventEnd"],
                    "d": t["redirectStart"],
                    "e": t["redirectEnd"],
                    "f": t["fetchStart"],
                    "g": t["domainLookupStart"],
                    "h": t["domainLookupEnd"],
                    "i": t["connectStart"],
                    "j": t["connectEnd"],
                    "k": t["secureConnectionStart"],
                    "l": t["requestStart"],
                    "m": t["responseStart"],
                    "n": t["responseEnd"],
                    "o": t["domLoading"],
                    "p": t["domInteractive"],
                    "q": t["domContentLoadedEventStart"],
                    "r": t["domContentLoadedEventEnd"],
                    "s": t["domComplete"],
                    "t": t["loadEventStart"],
                    "u": t["loadEventEnd"]
                };
            }
        };
        xt = h["createElement"]("canvas"), Et = xt["getContext"] && xt["getContext"]("2d"), Ct = /msie/i["test"](ht["userAgent"]), w = !Et && Ct, x = /msie 6\.0/i["test"](ht["userAgent"]), /UCBrowser/i["test"](ht["userAgent"]), E = "BackCompat" === h["compatMode"], L = "Network Error";
        var xt,
            Et,
            Ct,
            St,
            Tt,
            kt,
            At,
            Dt,
            Mt,
            Ot,
            Bt = "init",
            jt = "load",
            It = "ready",
            Rt = "success",
            Lt = "fail",
            Nt = "forbidden",
            Pt = "abuse",
            Ht = "error",
            $t = "move",
            Ft = "refresh",
            qt = "status_change",
            zt = "close",
            Xt = "change",
            Ut = function () {
                for (var t, e = "6_11_7_10_4_12_3_1_0_5_2_9_8"["split"]("_"), n = [], r = 0; r < 52; r++) t = 2 * parseInt(e[parseInt(r % 26 / 2)]) + r % 2, parseInt(r / 2) % 2 || (t += r % 2 ? -1 : 1), t += r < 26 ? 26 : 0, n["push"](t);
                return n;
            }(),
            Yt = (St = h["createElement"]("canvas"), Tt = St["getContext"] && St["getContext"]("2d"), kt = /msie (?:9|10)\.0/i["test"](ht["userAgent"]), At = /Trident\/[\d](?=[^\?]+).*rv:11.0/i["test"](ht["userAgent"]), Dt = ht["userAgent"]["indexOf"]("Android"), Mt = -1 !== Dt && parseFloat(ht["userAgent"]["slice"](Dt + 8)) < 4.4, Tt && !kt && !At && !Mt),
            Wt = {
                ".widget": {
                    ".window": {
                        "a.link.absolute": Yt ? {
                            ".slicebg.absolute": {
                                "canvas.bg.absolute": {},
                                ".slice": {}
                            },
                            "canvas.fullbg.fade.absolute": {}
                        } : {
                            ".slicebg.absolute": {
                                ".bg.absolute": {},
                                ".slice": {}
                            },
                            ".fullbg.fade.absolute": {}
                        },
                        ".flashlight.absolute": {},
                        ".loading.absolute": {
                            ".loading_icon": {},
                            ".loading_tip": {}
                        },
                        ".result.enter": {
                            ".result_icon": {},
                            ".result_title": {},
                            ".result_content": {}
                        }
                    },
                    ".panel": {
                        "a.close": {
                            ".close_tip": {}
                        },
                        "a.refresh": {
                            ".refresh_tip": {}
                        },
                        "a.feedback": {
                            ".feedback_tip": {}
                        },
                        "a.logo": {}
                    }
                },
                ".slider": {
                    ".slider_tip": {},
                    ".slider_button": {},
                    ".slider_status": {}
                }
            },
            Zt = {
                ".wrap": {
                    ".widget": {
                        ".window": {
                            "a.link": {
                                ".canvas_img.absolute": {
                                    ".slicebg.absolute": {
                                        "canvas.canvas_bg.absolute": {},
                                        "canvas.canvas_slice.absolute": {}
                                    },
                                    "canvas.canvas_fullbg.fade.absolute": {}
                                },
                                ".div_img.absolute": {
                                    ".slicebg.absolute": {
                                        ".div_bg.absolute": {},
                                        ".div_slice.absolute": {}
                                    },
                                    ".div_fullbg.fade.absolute": {}
                                }
                            },
                            ".refresh": {
                                ".refresh_tip": {}
                            },
                            ".loading.absolute.fade": {
                                ".loading_icon": {},
                                ".loading_tip": {}
                            },
                            ".result.absolute.fade": {
                                ".result_box": {
                                    ".result_icon": {},
                                    ".result_title": {},
                                    ".result_content": {}
                                }
                            }
                        }
                    },
                    ".slider": {
                        ".slider_track": {
                            ".slider_tip.fade": {}
                        },
                        ".slider_button": {}
                    }
                },
                ".panel": {
                    ".small": {
                        "a.close": {
                            ".close_tip": {}
                        },
                        "a.refresh_1": {
                            ".refresh_icon": {},
                            ".refresh_tip": {}
                        },
                        "a.feedback": {
                            ".feedback_icon": {},
                            ".feedback_tip": {}
                        },
                        "a.voice": {
                            ".voice_tip": {}
                        }
                    },
                    "a.copyright": {
                        ".logo": {},
                        ".copyright_tip": {}
                    }
                }
            },
            Qt = {
                ".wrap": {
                    ".header": {
                        ".tips": {
                            ".tip_content": {}
                        }
                    },
                    ".widget": {
                        ".window": {
                            "a.link": {
                                ".canvas_img.absolute": {
                                    ".slicebg.absolute": {
                                        "canvas.canvas_bg.absolute": {},
                                        "canvas.canvas_slice.absolute": {}
                                    },
                                    "canvas.canvas_fullbg.fade.absolute": {}
                                },
                                ".div_img.absolute": {
                                    ".slicebg.absolute": {
                                        ".div_bg.absolute": {},
                                        ".div_slice.absolute": {}
                                    },
                                    ".div_fullbg.fade.absolute": {}
                                }
                            },
                            ".refresh": {
                                ".refresh_tip": {}
                            },
                            ".loading.absolute.fade": {
                                ".loading_icon": {},
                                ".loading_tip": {}
                            },
                            ".result.absolute.fade": {
                                ".result_box": {
                                    ".result_icon": {},
                                    ".result_title": {},
                                    ".result_content": {}
                                }
                            }
                        }
                    },
                    ".slider": {
                        ".slider_track": {
                            ".slider_tip.fade": {},
                            ".progress_left": {},
                            ".progress_right": {}
                        },
                        ".slider_button": {}
                    },
                    "a.close": {
                        ".close_tip": {}
                    },
                    "a.refresh_1": {
                        ".refresh_icon": {},
                        ".refresh_tip": {}
                    },
                    "a.feedback": {
                        ".feedback_icon": {},
                        ".feedback_tip": {}
                    },
                    "a.voice": {
                        ".voice_tip": {}
                    },
                    "a.copyright": {
                        ".logo": {},
                        ".copyright_tip": {}
                    }
                }
            };

        function ee(t) {
            var e = this,
                n = t["$_CGI"];
            n["height"] = n["width"] = 0, e["$_BGIy"] = n["getContext"]("2d"), e["$_BGJv"] = e["$_BHAs"] = e["$_BHBI"] = e["$_BHCU"] = 0, e["$_BHDC"] = n;
        }

        function ne(t, e) {
            var n = this,
                r = new ie(t);
            r["remUnit"] && !isNaN(r["remUnit"]) && (vt = "rem", mt = r["remUnit"]), r["https"] && (r["protocol"] = "https://"), t["debugConfig"] && r["$_BHEE"](t["debugConfig"]), n["$_CJk"] = r, n["$_DAE"] = t, n["$_BHFK"] = new J(n), n["$_BBHU"] = new Z(function (t, e) {
                n["$_BHGU"](t, e);
            }), n["$_BBHU"]["$_HAt"](Bt), n["$_BHHs"] = $_BCN(), n["$_BHIB"] = b ? 3 : 0, n["$_BHJZ"] = b ? "web_mobile" : "web", n["$_CJk"]["$_DHX"] = {
                "$_BCN": n["$_BHIB"]
            };
        }

        function re(t) {
            var e = this,
                n = t["$_CJk"];
            e["$_BBHU"] = t["$_BBHU"], e["$_BAIj"] = t, e["$_CJk"] = n, e["$_DAE"] = t["$_DAE"], e["$_BHFK"] = t["$_BHFK"], e["$_BIAQ"] = $_BGr(e["$_CJk"]["i18n_labels"]), e["$"] = $_HH();
            var r = n["product"],
                i = ".holder." + n["theme"];
            w && (i += ".ie8"), "popup" === r ? e["$_BIBD"] = $_BIE(i + ".popup", $_BHP(Wt), e["$"]) : "float" === r ? e["$_BIBD"] = $_BIE(i + ".float", Wt, e["$"]) : "embed" === r && (e["$_BIBD"] = $_BIE(i + ".embed", Wt, e["$"])), e["$_GAf"]()["$_GBZ"]();
        }

        function ie(t) {
            this["$_GIF"] = $_GM(), this["$_BHEE"]({
                "protocol": g
            })["$_BHEE"](t);
        }

        function oe(t, e, n, r, i) {
            var o = this;
            o["$_BICV"] = r, o["$_BIDF"] = i, o["$_BJS"] = t, e = e["$_CGI"], x ? t["$_sTyyle"]({
                "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"" + e["src"] + "\")"
            }) : t["$_sTyyle"]({
                "backgroundImage": "url(\"" + e["src"] + "\")"
            }), t["$_sTyyle"]({
                "left": $_BDB(o["$_BICV"] / 260),
                "top": $_BDB(o["$_BIDF"]),
                "width": $_BDB(e["width"]),
                "height": $_BDB(e["height"])
            });
        }

        function se(t, e) {
            this["$_BIEp"] = $_GM(), this["$_BIFg"] = !0, P["$_HAt"](this["$_BIEp"], new ne(t, e));
        }

        function ae(t) {
            var e = this,
                n = t["$_CJk"];
            n["mobile"] && "float" === n["product"] && (n["product"] = "embed"), e["$_BBHU"] = t["$_BBHU"], e["$_BAIj"] = t, e["$_CJk"] = n, e["$_DAE"] = t["$_DAE"], e["$_BHFK"] = t["$_BHFK"], e["$_BIAQ"] = $_BGr(e["$_CJk"]["i18n_labels"]), e["$"] = $_HH();
            var r = n["product"],
                i = ".holder.mobile." + n["theme"];
            "popup" === r || "custom" === n["product"] ? (n["template"] && "common" === n["template"] ? e["$_BIBD"] = $_BIE(i + ".popup", $_BHP(Qt), e["$"]) : e["$_BIBD"] = $_BIE(i + ".popup", $_BHP(Zt), e["$"]), n["width"] && e["$"](".popup_box")["$_sTyyle"]({
                "width": n["width"]
            }), n["bg_color"] && e["$"](".popup_ghost")["$_sTyyle"]({
                "backgroundColor": n["bg_color"]
            }), e["$_BIGW"]()) : n["template"] && "common" === n["template"] ? e["$_BIBD"] = $_BIE(i + ".embed", Qt, e["$"]) : e["$_BIBD"] = $_BIE(i + ".embed", Zt, e["$"]), "embed" === n["product"] && e["$_DAE"]["isPC"] && e["$_DAE"]["$"] && (e["$_DAE"]["$"](".panel_ghost")["setStyles"]({
                "backgroundColor": n["bg_color"]
            }), e["$_BIGW"]("embed")), n["is_next"] && e["$"](".result")["$_BEBQ"]("absolute")["$_BEBQ"]("fade"), e["$_BIHE"](), e["$_GAf"]()["$_GBZ"]();
        }

        function $_DCD() {
        }

        function ce(t, e) {
            var n = this;
            n["$_BIIA"] = t(".result_icon"), n["$_BIJq"] = t(".result_title"), n["$_BJAa"] = t(".result_content"), n["$"] = t, n["$_BIAQ"] = e;
        }

        function ue() {
        }

        ee["prototype"] = {
            "$_BJBo": function (t, e) {
                var n = this["$_BHDC"];
                return n["height"] !== e && (n["height"] = e), n["width"] !== t && (n["width"] = t), this;
            },
            "$_BJCJ": function (t, e, n) {
                var r = this;
                return r["$_CHh"](), r["$_BJDg"] = t["$_CGI"], r["$_BJEQ"] = e, r["$_BJFh"] = n, r["$_BHBI"] = t["width"], r["$_BJGV"] = t["height"], r["$_BJHi"](e), r;
            },
            "$_CHh": function () {
                var t = this["$_BGIy"],
                    e = this["$_BHDC"];
                return t["clearRect"](0, 0, e["width"], e["height"]), this;
            },
            "$_BJHi": function (t) {
                var e = this;
                return e["$_BGIy"]["drawImage"](e["$_BJDg"], t + e["$_BJEQ"], e["$_BJFh"]), e;
            },
            "$_BJIL": function (t) {
                return this["$_CHh"]()["$_BJHi"](t);
            }
        }, ne["prototype"] = {
            "$_BHGU": function (t, e) {
                var n = this,
                    r = n["$_BJJo"],
                    i = n["$_BBHU"],
                    o = n["$_BHFK"],
                    s = n["$_CJk"];
                if (t !== e) if (null !== e && r && r["$_CAAb"](t, e), t === Bt) n["$_CABD"] = n["$_GAf"]()["$_DGp"](function (t) {
                    return t["status"] === Ht ? z(F(t, n)) : (s["$_BHEE"]($_BBo(t)), s["debugConfig"] && s["$_BHEE"](s["debugConfig"]), s["gct_path"] && n["$_CACy"]()["$_DGp"](function () {
                    }), s["mobile"] ? n["$_BJJo"] = new ae(n) : n["$_BJJo"] = new re(n), n["$_CADO"](), o["$_BBBp"](Bt), i["$_HAt"](jt), n["$_BJJo"]["$_CAED"]);
                }, function () {
                    return z($("url_get", n));
                }); else if (t === jt) {
                    var a = $_Ih();
                    n["$_DDP"]()["$_DGp"](function (t) {
                        r["$_CAFt"](t), n["$_CAGy"] = $_Ih() - a, i["$_HAt"](It);
                    }, function () {
                        return z($("url_picture", n));
                    });
                } else t === It ? r["$_CAHx"]() : t === $t ? r["$_CAIZ"]() : "lock" === t ? r["$_CAJa"](e) : t === Ft ? (-1 < new ct([It, Nt, Pt, Rt])["$_BCHs"](e) && (o["$_BBBp"](Ft), r["$_CBA_"]()), y(n["$_CBBn"]), n["$_CADO"]()) : t === Rt ? (y(n["$_CBBn"]), r["$_CBCA"](n["$_CBDU"], n["$_CBEg"])["$_DGp"](function () {
                    o["$_BBBp"](Rt, n["$_CBEg"]);
                })) : t === Lt ? (o["$_BBBp"](Lt), r["$_CBFN"]()["$_DGp"](function () {
                    i["$_HAt"](It);
                })) : t === Pt ? (o["$_BBBp"](Pt), r["$_CBGZ"]()["$_DGp"](function () {
                    i["$_HAt"](Ft);
                })) : t === Nt ? (o["$_BBBp"](Nt), r["$_CBHo"]()["$_DGp"](function () {
                    z($("server_forbidden", n));
                })) : t === Ht ? (o["$_BBBp"](Ht, n["$_CBID"]), r && r["$_CBJC"]()) : t === Xt && o["$_BBBp"](Xt, "voice");
            },
            "$_GAf": function () {
                var t = this["$_CJk"];
                return I(t, "/get.php", this["$_DAE"]);
            },
            "$_CACy": function () {
                var t = this["$_CJk"];
                return B(t, "js", t["protocol"], t["static_servers"], t["gct_path"]);
            },
            "$_CADO": function () {
                var t = this,
                    e = t["$_CJk"],
                    n = t["$_BBHU"];
                return e["autoReset"] && (t["$_CBBn"] = v(function () {
                    n["$_HAt"](Ft);
                }, 54e4)), t;
            },
            "$_DBh": function (t) {
                return this["$_CBID"] = t, this["$_BBHU"]["$_HAt"](Ht), this;
            },
            "$_CIP": function (t) {
                var e = this;
                return e["$_CABD"]["$_DGp"](function () {
                    e["$_BJJo"]["$_CIP"](t);
                }), e;
            },
            "$_CCAw": function (t) {
                var e = this;
                return e["$_CABD"]["$_DGp"](function () {
                    e["$_BJJo"]["$_CCAw"](t);
                }), e;
            },
            "$_DDP": function () {
                var r = this["$_CJk"],
                    i = r["protocol"],
                    o = r["static_servers"] || r["staticservers"];
                return this["$_BHHs"]["$_DGp"](function (t) {
                    var n = t ? ".webp" : ".jpg";
                    return G["all"]([new G(function (e) {
                        B(r, "img", i, o, r["fullbg"]["replace"](".jpg", n))["$_DGp"](function (t) {
                            e(t);
                        }, function () {
                            e(!1);
                        });
                    }), B(r, "img", i, o, r["bg"]["replace"](".jpg", n)), B(r, "img", i, o, r["slice"]["replace"](".jpg", n))]);
                });
            },
            "$_CCBN": function (t, e, n) {
                var r = this,
                    i = r["$_CJk"],
                    o = {
                        "lang": i["lang"] || "zh-cn",
                        "userresponse": H(t, i["challenge"]),
                        "passtime": n,
                        "imgload": r["$_CAGy"],
                        "aa": e,
                        "ep": r["$_CCCY"]()
                    };
                try {
                    if (window["_gct"]) {
                        var s = {
                                "lang": o["lang"],
                                "ep": o["ep"]
                            },
                            a = window["_gct"](s);
                        if (a["lang"]) {
                            var _ = function d(t) {
                                    for (var e in t) if ("ep" !== e && "lang" !== e) return e;
                                }(s),
                                c = function p(t, e, n) {
                                    for (var r = new t["gg"]["f"](e, n), i = ["n", "s", "e", "es", "en", "w", "wn", "ws"], o = i["length"] - 2, s = 0; s < n["length"]; s++) {
                                        var a,
                                            _ = Math["abs"](n[s]["charCodeAt"]() - 70)["toString"]()[1];
                                        a = o < _ ? t["gg"][i[1 + o]](r) : t["gg"][i[_]](r);
                                        for (var c = Math["abs"](n[s]["charCodeAt"]() - 70)["toString"]()[0], u = 0; u < c; u++) a["cc"]();
                                    }
                                    return r["random"]["join"]("")["slice"](0, 10);
                                }(a, s, _);
                            s[_] = c;
                        }
                        !function g(t) {
                            if ("function" == typeof Object["assign"]) return Object["assign"]["apply"](Object, arguments);
                            if (null == t) throw new Error("Cannot convert undefined or null to object");
                            t = Object(t);
                            for (var e = 1; e < arguments["length"]; e++) {
                                var n = arguments[e];
                                if (null !== n) for (var r in n) Object["prototype"]["hasOwnProperty"]["call"](n, r) && (t[r] = n[r]);
                            }
                            return t;
                        }(o, s);
                    }
                } catch (v) {
                }
                i["offline"] && (o["x"] = t), o["rp"] = X(i["gt"] + i["challenge"]["slice"](0, 32) + o["passtime"]);
                var u = r["$_CCDm"](),
                    l = V["encrypt"](gt["stringify"](o), r["$_CCEc"]()),
                    h = m["$_FEX"](l),
                    f = {
                        "gt": i["gt"],
                        "challenge": i["challenge"],
                        "lang": o["lang"],
                        "$_BCN": r["$_BHIB"],
                        "client_type": r["$_BHJZ"],
                        "w": h + u
                    };
                I(r["$_CJk"], "/ajax.php", f)["$_DGp"](function (t) {
                    if (t["status"] == Ht) return z(F(t, r, "/ajax.php"));
                    r["$_CCFh"]($_BBo(t));
                }, function () {
                    return z($("url_ajax", r));
                });
            },
            "$_CCFh": function (t) {
                var e = this["$_CJk"],
                    n = Ht,
                    r = t && t["result"],
                    i = t && t["message"];
                if (t) {
                    if ("success" == r || "success" == i) {
                        var o = t["validate"]["split"]("|")[0];
                        this["$_CBEg"] = t["score"], this["$_CBDU"] = {
                            "geetest_challenge": e["challenge"],
                            "geetest_validate": o,
                            "geetest_seccode": o + "|jordan"
                        }, n = Rt;
                    } else "fail" == r || "fail" == i ? n = Lt : "forbidden" == r || "forbidden" == i ? n = Nt : "abuse" != r && "abuse" != i || (n = Pt);
                } else n = Ht;
                this["$_BBHU"]["$_HAt"](n);
            },
            "$_CCGX": function () {
                return this["$_CBDU"];
            },
            "$_BDCO": function () {
                return this["$_BJJo"] && this["$_BJJo"]["$_BDCO"](), this;
            },
            "$_BDBE": function () {
                return this["$_BJJo"] && this["$_BJJo"]["$_BDBE"](), this;
            },
            "$_GBZ": function (e, n) {
                var r = this,
                    i = r["$_CJk"];
                return r["$_BHFK"]["$_GBZ"](e, function (t) {
                    n(t), -1 < new ct([Rt, Lt, Nt, Pt])["$_BCHs"](e) ? (r["$_BHFK"]["$_BBBp"](qt), $_Fk(window["gt_custom_ajax"]) && (i["mobile"] ? window["gt_custom_ajax"](e === Rt ? 1 : 0, !1, e) : window["gt_custom_ajax"](e === Rt ? 1 : 0, r["$"], e))) : e === Ft ? $_Fk(window["gt_custom_refresh"]) && window["gt_custom_refresh"](r["$"]) : e === Ht ? $_Fk(window["gt_custom_error"]) && window["gt_custom_error"](r, r["$"]) : e === Bt && $_Fk(window["onGeetestLoaded"]) && window["onGeetestLoaded"](r);
                }), r;
            },
            "$_CBA_": function () {
                return this["$_BBHU"]["$_HAt"](Ft), this;
            },
            "$_CCHp": function (t) {
                return this["$_CJk"]["mobile"] && this["$_BJJo"]["$_CCHp"](t), this;
            },
            "$_BBCE": function () {
                var t = this;
                t["$_CBBn"] && y(t["$_CBBn"]), t["$_BJJo"] && t["$_BJJo"]["$_BBCE"](), t["$_BHFK"]["$_BBCE"]();
            },
            "$_CCEc": (Ot = rt(), function (t) {
                return !0 === t && (Ot = rt()), Ot;
            }),
            "$_CCDm": function (t) {
                var e = new U()["encrypt"](this["$_CCEc"](t));
                while (!e || 256 !== e["length"]) e = new U()["encrypt"](this["$_CCEc"](!0));
                return e;
            },
            "$_CCCY": function () {
                return {
                    "v": "7.9.2",
                    "$_BIE": wt["touchEvent"],
                    "me": wt["mouseEvent"],
                    "tm": new bt()["$_BGGX"](),
                    "td": this["td"] || -1
                };
            }
        }, re["prototype"] = {
            "$_GAf": function () {
                var t = this["$"],
                    e = this["$_BIAQ"];
                return this["$_CCIl"](), t(".refresh_tip")["$_BEJc"](e["refresh"]), this;
            },
            "$_CCJT": function () {
                var t = this;
                return t["$_CDAj"] && t["$_CDAj"]["$_sTyyle"]({
                    "top": t["$_BIBD"]["$_BGBD"]() - 10 + "px",
                    "left": t["$_BIBD"]["$_BGAT"]() + "px"
                }), t;
            },
            "$_CDBJ": function () {
                var t = this,
                    e = t["$"],
                    n = t["$_BIBD"]["$_BFBy"](!1);
                return e(".widget")["$_BDHu"](n), n["$_CIP"](new lt(d)), (t["$_CDAj"] = n)["$_GBZ"]("enter", function () {
                    t["$_CDCD"](!0);
                })["$_GBZ"]("leave", function () {
                    t["$_CDCD"](!1);
                }), t["$_CCJT"](), t;
            },
            "$_CDDV": function () {
                var t = this,
                    e = t["$_CJk"],
                    n = t["$"];
                t["$_CDE_"] || t["$_CDFX"] ? (t["$_CCJT"](), n(".widget")["$_BDCO"](), v(function () {
                    (t["$_CDE_"] || t["$_CDFX"]) && n(".widget")["$_BEAP"]("show");
                }, e["show_delay"])) : v(function () {
                    t["$_CDE_"] || t["$_CDFX"] || (n(".widget")["$_BEBQ"]("show"), v(function () {
                        n(".widget")["$_BDBE"]();
                    }, 500));
                }, e["hide_delay"]);
            },
            "$_CDCD": function (t) {
                this["$_CDE_"] !== t && (this["$_CDE_"] = t, this["$_CDDV"]());
            },
            "$_CDGL": function (t) {
                this["$_CDFX"] !== t && (this["$_CDFX"] = t, this["$_CDDV"]());
            },
            "$_CDHS": function (t) {
                var e = this;
                v(function () {
                    e["$_CDGL"](!1);
                }, t);
            },
            "$_CDIo": function (t) {
                var e = this;
                return e["$_CDJF"](t, function () {
                    e["$_CDGL"](!0);
                });
            },
            "$_CEAb": function (e, t, n) {
                var r = this,
                    i = r["$"],
                    o = r["$_BIAQ"],
                    s = i(".result");
                return e == Rt ? r["$_CEBC"]["$_CECd"](e, {
                    "sec": (r["$_CEDu"] / 1e3)["toFixed"](1),
                    "score": 100 - r["$_CBEg"]
                }) : r["$_CEBC"]["$_CECd"](e), i(".result")["$_BEEy"](e, r["$_CEEI"] || null), r["$_CEEI"] = e, new G(function (t) {
                    s["$_BEAP"]("showTip"), 35 < o[e]["length"] && i(".result")["$_BEAP"]("multi_line"), v(function () {
                        t();
                    }, n || 1500);
                })["$_DGp"](function () {
                    if (!t) return new G(function (t) {
                        s["$_BEBQ"]("showTip"), 35 < o[e]["length"] && i(".result")["$_BEBQ"]("multi_line"), v(function () {
                            t();
                        }, 200);
                    });
                });
            },
            "$_CEFf": function () {
                var e = (0, this["$"])(".slice")["$_BEAP"]("flicker");
                return new G(function (t) {
                    e["$_BDDb"](0), v(t, 100);
                })["$_DGp"](function () {
                    return new G(function (t) {
                        e["$_BDDb"](1), v(t, 100);
                    });
                })["$_DGp"](function () {
                    return new G(function (t) {
                        e["$_BDDb"](0), v(t, 100);
                    });
                })["$_DGp"](function () {
                    return new G(function (t) {
                        e["$_BDDb"](1), v(t, 200);
                    });
                })["$_DGp"](function () {
                    e["$_BEBQ"]("flicker");
                });
            },
            "$_CEGS": function () {
                var e = this["$"];
                return e(".slice")["$_BEAP"]("animate"), e(".slider_button")["$_BEAP"]("animate"), this["$_CEHE"](this["$_CEIf"]), new G(function (t) {
                    v(function () {
                        e(".slice")["$_BEBQ"]("animate"), e(".slider_button")["$_BEBQ"]("animate"), t();
                    }, 400);
                });
            },
            "$_CEJk": function () {
                var t = this["$"],
                    e = t(".flashlight")["$_BEAP"]("flash")["$_sTyyle"]({
                        "left": "-260px"
                    });
                return new G(function (t) {
                    v(function () {
                        e["$_BEBQ"]("flash")["$_sTyyle"]({
                            "left": "260px"
                        }), t();
                    }, 1500);
                });
            },
            "$_CBCA": function (t, e) {
                var n = this;
                n["$_CBEg"] = e;
                var r = n["$"],
                    i = (n["$_CJk"], n["$_DAE"]);
                return r(".fullbg")["$_BDDb"](1)["$_BDCO"](), n["$_CEJk"](), i && i["hideSuccess"] ? new G(function (t) {
                    t();
                }) : n["$_CEAb"](Rt, null, 350)["$_DGp"](function () {
                    return new G(function (t) {
                        t();
                    });
                });
            },
            "$_CBFN": function () {
                var t = this;
                return t["$_CEAb"](Lt), "float" === t["$_CJk"]["product"] && t["$_CDHS"](1e3), t["$_CEFf"]()["$_DGp"](function () {
                    return t["$_CEGS"]();
                });
            },
            "$_CBJC": function () {
                "float" === this["$_CJk"]["product"] && this["$_CDHS"](800), this["$_CFAP"]();
            },
            "$_CBGZ": function () {
                var t = this;
                return t["$_CFBX"]()["$_DGp"](function () {
                    "float" === t["$_CJk"]["product"] && t["$_CDHS"](1e3);
                });
            },
            "$_CBHo": function () {
                var t = this;
                return t["$_CFCk"]()["$_DGp"](function () {
                    "float" === t["$_CJk"]["product"] && t["$_CDHS"](1e3);
                });
            },
            "$_CAFt": function (t) {
                var e = this,
                    n = e["$"],
                    r = e["$_CJk"];
                E && n(".widget")["$_sTyyle"]({
                    "width": "290px"
                }), n(".window")["$_sTyyle"]({
                    "height": r["height"] + 2 + "px"
                }), n(".loading")["$_sTyyle"]({
                    "paddingTop": 8 * (r["height"] - e["$_CFDA"]) / 44 + "%"
                });
                var i = t[0],
                    o = t[1],
                    s = t[2];
                if (Yt) try {
                    i && $_BEB(i, n(".fullbg"), r["height"]), $_BEB(o, n(".bg"), r["height"]);
                } catch (a) {
                    i && $_BFI(i, n(".fullbg"), r["height"]), $_BFI(o, n(".bg"), r["height"]);
                } else i && $_BFI(i, n(".fullbg"), r["height"]), $_BFI(o, n(".bg"), r["height"]);
                return e["$_BJS"] = new oe(n(".slice"), s, r["height"], r["xpos"], r["ypos"]), e;
            },
            "$_CAHx": function () {
                var t = this["$"];
                this["$_CEHE"](0), t(".loading")["$_BDBE"]();
            },
            "$_CCHp": function () {
                return this["$_CFEF"] = 1, this;
            }
        }, ie["prototype"] = {
            "protocol": "http://",
            "apiserver": "api.geetest.com",
            "staticservers": ["static.geetest.com", "static.geevisit.com"],
            "product": "embed",
            "lang": "zh-cn",
            "bg": "",
            "fullbg": "",
            "slice": "",
            "xpos": 0,
            "ypos": 0,
            "height": 116,
            "width": $_BDB(300),
            "type": "slide",
            "sandbox": !1,
            "autoReset": !0,
            "challenge": "",
            "gt": "",
            "https": !1,
            "logo": !0,
            "mobile": !1,
            "theme": "ant",
            "theme_version": "1.2.6",
            "version": "7.9.2",
            "feedback": "http://www.geetest.com/contact",
            "homepage": "https://www.geetest.com/first_page",
            "show_delay": 250,
            "hide_delay": 800,
            "$_BHEE": function (t) {
                var n = this;
                return new ut(t)["$_CEv"](function (t, e) {
                    n[t] = e;
                }), n;
            }
        }, oe["prototype"] = {
            "$_BJIL": function (t) {
                if ("webkitTransform" in h["body"]["style"] || "transform" in h["body"]["style"]) {
                    var e = "translate(" + $_BDB(t - this["$_BICV"]) + ", 0px)";
                    this["$_BJS"]["$_sTyyle"]({
                        "transform": e,
                        "webkitTransform": e
                    });
                } else this["$_BJS"]["$_sTyyle"]({
                    "left": $_BDB(t)
                });
            }
        }, se["type"] = "slide3", se["prototype"] = {
            "appendTo": function (t) {
                return this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_CIP"](t), this;
            },
            "bindOn": function (t) {
                return this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_CCAw"](t), this;
            },
            "refresh": function () {
                return this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_CBA_"](), this;
            },
            "show": function () {
                return this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_BDCO"](), this;
            },
            "hide": function () {
                return this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_BDBE"](), this;
            },
            "getValidate": function () {
                return !!this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_CCGX"]();
            },
            "onChangeCaptcha": function (t) {
                this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_GBZ"](Xt, t);
            },
            "onStatusChange": function (t) {
                this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_GBZ"](qt, t);
            },
            "onReady": function (t) {
                return this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_GBZ"](Bt, t), this;
            },
            "onRefresh": function (t) {
                return this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_GBZ"](Ft, t), this;
            },
            "onSuccess": function (t) {
                return this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_GBZ"](Rt, t), this;
            },
            "onFail": function (t) {
                return this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_GBZ"](Lt, t), this;
            },
            "onError": function (t) {
                return this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_GBZ"](Ht, t), this;
            },
            "onForbidden": function (t) {
                return this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_GBZ"](Nt, t), this;
            },
            "onAbuse": function (t) {
                return this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_GBZ"](Pt, t), this;
            },
            "onClose": function (t) {
                return this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_GBZ"](zt, t), this;
            },
            "zoom": function (t) {
                return this["$_BIFg"] && P["$_HBw"](this["$_BIEp"])["$_CCHp"](t), this;
            },
            "destroy": function () {
                this["$_BIFg"] && (this["$_BIFg"] = !1, P["$_HBw"](this["$_BIEp"])["$_BBCE"](), P["$_HAt"](this["$_BIEp"], null));
            }
        }, ae["prototype"] = {
            "$_BIHE": function () {
                for (var t = this["$"], e = [".canvas_bg", ".canvas_fullbg", ".canvas_img", ".canvas_slice"], n = 0; n < e["length"]; n++) try {
                    var r = t(e[n]);
                    this["$_CFFs"](r);
                } catch (i) {
                }
            },
            "$_CFFs": function (t) {
                var e = this,
                    n = t["$_CGI"]["toDataURL"];
                t["$_CGI"]["toDataURL"] = function () {
                    return e["$_BAIj"]["td"] = 1, n["call"](this);
                }, t["$_CGI"]["toDataURL"]["toString"] = function () {
                    return "function toDataURL() { [native code] }";
                }, t["$_CGI"]["toDataURL"]["toString"]["toString"] = function () {
                    return "function toString() { [native code] }";
                };
                var r = t["$_CGI"]["toBlob"];
                t["$_CGI"]["toBlob"] = function () {
                    return e["$_BAIj"]["td"] = 1, r["call"](this);
                }, t["$_CGI"]["toBlob"]["toString"] = function () {
                    return "function toBlob() { [native code] }";
                };
            },
            "$_BIGW": function (t) {
                var e = this["$_CJk"],
                    n = this["$"],
                    r = this["$_DAE"];
                if (e["area"]) {
                    var i = lt["$"](e["area"]);
                    if (i) {
                        var o = i["$_BEIp"](),
                            s = t ? r["$"](".panel") : n(".holder");
                        s && s["$_sTyyle"]({
                            "position": "absolute",
                            "left": $_BDB(o["left"]),
                            "top": $_BDB(o["top"]),
                            "width": $_BDB(o["width"]),
                            "height": $_BDB(o["height"])
                        });
                    }
                }
            },
            "$_GAf": function () {
                var n = this,
                    t = n["$_CJk"],
                    e = n["$"],
                    r = n["$_BIAQ"];
                t["template"] && "common" === t["template"] && e(".tip_content")["$_BEJc"](r["tip"]), n["$_CCIl"](), t["feedback"] || t["logo"] || t["is_next"] || e(".panel")["$_BDBE"]();
                var i = -20,
                    o = setInterval(function () {
                        !function e(t) {
                            n["$_CEHE"](t, !0), 0 === t && clearInterval(o);
                        }(i), i++;
                    }, 15);
                return n;
            },
            "$_CDIo": function (t, e) {
                var n = this,
                    r = n["$"],
                    i = r(".window")["$_BEHA"]();
                return n["$_CFEF"] = (i["right"] - i["left"]) / n["$_CFGU"], n["$_CDJF"](t, e, function () {
                    r(".refresh")["$_BDBE"](), n["$_BGJv"] = n["$_CEIf"], n["$_CFHP"]["$_GJB"]();
                });
            },
            "$_CEAb": function (e, t, n) {
                var r = this,
                    i = r["$"],
                    o = i(".result"),
                    s = r["$_BIAQ"];
                return e == Rt ? r["$_CEBC"]["$_CECd"](e, {
                    "sec": (r["$_CEDu"] / 1e3)["toFixed"](1),
                    "score": 100 - r["$_CBEg"]
                }) : r["$_CEBC"]["$_CECd"](e), o["$_BEEy"](e, r["$_CEEI"] || null), i(".result_icon")["$_BEEy"](e, r["$_CEEI"] || null), r["$_CEEI"] = e, r["$_CJk"]["is_next"] ? new G(function (t) {
                    o["$_BEAP"]("showTip"), 35 < s[e]["length"] && i(".result")["$_BEAP"]("multi_line"), v(function () {
                        t();
                    }, n || 1500);
                })["$_DGp"](function () {
                    if (!t) return new G(function (t) {
                        o["$_BEBQ"]("showTip"), 35 < s[e]["length"] && i(".result")["$_BEBQ"]("multi_line"), v(function () {
                            t();
                        }, 200);
                    });
                }) : new G(function (t) {
                    o["$_sTyyle"]({
                        "opacity": "1",
                        "zIndex": "0"
                    }), v(function () {
                        t();
                    }, n || 1500);
                })["$_DGp"](function () {
                    if (!t) return new G(function (t) {
                        o["$_sTyyle"]({
                            "opacity": "0"
                        }), v(function () {
                            t(), o["$_sTyyle"]({
                                "zIndex": "-1"
                            });
                        }, 200);
                    });
                });
            },
            "$_CEGS": function () {
                var e = this["$"];
                return e(".slider_button")["$_BEAP"]("animate"), e(".progress_left") && e(".progress_left")["$_BEAP"]("animate_process"), e(".slice")["$_BDBE"](), this["$_CEHE"](this["$_CEIf"]), new G(function (t) {
                    v(function () {
                        e(".slider_button")["$_BEBQ"]("animate"), e(".progress_left") && e(".progress_left")["$_BEBQ"]("animate_process"), e(".slice")["$_BDCO"](), t();
                    }, 400);
                });
            },
            "$_CAHx": function () {
                var t = this["$"];
                return t(".fullbg")["$_BDBE"](), t(".loading")["$_BDDb"](0), v(function () {
                    t(".loading")["$_BDBE"]();
                }, 500), t(".refresh")["$_BDCO"](), this;
            },
            "$_CBCA": function (t, e) {
                this["$_CBEg"] = e;
                var n = this["$"],
                    r = this["$_DAE"];
                return n(".fullbg")["$_BDCO"]()["$_BDDb"](1), n(".refresh")["$_BDCO"](), n(".canvas_img")["$_BEAP"]("flash"), n(".div_img")["$_BEAP"]("flash"), r && r["hideSuccess"] ? new G(function (t) {
                    t();
                }) : this["$_CEAb"](Rt, null, 350)["$_DGp"](function () {
                    return new G(function (t) {
                        t();
                    });
                });
            },
            "$_CBFN": function () {
                var t = this,
                    e = t["$"];
                t["$_CEAb"](Lt), e(".slice")["$_BDDb"](1);
                var n = t["$_CJk"];
                return "popup" !== n["product"] && "custom" !== n["product"] || (e(".popup_box")["$_BEAP"]("shake"), v(function () {
                    e(".popup_box")["$_BEBQ"]("shake");
                }, 400)), new G(function (t) {
                    v(function () {
                        t();
                    }, 1500);
                })["$_DGp"](function () {
                    return t["$_CEGS"]();
                });
            },
            "$_CBJC": function () {
                return this["$_CFAP"]();
            },
            "$_CBGZ": function () {
                return this["$_CFBX"]();
            },
            "$_CBHo": function () {
                return this["$_CFCk"]();
            },
            "$_CAFt": function (t) {
                function a() {
                    n(".canvas_img")["$_BDBE"](), n(".div_img")["$_BDCO"](), n(".fullbg", n(".div_fullbg")), n(".bg", n(".div_bg")), n(".slice", n(".div_slice")), i && $_BFI(i, n(".fullbg"), r["height"]), $_BFI(o, n(".bg"), r["height"]), e["$_BJS"] = new oe(n(".slice"), s, r["height"], r["xpos"], r["ypos"]), "popup" === r["product"] || "custom" === r["product"] ? n(".popup_box")["$_sTyyle"]({
                        "width": $_BDB(278)
                    }) : n(".holder")["$_sTyyle"]({
                        "width": $_BDB(278)
                    }), n(".div_bg")["$_sTyyle"]({
                        "height": $_BDB(r["height"])
                    }), n(".div_fullbg")["$_sTyyle"]({
                        "height": $_BDB(r["height"])
                    });
                }

                var e = this,
                    n = e["$"],
                    r = e["$_CJk"];
                n(".window")["$_sTyyle"]({
                    "paddingBottom": Number(r["height"] / e["$_CFGU"] * 100)["toFixed"](2) + "%"
                }), n(".loading")["$_sTyyle"]({
                    "paddingTop": 10 * (r["height"] - e["$_CFDA"]) / 44 + "%"
                }), n(".result_box")["$_sTyyle"]({
                    "paddingTop": 10 * (r["height"] - e["$_CFDA"]) / 44 + "%"
                });
                var i = t[0],
                    o = t[1],
                    s = t[2];
                if (Yt) try {
                    n(".canvas_img")["$_BDCO"](), n(".div_img")["$_BDBE"](), n(".fullbg", n(".canvas_fullbg")), n(".bg", n(".canvas_bg")), n(".slice", n(".canvas_slice")), i && $_BEB(i, n(".fullbg"), r["height"]), $_BEB(o, n(".bg"), r["height"]), e["$_BJS"] = new ee(n(".slice"))["$_BJBo"](260, r["height"])["$_BJCJ"](s, r["xpos"], r["ypos"]);
                } catch (_) {
                    a();
                } else a();
                return "embed" === r["product"] && e["$_CFIW"](), e;
            },
            "$_CCHp": function (t) {
                var e = this["$"],
                    n = this["$_CJk"],
                    r = this["$_CFJM"] = t;
                return Q(t) && (r = $_BDB(t)), "popup" === n["product"] || "custom" === n["product"] || e(".holder")["$_sTyyle"]({
                    "width": r
                }), this;
            }
        }, $_DCD["$_HBw"] = function (t, e, n) {
            for (var r = parseInt(6 * Math["random"]()), i = parseInt(300 * Math["random"]()), o = X(r + "")["slice"](0, 9), s = X(i + "")["slice"](10, 19), a = "", _ = 0; _ < 9; _++) a += _ % 2 == 0 ? o["charAt"](_) : s["charAt"](_);
            var c = a["slice"](0, 4),
                u = function (t) {
                    if (5 == t["length"]) {
                        var e = (parseInt(t, 16) || 0) % 200;
                        return e < 40 && (e = 40), e;
                    }
                }(a["slice"](4)),
                l = function (t) {
                    if (4 == t["length"]) return (parseInt(t, 16) || 0) % 70;
                }(c);
            return t["$_CGAI"] = $_GM(), P["$_HAt"](t["$_CGAI"], {
                "rand0": r,
                "rand1": i,
                "x_pos": u
            }), new G(function (t) {
                t({
                    "bg": "/pictures/gt/" + o + "/bg/" + s + ".jpg",
                    "fullbg": "/pictures/gt/" + o + "/" + o + ".jpg",
                    "slice": "/pictures/gt/" + o + "/slice/" + s + ".png",
                    "type": "slide",
                    "ypos": l,
                    "xpos": 0
                });
            });
        }, $_DCD["$_CGBG"] = function (t, e, n) {
            var r,
                i = P["$_HBw"](t["$_CGAI"]),
                o = n["x"],
                s = i["x_pos"],
                a = i["rand0"],
                _ = i["rand1"];
            return r = s - 3 <= o && o <= s + 3 ? {
                "success": !0,
                "message": "success",
                "validate": H(o, t["challenge"]) + "_" + H(a, t["challenge"]) + "_" + H(_, t["challenge"]),
                "score": Math["round"](n["passtime"] / 200)
            } : {
                "success": 0,
                "message": "fail"
            }, new G(function (t) {
                t(r);
            });
        }, $_DCD["$_DDP"] = function (t, e, n) {
            return "/get.php" === e || "/refresh.php" === e ? $_DCD["$_HBw"](t, e, n) : "/ajax.php" === e ? $_DCD["$_CGBG"](t, e, n) : void 0;
        }, ce["prototype"] = {
            "$_CECd": function (t, e, n) {
                var r = this["$_BIAQ"][t],
                    i = r;
                return this["$_BIJq"]["$_BEJc"](r["replace"](n, "")), e && new ut(e)["$_CEv"](function (t, e) {
                    i = i["replace"](t, e);
                }), this["$_BJAa"]["$_BEJc"](i), this;
            }
        }, $_BAX(ae["prototype"], ue["prototype"] = {
            "$_CFGU": 260,
            "$_CGCF": 300,
            "$_CFDA": 116,
            "$_CEIf": 0,
            "$_CGDz": 200,
            "$_CGEz": function () {
                var t = this["$_CJk"],
                    e = "/static/" + t["theme"] + "/style" + ("https://" === t["protocol"] ? "_https" : "") + "." + t["theme_version"] + ".css",
                    n = t["debugConfig"];
                return n && n["skin_path"] && (e = e["replace"]("/static", n["skin_path"])), B(t, "css", t["protocol"], t["static_servers"] || t["staticservers"], e);
            },
            "$_CAAb": function (t, e) {
                var n = this["$"];
                this["$_CJk"];
                return n(".slider")["$_BEEy"](t, e || null), this;
            },
            "$_CCIl": function () {
                var t = this,
                    e = t["$_CJk"];
                e["lang"] = e["lang"] || "zh-cn";
                var n = t["$"],
                    r = t["$_BIAQ"],
                    i = parseInt(t["$_CJk"]["width"]);
                return n(".slider_tip")["$_BEJc"](r["slide"]), n(".feedback_tip")["$_BEJc"](r["feedback"]), n(".loading_tip")["$_BEJc"](r["loading"]), n(".refresh")["$_CCr"]({
                    "href": "javascript:;",
                    "aria-label": "刷新验证",
                    "role": "button",
                    "tabIndex": "-1"
                }), "popup" === e["product"] || e["product"], e["feedback"] ? n(".feedback")["$_CCr"]({
                    "target": "_blank",
                    "href": e["feedback"] + "&challenge=" + e["challenge"]
                }) : n(".feedback")["$_BDBE"](), e["is_next"] ? (n(".refresh_tip")["$_BEJc"](r["refresh"]), n(".refresh_1")["$_CCr"]({
                    "href": "javascript:;",
                    "aria-label": "刷新验证",
                    "role": "button",
                    "tabIndex": "-1"
                }), n(".close")["$_CCr"]({
                    "aria-label": "关闭验证",
                    "role": "button",
                    "tabIndex": "-1"
                }), n(".close_tip")["$_BEJc"](r["close"]), i < 257 ? -1 != e["lang"]["toLowerCase"]()["indexOf"]("cn") || "zh" === e["lang"] ? n(".copyright_tip")["$_BEJc"]("极验") : n(".copyright_tip")["$_BEJc"]("Geetest") : n(".copyright_tip")["$_BEJc"](r["logo"]), e["logo"] ? n(".copyright")["$_CCr"]({
                    "target": "_blank",
                    "href": e["homepage"]
                }) : n(".copyright")["$_BDBE"]()) : e["logo"] ? n(".logo")["$_CCr"]({
                    "target": "_blank",
                    "href": e["homepage"]
                }) : n(".logo")["$_BDBE"](), e["hideClose"] && n(".geetest_close")["$_DIO"](), e["hideRefresh"] && n(".geetest_refresh_1")["$_DIO"](), b && (n(".feedback_tip")["$_DIO"](), n(".refresh_tip")["$_DIO"](), n(".close_tip")["$_DIO"]()), e["link"] && n(".link")["$_CCr"]({
                    "target": "_blank",
                    "href": e["link"]
                }), t["$_CEBC"] = new ce(n, r), t["$_CAED"] = t["$_CGEz"](), e["remUnit"] && !isNaN(e["remUnit"]) && t["$_CGFI"](), t["$_CFHP"] = new _(function () {
                    t["$_CEHE"](t["$_BGJv"] || t["$_CEIf"]);
                }), t["$_CFEF"] = 1, t["$_CCHp"](e["width"]), t;
            },
            "$_CGFI": function () {
                var t = function (t) {
                        return t["replace"](/(-?[\d\.]+px)/g, function (t) {
                            var e = t["slice"](0, -2);
                            return $_BDB(e);
                        });
                    }(".geetest_holder.geetest_mobile.geetest_ant{width:278px}.geetest_holder.geetest_mobile.geetest_ant .geetest_widget .geetest_window a.geetest_link .geetest_div_fullbg div,.geetest_holder.geetest_mobile.geetest_ant .geetest_widget .geetest_window a.geetest_link .geetest_div_bg div{width:10px}.geetest_holder.geetest_mobile.geetest_ant .geetest_widget .geetest_window .geetest_flash::after{right:-280px;width:140px;height:400px}@keyframes moveTo-left{0%{right:-280px}100%{right:240px}}@-webkit-keyframes moveTo-left{0%{right:-280px}100%{right:240px}}.geetest_holder.geetest_mobile.geetest_ant .geetest_widget .geetest_window .geetest_loading .geetest_loading_icon{width:34px;height:26px}.geetest_holder.geetest_mobile.geetest_ant .geetest_widget .geetest_window .geetest_loading .geetest_loading_tip{font-size:14px}.geetest_holder.geetest_mobile.geetest_ant .geetest_widget .geetest_window .geetest_result{bottom:-25px;height:24px}.geetest_holder.geetest_mobile.geetest_ant .geetest_widget .geetest_window .geetest_result .geetest_result_content{text-indent:16px;font-size:14px;line-height:24px;height:24px}.geetest_holder.geetest_mobile.geetest_ant .geetest_widget .geetest_window .geetest_result .geetest_right_space{padding-right:16px}.geetest_holder.geetest_mobile.geetest_ant .geetest_widget .geetest_window .geetest_multi_line{height:48px}.geetest_holder.geetest_mobile.geetest_ant .geetest_widget .geetest_window .geetest_multi_line .geetest_result_content{padding-left:16px}.geetest_holder.geetest_mobile.geetest_ant .geetest_widget .geetest_window .geetest_showTip{bottom:0px}.geetest_holder.geetest_mobile.geetest_ant .geetest_slider .geetest_slider_track{height:38px;margin:-19px 0 0 0}.geetest_holder.geetest_mobile.geetest_ant .geetest_slider .geetest_slider_track .geetest_slider_tip{line-height:38px;font-size:14px}.geetest_holder.geetest_mobile.geetest_ant .geetest_slider .geetest_slider_track .geetest_slider_tip.geetest_multi_slide{line-height:18px}.geetest_holder.geetest_mobile.geetest_ant .geetest_panel{border-top:1px solid #EEEEEE}.geetest_holder.geetest_mobile.geetest_ant .geetest_panel .geetest_close_tip,.geetest_holder.geetest_mobile.geetest_ant .geetest_panel .geetest_feedback_tip,.geetest_holder.geetest_mobile.geetest_ant .geetest_panel .geetest_refresh_tip,.geetest_holder.geetest_mobile.geetest_ant .geetest_panel .geetest_voice_tip{top:-32px;left:10px;border-radius:2px;padding:0 4px;height:22px;min-width:50px;line-height:22px}.geetest_holder.geetest_mobile.geetest_ant .geetest_panel .geetest_close_tip:before,.geetest_holder.geetest_mobile.geetest_ant .geetest_panel .geetest_feedback_tip:before,.geetest_holder.geetest_mobile.geetest_ant .geetest_panel .geetest_refresh_tip:before,.geetest_holder.geetest_mobile.geetest_ant .geetest_panel .geetest_voice_tip:before{bottom:-6px;border-width:4px 6px}.geetest_holder.geetest_mobile.geetest_ant .geetest_panel .geetest_copyright .geetest_logo{width:11px;height:11px}.geetest_holder.geetest_mobile.geetest_ant .geetest_panel .geetest_copyright .geetest_copyright_tip{margin:0 0 0 4px;line-height:11px;font-size:12px}@keyframes geetest_shake{25%{margin-left:-6px}75%{margin-left:6px}100%{margin-left:0}}@-webkit-keyframes geetest_shake{25%{margin-left:-6px}75%{margin-left:6px}100%{margin-left:0}}.geetest_holder.geetest_mobile.geetest_ant.geetest_popup .geetest_popup_box{width:278px;min-width:230px;max-width:278px;border:1px solid #d1d1d1;margin-left:-139px;margin-top:-143px}"),
                    e = new lt("style");
                e["type"] = "text/css", e["_style"](t), e["$_CIP"](new lt(p));
            },
            "$_GBZ": function () {
                var a = this,
                    _ = a["$"],
                    c = a["$_CJk"];
                "float" === c["product"] ? _(".holder")["$_GBZ"]("enter", function () {
                    a["$_CDCD"](!0);
                })["$_GBZ"]("leave", function () {
                    a["$_CDCD"](!1);
                }) : "popup" !== c["product"] && "custom" !== c["product"] || (_(".popup_ghost")["$_GBZ"]("click", function () {
                    a["$_CGGP"]();
                }), _(".popup_close")["$_GBZ"]("click", function () {
                    a["$_CGGP"]();
                })), c["is_next"] && (_(".close")["$_GBZ"]("click", function () {
                    "popup" === c["product"] || "custom" === c["product"] ? a["$_CGGP"]() : a["$_BHFK"]["$_BBBp"](zt);
                }), _(".refresh_1")["$_GBZ"]("click", function (t) {
                    a["$_BBHU"]["$_HAt"](Ft), t["$_BGEx"]();
                })), _(".slider_button")["$_GBZ"]("down", function (t) {
                    t["$_BGEx"](), a["$_CDIo"](t, !0), a["$_CGHm"]();
                }), _(".canvas_slice")["$_GBZ"]("down", function (t) {
                    var e = a["$_BJS"]["$_BJEQ"],
                        n = a["$_BJS"]["$_BJFh"],
                        r = e + 60,
                        i = n + 65,
                        o = t["$_BGCr"]() - t["$_CGI"]["$_BEHA"]()["left"],
                        s = t["$_BGDO"]() - t["$_CGI"]["$_BEHA"]()["top"];
                    try {
                        e < o && o < r && n < s && s < i && (a["$_CDIo"](t, !1), a["$_CGHm"](), c["link"] && _(".link")["$_BDFe"](["href", "target"]));
                    } catch (t) {
                    }
                }), _(".div_slice")["$_GBZ"]("down", function (t) {
                    a["$_CDIo"](t, !1), a["$_CGHm"]();
                }), _(".holder")["$_GBZ"]("move", function (t) {
                    a["$_BJIL"](t);
                })["$_GBZ"]("up", function (t) {
                    a["$_CGIS"](t);
                }), S && _(".holder")["$_GBZ"]("cancel", function (t) {
                    a["$_CGIS"](t, !0);
                }), _(".refresh")["$_GBZ"]("click", function (t) {
                    a["$_BBHU"]["$_HAt"](Ft), t["$_BGEx"]();
                });
            },
            "$_CGHm": function () {
                var e = this;
                e["$_CGJD"] = new lt(h), e["$_CHAY"] = new lt(window), e["$_CGJD"]["$_GBZ"]("up", function (t) {
                    e["$_CGIS"](t), e["$_CGJD"]["$_GCQ"]("up");
                }), e["$_CHAY"]["$_GBZ"]("up", function (t) {
                    e["$_CGIS"](t), e["$_CGJD"]["$_GCQ"]("up");
                });
            },
            "$_CIP": function (t) {
                var e = this,
                    n = e["$_CJk"];
                e["$"];
                if (e["$_CHBL"] = lt["$"](t), !e["$_CHBL"]) return z($("api_appendTo", e["$_BAIj"]));
                "popup" === n["product"] || "custom" === n["product"] ? e["$_BIBD"]["$_CIP"](new lt(d)) : e["$_BIBD"]["$_CIP"](e["$_CHBL"]), "float" === n["product"] && (n["sandbox"] ? e["$_CDBJ"]() : e["$_BIBD"]["$_BFJa"]()), "embed" !== n["product"] && e["$_CHCC"](), e["$_CJk"]["show_voice"] && e["$_CHDy"](), e["$_CHEv"] = $_Ih();
            },
            "$_CFIW": function () {
                function o() {
                    var t = n(".wrap")["$_BFHh"]();
                    r === t && 0 !== r || 5 < i ? e["$_CHCC"]() : (i += 1, r = t, v(o, 100));
                }

                var e = this,
                    n = e["$"],
                    r = n(".wrap")["$_BFHh"](),
                    i = 0;
                v(o, 100);
            },
            "$_CHCC": function () {
                var t = this["$_CJk"],
                    e = this["$"];
                e(".slider")["$_BFHh"]() < e(".slider_track")["$_BFHh"]() && e(".slider_tip")["$_BEAP"]("multi_slide");
                -1 < new ct(["ar", "fa", "iw", "ur"])["$_BCHs"](t["lang"] && t["lang"]["split"]("-")[0]) && (e(".wrap")["$_sTyyle"]({
                    "direction": "rtl"
                }), e(".slider_tip")["$_sTyyle"]({
                    "textAlign": "right"
                }), e(".slider_track")["$_sTyyle"]({
                    "width": "70%"
                }), e(".result_content")["$_BEAP"]("right_space"));
            },
            "$_CHDy": function () {
                var e = this,
                    t = e["$"],
                    n = e["$_BIAQ"],
                    r = e["$_BBHU"];
                t(".small")["$_CCr"]({
                    "tabIndex": "-1"
                })["$_BFGi"]()["$_sTyyle"]({
                    "outline": "none"
                }), t(".voice_tip")["$_BEJc"](n["voice"]), t(".close")["$_CCr"]({
                    "tabIndex": "-1",
                    "aria-label": n["close"],
                    "role": "button"
                }), t(".refresh_1")["$_CCr"]({
                    "tabIndex": "-1",
                    "aria-label": n["refresh"],
                    "role": "button"
                }), t(".feedback")["$_CCr"]({
                    "tabIndex": "-1"
                }), t(".voice")["$_CCr"]({
                    "tabIndex": "0",
                    "aria-label": n["voice"],
                    "role": "button"
                })["$_sTyyle"]({
                    "display": "inline-block"
                })["$_BFGi"](), t(".voice")["$_GBZ"]("keydown", function (t) {
                    13 === t["$_DCD"]["keyCode"] && (r["$_HAt"](Xt), e["$_BAIj"]["$_BBCE"]());
                }), t(".voice")["$_GBZ"]("click", function () {
                    r["$_HAt"](Xt), e["$_BAIj"]["$_BBCE"]();
                });
            },
            "$_CCAw": function (t) {
                var e = this;
                if ("popup" !== e["$_CJk"]["product"] || "custom" === e["$_CJk"]["product"]) return e;
                if (e["$_CHFe"] = lt["$"](t), !e["$_CHFe"]) return z($("api_bindOn", e["$_BAIj"]));
                var n = e["$_CHFe"]["$_BFBy"](!0);
                return n["$_BDIV"](e["$_CHFe"]), e["$_CHFe"]["$_BDBE"](), n["$_GBZ"]("click", function (t) {
                    e["$_CHGo"](), t["$_BGEx"]();
                }), e;
            },
            "$_BDCO": function () {
                var t = this;
                return "popup" !== t["$_CJk"]["product"] && "custom" !== t["$_CJk"]["product"] || t["$_CHGo"](), t;
            },
            "$_BDBE": function () {
                var t = this;
                return "popup" !== t["$_CJk"]["product"] && "custom" !== t["$_CJk"]["product"] || t["$_CGGP"](), t;
            },
            "$_CHGo": function () {
                var t = this;
                "custom" === t["$_CJk"]["product"] && t["$_BIGW"](), t["$_BIBD"]["$_BDCO"](), v(function () {
                    t["$_BIBD"]["$_BDDb"](1);
                }, 10);
            },
            "$_CGGP": function () {
                var e = this;
                return e["$_BIBD"]["$_BDDb"](0), new G(function (t) {
                    v(function () {
                        e["$_BIBD"]["$_BDBE"](), e["$_BHFK"]["$_BBBp"](zt), t();
                    }, 0);
                });
            },
            "$_CHHd": function () {
                var t = this["$_BIAQ"];
                return (0, this["$"])(".popup_tip")["$_BEJc"](t["popup_finish"]), new G(function (t) {
                    v(t, 1e3);
                });
            },
            "$_CDJF": function (t, e, n) {
                var r = this,
                    i = r["$_BBHU"];
                if (i["$_HBw"]() === It) {
                    i["$_HAt"]($t), t["$_BGEx"](), r["$_CHIm"] = "pointerdown" == t["type"];
                    var o = r["$"](".slider_button")["$_BEHA"](),
                        s = r["$"](".canvas_slice")["$_BEHA"]();
                    r["$_CHJn"] = $_Ih();
                    var a,
                        _,
                        c = r["$_CFEF"];
                    return r["$_CIAT"] = t["$_BGCr"]() / c, r["$_CIBm"] = t["$_BGDO"]() / c, _ = e ? (a = o["top"], o["left"]) : (a = s["top"] + r["$_BJS"]["$_BJFh"], s["left"]), r["$_CICO"] = new W([Math["round"](_ / c - r["$_CIAT"]), Math["round"](a / c - r["$_CIBm"]), 0])["$_BBDP"]([0, 0, 0]), r["$_BGJv"] = r["$_CEIf"], r["$_CFHP"]["$_GJB"](), r["lastPoint"] = {
                        "x": 0,
                        "y": 0
                    }, $_Fk(n) && n(), r;
                }
            },
            "$_BJIL": function (t) {
                var e = this;
                if (e["$_BBHU"]["$_HBw"]() === $t && (!e["$_CHIm"] || "pointermove" == t["type"])) {
                    t["$_BGEx"]();
                    var n = e["$_CFEF"],
                        r = t["$_BGCr"]() / n - e["$_CIAT"],
                        i = e["$_CIBm"] - t["$_BGDO"]() / n;
                    e["$_BGJv"] = r, e["$_CICO"]["$_BBDP"]([Math["round"](r), Math["round"](i), $_Ih() - e["$_CHJn"]]), e["lastPoint"] && (e["lastPoint"]["x"] = r, e["lastPoint"]["y"] = i), r >= e["$_CGDz"] && e["$_CGIS"](t);
                }
            },
            "$_CGIS": function (t, e) {
                var n = this,
                    r = n["$_BAIj"],
                    i = n["$_BBHU"],
                    o = n["$_CJk"],
                    s = n["$"];
                try {
                    if (i["$_HBw"]() !== $t) return;
                    if (n["$_CHIm"] && "pointerup" != t["type"]) return;
                    v(function () {
                        o["link"] && s(".link")["$_CCr"]({
                            "target": "_blank",
                            "href": o["link"]
                        });
                    }, 0), t["$_BGEx"](), i["$_HAt"]("lock");
                    var a = n["$_CFEF"],
                        _ = e ? n["lastPoint"]["x"] : t["$_BGCr"]() / a - n["$_CIAT"],
                        c = e ? n["lastPoint"]["y"] : n["$_CIBm"] - t["$_BGDO"]() / a;
                    n["$_CEDu"] = $_Ih() - n["$_CHJn"], n["$_CICO"]["$_BBDP"]([Math["round"](_), Math["round"](c), n["$_CEDu"]]);
                    var u = parseInt(_),
                        l = n["$_CICO"]["$_BBED"](n["$_CICO"]["$_FD_"](), n["$_CJk"]["c"], n["$_CJk"]["s"]);
                    r["$_CCBN"](u, l, n["$_CEDu"]), n["$_CFHP"]["$_GFw"]();
                } catch (t) {
                    r["$_DBh"](t);
                }
                return n;
            },
            "$_CBA_": function () {
                var e = this,
                    n = e["$"],
                    r = e["$_CJk"],
                    i = e["$_BBHU"];
                n(".loading")["$_BDCO"]()["$_BDDb"](1), n(".fullbg")["$_BDDb"](1)["$_BDCO"](), n(".slice")["$_BDDb"](1), I(r, "/refresh.php", {
                    "gt": r["gt"],
                    "challenge": r["challenge"],
                    "lang": r["lang"] || "zh-cn",
                    "type": r["type"]
                })["$_DGp"](function (t) {
                    if (t["status"] == Ht) return z(F(t, e["$_BAIj"], "/refresh.php"));
                    e["$_CEGS"](), e["$_CEHE"](e["$_CEIf"]), r["$_BHEE"]($_BBo(t)), r["link"] && n(".link")["$_CCr"]({
                        "target": "_blank",
                        "href": r["link"]
                    }), i["$_HAt"](jt);
                }, function () {
                    return z($("url_refresh", e["$_BAIj"]));
                });
            },
            "$_CAJa": function () {
                var t = this["$"];
                return this["$_CJk"]["mobile"] || t(".slice")["$_BDDb"](.8), this;
            },
            "$_CAIZ": function () {
                var t = this["$"];
                t(".fullbg")["$_BDDb"](0), v(function () {
                    t(".fullbg")["$_BDBE"]();
                }, 200);
            },
            "$_CFAP": function () {
                this["$_CEAb"](Ht, !0);
            },
            "$_CFBX": function () {
                return this["$_CEAb"](Pt), new G(function (t) {
                    v(t, 1500);
                });
            },
            "$_CFCk": function () {
                return this["$_CEAb"](Nt), new G(function (t) {
                    v(t, 1500);
                });
            },
            "$_CEHE": function (t, e) {
                var n = this,
                    r = n["$"];
                if (t < (e ? -20 : n["$_CEIf"]) ? t = n["$_CEIf"] : t > n["$_CGDz"] && (t = n["$_CGDz"]), e) {
                    var i = t / 20 + 1;
                    r(".slider_button")["$_sTyyle"]({
                        "opacity": i
                    });
                }
                if ("webkitTransform" in h["body"]["style"] || "transform" in h["body"]["style"]) {
                    if (C || /EzvizStudio/["test"](ht["userAgent"])) var o = "translate(" + t * n["$_CFEF"] + "px, -10px)"; else o = "translate(" + t * n["$_CFEF"] + "px, 0px)";
                    r(".slider_button")["$_sTyyle"]({
                        "transform": o,
                        "webkitTransform": o
                    });
                } else r(".slider_button")["$_sTyyle"]({
                    "left": t * n["$_CFEF"] + "px"
                });
                var s = .9 * r(".slider_button")["$_BFHh"]();
                r(".progress_left") && r(".progress_left")["$_sTyyle"]({
                    "width": t * n["$_CFEF"] + s + "px",
                    "opacity": 1
                }), "undefined" != typeof n["$_CJk"]["so"] && 0 !== n["$_CJk"]["so"] && n["$_CICO"] && (t = n["$_CICO"]["$_BBFS"](parseInt(t), n["$_CJk"]["c"], n["$_CJk"]["so"])), n["$_BJS"] && n["$_BJS"]["$_BJIL"](t);
            },
            "$_BBCE": function () {
                (0, this["$"])(".holder")["$_DIO"]();
            }
        }), $_BAX(re["prototype"], ue["prototype"]), Y["noConflict"](window, se);
    });
}();

args = 'ecc2ba2dd627818a'

function get_u() {
    var u = new window._U()["encrypt"](args);
    console.log(u);
    return u
}

function get_o(gt, new_challenge, x, _c, _s) {
    var passtime = 231;
    var o = {
        "lang": "zh-cn",   //写死
        "userresponse": window._H(x, new_challenge),   ///滑动距离x + challenge 的值
        "passtime": passtime,   //滑动时间
        "imgload": 164,    //写死
        // "aa": "?--.---(!!Kssio~Xttyy(()((y(yyyttsss(!!(T911111111111111A1111191",  //轨迹加密
        "aa": window.gettrack(
            [
                [
                    -27,
                    -32,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    2,
                    0,
                    55
                ],
                [
                    5,
                    0,
                    63
                ],
                [
                    8,
                    0,
                    71
                ],
                [
                    13,
                    0,
                    79
                ],
                [
                    18,
                    0,
                    87
                ],
                [
                    23,
                    0,
                    95
                ],
                [
                    29,
                    0,
                    103
                ],
                [
                    34,
                    0,
                    111
                ],
                [
                    41,
                    0,
                    119
                ],
                [
                    46,
                    0,
                    127
                ],
                [
                    52,
                    0,
                    135
                ],
                [
                    57,
                    0,
                    143
                ],
                [
                    61,
                    0,
                    151
                ],
                [
                    65,
                    0,
                    159
                ],
                [
                    70,
                    0,
                    167
                ],
                [
                    73,
                    0,
                    177
                ],
                [
                    73,
                    0,
                    177
                ]
            ]), //轨迹加密
        "ep": {                    //写死
            "v": "7.9.2",
            "$_BIE": false,
            "me": true,
            "tm": {
                "a": 1712299512550,
                "b": 1712299512868,
                "c": 1712299512868,
                "d": 0,
                "e": 0,
                "f": 1712299512550,
                "g": 1712299512595,
                "h": 1712299512595,
                "i": 1712299512595,
                "j": 1712299512661,
                "k": 1712299512625,
                "l": 1712299512661,
                "m": 1712299512864,
                "n": 1712299512876,
                "o": 1712299512869,
                "p": 1712299513095,
                "q": 1712299513096,
                "r": 1712299513098,
                "s": 1712299513111,
                "t": 1712299513111,
                "u": 1712299513111
            },
            "td": -1
        },
        "h9s9": "1816378497",            //写死
        "rp": CryptoJS.MD5(gt + new_challenge["slice"](0, 32) + passtime).toString()      //md5(gt+challenge(32位)+passtime)
    }
    console.log(o)
}

function get_l(gt, new_challenge, x, _c, _s, passtime) {
    var o = {
        "lang": "zh-cn",   //写死
        "userresponse": window._H(x, new_challenge),   ///滑动距离x + challenge 的值
        "passtime": passtime,   //滑动时间
        "imgload": 164,    //写死
        // "aa": "?--.---(!!Kssio~Xttyy(()((y(yyyttsss(!!(T911111111111111A1111191",  //轨迹加密
        "aa": window.gettrack(
            [
                [
                    -27,
                    -32,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    2,
                    0,
                    55
                ],
                [
                    5,
                    0,
                    63
                ],
                [
                    8,
                    0,
                    71
                ],
                [
                    13,
                    0,
                    79
                ],
                [
                    18,
                    0,
                    87
                ],
                [
                    23,
                    0,
                    95
                ],
                [
                    29,
                    0,
                    103
                ],
                [
                    34,
                    0,
                    111
                ],
                [
                    41,
                    0,
                    119
                ],
                [
                    46,
                    0,
                    127
                ],
                [
                    52,
                    0,
                    135
                ],
                [
                    57,
                    0,
                    143
                ],
                [
                    61,
                    0,
                    151
                ],
                [
                    65,
                    0,
                    159
                ],
                [
                    70,
                    0,
                    167
                ],
                [
                    73,
                    0,
                    177
                ],
                [
                    73,
                    0,
                    177
                ]
            ]), //轨迹加密
        "ep": {                    //写死
            "v": "7.9.2",
            "$_BIE": false,
            "me": true,
            "tm": {
                "a": 1712299512550,
                "b": 1712299512868,
                "c": 1712299512868,
                "d": 0,
                "e": 0,
                "f": 1712299512550,
                "g": 1712299512595,
                "h": 1712299512595,
                "i": 1712299512595,
                "j": 1712299512661,
                "k": 1712299512625,
                "l": 1712299512661,
                "m": 1712299512864,
                "n": 1712299512876,
                "o": 1712299512869,
                "p": 1712299513095,
                "q": 1712299513096,
                "r": 1712299513098,
                "s": 1712299513111,
                "t": 1712299513111,
                "u": 1712299513111
            },
            "td": -1
        },
        "h9s9": "1816378497",            //写死
        "rp": CryptoJS.MD5(gt + new_challenge["slice"](0, 32) + passtime).toString()      //md5(gt+challenge(32位)+passtime)
    }
    var l = window._V["encrypt"](JSON["stringify"](o), args);
    console.log(l);
}

function get_h(gt, new_challenge, x, _c, _s, passtime,track) {
    var o = {
        "lang": "zh-cn",   //写死
        "userresponse": window._H(parseInt(x), new_challenge),   ///滑动距离x + challenge 的值
        "passtime": passtime,   //滑动时间
        "imgload": 164,    //写死
        // "aa": "?--.---(!!Kssio~Xttyy(()((y(yyyttsss(!!(T911111111111111A1111191",  //轨迹加密
        "aa": window.getfinal(window.gettrack(track),_c,_s), //轨迹加密
        "ep": {                    //写死
            "v": "7.9.2",
            "$_BIE": false,
            "me": true,
            "tm": {
                "a": 1712299512550,
                "b": 1712299512868,
                "c": 1712299512868,
                "d": 0,
                "e": 0,
                "f": 1712299512550,
                "g": 1712299512595,
                "h": 1712299512595,
                "i": 1712299512595,
                "j": 1712299512661,
                "k": 1712299512625,
                "l": 1712299512661,
                "m": 1712299512864,
                "n": 1712299512876,
                "o": 1712299512869,
                "p": 1712299513095,
                "q": 1712299513096,
                "r": 1712299513098,
                "s": 1712299513111,
                "t": 1712299513111,
                "u": 1712299513111
            },
            "td": -1
        },
        "h9s9": "1816378497",            //写死
        "rp": CryptoJS.MD5(gt + new_challenge["slice"](0, 32) + passtime).toString()      //md5(gt+challenge(32位)+passtime)
    }
    console.log(o)
    console.log(window.getfinal(window.gettrack(track),_c,_s));
    var l = window._V["encrypt"](JSON["stringify"](o), args);
    // console.log(l)
    var h = window._m["$_FEX"](l);
    // console.log(h);
    return h;
}

// get_u()
// get_h("019924a82c70bb123aae90d483087f94", "aece4cdcf9797c7b27d153c8ff3c1c79im", 73,
//     [12, 58, 98, 36, 43, 95, 62, 15, 12],
//     "40687e2f", 231)

function get_w(gt, new_challenge, x, _c, _s, passtime,track) {
    var u = get_u();
    var h = get_h(gt, new_challenge, x, _c, _s, passtime,track);
    var w = h + u
    console.log(w);
    return w;
}

get_w("019924a82c70bb123aae90d483087f94", "aece4cdcf9797c7b27d153c8ff3c1c79im", 73,
    [12, 58, 98, 36, 43, 95, 62, 15, 12],
    "3a777a4a", 231,
    [
    [
        -16,
        -35,
        0
    ],
    [
        0,
        0,
        0
    ],
    [
        1,
        0,
        14
    ],
    [
        2,
        0,
        30
    ],
    [
        3,
        0,
        47
    ],
    [
        4,
        0,
        54
    ],
    [
        5,
        0,
        64
    ],
    [
        7,
        0,
        70
    ],
    [
        8,
        0,
        78
    ],
    [
        9,
        0,
        86
    ],
    [
        11,
        0,
        94
    ],
    [
        13,
        0,
        102
    ],
    [
        15,
        0,
        110
    ],
    [
        16,
        0,
        118
    ],
    [
        18,
        0,
        126
    ],
    [
        19,
        0,
        134
    ],
    [
        22,
        0,
        142
    ],
    [
        23,
        0,
        150
    ],
    [
        24,
        0,
        158
    ],
    [
        25,
        0,
        166
    ],
    [
        27,
        0,
        174
    ],
    [
        30,
        0,
        182
    ],
    [
        31,
        0,
        190
    ],
    [
        32,
        0,
        198
    ],
    [
        34,
        0,
        206
    ],
    [
        34,
        0,
        207
    ]
])