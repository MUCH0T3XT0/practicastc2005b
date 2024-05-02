
const http = require('http');
const path = require('path');
const fs   = require('fs');


const server = http.createServer( (request, response) => {    
    console.log(request.url);
    
    switch(request.url){
        case "/":
            response.setHeader('Content-Type', 'text/plain');
            response.write("URL index/");
            response.end();   
            break;
        case "/laboratorio3":
            response.setHeader('Content-Type', 'text/html');
            const lab3 = fs.readFileSync(path.resolve(__dirname, '../Laboratorio3/Laboratorio3.html'), 'utf8')    
            response.write(lab3)
            response.end();
            break;
        case "/laboratorio6":
            response.setHeader('Content-Type', 'text/html');
            const lab6 = fs.readFileSync(path.resolve(__dirname, '../Laboratorio6/Lab6_2.html'), 'utf8')  
            response.write(lab6);
            response.end();   
            break;
        case "/form_method":
            if(request.method == "GET"){
                response.setHeader('Content-Type', 'text/html');
                const html = fs.readFileSync(path.resolve(__dirname, './form.html'), 'utf8')
                response.write(html);
                response.end();  
            }else if(request.method == "POST"){
                let body = [];
                request
                .on('data', chunk => {
                    body.push(chunk);
                })
                .on('end', () => {
                    body = Buffer.concat(body).toString();
                    fs.writeFileSync('fecha_citas.txt', body);
                    const fecha = Date(body.split('&')[0].split('=')[1]);
                    console.log("Fecha: " + fecha);
                    const nombre = body.split('&')[1].split('=')[1];
                    console.log("Nombre: " + nombre);
                    const numero = body.split('&')[2].split('=')[1];
                    console.log("Numero: " + numero);
                    response.setHeader('Content-Type', 'application/json');
                    response.statusCode = 200;
                    response.write('{code:200, msg:"Ok POST"}');
                    response.end();
                });  
            }    
            break;
        default:
            response.statusCode = 404;
            response.end();
            break;
    }

});
server.listen(3000);