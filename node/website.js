const http=require('http');
const fs=require('fs')
const port=process.env.PORT ||3000;
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    console.log(req.url)

    if(req.url==='/'){
        res.statusCode=200,
        res.end(`<h3>Hello home</h3><p>wannakam</p>`)
    }
    else if(req.url==='/about'){
        res.statusCode=200;
        const data=fs.readFileSync('index.js')
        res.end(data.toString())
    }
    else{
        res.statusCode=404;
        res.end(`<h3>page not found</h3>`)
    }

})

server.listen(port,()=>{
    console.log(`server runnning on port ${port}`)
})