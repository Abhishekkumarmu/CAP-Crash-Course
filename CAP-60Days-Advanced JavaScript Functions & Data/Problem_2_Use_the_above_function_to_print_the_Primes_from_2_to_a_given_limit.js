function CheckPrime(num1,num2){
    let c=0;
    for(let i=num1;i<=num2;i++){
        for(let j=2;j<=i;j++){

            if(i%j===0){
                // console.log(i);
                c++;
            }
            
        }

        // console.log(i);
        if(c===1){
            console.log(i);
            
        }
        c=0;
        }
}

CheckPrime(2,18);