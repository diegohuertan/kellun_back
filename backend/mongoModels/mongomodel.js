const mongoose = require('mongoose');

const deudaSchema = new mongoose.Schema({
    fechaDeuda: Date,
    cantidad: Number,
    estado: {
        type: Boolean,
        default: false // false significa que la deuda no ha sido pagada
    }
});

const deportistaSchema = new mongoose.Schema({
    rut: String,
    imagen: String,
    nombre: String,
    direccion: String,
    email: String,
    fechaIngreso: Date,
    fechaNacimiento: Date,
    estado: String,
    deudas: [deudaSchema] // Asociar deudas a cada deportista
});

const socioSchema = new mongoose.Schema({
    nombre: String,
    rut : String,
    email: String,
    telefono: String,
    direccion: String,
    fechaNacimiento: Date,
    fechaIngreso: Date,
    deportistas: [deportistaSchema] // Asociar deportistas a cada socio
});


const Deuda = mongoose.model('Deuda', deudaSchema);
const Deportista = mongoose.model('Deportista', deportistaSchema);
const Socio = mongoose.model('Socio', socioSchema);

module.exports = {Deuda, Deportista, Socio};