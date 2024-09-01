
function get_t(){
    var t1 = parseInt(Date.parse(new Date()) / 1000 / 2);
    var t2 = parseInt(Date.parse(new Date()) / 1000 / 2 - Math.floor(Math.random() * (50) + 1));
    var t = {
        't1' :t1,
        't2' :t2
    }
    return t;
}

console.log(get_t())