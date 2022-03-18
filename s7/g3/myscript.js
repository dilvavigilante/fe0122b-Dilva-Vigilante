var bauMiao = document.getElementById('btn');

class user{
    constructor(n, c, e, p){

    this.nome = n;
    this.cognome = c;
    this.email = e;
    this.password = p;
    }

}

bauMiao.addEventListener('click', function(e){
    e.preventDefault()
//FASE 1 : creazioni variabili
    let nome = document.getElementById('nome').value
    let cognome = document.getElementById('cognome').value
    let email = document.getElementById('email').value
    let pass = document.getElementById('password').value
    let campi = document.querySelectorAll('input')
    let formValido = true;

//FASE 2: verifica validita dei campi
    campi.forEach(element => {
        if(element.value == ''){
            formValido = false;
            //document.querySelector(#${element.id} ~ div ).innerHTML = 'inserisci i dati'
            element.nextElementSibling.textContent = 'insirisci i dati'
        }else{
            element.nextElementSibling.textContent = ''
        }

    });

    if (formValido){
//FASE 3: creazione di un oggetto user tramite variabili di cui sopra

        var utente1 = new user(nome, cognome, email, pass)

//FASE 4: salvataggio dell/oggetto di cui fase 3 
        salva(utente1);
        location.href = "pagina.html";
       
    }
})

function salva(utente){

    let elementiSalvati = localStorage.getItem('utenti')
    let db = elementiSalvati == null ?[] : JSON.parse(elementiSalvati);
    db.push(utente)
    localStorage.setItem('utenti', JSON.stringify(db))
}



// dopo il log l'utente si manda ad un altra pagina mostrando una tabella con tutti gli utenti 

function mostraTabella(){}

//create element e append 