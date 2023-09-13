import {Schema, model} from 'mongoose';

class Alimento {
    constructor(nombre, precio, tipo, descripcion, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
};

const alimentoScehma = new Schema({
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    tipo: {type: String, required: true},
    descripcion: {type: String, required: true},
    imagen: {type: String, required: true}
});

export default model('Alimento', alimentoScehma);