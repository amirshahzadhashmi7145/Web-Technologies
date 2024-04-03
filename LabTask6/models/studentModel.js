const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    address:String
})

const studentModel = mongoose.model("Student",studentSchema);

module.exports = studentModel;

