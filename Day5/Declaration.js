function isEvenOdd(num){
    return num%2==0?"Even":"Odd"
}

function square(num){
    return num*num;
}


const num=5;
console.log(`Number ${num} is ${isEvenOdd(num)}`);
console.log(`Square of ${num} is ${square(num)}`);


