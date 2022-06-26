function solve(input){

    let statusPirateShip = input.shift().split(">").map(Number);
    let WarShip = input.shift().split(">").map(Number);
    let maxHealth = Number(input.shift());
    

    let index = 0;
    let line = input[index];
    index++;



    while(line !== "Retire"){
        let tokens = line.split(" ");
        let i;

        switch(tokens[0]){
            case "Fire":
                i = Number(tokens[1]);
                let damage = Number(tokens[2]);
                if(i < 0 || i > WarShip.length - 1){
                    line = input[index];
                    index++;
                    continue;
                }
                WarShip[i] -= damage;
                if(WarShip[i] <= 0){
                   
                    return(`You won! The enemy ship has sunken.`);
                    
                }
                break;
            case "Defend":
                i = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                let dmg = Number(tokens[3]);
                // start index after endIndex ?
                if(i < 0 || i > statusPirateShip.length - 1 || endIndex < 0 || endIndex > statusPirateShip.length - 1){
                   line = input[index];
                   index++;
                   continue;
                }
                for(let x = i; x <= endIndex; x++){
                    statusPirateShip[x] = statusPirateShip[x] - dmg;
                    if(statusPirateShip[x] <= 0){
                        return(`You lost! The pirate ship has sunken.`);
        
                    
                    }
                }
              
            break;
            case "Repair":
               i = Number(tokens[1]);
               let health = Number(tokens[2]);
               if(i < 0 || i > statusPirateShip.length - 1){
                   line = input[index];
                   index++;
                   continue;
               }
               if(statusPirateShip[i] + health <= maxHealth){
                statusPirateShip[i] = statusPirateShip[i] + health;
               }else{
                   statusPirateShip[i] = maxHealth;
               }
               
            break;
            case "Status":
              let breakPoint = maxHealth * 0.20;
              let result = statusPirateShip.filter(el => el < breakPoint);
              console.log(result.length + " sections need repair.");
            break;
        }

        line = input[index];
        index++;
    }

    let WarShipResult = 0;
    let PirateShipResult = 0;

    for(let sections of WarShip){
        WarShipResult += sections;
    }
    for(let sections of statusPirateShip){
        PirateShipResult += sections;
    }
    let result = [
        `Pirate ship status: ${PirateShipResult}`,
        `Warship status: ${WarShipResult}`
    ];
    return result.join('\n');

}
console.log(solve((["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
))
console.log('--------------------------');
console.log(solve((["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])
))