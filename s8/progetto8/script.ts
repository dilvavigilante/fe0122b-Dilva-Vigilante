fetch("Abbigliamento.json")
    .then(response => response.json())
    .then(vestiti => {
        vestiti.forEach((e: Vestiti) => {

            let vestiti: any = new Vestiti(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo)

            console.log(vestiti)
            
            console.log(`saldo: ${vestiti.getsaldocapo()}`)
            console.log(`prezzo finale: ${vestiti.getacquistocapo()}`);
            

            var select: any = document.querySelector('#tab');
            var riga = document.createElement("tr");
            select.append(riga);
            for (var prop in e) {
                var campi: any = document.createElement("td");
                campi.innerText = vestiti[prop];
                riga.append(campi);
            
            }


        })
    })

 

class Vestiti {
    id: number
    codprod: number
    collezione: string
    capo: string
    modello: number
    quantita: number
    colore: string
    prezzoivaesclusa: number
    prezzoivainclusa: number
    disponibile: string
    saldo: number

    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
        this.id = id
        this.codprod = codprod
        this.collezione = collezione
        this.capo = capo
        this.modello = modello
        this.quantita = quantita
        this.colore = colore
        this.prezzoivaesclusa = prezzoivaesclusa
        this.prezzoivainclusa = prezzoivainclusa
        this.disponibile = disponibile
        this.saldo = saldo
    }

    getsaldocapo(): number {
        return this.prezzoivainclusa * this.saldo/100
    }
    getacquistocapo(): number {
        return this.prezzoivainclusa - this.getsaldocapo()
    }
}



let maglia = new Vestiti(6, 2345, 'inverno', 'maglia', 2994, 9, 'verde', 16, 45.59, 'magazzino', 20)
//console.log(maglia)
let camicia = new Vestiti(7, 1134, 'autunno', 'camicia', 5689, 9, 'nero', 16, 37.89, 'magazzino', 20)
//console.log(camicia)
let jeans = new Vestiti(8, 8934, 'primavera', 'jeans', 3487, 9, 'grigio', 16, 65.79, 'negozio', 25)
//console.log(jeans)

// console.log(maglia.getsaldocapo());
// console.log(maglia.getacquistocapo());