function RemoveSapace(x){
   let bag=""
    for(let i=0;i<x.length;i++){
        if(x[i]!==" "){
        bag+=x[i]
        }

     }

     console.log(bag)
}

RemoveSapace("The quick brown fox jumps over the lazy dog")