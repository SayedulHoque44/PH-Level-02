
const http = require('http')
const fs = require('fs')
const { buffer } = require('stream/consumers')
// creating a server using raw node.js
const server = http.createServer()

// 
server.on('request',(req,res)=>{
    if( req.url==="/read-file" && req.method==="GET"){
        console.log('proccess to read-file')
    }
    console.log(req.url,req.method)
    // streaming file reading
    const readableStrem = fs.createReadStream(process.cwd()+"/textssdf.txt")

// Summary : ebabe Raw node js er diye backend e req handle kora onk jamila hoye jay tai amra akn express e move krbo
    // data buffer 
    readableStrem.on('data',(buffer)=>{
        res.statusCode=200
        res.write(buffer)
    })

    // error handle
    readableStrem.on('error',(error)=>{
        res.statusCode=500
        res.end('Somting went wrong!')
    })

    readableStrem.on('end',()=>{
        res.statusCode=200
        res.end('Hello from world!')
    })

})

// 
server.listen(5000,()=>{
    console.log('server is running on port 5000')
})