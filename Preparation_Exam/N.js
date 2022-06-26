function Numbers(input){

let arrOfNumber = input.split(" ").map(Number);
let sum = 0;

for(let el of arrOfNumber){
    sum += el;
}
let avg = sum / arrOfNumber.length;

arrOfNumber = arrOfNumber.filter((el)=>el>avg).sort((x,y)=>y-x).slice(0,5);

return arrOfNumber.length > 0 ? arrOfNumber.join(" ") : 'No';
}
console.log(Numbers('10 20 30 40 50'));


