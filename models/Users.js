const mongoose = require ("mongoose")

const UserSchema = new mongoose.Schema({
    username: {type: String, required:true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required:true}
       
})

const Users = mongoose.model("Users", UserSchema)

module.exports = Users

// User Schema created!