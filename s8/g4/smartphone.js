var FirstUser = /** @class */ (function () {
    function FirstUser(carica, nchiamate) {
        this.carica = carica;
        this.nchiamate = nchiamate;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.nchiamate += 1;
        this.carica -= (minutiDurata * 0.20);
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.nchiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.nchiamate = 0;
    };
    return FirstUser;
}());
var pippa = new FirstUser(50, 10);
console.log(pippa);
// class SecondUser implements Smartphone{ }
//class ThirdUser implements Smartphone{ }
