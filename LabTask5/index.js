const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.send("Welcome to hell!")
})

app.listen(5000,() => {
    console.log("Ok Express is working!")
})