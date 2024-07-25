f1();
function f1()
{
    f2().then(data=>
    {
        console.log(data);
    }).catch(error=>
    {
        console.log(error);
    })
}

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