const Deportista = require('../models/deportista');

// Controlador para obtener todos los contactos
exports.getAlldeportista = (req, res) => {
    // Utiliza el modelo Contact para obtener todos los contactos
    Deportista.getAll((err, Deportista) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.json(Deportista);
        }
    });
};

// Controlador para crear un nuevo contacto
exports.createDeportista = (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const {
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
        fecha_nacimiento} = req.body;

    // Crear un nuevo objeto Contact con los datos
    const newdeportista = new Deportista(rut_deportista,
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
        fecha_nacimiento);

    // Llamar al método estático "create" del modelo Contact
    Deportista.create(newdeportista, (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.status(201).send('Deportista agregado exitosamente');
        }
    });
};

exports.filterByrut_deportista = (req, res) => {
    // Obtén el JSON enviado en el cuerpo de la solicitud
     const {
        rut_deportista
        } = req.body;;

    
    Deportista.filterByrut(rut_deportista, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send( 'Error en el servidor.');
        } else {
            res.status(200).json(result);
        }
    });
}

exports.filterByClub_origen = (req, res) => {
    // Obtén el JSON enviado en el cuerpo de la solicitud
     const {
        club_origen
        } = req.body;

    
    Deportista.filterByOrigen(club_origen, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send( 'Error en el servidor.');
        } else {
            res.status(200).json(result);
        }
    });
}


exports.filterByName = (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const {
        deportista_first_nombre,
        deportista_second_nombre,
        deportista_first_apellido,
        deportista_second_apellido
        } = req.body;


    Deportista.filterByName(deportista_first_nombre,
        deportista_second_nombre,
        deportista_first_apellido,
        deportista_second_apellido, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.status(200).json(result);
        }
    });
};

exports.filterBydeportista_categoria = (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const {
        categoria
        } = req.body;


    Deportista.filterByCategoria(categoria, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.status(200).json(result);
        }
    });
};

exports.deleterecetaByid = (req, res) => {
    const { rut_deportista } = req.params;

    Deportista.deletebyId(rut_deportista, (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.status(200).send('Contacto eliminado exitosamente');
        }
    });
};