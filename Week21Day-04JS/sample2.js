//api url
    //"https://jsonplaceholder.org/posts"
    var url = "https://jsonplaceholder.org/posts";

    //connect
    fetch(url).then(response => {
        console.log(response);
        console.log(response.ok);
        console.log(response.status);
        if (response.ok == false) {
            console.error("Problem in fetching the url/data");
        }
        else {
            return response.json();
        }
    }).then(data => {
        // console.log(data);
        data.forEach(temp => {
            console.log(temp.id + " = " + temp.slug);
            
        })
    }).catch(error => {
        console.warn(error);
    })