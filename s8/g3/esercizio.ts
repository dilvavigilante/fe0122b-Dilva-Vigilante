abstract class Lavoratore {
    
    nome: string; 
    cognome: string;
    professione: string;
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;

    constructor( nome:string, cognome: string, professione:string, codredd: number, redditoannuolordo: number, tasseinps:number, tasseirpef:number ){
        this.nome = nome;
        this.cognome = cognome;
        this.professione = professione;
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    

        
    }
    
    abstract getUtileTasse():number
    
    abstract getTasseInps():number
    
    abstract getTasseIrpef():number
    
    abstract getRedditoAnnuoNetto(tasse: number, inps:number, irpef:number ):number
}

class Programmatore extends Lavoratore{
    codredd: string;

    constructor (nome: string, cognome: string, tasseinps: number, tasseirpef: number, codredd: string, redditoannuolordo: number ) {
        super  (nome, cognome, professione, tasseinps, tasseirpef, redditoAnnuoLordo)
        this.codredd = codredd; 
    };




}
