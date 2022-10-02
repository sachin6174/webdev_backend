
function machine(n) {
    let v = new Array(32);
    let i;
    let original = n;
    n = Math.abs(n);
    for (i = 31; n > 0; i--) {
        v[i] = n % 2;
        n = parseInt(n / 2);
    }
    for (; i >= 0; i--) {
        v[i] = 0;
    }
    if (original < 0) {
        for (let i = 31; i >= 0; i--) {
            if (v[i] == 0) {
                v[i] = 1;
            } else {
                v[i] = 0;
            }
        }
        let r = 1;
        for (let i = 31; i >= 0; i--) {
            let sum = r + v[i];
            if (sum == 2) {
                v[i] = 0;
                r = 1;
            } else {
                v[i] = sum;
                r = 0;
            }
        }
    }
    return v;
}
