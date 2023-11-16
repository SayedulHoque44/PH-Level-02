let fs = require("fs")


fs.writeFile("myTextFile.txt","here is my content text","utf-8",(err)=>{

    if(err){
        throw Error("Faild to write file")

    }
})

fs.readFile("./myTextFile.txt","utf-8",(err,data)=>{
    if(err){
        throw Error("Faild to Read File")
    }
    console.log(data)
})

console.log("This is Asynchronus file system")