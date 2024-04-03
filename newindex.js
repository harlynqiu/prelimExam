const cryptoRandomString = require ('crypto-random-string')
const express = require('express')
const app = express()
const { students, hello } = require('./mymodule')
app.set('view engine', 'ejs')
const port = 8000;
;
let randomString = cryptoRandomString({length: 10});
console.log(randomString)

app.use((req, res, next) => {
    console.log("Request Made")
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method: ${req.method}`)
    next()
})








app.get('/', function (req, res) {
    res.sendFile('./prelimexam-1/index.html' , { root: __dirname})
})

app.get('/about', function (req, res) {
    res.sendFile('./prelimexam-1/about.html' , { root: __dirname})
})

app.get('/home', function (req, res) {
    res.redirect('/')
})

app.get('/aboutus', function (req, res) {
    res.redirect('/about')
})