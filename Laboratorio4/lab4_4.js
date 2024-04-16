function promedios(arreglo) {
    const arreglo_promediado = [];
    for (let i = 0; i < arreglo.length; i++) {
        let suma = 0;
        for (let x = 0; x < arreglo[i].length; x++) {
            suma += arreglo[i][x];
        }
        const promedio = suma / arreglo[i].length;
        arreglo_promediado.push(promedio);
    }
    return arreglo_promediado;
}

var arreglo = [[1, 2, 3, 1, 2], [5, 6, 7, 2, 3], [5, 5, 5, 5, 5]];
const promedios_arreglo = promedios(arreglo);
document.write("<p>Los promedios de los arreglos son: " + promedios_arreglo.join(", ") + "</p>");
