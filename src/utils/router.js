const router = require('express').Router();
const rutasEmpleados = require('../modules/empleados/empleados.routes');
const rutasAlimentos = require('../modules/alimentos/alimentos.routes');

const prefix = '/api/v1';

router.use(`${prefix}/empleados`, rutasEmpleados);
router.use(`${prefix}/alimentos`, rutasAlimentos)

module.exports = router;