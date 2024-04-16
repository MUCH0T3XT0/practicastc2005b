var numero= prompt("Ingresa un numero: ");
numero= parseInt(numero);
if (!isNaN(numero)){
    document.write("<h2>Tabla de numeros, cuadrados y cubos hasta " + numero + "</h2>");
    document.write("<table border='1'>");
    document.write("<tr><th>Num</th><th>Cuadrado</th><th>Cubo</th></tr>");
    for (var i= 1; i<= numero; i++){
        var cuadrado = i * i
        var cubo = i * i * i
        document.write("<tr>");
        document.write("<td>" + i + "</td>");
        document.write("<td>" + cuadrado + "</td>");
        document.write("<td>" + cubo + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}
else{
    document.write("<p>Por favor, ingresa un número válido.</p>");
}