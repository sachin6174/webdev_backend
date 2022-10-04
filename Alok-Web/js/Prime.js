function getPrime(n) {
    n = Number(n)
    let primes = new Array(n + 1);
    for (let i = 0; i < n + 1; i++) {
        primes[i] = true;
    }
    primes[0] = false;
    primes[1] = false;

    for (let i = 2; i <= parseInt(n / 2); i++) {
        let x = 2;
        for (let j = i * i; j <= n && primes[i];) {
            primes[j] = false;
            x++;
            j = i * x;
        }
    }

    return primes;
}

let arr = getPrime(100);
let prime = new Array();
let k = 0
for (let i = 0; i < arr.length; i++) {
    if(arr[i]){
        prime.push(i);
    }
}

console.log(prime)