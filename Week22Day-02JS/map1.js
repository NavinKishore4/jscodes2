//key-value
var animals=new Map();//declaration
//set - add and update . it performs two operation 
animals.set("wild","lion");
animals.set("domestic","dog");
animals.set("insect","ant");
console.log(animals);
animals.set("domestic","cow");
console.log(animals);

//another method

var fruits=new Map([
    ["red","apple"],
    ["yellow","banana"],
    ["black","grape"]
]);
console.log(fruits);
console.log(fruits.size);
console.log(fruits.has("white"));
fruits.delete("red");
console.log(fruits);
//fruits.clear();
//console.log(fruits);

fruits.forEach(function(temp,key)
{
    console.log(key+" : "+temp);
});
