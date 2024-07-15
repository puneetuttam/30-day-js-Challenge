function isPositiveOrNegative(num){
    if(num>0){
        console.log(`${num} is positive`);
    }
    else if(num<0){
        console.log(`${num} is negative`);
    }
    else{
        console.log(`${num} is zero`);
    }
}

isPositiveOrNegative(-5)
isPositiveOrNegative(5)
isPositiveOrNegative(0)