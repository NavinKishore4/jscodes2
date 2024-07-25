function f2()
{
    return new Promise((resolve,reject)=>
{
    setTimeout(()=>
{
    var message="good morning";
    resolve(message);
},5000);
})
}

async function f1()
{
    console.log("Happy Day");
    var data = await f2();
    console.log(data);
    console.log("good afternoon");
    console.log("good evening");
    console.log("good night");
}

f1();