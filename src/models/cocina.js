import { Schema, model } from 'mongoose';

class Cocina {
    constructor(Cocineros) {
        this.cocineros = [];
        this.pedidos_entrada = [];
        this.pedidos_salida = [];
    }
};

const cocinaScehma = new Schema({
    cocineros: { type: list, required: true },
    pedidos_entrada: { type: list, required: true },
    pedidos_salida: { type: list, required: true },
});

export default model('Cocina', cocinaScehma);