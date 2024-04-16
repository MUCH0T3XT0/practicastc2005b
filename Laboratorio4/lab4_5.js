function inverso(numero){
    var inverso= "";
    var numerostr= numero.toString();    
    for (let i = numerostr.length-1; i >= 0; i--){
        inverso += numerostr[i];
    }
    document.write("<p> El inverso de " + numero + " es "+ inverso + "</p>");
}
var numero= 123;
inverso(numero);