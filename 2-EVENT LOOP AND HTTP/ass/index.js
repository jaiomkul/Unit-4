const express = require("express");
// console.log(express);


const app = express();
// console.log(app);

// REST APIs =>Represenatational State transfer
/*
get =>get data from server 
post =>add data from server
out/patch => update some data on the server
delete => remove some data from server
*/ 

app.get("/users", function(req, res){
    console.log("Hello Bhai")
    res.send({name:"Jaiprakash"});
});

app.get("/students", function(req,res){
  res.send({student:"ABC"})
})


app.listen(5000,() =>{
  console.log("Port Working 5000");  
})
