const http = require('http') 
const fs = require('fs') // fs = file system

const server = http.createServer((req,res) => {             //req = request , res = response
    //console.log(req.url.toString())

    let myurl = './'
    if(req.url == '/'){
        myurl += 'index.html'
        res.statusCode = 200
    }
    else if(req.url == '/about'){
        myurl += 'about.html'
        res.statusCode = 200
    }
    else{
        myurl += 'error.html'
        res.statusCode = 404
    }

    fs.readFile(myurl, (err,data) => {
        if(err){
            console.log(err)
        }
        else{
            res.write(data)
            res.end()
        }
    })
    
    // res.setHeader("Content-Type", "text/plain")
    //res.setHeader("Content-Type", "text/html")
    // res.write("<p>Hello Nich</p>")
    //res.write("<p>Sanguineo Lifestyle</p>")
    //res.write("<p>Going up</p>")

    
    //res.end()                                               // this one means it's ready to pass. or pwede na siya makita. 
})                                                            //asynchronous function  if meron ang =>, every time naga run ang server naga run ang function 

server.listen(3000, 'localhost', () => {
    console.log("listen")
})

