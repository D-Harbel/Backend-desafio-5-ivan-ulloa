const mongoose = require('mongoose');

const usuariosEsquema = new mongoose.Schema(
    {
        nombre: String,
        apellido: String,  // Agregar el campo 'apellido'
        edad: Number,      // Agregar el campo 'edad'
        email: {
            type: String, unique: true
        },
        password: String
    },
);

const usuariosModelo = mongoose.model("sessions", usuariosEsquema);
module.exports = usuariosModelo;