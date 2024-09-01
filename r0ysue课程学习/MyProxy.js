let mywindow = {
    a: 123
};

const window = new Proxy(Object.assign(global, mywindow), {
    get: function (target, propkey, receiver) {
        var result = Reflect.get(target, propkey, receiver);
        console.log(`对象${target} 获取了属性 ${propkey} `);
        console.log(result)
        return result;
    },
    set: function (target, propkey,newValue,receiver) {
        console.log(`对象${target}设置了 ${propkey}属性 ，值是：${newValue}`);
        // console.log(Reflect.set(target, propkey, receiver));
        return Reflect.set(target, propkey, receiver);
    }
})

window.a
window.a = 456

