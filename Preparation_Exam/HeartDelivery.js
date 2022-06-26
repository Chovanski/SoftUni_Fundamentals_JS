function solve(input){

    let houses = input.shift().split('@').map(Number);
    let cupidon = 0;

    while(input[0] != 'Love!'){
        let tokens = input.shift().split(' ');
        let jump = Number(tokens[1]);

        cupidon += jump;

        if(cupidon >= houses.length){
            cupidon = 0;
        }

        if(houses[cupidon] == 0){
            console.log(`Place ${cupidon} already had Valentine's day.`);
        }else{
           houses[cupidon] -= 2;
           if(houses[cupidon] == 0){
               console.log(`Place ${cupidon} has Valentine's day.`);
           }
        }
    }
    let missed = 0;
    for(let house of houses){
        if(house > 0){
            missed++;
        }
    }

    console.log(`Cupid's last position was ${cupidon}.`);

    if(missed > 0){
        console.log(`Cupid has failed ${missed} places.`);
    }else{
        console.log(`Mission was successful.`);
    }
}
solve(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"]
);