
const db = require('../util/database.js');
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    exports.save = async function(titulo, serie, autor) {
        try {
            const connection = await db();
    
            const result = await connection.execute(
                'INSERT INTO books (Title, SeriesID, AuthorID) VALUES (?, ?, ?)',
                [titulo,serie, autor]
            );
    
            await connection.release();
            return result;
        } catch (error) {
            throw error; // Re-throw the error for proper handling
        }
    }
    //Este método servirá para obtener los permisos de un usuario
    exports.updateBook = async function(nombre, serie, autor) {
        try {
            const connection = await db();
            const result = await connection.execute('UPDATE books SET Title = ? , SeriesID = ?, AuthorID = ? WHERE BookID = (Select BookID from books ORDER BY BookID DESC LIMIT 1)',
             [nombre, serie, autor]);
            await connection.release();
            return result;
        } catch (error) {
            throw error; // Re-throw the error for proper handling
        }
    }