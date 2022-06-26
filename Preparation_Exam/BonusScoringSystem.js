function solve(arr){

    let studentsCount = Number(arr.shift());
    let allLectures = Number(arr.shift());
    let AdditionalBonus = Number(arr.shift());

    let maxAt = 0;
    let maxBonus = 0;

    for(let i = 0; i < studentsCount;i++){
          let attendances = arr[i];
          let bonus = (attendances / allLectures) * (5 * AdditionalBonus);
          if(bonus >= maxBonus){
              maxBonus = bonus;
              maxAt = attendances;
          }
            }
            console.log(`Max bonus: ${Math.ceil(maxBonus)}`);
            console.log(`The student has attended ${maxAt} lectures`);
}
solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  );