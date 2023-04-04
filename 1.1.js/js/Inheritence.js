function Person(fName,lName){
    this.fName = fName
    this.lName = lName
}


Person.prototype.getFullName = function(){
    return this.fName + ' ' + this.lName
}


function Superhero(fName,lName){
    Person.call(this,fName,lName);
    this.isSuperHero = true
}

Superhero.prototype.fightCrime = function(){
    console.log("Fight crime")
}

Superhero.prototype = Object.create(Person.prototype)

const batman = new Superhero('Bruce','Wayne')
Superhero.prototype.constructor = Superhero 
// to make sure that super is created from Superhero
//not the Person 
console.log(batman.getFullName())