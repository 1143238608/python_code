var target = {
    name:'mxy',
    age:18
}

var p = new Proxy(target,{
    get:function (target, p, receiver) {
        console.log(target,p,receiver)
    },
    set:function (target, p, newValue, receiver) {
        console.log(target,p,newValue,receiver)
    }
})

p.name
p.adderss = '武汉'