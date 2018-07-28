var promise = require('bluebird');

var options = {
    promiseLib: promise
};

var pgPromise = require('pg-promise')(options);
var connectionString = 'postgres://postgres:root@localhost:5432/employees';
var database = pgPromise(connectionString);

function getAllEmployees(req, res, next) {
  database.any('select * from employee')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Successfully fetched all employees'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }
  
  function addEmployee(req, res, next) {
    database.none('insert into employee(ename, age, gender, sal, dept)' +
        'values(${ename}, ${age}, ${gender}, ${sal}, ${dept})',
      req.body)
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Added new employee'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function getEmployee(req, res, next) {
    var empId = parseInt(req.params.id);
    database.one('select * from employee where id = $1', empId)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Successfully fetched employee with id: ' + empId
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function updateEmployee(req, res, next) {
    database.none('update employee set sal=$1 where id=$2',
      [req.body.sal, parseInt(req.params.id)])
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Updated the employee successfully.' 
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }
  

  module.exports = {
    getAllEmployees: getAllEmployees,
    addEmployee: addEmployee,
    getEmployee: getEmployee,
    updateEmployee: updateEmployee/*,
    removeEmployee: removeEmployee */
};