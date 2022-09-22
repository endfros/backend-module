function helloStranger(name){
    return `Hello ${name}, goodnight :D`
};

//Console log returns an undefined :OOOOO

// let greetFer = helloStranger('fer');

// console.log(greetFer);

//____________________________________________//

let array = ['jona','fer','sina','hector'];

function randomName(names){
    let indexRandom = Math.floor(Math.random()*array.length);
    return names[indexRandom]
}

//The argument is a function

let rand = helloStranger(randomName(array));

console.log(rand);

function hola(name){
    return `Hola, ${name},buenas noches`
}

const x = hola('Xavy')
console.log('x',x)

//Pass as a reference, you can pass the function to another variable as a data type. 
const otraFuncion = hola
console.log(otraFuncion)

const a = otraFuncion
const b = hola 

console.log(b('fer'))

//Autoexecutable functions



//Factory functions => functions that generate other functions