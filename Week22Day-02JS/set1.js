//set
var animals=new Set();
animals.add("lion");
animals.add("Tiger");
animals.add("Cow");
animals.add("Snake");
console.log(animals);
animals.add("Snake");
console.log(animals);

// another method

var fruits=new Set(["apple","orange","banana","apple"]);
console.log(fruits);
fruits.delete("apple");
console.log(fruits);
//fruits.clear();
console.log(fruits.has("banana"));
fruits.forEach(function (temp)
{
    console.log(temp);
});

