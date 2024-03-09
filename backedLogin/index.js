const express=require("express")
const app=express()
const cors=require('cors')

app.use(express.json())
app.use(cors())

app.use(express.urlencoded({extended:true}))

const collection=require('./mongo.js')

app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})




app.post("/signup",async(req,res)=>{
    const{email,password}=req.body;
    const data={
        email:email,
        password:password    }
    try{    
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exists")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }catch{
        res.json("notexist")
    }
})

app.listen(8000,()=>{
    console.log(`Port connected`)
})