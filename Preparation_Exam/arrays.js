function arraysDemo(arr){

   let sorted = arr.sort((a,b)=>{
      return a-b;
   });

   let result = [];
   for(let num of sorted){
       let lastEl = sorted.pop();
       let firstEl = sorted.shift();
       result.push(lastEl);
       result.push(firstEl);
   }
   console.log(result);

}
arraysDemo([1,21,3,52,69,31,2,18,94]);