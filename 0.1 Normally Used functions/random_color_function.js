function getColor(){
    let rand1=Math.floor(Math.random()*16);
    let rand2=Math.floor(Math.random()*16);
    let rand3=Math.floor(Math.random()*16);
    let rand4=Math.floor(Math.random()*16);
    let rand5=Math.floor(Math.random()*16);
    let rand6=Math.floor(Math.random()*16);
    console.log(rand1,rand2,rand3,rand4,rand5,rand6);
    if(rand1==10){
        rand1='A';
    }
    if(rand2==10){
        rand2='A';
    }
    if(rand3==10){
        rand3='A';
    }
    if(rand4==10){
        rand4='A';
    }
    if(rand5==10){
        rand5='A';
    }
    if(rand6==10){
        rand6='A';
    }


    if(rand1==11){
        rand1='B';
    }
    if(rand2==11){
        rand2='B';
    }
    if(rand3==11){
        rand3='B';
    }
    if(rand4==11){
        rand4='B';
    }
    if(rand5==11){
        rand5='B';
    }
    if(rand6==11){
        rand6='B';
    }


    if(rand1==12){
        rand1='C';
    }
    if(rand2==12){
        rand2='C';
    }
    if(rand3==12){
        rand3='C';
    }
    if(rand4==12){
        rand4='C';
    }
    if(rand5==12){
        rand5='C';
    }
    if(rand6==12){
        rand6='C';
    }
    

    if(rand1==13){
        rand1='D';
    }
    if(rand2==13){
        rand2='D';
    }
    if(rand3==13){
        rand3='D';
    }
    if(rand4==13){
        rand4='D';
    }
    if(rand5==13){
        rand5='D';
    }
    if(rand6==13){
        rand6='D';
    }


    if(rand1==14){
        rand1='E';
    }
    if(rand2==14){
        rand2='E';
    }
    if(rand3==14){
        rand3='E';
    }
    if(rand4==14){
        rand4='E';
    }
    if(rand5==14){
        rand5='E';
    }
    if(rand6==14){
        rand6='E';
    }


    if(rand1==15){
        rand1='F';
    }
    if(rand2==15){
        rand2='F';
    }
    if(rand3==15){
        rand3='F';
    }
    if(rand4==15){
        rand4='F';
    }
    if(rand5==15){
        rand5='F';
    }
    if(rand6==15){
        rand6='F';
    }
    let mycolor=`#${rand1}${rand2}${rand3}${rand4}${rand5}${rand6}`
    return mycolor;
}