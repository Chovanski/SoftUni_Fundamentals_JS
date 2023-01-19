function englishNameOfTheLastDigit(digit){

    let nums = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];

    let lastDigit = String(digit).split('').pop();
    lastDigit = Number(lastDigit);
    console.log(nums[lastDigit]);
}
englishNameOfTheLastDigit(512);

