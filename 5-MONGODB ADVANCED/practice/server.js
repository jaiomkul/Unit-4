


const express = require("express");
const mongoose = require("mongoose");

const app = express();

// app.get("/users", (req, res) => {
//     return res.send("users")
// })

// Connect MomgoDB

const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/assignment")
}



// Create Schema => schema basically structure of our document
const userSchema = mongoose.Schema({
    _id : String,
    first_name : String, 
    last_name : String,
    email : String,
    gender : String,
    ip_address : String,
    age : String,
});


// Model
// users => user
const User = mongoose.model("user", userSchema)
// like db.users (line above)


app.get("/users",async (req, res) =>{
    // lean() use for get data in object not mongo document form
    //exec() indicate or promise end or excute (promise ko khatam karta hai)
    const userData = await User.find({}).lean().exec()
    console.log(userData)
    return res.send(userData)
})

 

app.listen(5000, async() =>{
    try {
        await connectDB();
    }catch{
        console.log("Something went wrong")
    }
    console.log("Listening 5000 Port is working")
});