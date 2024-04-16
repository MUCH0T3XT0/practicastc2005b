var random1 = Math.floor(Math.random() * 11);
var random2 = Math.floor(Math.random() * 11);
var respuesta = random1 + random2;
var inicio = new Date();
var entrada= prompt("Introduce la suma de estos dos numeros aleatorios: " + random1 + " + " + random2);
var fin = new Date();
var diferencia = (fin.getTime() - inicio.getTime())/1000;
if (respuesta == entrada){
    document.write("<h1>La respuesta es correcta!!</h1>");
}
else{
    document.write("<h1>La respuesta es incorrecta!!</h1>");
}
document.write("El tiempo tardado fue de: " + diferencia + " Segundos") 
