function factorial(num){
    let res=1;
    do{
        res*=num;
        num--;
    }while(num>0);
    return res;

}

let num=5
console.log(`Factorial of ${num} = ${factorial(num)}`);