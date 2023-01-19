function nextDay(year,month,day){

    let year1 = Number(year);
    let month1 = Number(month) - 1;
    let day1 = Number(day);

    let date = new Date(year1,month1,day1);
    let nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    
    let outputYear = nextDate.getFullYear();
    let outputMonth = nextDate.getMonth() + 1;
    let optutDay = nextDate.getDate(); 

    console.log(`${outputYear}-${outputMonth}-${optutDay}`);

}
nextDay(2016, 9, 30);