const userSchema = new Schema ({
    firstName: {type:String, required:true}
    lastName: {type:String, required:true}
    email: {type:String, required:true}
    password: {type:String, required:true}
    createdAt: {type:String, required:true}
    updatedAt: {type:String, required:true}

},
{
    versionKey: false,
    timestamps: true,
}
);

const todoSchema = new Schema ({
    title: {type:String, required:true}
    createdAt: {type:String, required:true}
    updatedAt: {type:String, required:true}

},
{
    versionKey: false,
    timestamps: true,
}
);
