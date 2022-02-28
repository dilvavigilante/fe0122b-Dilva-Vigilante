


$(document).ready(function(){

    $("#iscr-news").click(function(){
        // alert("Sei iscritto!");
    let validare = $("input").val();

    if (validare == ""){
        $("#nome").next().text("da Compilare");
    } else { 
     $("#nome").next().text("")};


    let email = $("#email-1").val();
    if (email == ""){
        $("#email-1").next().text("da Compilare");
    } else { 
     $("#email-1").next().text("")};
 

let email2 = $("#email-2").val();

    if (email2== ""){
        $("#email-2").next().text("da Compilare");
    } else { 
     $("#email-2").next().text("")};

      if (email != email2){
        alert ("devi mettere email uguali!")

      }; 
      if (validare + email + email2 != "" && email == email2){
          alert ("grande ti sei iscritto")
      }; 
      

    });

    $("#pulisci-form").click(function(){
        $("#nome, #email-1, #email-2").val(""); 

    }); 


}); 





// Quando il documento è pronto...

// inizializzo una variabile di controllo a true
    
        //gestisco il click sul pulsante Iscriviti
        
        // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
        
        // nell'else uso next e text per impostare l'elemento span adiacente
        
        // assegno a due variabili il valore dei due campi email
        
        // ripeto la condizione nel nome anche per l'email
        
        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

        //invio del form se tutti i campi sono validi

    //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
    //posizionare un asterisco per identificare il campo obbligatorio. 
