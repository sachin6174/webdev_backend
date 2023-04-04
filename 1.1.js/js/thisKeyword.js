const person = {
    name: 'Alok',
    sayMyName:function(){
        console.log(`My name is ${this.name}`)
    }
}

let sayMyName = function(){
    console.log(`My name is ${this.name}`)
}

// sayMyName.call(person)

globalThis.name = 'Batman'

sayMyName()

