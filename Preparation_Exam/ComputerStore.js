function solve(data){
  

    let index = 0;
    let command = data[index];
    index++;

    let sum = 0;

    while(command !== 'regular'){
        if(command === 'special'){
            break;
        }

        let partPrice = Number(command);
        if (partPrice < 0){
            console.log('Invalid price');
            command = data[index];
            index++;
            continue;
        }
        sum += partPrice;
        command = data[index];
        index++;
    }
    let taxes = sum * 1.20 - sum;
    let totalPrice = sum + taxes;

    if(command === 'special'){
        totalPrice *= 0.90;
    }
    
    if(totalPrice < 0){
        console.log('Invalid order!');
    }else{
        console.log(`Congratulations you've just bought a new computer!\n`+
        `Price without taxes: ${sum.toFixed(2)}$\n`+
        `Taxes: ${taxes.toFixed(2)}$\n` +
        `-----------\n` +
        `Total price: ${totalPrice.toFixed(2)}$`);
    }
}
solve(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    );