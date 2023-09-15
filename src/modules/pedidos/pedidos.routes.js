const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidosController');

router.get('/', pedidoController.listarTodosLosPedidos); // READ general de pedidos
router.post('/', pedidoController.crearPedido); // CREATE pedido
router.put('/:id', pedidoController.modificarPedido); // UPDATE pedido
router.delete('/:id', pedidoController.borrarPedido); // DELETE pedido


module.exports = router;