import mongoose from "mongoose";

const user = new mongoose.Schema({
    name:{type:String},
    price:{type:String},
    image:{type:String},
}, {timestamps: true});

const productsModel = mongoose.model("products", user);
export default productsModel;