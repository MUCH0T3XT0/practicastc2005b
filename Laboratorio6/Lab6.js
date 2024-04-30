

//Separador
let separador = document.createElement("hr");
document.body.appendChild(separador);
//Titulo
let elementoTitulo = document.createElement("h1");
elementoTitulo.textContent = "Preguntas";
document.body.appendChild(elementoTitulo);
//Preguntas del laboratorio
let listaSinOrden = document.createElement("ul");
document.body.appendChild(listaSinOrden);
let elemento1Lista = document.createElement("li");
elemento1Lista.textContent = "¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?";
let elemento4Lista = document.createElement("p");
elemento4Lista.textContent = "Si, debido a que puede mejorar aspectos como la seguridad, eficiencia experiencia de usuario. Al validar las entradas antes de enviarselos al servidor, se puede reducir la cantidad de solicitudes hechas al servidor.";
listaSinOrden.appendChild(elemento1Lista);
listaSinOrden.appendChild(elemento4Lista);

let elemento2Lista = document.createElement("li");
elemento2Lista.textContent = "¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?";
let elemento5Lista = document.createElement("p");
elemento5Lista.textContent = "Modificando el DOM se pueden eludir estas validaciones al eliminar o modificar los elementos del formulario. Igualmente es posible enviar datos directamente al servidor por medio de Postman por ejemplo";

listaSinOrden.appendChild(elemento2Lista);
listaSinOrden.appendChild(elemento5Lista);


let elemento3Lista = document.createElement("li");
elemento3Lista.textContent = "Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?";
let elemento6Lista = document.createElement("p");
elemento6Lista.textContent = "Siguen proporcionando una mejor experiencia al usuario, ofrecindole retroalimentacion inmediata y ayudandolo a evitar errores. Tambien puede evitar sobrecargar el servidor al enviar datos obviamente incorrectos";
listaSinOrden.appendChild(elemento3Lista);
listaSinOrden.appendChild(elemento6Lista);

document.body.appendChild(document.createElement("hr"));