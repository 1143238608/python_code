// ScreenOrientation对象
ScreenOrientation = function ScreenOrientation(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(ScreenOrientation, "ScreenOrientation");
ScreenOrientation.prototype.__proto__=EventTarget.prototype;
ScreenOrientation.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(ScreenOrientation.prototype, "angle", {configurable:true, enumerable:true, get:function angle (){return bodavm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "angle_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(ScreenOrientation.prototype, "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "type_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(ScreenOrientation.prototype, "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "onchange_get", arguments)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "onchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(ScreenOrientation.prototype, "lock", {configurable:true, enumerable:true, writable:true, value:function lock (){return bodavm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "lock", arguments)}});
bodavm.toolsFunc.defineProperty(ScreenOrientation.prototype, "unlock", {configurable:true, enumerable:true, writable:true, value:function unlock (){return bodavm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "unlock", arguments)}});
