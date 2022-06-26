function solve(input){

    let daysOfPlunder = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);
    
    let sum = 0;

    for(let i = 1; i <= daysOfPlunder; i++){
       sum += dailyPlunder;
       if(i % 3 === 0){
           sum += dailyPlunder * 0.50;
       }
       if(i % 5 === 0){
           sum -= sum * 0.30;
       }
    }

    if(sum >= expectedPlunder){
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    }else{
        let perc = (sum / expectedPlunder) *100;
        console.log(`Collected only ${perc.toFixed(2)}% of the plunder.`);
    }
    
}
solve((["5",
"40",
"100"])
);
solve((["10",
"20",
"380"])
)