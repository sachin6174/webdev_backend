let sachin={
    fname:"sachin",
    lname:"kumar",
    age:21,
    getdetails:function(){
        console.log(`person name is ${this.fname} and age is ${this.age}.`)
    }
}

sachin["pno"]=283964;

console.log(JSON.stringify(sachin));
// console.log(sachin.fname);
// console.log(sachin.lname);
// console.log(sachin.age);
// sachin.getdetails();

// console.log(sachin.fname,sachin.age,sachin.lname,sachin.getdetails);
// console.log(sachin);

let myjson=`{"fname":"sachin","lname":"kumar","age":21,"pno":283964}`;
console.log(JSON.parse(myjson).fname);
