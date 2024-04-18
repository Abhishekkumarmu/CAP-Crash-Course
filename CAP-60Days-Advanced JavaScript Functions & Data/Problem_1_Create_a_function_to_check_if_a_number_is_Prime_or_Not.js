function CheckPrime(num){
    let c=0;
    for(let i=2;i<=num;i++){

        if(num%i===0){
            // console.log(i);
            c++;
        }
        

    }

if(c===1){
    console.log("Prime");
}
else
console.log("Not Prime");
}

CheckPrime(1);