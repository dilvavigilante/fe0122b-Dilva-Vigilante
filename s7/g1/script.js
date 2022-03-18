
var bauMiao = document.getElementById('btn');
class User {
   constructor(nome, cognome, email, password) {
      this.nome = nome;
      this.cognome = cognome;
      this.email = email;
      this.password = password;

   }

}


bauMiao.addEventListener('click', function (e) {
   e.preventDefault()

   let nome = document.getElementById('nome').value
   let cognome = document.getElementById('cognome').value
   let email = document.getElementById('email').value
   let password = document.getElementById('password').value


   if (nome == '') {
      document.querySelector('#nome ~ div').innerHTML = 'inserisci i dati'
   } else {
      document.querySelector('#nome ~ div').innerHTML = '';
      localStorage.SetItem('nome', JSON.stringify(nome))
   }

   if (cognome == '') {
      document.querySelector('#cognome ~ div').innerHTML = 'inserisci i dati'
   } else {
      document.querySelector('#cognome ~ div').innerHTML = '';
      localStorage.SetItem('cognome', JSON.stringify(cognome))
   }

   if (email == '') {
      document.querySelector('#email ~ div').innerHTML = 'inserisci i dati'
   } else {
      document.querySelector('#email ~ div').innerHTML = '';
      localStorage.SetItem('email', JSON.stringify(email))
   }

   if (password == '') {
      document.querySelector('#password ~ div').innerHTML = 'inserisci i dati'
   } else {
      document.querySelector('#password ~ div').innerHTML = '';
      localStorage.SetItem('password', JSON.stringify(password))
   }

});