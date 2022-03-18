
/*l programma prevede due ipotetici giocatori, che devono indovinare un numero compreso tra 1 e 100 (zero escluso), vince chi dei due 
giocatori ha azzeccato il numero casuale, e in caso contrario quale dei due si è avvicinato di più al numero. */

let giocatore1 : number = 10;
let giocatore2 : number = 70;

function caos(){
    let random: number = Math.floor(Math.random() * (100-1) +1)
    console.log(random);

    if(random == giocatore1){
       console.log('complimenti giocatore1, hai vinto!');
    }else if (random == giocatore2){
        console.log('complimenti giocatore2, hai vinto!');
    }else{
        let sottr1: number = Math.abs(random - giocatore1);
        let sottr2: number = Math.abs(random - giocatore2);
        console.log(sottr1);
        console.log(sottr2);
         
        if(sottr1 < sottr2){
          console.log('Mannaggia! il giocatore1 non ha indovinato il numero ma è comunque quello che si è avvicinato di più');
        }else{
            console.log('Puffappero! il giocatore2 non ha indovinato il numero ma è comunque quello che si è avvicinato di più');
        }; 

    };


};

caos();