//const cryptoRandomString = require ('crypto-random-string')
//const { students, hello } = require('./mymodule')

const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const port = 8000;

const weather = require('weather-js')


app.get('/views/davao', function (req, res) {
    weather.find({search: 'Davao, Philippines', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weatherdavao: eval(JSON.stringify(result, null, 2))
            }

            res.render('davao' , data)

        }
    });
})



//let randomString = cryptoRandomString({length: 10});
//console.log(randomString)

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