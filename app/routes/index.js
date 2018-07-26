var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/api/employees', db.getAllEmployees);
/* router.get('/api/employee/:id', db.getEmployee);
router.post('/api/employee', db.addEmployee);
router.put('/api/employee/:id', db.updateEmployee);
router.delete('/api/employee/:id', db.removeEmployee); */


module.exports = router;
