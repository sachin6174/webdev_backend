console.log("i am connected")

let reg=/sachin/;
console.log(reg)
console.log(reg.source)

// with out gloabal flag it will always point to first match as many time as we run;

let my="my name is my name and your name is your name"
let reg2=/name/g;// we need to use global flag for complete search

let cond=reg2.exec(my);
while(cond){
    console.log(cond);
    cond=reg2.exec(my);
}

/// ask student why this code is giving wrong answer
// while(reg2.exec(my)!=null){
//     console.log(reg2.exec(my));
// }


reg2=/name/gi;// i for case insensitivity and g for global
my="my naMe is my namE and your nAme is your Name"

cond=reg2.exec(my);// cond is a object and null is falacy
while(cond){
    console.log(cond.index);
    cond=reg2.exec(my);
}


/// test function in regular expression