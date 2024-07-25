var student={
    "name":"Navin",
    "age":25,
    "gender":"male",
    "address":
    {
        "city":"Chennai",
        "area":"Arunachalam",
        "street":"New Street"
    }
}

function printStudentDetails({name,age,address:{city,area}})
{
    console.log("My name is :"+name);
    console.log("My age is :"+age);
    console.log("My City and Address is :"+city+" "+area);
}

printStudentDetails(student);