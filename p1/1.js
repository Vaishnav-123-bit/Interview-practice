// let x=1;
// const app=()=>{
//     let y=1;
//     console.log(x);
//     console.log(y)

//     const app2=()=>{
//         let z=0;
//         console.log(x+5);
//         console.log(y-2);
//     }

//     app2();
// }
// app()


                                                       //----->IIFE




// const app=(()=>{
//     let count=0;
//     console.log(`count ${count}`);
//     return ()=>{count +=1; console.log(count)}
// })()
// app();
// app();



const app=((num)=>{
    let app=num;
    console.log(app);
    return ()=>{
        app -=1;
        console.log(app);
        if(app<0) console.log(`not enough ${app}`)
        else{console.log(`app ${app}`)}
    }
})(3)

app()