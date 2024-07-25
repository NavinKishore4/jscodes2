var a = 100;
var b = 50;

function arithemetric(a,b)
{
    var add=a+b;
    var sub=a-b;
    var mul=a*b;
    var div=a/b;
    return [add,sub,mul,div];
}

var [add,sub,mul,div]=arithemetric(a,b);
console.log("add : "+add);
console.log("sub : "+sub);
console.log("sub : "+mul);
console.log("sub : "+div);

