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
    const { rut_deportista } = req.query;

    // Verifica si el JSON contiene el campo 'rut_deportista'
    if (!rut_deportista) {
        res.status(400).json({ error: 'El campo rut_deportista es requerido.' });
        return;
    }

    // Puedes usar 'rut_deportista' en tu consulta o pasar el JSON completo a tu función 'filterBy'
    const rut = { rut_deportista };
    
    Deportista.filterBy(rut, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Error en el servidor.' });
        } else {
            res.status(200).json(result);
        }
    });
}

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