function digitSum(n){
    if(n == 0){
        return 0;
    }
    let rem = n % 10;
    return rem + parseInt( digitSum(n / 10));
}

console.log(digitSum(1234));

function rev(s){
    var ans = "";
    for(let i = s.length -1; i >= 0; i--){
        ans += s[i];
    }
    console.log(ans);
}

rev("alok");



