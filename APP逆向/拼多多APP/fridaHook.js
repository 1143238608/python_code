function hookInfo2(arg2) {
    var result = '';
    Java.perform(function () {

        var arg1 = 'android.app.ContextImpl@1b01200'
        var deviceNative = Java.use("com.xunmeng.pinduoduo.secure.DeviceNative").info2(arg1, arg2);
    })
    return result;
}

function hookInfo() {
    var result = '';
    Java.perform(function () {
        var deviceNative = Java.use("com.xunmeng.pinduoduo.secure.DeviceNative");
        deviceNative.info2.implementation = function (arg1, arg2) {
            result = this.info2(arg1, arg2);
        };
    })
    return result;
}

function hookDeviceInfo2(ts){
    var result = null;
    Java.perform(function(){
        let BaseApplication = Java.use( "com.xunmeng.pinduoduo.basekit.BaseApplication");
        var context = BaseApplication.getContext();

    //获取当前本地时间的时间戳//
    //     let TimeStamp = Java.use("com.xunmeng.pinduoduo.d.l");
    //     var _ts = TimeStamp.c.overload('java.lang.Long')(ts);
        try {
        // 调用 SecureNative.deviceInfo2 方法，并传入时间戳参数
            let SecureNative = Java.use(  "com.xunmeng.pinduoduo.secure.SecureNative");
            var Long = Java.use(  "java.lang.Long");
            result = SecureNative.deviceInfo2(context, Long.valueOf(ts));

        }catch(error) {
            console.error("Error occurred:", error);
            //在出现异常时返回一个默认值，避免返回空值
            result = "Error occurred:" + error.toString();
        }
        });
            return result;
}
rpc.exports = {
    hookinfo2: hookInfo2,
    hookinfo: hookInfo,
    hookdeviceinfo2:hookDeviceInfo2
}