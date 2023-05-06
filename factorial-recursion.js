// factorial 6! = 6*5*4*3*2*1
/* let fact = 1;
for (let i = 6; i >= 1; i--) {
    fact = fact * i;
}
console.log(fact); */

function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(i - 1);
}
console.log(factorial(6));