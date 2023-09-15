const router = require('express').Router();
const rutasEmpleados = require('./empleados');
const rutasAlimentos = require('./alimentos');


router.use('/empleados', rutasEmpleados);
router.use('/alimentos', rutasAlimentos)

module.exports = router;