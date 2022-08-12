
let sum = 0;
for ( let i = 3; i < 100; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum = sum + i;
    }
}
console.log(sum);
parse