function ages(num){

    let age = num;
    let personType;

   if(age >=0 && age <= 2){
       personType = 'baby';
   }else if(age > 2 && age <= 13){
       personType = 'child';
   }else if(age > 13 && age <= 19){
       personType = 'teenager';
   }else if(age > 19 && age <= 65){
       personType = 'adult';
   }else if(age >65){
       personType = 'elder';
   } 
   if(age < 0){
       console.log('out of bounds');
   }else {
    console.log(personType);
   }

  
}
ages(1);