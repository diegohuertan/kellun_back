const connection = require('../database/connection');

class Socio {
    constructor(
        rut_socio,
        email,
        estado_civil_socio,
        fecha_de_ingreso_socio,
        profesion_socio,
        observaciones_socio,
        telefono,
        direccion_comuna,
        direccion_numero,
        direccion_calle,
        club_origen,
        socio_first_nombre,
        socio_second_nombre,
        socio_first_apellido,
        socio_second_apellido,
        fecha_nacimiento
    ) {
        this.rut_socio = rut_socio;
        this.email = email;
        this.estado_civil_socio = estado_civil_socio;
        this.fecha_de_ingreso_socio = fecha_de_ingreso_socio;
        this.profesion_socio = profesion_socio;
        this.observaciones_socio = observaciones_socio;
        this.telefono = telefono;
        this.direccion_comuna = direccion_comuna;
        this.direccion_numero = direccion_numero;
        this.direccion_calle = direccion_calle;
        this.club_origen = club_origen;
        this.socio_first_nombre = socio_first_nombre;
        this.socio_second_nombre = socio_second_nombre;
        this.socio_first_apellido = socio_first_apellido;
        this.socio_second_apellido = socio_second_apellido;
        this.fecha_nacimiento = fecha_nacimiento;
    }

    static getAll(callback) {
        connection.query('SELECT * FROM socio', (err, rows) => {
            if (err) {
                console.error(err.message);
                callback(err);
            } else {
                callback(null, rows);
            }
        });
    }

    static filterByRut(rut_socio,callback){
        connection.query('SELECT * FROM socio where rut_socio = ?', [rut_socio], 
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

    static create(socio, callback) {
        connection.query('INSERT INTO socio (rut_socio, email, estado_civil_socio, fecha_de_ingreso_socio, profesion_socio, observaciones_socio, telefono, direccion_comuna, direccion_numero, direccion_calle, club_origen, socio_first_nombre, socio_second_nombre, socio_first_apellido, socio_second_apellido, fecha_nacimiento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [socio.rut_socio,
                socio.email,
                socio.estado_civil_socio,
                socio.fecha_de_ingreso_socio,
                socio.profesion_socio,
                socio.observaciones_socio,
                socio.telefono,
                socio.direccion_comuna,
                socio.direccion_numero,
                socio.direccion_calle,
                socio.club_origen,
                socio.socio_first_nombre,
                socio.socio_second_nombre,
                socio.socio_first_apellido,
                socio.socio_second_apellido,
                socio.fecha_nacimiento],
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
}

    module.exports = Socio;