const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/route')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

mongoose.connect('mongodb+srv://Satishr183:6SdvyY7phCfH5VsV@cluster0.ewmx8.mongodb.net/TODO-DB',{useNewUrlParser:true})
.then(()=>console.log("MongoDb connected"))
.catch((err)=>console.log(err.message))


app.use('/',route)

app.listen(4000, ()=>{
    console.log(`Server listen at Port : ${4000}`)
})

// const http = require('http')
// let obj={
//     name:"Satish",
//     mob:12221364
//  }
// const server = http.createServer(function(req,res){
//     if(req.url === '/test1'){
//         res.writeHead(201, {'Content-Type': 'text/html'})
//         res.write(JSON.stringify(obj))
//         res.end()
//     }
// })

// server.listen(3001,function(){
//     console.log("server is running",3001)
// })