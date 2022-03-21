const userSchema = new Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required:false},
        age: {type: String, required:true},
        email: {type: String, required:true},
        profileImages: {type: String, required:true},3
        createId: {type: String, required:true},
        updateId: {type: String, required:true},   
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const bookSchema = new Schema(
    {
        likes: {type: String, required: true},
        coverImage: {type: String, required: true},
        content: {type: String, required:true},   
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const publicationSchema = new Schema(
    {
        name: {type: String, required: true}, 
    },
    {
        versionKey: false,
        timestamps: true,
    }
);