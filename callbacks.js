//Callback => Is the declaration of a function that is passed
//as a parameter to another function to be executed later 

//Definition
function goToSupermarket(callback){
    console.log('Going to the supermarket')
    console.log('Arrived to the supermarket')
    const mensaje = callback(null,'Hi mom')
    console.log(mensaje)
}

//Always has this nomenclature
function callMom(error,data){
    if(error){
        console.log('an error has ocurred',error)
    } else {
        return data
    }
    // return 'Hi, im at the supermarket'
}

goToSupermarket(callMom) // => this is good

// goToSupermarket(callMom()) // => the execution of the function, it is not good


//Firma of a callback => the way that a function recieves its parameters

// function cb(error,data){
//     if(error){

//     }
// }

function pay(callback){
    console.log('I pay the stuff')
    const message = callback(null,'Hi mom, ive already pay the things')
    console.log(message)
}

function arrivedHome(callback){
    console.log('Im home')
    const message = callback(null, 'hi mom, im at home safe and sound')
    console.log(message)
}

//Syncrhonous
goToSupermarket(callMom);

pay(callMom)

arrivedHome(callMom)


//Asynchronus 

console.log('Hiii!!! :D')

setTimeout(()=> {
    console.log('Hi againnn')
},2000)

console.log('hows it going')

console.log('gooooodbyeeeee')

//Use case

const userCreated = createUser()

const userTemplate= `${userCreated.name}`

let num1
let num2
console.log('jona is chosing the numbers')
setTimeout(()=>{
    num1 = 20
    num2 = 50
    console.log('jona has choosen the numbers')
    console.log(num1+num2)
},3000)



/*
    Que sean asincronas las acciones que hicimos en clase
*/