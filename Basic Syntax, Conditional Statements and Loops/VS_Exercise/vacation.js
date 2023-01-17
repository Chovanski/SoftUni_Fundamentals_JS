function vacation (groupNum, typeOfGroup, dayOfWeek){

    let price = 0;
    let totalSum = 0;

    if(typeOfGroup == 'Students'){
        switch(dayOfWeek){
            case 'Friday':
                price = 8.45;
                break;
            case 'Saturday':
                price = 9.80;
                break;
            case 'Sunday':
                price = 10.46;
                break;
        }
    }else if(typeOfGroup == 'Business'){
        switch(dayOfWeek){
            case 'Friday':
                price = 10.90;
                break;
            case 'Saturday':
                price = 15.60;
                break;
            case 'Sunday':
                price = 16;
                break;
        }
    }else if(typeOfGroup == 'Regular'){
        switch(dayOfWeek){
            case 'Friday':
                price = 15;
                break;
            case 'Saturday':
                price = 20;
                break;
            case 'Sunday':
                price = 22.50;
                break;
        }
    }

    if(typeOfGroup == 'Students' && groupNum >= 30){
        price = price * 0.85;
    }else if(typeOfGroup == 'Business' && groupNum >= 100){
        groupNum = groupNum - 10;
    }else if(typeOfGroup == 'Regular' && groupNum >= 10 && groupNum <=20){
            price = price * 0.95;
    }

    totalSum = price * groupNum;

    console.log(`Total price: ${totalSum.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"    
    );