const {Schema, model} = require('mongoose');

class MeseroTemplate extends EmpleadoTemplate{
    constructor(nombre, apellido, edad, estatus){
        super(nombre, apellido, edad, estatus);
        this.mesas = [];
        this.pedidos = [];
    }
}

const meseroSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    edad: {type: Number, required: true},
    estatus: {type: String, required: true},
    mesas: {type: [{
        type: Schema.ObjectId,
        ref: 'Mesa'
    }]},
    pedidos: {type: [{
        type: Schema.ObjectId,
        ref: 'Pedido'
    }]}
});

module.exports = model('Mesero', meseroSchema);