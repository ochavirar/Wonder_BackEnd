const {Schema, model} = require('mongoose');
import {Empleado, Mesero} from './empleado';

class Mesa{
    constructor(numero, capacidad, mesero, pedidos){
        this.numero = numero;
        this.capacidad = capacidad;
        this.mesero = mesero;
        this.pedidos = pedidos;
    }
}

const mesaSchema = new Schema({
    numero: {type: Number, required: true},
    capacidad: {type: Number, required: true},
    mesero: {
        type: Schema.ObjectId,
        ref: 'Empleado'
    },
    pedidos: {type: [{
        type: Schema.ObjectId,
        ref: 'Pedido'
    }]}
});

module.exports = model('Mesa', mesaSchema);