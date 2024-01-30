const person={
    alive:true
}
const musician={
    plays:true
}
// musician.__proto__=person;

Object.setPrototypeOf(musician,person)
console.log(musician.alive)


// / extending the tree

const gutarist={
    strings:6,
    __proto__:musician
}
console.log(gutarist.alive,"gutarist")
