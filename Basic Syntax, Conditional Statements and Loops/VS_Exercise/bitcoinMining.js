function bitcoinMining(numbers){

    let dayCounter = 0;
    let firsPurchase = 0;
    let bitcoinPrice = 11949.16;
    let goldPricePerGram = 67.51;
    let bitcoins = 0;
    let bitcoiner = 0;
    let gold = 0;

    for(let i = 0; i < numbers.length; i++){
        dayCounter++;
        let dailyEarnings = numbers[i];
        let currentBitties = 0;

        if(dayCounter % 3 === 0){
            dailyEarnings *= 0.7;
        }

        dailyEarnings *= goldPricePerGram;
        gold += dailyEarnings;

        if(gold >= bitcoinPrice){
            bitcoiner++;
            if(bitcoiner === 1){
                firsPurchase = i + 1;
            }
            currentBitties = Math.floor(gold / bitcoinPrice);
            gold = gold - bitcoinPrice * currentBitties;
            bitcoins += currentBitties;
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    
    if(bitcoins > 0){
        console.log(`Day of the first purchased bitcoin: ${firsPurchase}`);
    }
    console.log(`Left money: ${gold.toFixed(2)} lv.`);
}
bitcoinMining([100,200,300]);