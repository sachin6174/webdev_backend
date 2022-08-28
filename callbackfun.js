// three types of fuction syntax

//normal syntax
function sachin(a,b){
    return a+b;
}
console.log(sachin(1,3));


// funnction acting as a variable
let bunty= function(a,b){
    return a+b;
}
console.log(bunty(11,30));


//anonymous or arrow function
// i am attachin name because i need to call function otherwise anonymous functions are not called
let prince=(a,b)=>{
    return a+b;
}

console.log(prince(11,30));