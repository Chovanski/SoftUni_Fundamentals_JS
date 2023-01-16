function sumOfOddNumbers(n){

let sum = 0;
let counetr = 0;

for(let i = 1; i <= 100; i++){
    if(i % 2 !== 0){
        console.log(i);
        sum += i;
        counetr++;

        if(counetr === n){
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}
}
sumOfOddNumbers(5);