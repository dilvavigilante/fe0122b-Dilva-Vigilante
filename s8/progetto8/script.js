fetch("Abbigliamento.json")
    .then(function (response) { return response.json(); })
    .then(function (vestiti) {
    vestiti.forEach(function (e) {
        var vestiti = new Vestiti(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
        console.log(vestiti);
        console.log("saldo: ".concat(vestiti.getsaldocapo()));
        console.log("prezzo finale: ".concat(vestiti.getacquistocapo()));
        var select = document.querySelector('#tab');
        var riga = document.createElement("tr");
        select.append(riga);
        for (var prop in e) {
            var campi = document.createElement("td");
            campi.innerText = vestiti[prop];
            riga.append(campi);
        }
    });
});
var Vestiti = /** @class */ (function () {
    function Vestiti(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Vestiti.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    Vestiti.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return Vestiti;
}());
var maglia = new Vestiti(6, 2345, 'inverno', 'maglia', 2994, 9, 'verde', 16, 45.59, 'magazzino', 20);
console.log(maglia);
var camicia = new Vestiti(7, 1134, 'autunno', 'camicia', 5689, 9, 'nero', 16, 37.89, 'magazzino', 20);
console.log(camicia);
var jeans = new Vestiti(8, 8934, 'primavera', 'jeans', 3487, 9, 'grigio', 16, 65.79, 'negozio', 25);
console.log(jeans);
//console.log(maglia.getsaldocapo());
// console.log(maglia.getacquistocapo());
