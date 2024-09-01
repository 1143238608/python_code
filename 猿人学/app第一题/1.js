function bin2String(array) {
  return String.fromCharCode.apply(String, array);
}
function stringToBytes(str) {
    var ch,
    st,
    re = [];
    for (var i = 0; i < str.length; i++) {
        ch = str.charCodeAt(i);
        st = [];
        do {
            st.push(ch & 0xFF);
            ch = ch >> 8;
        } while (ch);
        re = re.concat(st.reverse());
    }
    return re;
}



function sign(s){
    var result='';
    Java.perform(function (){
        result=Java.use('com.yuanrenxue.match2022.security.Sign').$new().sign(stringToBytes(s));
    })
    return result
}
rpc.exports={
    getsign:sign
}
