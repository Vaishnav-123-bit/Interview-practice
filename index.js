// const obj={
//     name:"abc",
//     value:20
// }
// obj.city="Mumbai"
// console.log(obj.name)
// console.log(obj)
// console.log(typeof(obj))


// const obs={
//     add(a,b){
//         return a+b
//     }
// }
// console.log(obs.add(2,3))

//          ARRAYS

/* splice method  */


// const fruits=['a','b','c']
// fruits.splice(2,1,'banana','orange')
// console.log(fruits)



//  map

// let a=[1,2,3,4,5]
// const b=a.map(num=>num*num)
// console.log(typeof(b))
// console.log(b)

// const d=b.reduce((sum,length)=>sum+length,0)
// avg=d/b.length
// console.log(avg)


// let c=[{name:'abc',age:10},{name:'efg',age:15}]
// const d=c.map(gain=>gain.name)
// console.log(d)


// let a=[
//     {
//         name:'abc',
//         age:12
//     },
//     {
//         name:"efg",
//         age:15
//     }
// ]

// let b=a.map(i=>{
//     return{
//         name:i.name,
//         age:i.age,
//         guide:`${i.name} is ${i.age} years old`

// }
// })
// console.log(b)

// let nestedArray=[[1,2,3],[4,5,6],[7,8,9]]
// const c=nestedArray.map(i=>i.map(num=>num)).flat()
// console.log(c)


//filter

// let nums=[1,2,3,4,5]
// const evenNums=nums.filter(i=>i%2===0)
// console.log(evenNums)





//                  OBJECTS

//constructor format 

// function members(fn,ln,age){
//     this.fn=fn;
//     this.ln=ln
//     this.age=age;
//     this.sayHello=function(){
//         console.log(`hello ${this.fn} ${this.ln} age ${this.age}`)
//     }}
// let p1=new members("vai","mah",21)
// console.log(p1)
// p1.sayHello()




//              AWAIT ASYNC

                


                // setTimeOut



// function delayedGreeting(name, callback) {
//     setTimeout(function() {
//       callback("Hello, " + name);
//     }, 1000);
//   }
  
//   delayedGreeting("Alice", function(message) {
//     console.log(message); // Output: Hello, Alice
//   });
  

//   function getMeth(age,callback){
//     setTimeout(function(){
//         callback('hello ' + age)
//     },1000)
//   }

// getMeth(21,function(message){
//     console.log(message)
// })



//            Promise


