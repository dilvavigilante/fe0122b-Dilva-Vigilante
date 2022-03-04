

//Esempio di funzione

function saluto() {
    return "Ciao a tutti";
}
console.log(saluto());

//Esempio di funzione Freccia 

var saluto =() => {return "Ciao a tutti questa è una funzione Freccia "}; 
console.log(saluto());



//Esempio di funzione con closures

function operazioni() {
    var num = 10;

    function somma() {
        console.log( num + num);
    }
    return somma (); 
}
var numero1 = operazioni(); 


//Esempio di Operatori di comparazione


