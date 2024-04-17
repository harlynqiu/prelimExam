//const cryptoRandomString = require ('crypto-random-string')
//const { students, hello } = require('./mymodule')

const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const port = 8000;

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()
const memberColl = db.collection('thefirst')

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





app.get('/', async (req, res) => {

    const items = await memberColl.get()
   // console.log(items.docs.length)
   let data = {
    itemData: items.docs,
    heading: "THE TRIAL",
    song: "coldplay"
   }

   res.render('index',data)

    //res.render('index', {heading: "THE TRIAL" , song: "coldplay"});
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