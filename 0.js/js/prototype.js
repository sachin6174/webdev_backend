function Person(fName,lName){
    this.fName = fName
    this.Lname = lName
}

const person1 = new Person('clark','kent')
const person2 = new Person('Bruce','Wayne')

// person1.getFullName = function(){
//     return this.fName + ' ' + this.Lname
// }

Person.prototype.getFullName = function(){
    return this.fName + ' ' + this.Lname
}

console.log(person2.getFullName())

