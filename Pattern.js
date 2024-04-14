let bag="";
  for(let row=1;row<=6;row++){
    for(let col=1;col<=7;col++){
        
        if ((row===1 && col%3!==1 )|| (row===2 && col%3==1) || (row-col===2)|| (row+col===10)){
            bag+="*"+" ";
        }
         
        else
        bag+=" ";
    }
        console.log(bag); 
        bag="";
    }