
const EventEmiter = require('events') // ata akta class
// emitter instance
const myEmitter = new EventEmiter() 

// listner

myEmitter.on('birthday',()=>{
    console.log(`happy birthday to you`)
})
myEmitter.on('birthday',(gift)=>{
    console.log(`Here is your gift ${gift}`)
})

// emit call
myEmitter.emit('birthday',"bike")