const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        required:true
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField:"email"});
module.exports = mongoose.model("User", userSchema);