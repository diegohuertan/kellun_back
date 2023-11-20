const Usuario = require('../models/users');

// Controlador para obtener todos los usuarios
exports.getAllusuarios = (req, res) => {
    // Utiliza el modelo users para obtener todos los usuarios
    Usuario.getAll((err, Usuario) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.json(Usuario);
        }
    });
};

exports.createUser = (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const { id,correo, contraseña, perfil  } = req.body;

    const newUser = new Usuario(id,correo, contraseña, perfil);

    Usuario.create(newUser, (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.status(201).send('usuario creado exitosamente');
        }
    });
};

exports.validarUser = (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const {correo, contraseña  } = req.body;


    // Llamar al método estático "create" del modelo users
    Usuario.validar(correo, contraseña, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error en el servidor');
        } else {
            if (result && result.success) {
                res.status(200).json({ success: true, message: 'Inicio de sesión exitoso token creado', token: result.token });
                console.log(result)
            } else {
                res.status(401).json({ message: 'Credenciales inválidas' });
            }
        }
    });
};

exports.deleteUserByid = (req, res) => {
    const { id } = req.params;

    Usuario.deletebyId(id, (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error en el servidor');
        } else {
            res.status(200).send('Contacto eliminado exitosamente');
        }
    });
};