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
  

  module.exports = {
    getAllEmployees: getAllEmployees/* ,
    getEmployee: getEmployee,
    addEmployee: addEmployee,
    updateEmployee: updateEmployee,
    removeEmployee: removeEmployee */
};