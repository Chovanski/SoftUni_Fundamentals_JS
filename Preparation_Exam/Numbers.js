function solve(sequence){


    // let arrOfStrings = sequence.split(" ");

    // let arrOfNumber = [];
    // let sum = 0;
    // for(let el of  arrOfStrings){
    //     let currentNumber = Number(el);
    //     arrOfNumber.push(currentNumber);
    //     sum += currentNumber;
    // }
    // let avg = sum / arrOfNumber.length;
    
    // let greaterThanAverage = [];
    // for(let el of arrOfNumber){
    //     if(el > avg){
    //         greaterThanAverage.push(el);
    //     }
    // }
    // greaterThanAverage = greaterThanAverage.sort((a,b)=>b-a);
    // for(let i = 0; i < 5 && i < greaterThanAverage.length; i++){
    //     console.log(greaterThanAverage[i]);
    // }

    let arrOfNumber = sequence.split(" ").map(Number);
    let sum = 0;
    for(let el of arrOfNumber){
        sum += el;
    }
    let avg = sum / arrOfNumber.length;
    arrOfNumber = arrOfNumber
    .filter(el => el > avg)
    .sort((x,y) => y-x)
    .slice(0,5);

    return arrOfNumber.length > 0 ? arrOfNumber.join(" ") : "No";
}
solve('10 20 30 40 50');