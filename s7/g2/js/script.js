

class User {
   constructor (nome, cognome, email, password) {
       this.nome = nome;
       this.cognome = cognome;
       this.email = email;
       this.password = password
   }

}

let utente1 = new User('dilva', 'vigilante', 'vigilantedilva@gmail.com', 'password1' );
let utente2 = new User('francesco', 'pucci', 'puccifrancesco@gmail.com', 'password2' );
let utente3 = new User('adalgisa', 'fiordalisi', 'fiordalisiadalgisa@gmail.com', 'password3' );
let utente4 = new User('forrest', 'gump', 'gumpforrest@gmail.com', 'password4' );



localStorage.setItem('utente1', JSON.stringify(utente1))
localStorage.setItem('utente2', JSON.stringify(utente2))
localStorage.setItem('utente3', JSON.stringify(utente3))
localStorage.setItem('utente4', JSON.stringify(utente4))

console.log(JSON.parse(localStorage.getItem('utente1')).nome);