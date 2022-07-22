/*
Sort array by object property
Write a function that takes an array of objects as argument
Sort the array by property b in ascending order
Return the sorted array
*/

function myFunction(arr) {
   return arr.sort((x, y) => {
      if (x.a + x.b < y.a + y.b) return -1;
      else if (x.a + x.b > y.a + y.b) return 1;
      return 0;    
   })
}

// or
 
function myFunction(arr) {
   const sort = (x, y) => x.b - y.b;
   return arr.sort(sort);
}
