



/*
console.log(Math.floor(Math.random()*101))
if (budget==500){
    console.log("Sei a metà del badget")
}else if (budget==100){
  console.log("Stai per finire i soldi")
} 
*/



/*

let budget = 1000; 
let spesa= Math.round(Math.random() * 101);
console.log(budget);


function controllaBudget(budget, spesa ){
budget- spesa; 
console.log(controllaBudget);
}

}







function controllaBudget(budget, spesa){
 return budget - spesa; 
}

alert(controllaBudget); */




/*

let budget = 1000;

while (budget > 0) {
    var spesa = Math.floor(Math.random()) * 100;
    budget -= spesa;
    console.log(budget);
    
}



if (budget <= 500) {
    console.log("Hai metà budget"); 
} else if (budget <= 100) {
    console.log("Stai per finire i soldi"); 
}


*/

let num = 1000;

while (num > 100) {
    var prova = Math.floor(Math.random() *101); 
    console.log(prova); 
    num = num-prova; 
    console.log( "Il tuo badget é" + num); 
    console.log(num);
    if (num <= 500) {
        console.log("Hai metà budget");
    } if(num <= 150) 
        console.log("Stai per finire i soldi");
    } 

