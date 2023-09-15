const router = require('express').Router();
const rutasEmpleados = require('../modules/empleados/empleados.routes');
const rutasAlimentos = require('../modules/alimentos/alimentos.routes');
const rutasPedidos = require('../modules/pedidos/pedidos.routes')
const prefix = '/api/v1';

router.use(`${prefix}/empleados`, rutasEmpleados);
router.use(`${prefix}/alimentos`, rutasAlimentos);
router.use(`${prefix}/pedidos`, rutasPedidos);
// router.use(`${prefix}/mesas`, rutasMesas);
// router.use(`${prefix}/meseros`, rutasMeseros);



module.exports = router;