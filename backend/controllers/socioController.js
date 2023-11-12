const Socio = require('../models/socio');

exports.getAllSocios = (req, res) => {
    Socio.getAll((err, Socio) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.json(Socio);
        }
    });
};

exports.createSocio = (req, res) => {
    const {
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
    } = req.body;

    const newSocio = new Socio(
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
    );

    Socio.create(newSocio, (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.status(201).send('Socio agregado exitosamente');
        }
    });
};

exports.filterByRutSocio = (req, res) => {
    const { rut_socio } = req.body;

    Socio.filterByRut(rut_socio, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error en el servidor.');
        } else {
            res.status(200).json(result);
        }
    });
}

exports.deleteSocioById = (req, res) => {
    const { rut_socio } = req.params;

    Socio.deleteById(rut_socio, (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.status(200).send('Socio eliminado exitosamente');
        }
    });
};