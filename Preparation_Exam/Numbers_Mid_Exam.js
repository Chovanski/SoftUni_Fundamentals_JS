function solve(sequence){

    let arrOfNumbers = sequence.shift().split(" ").map(Number);
    let index = 0;
    let command = sequence[index];
    index++;

    let result = [];
    let i;
    while(command !== 'Finish'){
        let tokens = command.split(" ");
        let operation = tokens.shift();

        switch(operation){
            case 'Add':
                i = Number(tokens[0]);
                arrOfNumbers.push(i);
                
                break;
            case 'Remove':
                i = Number(tokens[0]);
                for(let j = 0; j < arrOfNumbers.length;j++){
                    if(arrOfNumbers[j] === i){
                        arrOfNumbers.shift();
                    }
                }
            
                
        }
        command = sequence[index];
        index++;
    }
   console.log(arrOfNumbers)
}
solve((["1 4 5 19",
"Add 1",
"Remove 4",
"Finish"])
);