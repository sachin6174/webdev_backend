function greet(name){
    console.log(`hello ${name}`)
}

let intervalId = setInterval(greet,1000,"Alok")
clearInterval(intervalId)