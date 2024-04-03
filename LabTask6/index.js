const express = require('express')
const mongoose = require('mongoose')
const StudentModel = require("./models/studentModel");
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

require('dotenv').config();

const uri = process.env.MONGO_URI

mongoose.connect(uri).then(() => {
    console.log("Connected mongo")
    error => console.log(error)
})

app.get('/api/student',async (req,res) => {
    let students = await StudentModel.find();
    res.status(200).json(students)
})

app.get('/api/student/:id',async (req,res) => {
    try {
        let student = await StudentModel.findById(req.params.id);
        res.status(200).json(student)
    }
    catch (e) {
        res.send("Some Error Occured!")
    }

})

app.post('/api/register',(req,res) => {
    console.log(req.body.name)
    const Student = new StudentModel({name:req.body.name,address:req.body.address});
    Student.save()
    res.status(201).json(Student)
})

app.listen(5000,() => {
    console.log("Server started on 5000 port!")
})