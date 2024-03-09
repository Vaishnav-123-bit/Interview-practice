const abc=require('./second')

console.log('hello',abc)
const EventEmitter=require('events')
class MyEmitter extends EventEmitter{};
const myEmitter=new MyEmitter();
myEmitter.on("waterFull",()=>{
    console.log("off kr");
    setTimeout(()=>{
        console.log("warning off --->")
    },3000)
})


console.log("Script is runnung ");
myEmitter.emit("waterFull");
console.log("still running")
