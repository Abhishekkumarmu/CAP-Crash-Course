
var data = {
    products : ["Rice", "Dal", "Salt"],
    quantity : [2, 3, 1],
    price : [60, 50, 20],
  
    total_price : function(){
                var sum=0;
                for(var i = 0;i<this.quantity.length;i++)
                {
                  sum = sum + (this.quantity[i] * this.price[i]);
                }
                return sum;
              }
  };
  
  
  console.log(data.total_price());