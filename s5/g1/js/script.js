
const dataAttuale = new Date();  //Richiamare la data attuale

document.write(dataAttuale );   //Mostrarla in una pagina HTML 


document.write( innerHTML= "  " + dataAttuale.getDate() +  "  " + dataAttuale.getMonth() + "  " + dataAttuale.getHours() +  "  " + dataAttuale.getMinutes());




var dataFormat = new Date (); 
document.write(innerHTML =  " " +  dataFormat.getDate() + '-' + dataFormat.getMonth() + '-'+ dataFormat.getFullYear()); 


var date = new Date();
/*result = date.toLocaleString();
document.write( " " + result);  */

var date = new Date(); 
result = date.toLocaleDateString(); 
window.alert( " " + result); 



var date = new Date();
result = date.toLocaleTimeString();
console.log(result);