let btn1=document.querySelector('#id1')
console.log(btn1.type)
let currMode='light'

btn1.addEventListener('click',()=>{
    if(currMode ==='light'){
        currMode='dark';
        document.querySelector("body").style.backgroundColor='black';
        //document.querySelector("body").classList.add('dark')
    }else{
        currMode="light"
         document.querySelector("body").style.backgroundColor='white'
        //document.querySelector("body").classList.add('light')
    }
    console.log(currMode)
})
