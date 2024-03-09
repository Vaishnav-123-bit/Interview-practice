const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://hard:hard@cluster0.sucrsem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('connection sucessful')
})
.catch((e)=>{
    console.log(e)
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        reqiured:true
    },
    password:{
        required:true,
        type:String
    }
})

const collection=mongoose.model("collection",newSchema);
module.exports=collection