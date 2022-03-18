interface Smartphone {
	carica: number;    // rappresenta il quantitativo di euro disponibile per le chiamate
	nchiamate: number; // rappresenta il numero di chiamate effettuate con il cellulare.
   
    ricarica(unaRicarica:any): void
    chiamata(minutiDurata:any):void
    number404():number
    getNumeroChiamate():void
};

class User implements Smartphone{
    carica: number
    nchiamate: number
    constructor(carica: number, nchiamate: number){
          this.carica=carica
          this.nchiamate=nchiamate
    };
    public ricarica(unaRicarica:any): void{
         this.carica += unaRicarica
    };
     public chiamata(minutiDurata:any):void{  // effettua una chiamata 
        this.nchiamate += 1
        this.carica -= (minutiDurata*0.20)
     };

     public numero404():number{ //restituisce il valore della carica disponibile 
         return this.carica
     }
     public getNumeroChiamate():number{ //restituisce il valore della variabile d'istanza nchiamate
         return this.nchiamate

    } 
    public azzeraChiamate():void{
      this.nchiamate = 0
    }
}


let pippa = new User (50,10)

console.log(pippa)

pippa.chiamata(25)

console.log(pippa)





// class SecondUser implements Smartphone{ }

//class ThirdUser implements Smartphone{ }



class mammamia extends User{
    constructor (carica:number, nchiamate:number){
        super(carica,nchiamate)
    }
}

public chiamata(minutiDurata:any):void{
    this.nchiamate +=1
    this.carica -= (minutiDurata*0.25)
}

}

