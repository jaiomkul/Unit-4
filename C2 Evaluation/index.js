const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://jaiomkul:261994@Jp@cluster0.h7sjj.mongodb.net/bank?retryWrites=true&w=majority"
    );
};

const userSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        middleName: {type: String, required: true},
        lastName: {type: String, required: true},
        age: {type: String, required: true}, 
        email: {type: String, required: true},
        address: {type: String, required: true},
        createdAt: {type: String, required: true},
        createdAt: {type: String, required: true},
    },
    {
        timestamps: true;
    }
);

// BranchDetail

const BranchDetail = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        middleName: {type: String, required: true},
        lastName: {type: String, required: true},
        IFSC: {type: String, required: true}, 
        MICR: {type: String, required: true},
        address: {type: String, required: true},
        createdAt: {type: String, required: true},
        createdAt: {type: String, required: true},
        userId{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true;
        },
    },
    {
        timestamps: true;
    }
);

// MasterAccount
const MasterAccount = new mongoose.Schema(
    {
        firstName: {type: Number, required: true},
        createdAt: {type: String, required: true},
        createdAt: {type: String, required: true},
        userId{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true;
        },
    },
    {
        timestamps: true;
    }
);

// SavingsAccount
const SavingsAccount = new mongoose.Schema(
    {
        account_number: {type: Number, required: true},
        balance: {type: Number, required: true},
        interestRate: {type: Number, required: true},
        createdAt: {type: String, required: true},
        createdAt: {type: String, required: true},
        userId{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true;
        },
    },
    {
        timestamps: true;
    }
);

// FixedAccount
const FixedAccount = new mongoose.Schema(
    {
        account_number: {type: Number, required: true},
        balance: {type: Number, required: true},
        interestRate: {type: Number, required: true},
        startDate: {type: Number, required: true},
        maturityDate: {type: Number, required: true},
        createdAt: {type: String, required: true},
        createdAt: {type: String, required: true},
        userId{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true;
        },
    },
    {
        timestamps: true;
    }
);
