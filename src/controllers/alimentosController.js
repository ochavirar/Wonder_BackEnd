const Alimento = require('../models/alimento');

const AlimentosController = {
    listarTodosLosAlimentos: function (req, res) { // READ sin filtros
        Alimento.find({}).then(response => {
            res.status(200).send(response);
        })
    },
    listarAlimentoPorId: function (req, res) { // READ con filtro de id
        Alimento.findById(req.params.id).then(response => {
            res.status(200).send(response);
        })
    },
    crearAlimento: function (req, res) { // CREATE para un alimento
        const nuevoAlimento = new Alimento({
            nombre: req.body.nombre,
            precio: req.body.precio,
            tipo: req.body.tipo,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            ingredientes: req.body.ingredientes
        });
        nuevoAlimento.save()
            .then(response => {
                res.status(200).send(response);
            }).catch(error => {
                res.status(500).send(error);
            })
    },
    modificarAlimento: function (req, res) {// UPDATE para un alimento
        Alimento.findByIdAndUpdate(req.params.id, { // Buscar por id y actualizar
            nombre: req.body.nombre,
            precio: req.body.precio,
            tipo: req.body.tipo,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            ingredientes: req.body.ingredientes
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },
    borrarAlimento: function (req, res) {// Borra un alimento usando su ID
        Alimento.findByIdAndDelete(req.params.id).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    }
}

module.exports = AlimentosController;