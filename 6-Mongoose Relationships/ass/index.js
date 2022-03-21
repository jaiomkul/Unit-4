
const express = require("express");
const mongoose = ("mongoose");

const app = express();

const connect = () => {
       return mongoose.connect(
              "mongodb+srv://unit4:unit41234@cluster0.vxykc.mongodb.net/bankData?retryWrites=true&w=majority"
              );
};


//USER SCHEMA
// STEP 2 : Creating the schema

const userSchema = new mongoose.Schema({
       firstName: { type: String, required: true },
       lastName: { type: String, required: false },
       email: { type: String, required: true, unique: true },
       password: { type: String, required: true },
});

// Step 2: creating model
const User = mongoose.model("user",userSchema)  //user => users


// POST SCHEMA
const postSchema = new mongoose.Schema({
       title: { type: String, required: true },
       body: { type: String, required: true },
},
{
       timestamps: true,  // createAt, updatedAt
}
);

const Post = mongoose.model("post",postSchema); //post => posts


// COMMENT Schema
// Step 1 :- creating the schema

const commentSchema = new mongoose.Schema({
       body: { type: String, required: true };
},
{
       timestamps: true,
}
);

//  Step 2 Creating the model 

const Comment = mongoose.model("comment", commentSchema); // comment => comments


app.listen(5000,async() ()) => {
       try {
              await connect();
       }catch(error){
              console.log("error:",error)
       };
}

//Post schema

{
       "title": "My First post",
       "postedAt": "Mar 16 2022",
       "usedId": "User Document id"
}

// User Schema
{
       "_id": "xyz12345"
       "body": "How are you?",
       "postedAt": "Mar 9 2022",
}

// Comment Schema
{
       "body": "How are you?",
       "postAt": "Mar 9 2022",
       "usedId": "User Document id",
       "postId": "document ID",
}


