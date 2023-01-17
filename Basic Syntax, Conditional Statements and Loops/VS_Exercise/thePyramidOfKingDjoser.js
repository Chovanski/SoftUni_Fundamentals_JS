function thePyramidOfKingDjoser(base, hight){

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let stepsCounter = 1;

    for(let i = base; i > 0; i -= 2){
        let totalBase = i - 2;

        if(totalBase > 0){
            let calcStones = totalBase * totalBase * hight; // formula for the stones
            stone += calcStones;

            if(stepsCounter % 5 === 0){
                let calcLapis = (i * 4 - 4) * hight; // formula for the lapislazulis
                lapisLazuli += calcLapis;
            }else{
                let marbleFormula = (i * 4 - 4) * hight; // formula for the marble
                marble += marbleFormula;
            }
            stepsCounter++;
        }
        gold = i * i * hight; //formula for the gold on the top of the pyramid
    }

    let calcHeight = hight * stepsCounter;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(calcHeight)}`);
}
thePyramidOfKingDjoser(11,1);