function login(input){

    let userName = input.shift();

    let isLogged = false;

    for(let i = 0; i < input.length; i++){
        let reversed = input[i].split('').reverse().join('');

        if(userName == reversed){
            console.log(`User ${userName} logged in.`);
            isLogged = true;
            break;
        }
        if(i < 3){
            console.log(`Incorrect password. Try again.`);
        }
    }
        if(!isLogged){
            console.log(`User ${userName} blocked!`);
        }
    
}
login(['sunny','rainy','cloudy','sunny','not sunny']);