class User {
    
  constructor(username,password) {
    this.username=username;
    this.password=password;
    this.data = [];
  }

  addData(_topic,_detail) {
        const todo = {
            "topic": _topic,
            "detail": _detail
        };
    this.data.push(todo);
  }

  editData() {
    // Method code here
  }
  resetPassword() {
    // Method code here
  }
  printDetails(){
    console.log(`hey ${this.username} with password as ${this.password} your notes list is:`)
    let i=1;
    this.data.map((element)=>{
        console.log(`Note Number ${i++}: ${element["topic"]} := ${element["detail"]}`);
    })
    
  }
};

function trimString(str) {
  return str.trim();
}

// const sachin = new User("sachin","sachin321");
// sachin.addData("op","op");
// sachin.addData("op1","op");
// sachin.addData("op2","op");
// sachin.addData("op3","op");
// sachin.printDetails()

let signup=document.getElementById("signup")
signup.addEventListener("click",()=>{

    let u=trimString(username_p.value)
    let p=trimString(password_p.value)
    if(u==""||p==""){
        console.warn("Empty_Field Not Allowed")
        return;''
    }
    if((localStorage.getItem(`${u}`)!==null)){
        console.log("user already exist")
        console.log(u,p)
        return
    }
    const user_created= new User(trimString(username_p.value),trimString(password_p.value));
    localStorage.setItem(`${u}`,JSON.stringify(user_created))
    console.log(`User Created ${u}`)
    
})



let u_add="";


let signin=document.getElementById("signin")
signin.addEventListener("click",()=>{

    let u=trimString(username_n.value)
    let p=trimString(password_n.value)
        if(u==""||p==""){
        console.warn("Empty_Field Not Allowed")
        return;''
    }
    let is_user=false;
    let element=JSON.parse(localStorage.getItem(`${u}`))
    if(element.username === trimString(username_n.value) && element.password === trimString(password_n.value)){
        is_user=true;
    }
    is_user? console.log("You are a valid user."): console.log("Wrong Password OR NOT A USER")
    toshow.innerHTML="u logined"
    u_add=u;
    console.log(element)
})

let add=document.getElementById("add_note")
add.addEventListener("click",()=>{

    if(u_add==""){
        console.log("please login")
    }

    let t=trimString(topic.value)
    let d=trimString(detail.value)
    if(t==""||d==""){
        console.warn("Empty_Field Not Allowed")
        return;''
    }
    let element=JSON.parse(localStorage.getItem(`${u_add}`))
    
    element.data.push({
         "topic": t,
         "detail": d
    });
    console.log(element)
    localStorage.removeItem(`${u_add}`)
    localStorage.setItem(`${u_add}`,element)
})