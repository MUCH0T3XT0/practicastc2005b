
//fs es el módulo que contiene las funciones para 
//manipular el sistema de archivos
const filesystem = require('fs');

//1. Una función que reciba un arreglo de números y devuelva su promedio.
function getaverage(arreglo) {
    if (arreglo.length === 0) {
        return 0;
    }
    const sum = arreglo.reduce((acumulador, numero) => acumulador + numero, 0);
    const result = sum / arreglo.length;
    return result;
}
const arreglo = [5, 10, 15, 20];
const promedio = getaverage(arreglo);
console.log("El promedio es:", promedio);

//2. Una función que reciba un string y escriba el string en un archivo de texto.
function escribirEnArchivo(texto) {
    filesystem.writeFileSync('archivo.txt', texto);
    console.log("Se escribio correctamente en el archivo");
}
const texto = "Hola, mundo!";
escribirEnArchivo(texto);


//Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.
//3. Implementacion de validacion de entradas de automatas(Racket como lenguaje original)


// (search char char list) → char
// Devuelve el siguiente estado dado el estado actual y el símbolo de transición
function search(state, sym, trans) {
    if (trans.length === 0) {
        return [];
    } else if (trans[0][0] === state && trans[0][1] === sym) {
        return trans[0][2];
    } else {
        return search(state, sym, trans.slice(1));
    }
}

// (route list list list list) → boolean
// Valida si la entrada del autómata es válida
function route(trans, state, fnl, ent) {
    if (ent.length === 0){
        return fnl.includes(state);
    }else {
        return route(trans, search(state, ent[0], trans), fnl, ent.slice(1));
    }
}

// (validate list list) → list
// Devuelve los resultados de las entradas introducidas en forma de lista
const respuesta3 = ["1", "2"];
function validate(automata, ent) {
    return "La entrada es ".concat(route(automata[0], automata[2], automata[4], ent))
}

// Ejemplo de uso
const automata = [
    // Definición de transiciones: (estado_actual, símbolo, estado_siguiente)
    [['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'a', 'q3'], ['q3', 'a', 'q2']],
    //Alfabeto
    ['a', 'b'],
    // Estado inicial
    'q0',
    // Posibles estados
    ['q0', 'q1', 'q2', 'q3'],
    // Estado final
    ['q3']
];

const entrada = ['a', 'b', 'a', 'a'];
    
console.log(validate(automata, entrada)); // Salida: [ true ]

const http = require('http');

const server = http.createServer( (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="utf-8">
        <title>Primer laboratorio</title>
            <style>
            /* Estilos para el cuerpo del documento */
            body {
                font-family: Arial, sans-serif;
                margin: 150px;
                background-color:#df572e;
                align-items: center;
            }
            
            /* Estilos para los títulos */
            h1, h2 {
                font-size: 95%;
                color: #ffffff;
                text-align: center;
                border: 2px solid #3ce0cd; /* Borde sólido de 2px de grosor */
                background-color: #333;
                padding: 10px; /* Espacio interno alrededor del texto */
                border-radius: 10px; /* Borde redondeado */
                display: inline-block; /* Para que el borde se ajuste al contenido */
            }
            h3 {
                font-size: 95%;
                color: #07a00f;
                text-align: center;
                border: 2px solid #ffff; /* Borde sólido de 2px de grosor */
                background-color: #333;
                padding: 10px; /* Espacio interno alrededor del texto */
                border-radius: 10px; /* Borde redondeado */
                display: inline-block; /* Para que el borde se ajuste al contenido */
            }
            /* Estilos para los párrafos */
            p {
                line-height: 1.6;
                font-size: 95%;
                color: #333;
                text-align: center;
                border: 2px solid #ffff;
                background-color: #ffff;
                padding: 10px;
                display: inline-block;
                
            }
            p.encabezado {
                font-size: 95%;
                color: #ff8000;
                text-align: center;
                border: 2px solid #ffff;
                background-color: #333;
                padding: 10px;
                border-radius: 10px; /* Borde redondeado */
                display: inline-block;
            }
            p.divisor {
                font-size: 95%;
                color: #07a00f;
                text-align: center;
                border: 2px solid #ffff;
                background-color: #333;
                padding: 10px;
                border-radius: 10px; /* Borde redondeado */
                display: inline-block;
            }
            
            /* Estilos para las imágenes */
            img {
                display: block;
                margin: 0 auto;
                
            }
            
            /* Estilos para las listas ordenadas */
            ol {
                margin-left: 20px;
                color: #ffff;
            }
            
            /* Estilos para los elementos de lista */
            li {
                margin-bottom: 10px;
                text-align: left;
                margin-top: 20px;
            }
            
            /* Estilos para los enlaces */
            a {
                color: blue;
                text-decoration: none;
            }
            
            a:hover {
                text-decoration: underline;
            }
            
            /* Estilos para las líneas horizontales */
            hr {
                border: 2px solid #ccc;
                margin: 20px 0;
            }
        </style>
    </head>
    <body>
        <p class= "encabezado">A01276139 04/04/2024</p>
        <hr/>
        <h1>¿Quien soy?
        <br>
            <p>Soy Jaime Trujillo Ruiz, tengo 20 años y actualmente estoy cursando el cuarto semestre de la carrera de ingenieria en tecnologias computacionales</p>
        </h1>
        <hr/>
        <h1>¿Cuales son mis intereses?
            <p>Disfruto pasando mi tiempo libre viendo peliculas, series, leyendo novelas y jugando videojuegos. Ultimamente estoy muy interesado en los temas de inteligencia artificial y machine learning</p>
        </h1>
        <hr/>
        <h1>¿Cuales son mis habilidades y puntos fuertes?
            <br>
            <p>Tengo buena logica y habilidades de trabajo en equipo asi como de resolucion de problemas</p>
        </h1>
        <hr/>
        <p class="divisor">Preguntas a responder</p>
        <hr/>
        <h2>¿Cuál es la diferencia entre Internet y la World Wide Web?
            <p>El internet es una gigantesca red de computadoras conectadas entre si alrededor del mundo, mientras que la World Wide Web es una coleccion de paginas que se encuentra sobre esa red de computadoras</p>
        </h2>
        <hr/>
        <h2>¿Cuáles son las partes de un URL?</h2>
        <br>
            <h3>Los componentes de una url se componen de:
                <ol>
                    <li>Protocolo de red</li>
                    <li>Host o dominio principal</li>
                    <li>Ruta o via de acceso</li>
                    <li>Serie de consulta</li>
                </ol>
            </h3>
        <hr/>
        <h2>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?
            <p>Estos metodos tienen la funcion de solicitar datos de un servidor, devuelve los encabezados HTTP, enviar datos al servidor, aplicar modificaciones parciales a un recurso y eliminar un recurso especifico respectivamente</p>
        </h2>
        <hr/>
        <h2>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?
            <p>Se utiliza el metodo POST debido a qu es posible con este enviar datos del navegador al servidor</p>
        </h2>
        <hr/>
        <h2>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?
            <p>Cuando le damos clic izquierdo a una URL, el navegador envia una solicitud GET para obtener la pagina correspondiente</p>
        </h2>
        <hr/>
        <h2>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?
            <p>No, significa que la solicitud ha sido procesada correctamente y que ha sido exitosa</p>
        </h2>
        <hr/>
        <h2>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?
            <p>Este error se produce cuando el servidor web no puede encontrar la pagina solicitada por el cliente, y se suele dar con problemas al escribir la url o con el servidor. En ambos casos considero que no se trata de la responsabilidad del desarrollador corregir dichos errores. Sin embargo, considero que el desarrollador si tendria la responsabilidad si el error fuera producida por una pagina movida o eliminada</p>
        </h2>
        <hr/>
        <h2>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?
            <p>Aqui la responsabilidad recae tanto en el desarrollador como en el administrador del sitio web. Esto debido a que este error es producido en el servicio interno del sitio web. Al ser un problema interno, aqui la responsabilidad recae en el staff del servicio web</p>
        </h2>
        <hr/>
        <h2>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</h2>
        <h3>Un atributo desaprobado es uno considerado como obsoleto, algunos ejemplos de estos son:
            <ol>
                <li>acronym</li>
                <li>applet</li>
                <li>frame, frameset y noframes</li>
                <li>align</li>
            </ol>
        </h3>
        <hr/>
        <h2>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?
            <p>HTML5 se trata de la ultima version de HTML. Aunque muchas de las anteriores etiquetas estan sin cambios, varias se simplificaron y se basa en un estandar completamente nuevo. HTML5 es mas dinamico que la version anterior e incluye elementos multimedia y nuevas etiquetas.</p>
        </h2>
        <hr/>
        <h2>¿Qué componentes de estructura y estilo tiene una tabla?
            <p>La etiqueta "table" define el inicio y el fin de la tabla de HTML. La etiqueta "tr" define una fila en la tabla. La etiqueta "td" define una celda de datos en una fila de la tabla. La etiqueta "th" define una celda de encabezado. Los atributos "colspan" y "rowspan" permiten varias celda en una celda, tanto horizontal como verticalmente.</p>
        </h2>
        <hr/>
        <h2>¿Cuáles son los principales controles de una forma HTML5?
            <br>
            <h3>Elementos para la validacion restringida en HTML5:
                <ol>
                    <li>El atributo required en los elementos "input", "select" y "textarea2 indica que se debe ingresar algún dato.</li>
                    <li>El atributo pattern en el elemento "input" restringe el valor para que concuerde con una expresión regular específica.</li>
                    <li>Los atributos min y max del elemento "input" restringen los valores máximos y mínimos que pueden ser ingresados.</li>
                    <li>El atributo step del elemento "input" (cuando se usa en combinación con los atributos min y max) restringe la granularidad de los valores ingresados. Un valor que no se corresponda con un valor permitido no será validado.</li>
                    <li>El atributo maxlength de los elementos "input" y "textarea" restringe el máximo número de caracteres que el usuario puede ingresar.
                    <li>Los valores url y email para type restringen el valor para una URL o dirección de correo válida respectivamente.</li>
                </ol>
            </h3>
        </h2>
        <hr/>
        <h2>¿Qué tanto soporte HTML5 tiene el navegador que utilizas?
            <br>
            <p>Mi navegador tiene 538 de 571 puntos(el navegador es Chrome)</p>
        </h2>
        <hr/>
        <h2>Sobre el ciclo de vida y desarrollo de los sistemas de información:</h2>
        <br>
        <h2> ¿Cuál es el ciclo de vida de los sistemas de información?
            <br>
            <p>Este ciclo se refiere al enfoque sistematico que organiza las distintas etapas involucradas en la construccion y mantenimiento de sistemas de informacion. Proporcionando una estructura para planificar, estructurar y controlar el proceso de desarrollo de software.</p>
        </h2>
        <br>
        <h2>¿Cuál es el ciclo de desarrollo de sistemas de información?</h2>
        <h3>Las etapas se dividen en:
            <ol>
                <li>Planificacion: Tareas previas que influiran decisivamente en la finalizacion con exito del proyecto</li>
                <li>Analisis: Se intenta descubrir que es lo que realmente se necesita y se llega a una comprension adecuada de los requerimientos de sistema</li>
                <li>Diseño: Se estudian alternativas de implementacion para el sistema de informacion. Este proceso es iterativo.</li>
                <li>Implementacion: Se seleccionan las herramientas y se empieza a construir el sistema</li>
                <li>Pruebas: Detectar errores mediante iteraciones que prueban la funcionalidad de los prototipos creados</li>
                <li>Validacion: Validacion de la implementacion hecha con las reiteraciones de las pruebas</li>
                <li>Instalacion o despliegue: Planificar el entorno en el que sistema debe funcionar, tanto hardware como software.</li>
                <li>Uso y mantenimiento: Se eliminan los defectos que se detectan durante su vida util, adaptarlo a nuevas necesidades y añadirle nuevas funcionalidades.</li>
            </ol>
        </h3>
        <hr/>
        <p class="encabezado">Editor Visual Studio Code: https://code.visualstudio.com/</p>
        <hr/>
        <h1>Preguntas Laboratorio3
        <br>
            <p> ¿Cuál es tu recomendación sobre el uso de !important en un CSS? El uso de !important debe evitarse por que puede ser dificil depurar el codigo despues si se abusa de este, tambien lo vuelve mas complicado de entender</p>
            <p>Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado? Debido a que el formato, tamaño y resolucion de la imagen puede afectar el tiempo de carga de esta misma, y por ende, su rendimiento</p>
            <p>Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt? Mi recomendacion es elegir % cuando se quiere que los elementos sean relativos a la pagina, por lo que es util para hacer paginas que sirvan tanto para telefono, como para pc por ejemplo. El caso de px sirve para imagenes y elementos que puedan alterar su calidad al modificar su propia resolucion. Por otra parte, los pts los recomiendo para hojas de estilo para impresiones</p>
            <p>¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio? Por que al reducirse el tamaño del archivo css, los tiempos de carga se hacen mas rapidos al tardas menos tiempo de pasar el archivo del servidor, al navegador del usuario</p>
        </h1>
        <hr/>
        <h3>Referencias
            <ol>
                <li>s-a(marzo 12, 2019)¿Cuál es la diferencia entre internet y la web? (y por qué muchos las confunden).BBC.https://www.bbc.com/mundo/noticias-47538812#:~:text=Internet%20es%20una%20inmensa%20red,para%20acceder%20a%20la%20web.</li>
                <li>s-a(enero 4, 2024). Los componentes de un URL. IBM. https://www.ibm.com/docs/es/cics-ts/6.1?topic=concepts-components-url</li>
                <li>Blancarte, O.(diciembre 3, 2018). Métodos HTTP (REST). https://www.oscarblancarteblog.com/2018/12/03/metodos-http-rest/</li>
                <li>Barron, B(abril 8,2021). HTML vs HTML5: Conoce las diferencias cruciales entre ellos. Kinsta. https://kinsta.com/es/blog/html-vs-html5/#:~:text=A%20diferencia%20de%20las%20versiones,juegos%20o%20animaciones%20con%20%C3%A9l.</li>
                <li>s-a(diciembre 15, 2023).¿Qué es el ciclo de vida del desarrollo del sistema?.KeepCoding.https://keepcoding.io/blog/ciclo-de-vida-del-desarrollo-del-sistema/#:~:text=El%20ciclo%20de%20vida%20del%20desarrollo%20del%20sistema%20es%20un,proceso%20de%20desarrollo%20de%20software.</li>
                <li>Cervantes, A. (2015, julio 20). Ciclo de vida de un sistema de información. Recuperado de https://www.gestiopolis.com/ciclo-de-vida-de-un-sistema-de-informacion/</li>
            </ol>
        </h3>
    </body>
</html>
    `);
    response.end();
});
server.listen(8080);



