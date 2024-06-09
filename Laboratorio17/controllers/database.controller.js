const books = require("../models/database.models.js");
const db = require('../util/database.js');


module.exports.test_db = async(request, response) => {
    let conn;

    try{;
        const conn = await db();
        const rows = await conn.execute("SELECT * FROM books")
        console.log(rows);
        const jsonS = JSON.stringify(rows);
        response.writeHead(200, {'Content-type':'text/html'});
        response.end(jsonS);
        await conn.release();
    }catch(e){
        console.log(e)
    }
};
module.exports.insert_books = async(req, res) => {
    res.render("database/database2",{
        insert: true
    });
};

module.exports.update_books = async(req, res) => {
    res.render("database/database",{
        update: true
    });
};


module.exports.post_insert_books = async(req, res) => {
    let conn;
    try{;
        titulo=req.body.titulo;
        serie=req.body.serie;
        autor=req.body.autor;
        const result= await books.save(titulo, serie, autor);
    }catch(e){
        console.log(e)
    }
    res.render("database/database",{
        update: true
    });
};

module.exports.post_update_books = async(req, res) => {
    let conn;

    try{;
        titulo=req.body.titulo;
        serie=req.body.serie;
        autor=req.body.autor;
        const result= await books.updateBook(titulo, serie, autor);
    }catch(e){
        console.log(e)
    }
    res.render("database/database",{
        update: true
    });
};