let sachin={
    fname:"sachin",
    lname:"kumar",
    age:21,
    getdetails:function(){
        console.log(`person name is ${this.fname} and age is ${this.age}.`)
    }
}


console.log(JSON.stringify(sachin));
// console.log(sachin.fname);
// console.log(sachin.lname);
// console.log(sachin.age);
// console.log(sachin.getdetails());
