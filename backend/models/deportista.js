const connection = require('../database/connection');


class Deportista {
    constructor(
        rut_deportista,
        email,
        telefono,
        direccion_comuna,
        direccion_numero,
        direccion_calle,
        club_origen,
        deportista_first_nombre,
        deportista_second_nombre,
        deportista_first_apellido,
        deportista_second_apellido,
        img,
        categoria,
        fecha_nacimiento
      ) {
        this.rut_deportista = rut_deportista;
        this.email = email;
        this.telefono = telefono;
        this.direccion_comuna = direccion_comuna;
        this.direccion_numero = direccion_numero;
        this.direccion_calle = direccion_calle;
        this.club_origen = club_origen;
        this.deportista_first_nombre = deportista_first_nombre;
        this.deportista_second_nombre = deportista_second_nombre;
        this.deportista_first_apellido = deportista_first_apellido;
        this.deportista_second_apellido = deportista_second_apellido;
        this.img = img;
        this.categoria = categoria;
        this.fecha_nacimiento = fecha_nacimiento;
      }
    

    static getAll(callback) {
        connection.query('SELECT * FROM deportista', (err, rows) => {
            if (err) {
                console.error(err.message);
                callback(err);
            } else {
                callback(null, rows);
            }
        });
    }

    static filterByrut(rut_deportista,callback){
        
        connection.query('SELECT * FROM deportista where rut_deportista = ?', [rut_deportista], 
        (err, rows) => {
            if (err) {
                console.error(err.message);
                callback(err, null);
            }
            else{
                callback(null, rows);
            }
            
        });
    }

    static filterByName(deportista_first_nombre,deportista_second_nombre,deportista_first_apellido,deportista_second_apellido,callback){
        
        connection.query('SELECT * FROM deportista where deportista_first_nombre = ? and deportista_second_nombre = ? and deportista_first_apellido = ? and deportista_second_apellido = ?',
         [deportista_first_nombre,
          deportista_second_nombre,
          deportista_first_apellido,
          deportista_second_apellido], 
         
        (err, rows) => {
            if (err) {
                console.error(err.message);
                callback(err, null);
            }
            else{
                callback(null, rows);
            }
            
        });
    }

    static filterByCategoria(categoria,callback){
        
        connection.query('SELECT * FROM deportista where categoria = ? ',
         [categoria], 
         
        (err, rows) => {
            if (err) {
                console.error(err.message);
                callback(err, null);
            }
            else{
                callback(null, rows);
            }
            
        });
    }

    static filterByOrigen(club_origen,callback){
        
        connection.query('SELECT * FROM deportista where club_origen = ?', [club_origen], 
        (err, rows) => {
            if (err) {
                console.error(err.message);
                callback(err, null);
            }
            else{
                callback(null, rows);
            }
            
        });
    }



    static create(deportista, callback) {
        connection.query('INSERT INTO deportista (rut_deportista, email, telefono, direccion_comuna, direccion_numero, direccion_calle, club_origen, deportista_first_nombre, deportista_second_nombre, deportista_first_apellido, deportista_second_apellido, img, categoria, fecha_nacimiento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [deportista.rut_deportista,
                deportista.email,
                deportista.telefono,
                deportista.direccion_comuna,
                deportista.direccion_numero,
                deportista.direccion_calle,
                deportista.club_origen,
                deportista.deportista_first_nombre,
                deportista.deportista_second_nombre,
                deportista.deportista_first_apellido,
                deportista.deportista_second_apellido,
                deportista.img,
                deportista.categoria,
               deportista.fecha_nacimiento,],
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
    
    // Método estático para eliminar un contacto por su rut
    static deleteById(deportista, callback) {
        connection.query('DELETE FROM deportista WHERE rut_deportista = ?', [rut_deportista], (err) => {
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

module.exports = Deportista;