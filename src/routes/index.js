const router = require('express').Router();
const rutasEmpleados = require('./empleados');


router.use('/empleados', rutasEmpleados);

module.exports = router;