var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

let obj = {
sales : sales,
calculateSalesTotals : function(){
  // console.log(this.sales);
  let arr=[];
  for(let i =0;i<this.sales.length;i++){
    let obj={};

    obj["item"]=this.sales[i].item;
    obj["stock"]=this.sales[i].stock;
    obj["original"]=this.sales[i].original;
    
    if(this.sales[i].discount===undefined){
  //     //writ code for non discounted objects
      obj["sale"]=this.sales[i].original;
      obj["total"]=this.sales[i].original * this.sales[i].stock;
    }
    else{
      // for discounted objects
      obj["discount"]=this.sales[i].discount;
      obj["sale"]=
      this.sales[i].original-
      this.sales[i].original * this.sales[i].discount;
      obj["total"]=obj.sale * this.sales[i].stock;
    }
    arr.push(obj);
  }
  return arr;
},

};
// obj.calculateSalesTotals();
let arr=obj.calculateSalesTotals();
console.log(arr);