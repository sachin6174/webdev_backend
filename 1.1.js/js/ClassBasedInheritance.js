class Person{
    constructor(fName,lName){
        this.fName = fName
        this.lName = lName
    }

    sayMyName(){
        return this.fName + " " + this.lName
    }

}

const p1 = new Person('Clark','Kent')
console.log(p1.sayMyName())


class Superhero extends Person{
    constructor(fName,lName){
        super(fName,lName)
        this.isSuperHero = true
    }

    fightCrime(){
        console.log('Fight Crime')
    }
}


const superMan = new Superhero('Clark','Kent')
console.log(superMan.sayMyName())
