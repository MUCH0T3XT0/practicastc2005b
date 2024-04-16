function promedios(diccionario) {
    let tabla = "<table border='1'>";
    tabla += "<tr><th>Materia</th><th>Puntaje hasta el momento</th></tr>";
    
    // Iterar sobre las llaves del diccionario
    for (let materia in diccionario) {
        if (diccionario.hasOwnProperty(materia)) {
            // Calcular el promedio para la materia actual
            let calificaciones = diccionario[materia];
            let promedio = calificaciones.reduce((acumulador, valor) => acumulador + ((valor[0]* valor[1])/10), 0);
            
            // Agregar una fila a la tabla con la materia y su promedio
            tabla += "<tr><td>" + materia + "</td><td>" + promedio + "</td></tr>";
        }
    }
    
    tabla += "</table>";
    
    return tabla;
}
// La clave de los diccionarios corresponden a la materia, el indice 0 de los valores corresponde a la calificacion(del 1 al 10) mientras que el indice 1 de los valores corresponde a la ponderacion de dicha calificacion 
var arreglo = {
    "Historia": [[10, 2.5], [10, 5], [10, 1.5], [10, 2.5]],
    "Matematicas": [[7, 5], [8, 1], [9, 2.5], [9, 2.5]],
    "Fisica": [[6, 5], [5, 5], [10, 1.5], [8.5, 2.5]]
};

// Imprimir la tabla HTML en el documento
document.write("<h2>Promedio de las materias hasta ahora</h2>");
document.write(promedios(arreglo));
