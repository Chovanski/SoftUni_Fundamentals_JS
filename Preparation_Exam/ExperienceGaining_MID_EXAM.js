function solve(input){

    let amountOfExperienceToUnlock = Number(input.shift());
    let countOfBattles = Number(input[0]);

    let days = 0;
    let experience = 0;

    for(let i = 1; i <= countOfBattles ;i++){
          let currentPoints = Number(input[i]);
          if(i % 3 === 0){
            currentPoints += currentPoints * 0.15;
            
         }
         if(i % 5 === 0){
             currentPoints -= currentPoints * 0.10; 
         }
          experience += currentPoints;
    }
  
  




    
    
    // if(experience >= amountOfExperienceToUnlock){
    //     console.log(`Player successfully collected his needed experience for ${i} battles.`);
    // }else{
    //     let diff = amountOfExperienceToUnlock - experience;
    //     console.log(`Player was not able to collect the needed experience, ${diff.toFixed(2)} more needed.`)
    // }
    
}
// solve(([500,
//     5,
//     50,
//     100,
//     200,
//     100,
//     30])
//     );

// console.log(`=----------------`);
// solve(([500,
//     5,
//     50,
//     100,
//     200,
//     100,
//     20])
//     );
//     console.log('----------------');
    solve(([400,
        5,
        50,
        100,
        200,
        100,
        20])
        );