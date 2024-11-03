import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:String,
    user:String,
    password:String
})
const userModel = mongoose.model("User",userSchema)

export default userModel;