function isSmallCase(x)
{
  var lower = "abcdefghijklmnopqrstuvwxyz";

  for(var i=0; i<lower.length; i++)
  {
    if(x == lower[i])
    {
      return true;
    }

  }

  return false;
}

var result = isSmallCase("C");
console.log(result);
