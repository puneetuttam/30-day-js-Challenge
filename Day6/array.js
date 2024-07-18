console.log("array creation and access");
ar = [1, 2, 3, 4, 5];
console.log(ar);
console.log("first = " + ar[0]);
console.log("last = " + ar[ar.length - 1]);

console.log("array basics");
ar.push(6, 7, 8);
console.log(ar);
ar.pop();
console.log(ar);
ar.shift();
console.log(ar);
ar.unshift(33);
console.log(ar);

console.log("array methods");
const res = ar.map((element) => 2 * element);
console.log(res);
const res2 = ar.filter((element) => element % 2 === 0);
console.log("even = " + res2);
const res3 = ar.reduce((acc, curr) => acc + curr, 0);
console.log(res3);

console.log("array iteration");
for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}
ar.forEach((item) => console.log(item / 2));

console.log("Multi-dimensional Array");
const array = [["a", "b", "c"],['d','e','f']];
console.log(array)
console.log(array[1][2]);
