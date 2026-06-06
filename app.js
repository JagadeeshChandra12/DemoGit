let url = "https://dogapi.dog/api/v2/facts";
fetch(url)
 .then((res) => {
    
    console.log(res);
    res.json() .then((data) => {
        console.log(data)
    });
})
.catch ((err)=>
{
 console.log("Error",err);
})