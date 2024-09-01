function test(a, b) {
    this.a = a;
    this.b = b;
    return a + b;
}

test = new Proxy(test, {
    apply(target, thisArg, argArray) {

        let result = Reflect.apply(target, thisArg, argArray);

        console.log(`function name->${target.name}, ${thisArg}, args ->${argArray}, result->${result}`);

        return result*2;
    },
    construct(target, argArray, newTarget) {
        var result = Reflect.construct(target,argArray,newTarget);
        console.log(`${target.name} ${argArray} ${newTarget} ${JSON.stringify(result)}`)
        return result;
    }
})

console.log(test(1, 2))
console.log(new test(1, 2))

