var student={
    "name":"Navin",
    "age":25,
    "gender":"male"
}

function printStudentDetails({name,age})
{
    console.log("My name is :"+name);
    console.log("My age is :"+age);
}

printStudentDetails(student);