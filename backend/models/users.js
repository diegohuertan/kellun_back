const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');



class Usuario {
    constructor(id,correo, contraseña, perfil) {
        this.id = id;
        this.correo = correo;
        this.contraseña = contraseña;
        this.perfil = perfil;
       
    }

    static getAll(callback) {
        connection.query('SELECT * FROM usuarios', (err, rows) => {
            if (err) {
                console.error(err.message);
                callback(err);
            } else {
                callback(null, rows);
            }
        });
    }


static validar(correo, contraseña , callback) {
    connection.query(
        'SELECT contraseña FROM usuarios WHERE correo = ?',
        [correo],
        (error, results) => {
            if (error) {
                console.error('Error al realizar la consulta:', error);
                callback(error, null); // Llama al callback con el error
            } else if (results.length > 0) {
                    
                    bcrypt.compare(contraseña, results[0].contraseña, function(err, result) {
                        if (result == true) {            
                        const token = jwt.sign({ correo: correo }, 'your_secret_key', { expiresIn: '1h' });
                        callback(null, { success: true, message: 'Inicio de sesión exitoso token de sesion creado' ,token: token});
                        console.log(result)


                    } else {
                        callback(null, { success: false, message: 'Credenciales de inicio de sesión no válidas' });
                        

                    }
                });
            
            } else {
                callback(null, { success: false, message: 'Credenciales de inicio de sesión no válidas' });
                
            }
        }
    );
}

    static create(usuarios, callback) {

        bcrypt.hash(usuarios.contraseña, saltRounds, (err, hash) => {
          if (err) {
            console.error(err.message);
            callback(err);
          } else {
            usuarios.contraseña = hash;
    
            connection.query('INSERT INTO usuarios (id, correo, contraseña, perfil) VALUES (?, ?, ?, ?)',
              [usuarios.id, usuarios.correo, usuarios.contraseña, usuarios.perfil],
              (err) => {
                if (err) {
                  console.error(err.message);
                  callback(err);
                } else {
                  callback(null);
                }
              }
            );
          }
        });
      }
    
    
    
    // Método estático para eliminar un contacto por su rut
    static deleteById(id, callback) {
        connection.query('DELETE FROM usuarios WHERE id = ?', [id], (err) => {
            if (err) {
                console.error(err.message);
                callback(err);
            } else {
                callback(null);
            }
        });
    }

    // Puedes agregar métodos para actualizar y eliminar contactos si es necesario
}

module.exports = Usuario;