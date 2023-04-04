function automaticWrite(txt,timeInterval){
    let type=document.getElementById('type');
    let i=0;
    let intervalid2=setInterval(()=>{
    type.innerHTML+= intro[i];
    i++;
        if(i==intro.length){
            clearInterval(intervalid2);
        }
    },timeInterval)
}


let intro=`HELLO THERE !
I'M Sachin Kumar
I Am Pursuing My Studies In B-Tech Computer Science And Engineering From Chandigarh Group Of Colleges Landran.

I Like Philosophy,Literature, Mathematics And Physics. I Like To Listen To Music To Recreate Myself. Apart From My Hobbies, I Am A Good Listener ,Adaptive And Friendly And Like To Work In A Team.

And About My Technical Skills, I Am Comfortable With Several Languages Like C/C++, Python, Javascript, And Databases Such As SQL, MongoDB And Redis.

Apart Of These, I Like To Learn About High-Level System Design, Dev Ops , Machine Learning, And Cloud Computing .`
        
