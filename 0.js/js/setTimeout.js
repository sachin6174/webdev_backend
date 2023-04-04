function greet(){
    console.log("Hello")
}

function greet2(name) {
    console.log(`hello ${name}`)
}

setTimeout(greet,2000)

setTimeout(greet2,2000,"alok")