function rounding (num, rounder){

   let a = Number(num);
   let b = Number(rounder);

   if(b > 15){
       b = 15;
   }

   a = a.toFixed(b);
   console.log(parseFloat(a));
}

rounding(3.5,3);