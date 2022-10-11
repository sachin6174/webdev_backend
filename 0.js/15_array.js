// let a=["sachin",5,6,6,{sachin:"kumar"},function(){}]

// /* 
// length property

// */
// for(let i=0;i<a.length;i++){
//     console.log(typeof(a[i]));
// }
// console.log(typeof(a));
// let d=new Date();
// console.log(typeof(d));

// let arr=new Array(10);// 10 sized array with all value undefined
// //arrays are mutable 
// //  array method generally changes original array

// arr.length
// arr.push(4);

// console.log(a.indexOf(6))// return first occurence index
// console.log(a.lastIndexOf(6))// return first occurence index
// console.log(Array.isArray(a))// retrn true or false // it is class method
// // a[0],a[i]  idex access available


let b=["sachin",5,6,6,{sachin:"kumar"},function(){}]
// b.push(100)
// b.unshift(0)
// b.unshift(10)
console.log(b)

//pop shift
// b.pop()
// b.shift()
// console.log(b)

// c=[1,2,3,10,4,5,1]
// // c.reverse()
// c.sort((a,b)=>{
//     return a-b;// a<b
// })
// // a-b sort in increasing

// c.sort((a,b)=>{
//     return b-a;  a>b
// })
// // b-a sort in decreasing
// console.log(c)

a1=[1,2,3]
a2=[4,5]
a3=a1.concat(a2);// it return new array
console.log(a3)