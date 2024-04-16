function contador(arreglo){
    var neg=0;
    var zer=0;
    var pos=0;
    for (let i = 0; i < arreglo.length; i++){
        if(arreglo[i]<0){
            neg=neg+1;
        }
        else if(arreglo[i]==0){
            zer=zer+1;
        }
        else{
            pos=pos+1;
        }
    }
    document.write("<p> Numeros negativos en el arreglo: " + neg + "</p>");
    document.write("<p> Ceros en el arreglo: " + zer + "</p>");
    document.write("<p> Numeros positivos en el arreglo: " + pos + "</p>");
}
var arreglo=[-1, 2, -3, 4, 5, 0, 0, 0];
contador(arreglo);