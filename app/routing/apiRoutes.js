//require express and employee.js | pull in router from express
const express = require('express');
const router = express.Router();
const employeeArr = require('../data/employees');

//get call which calls back JSON of all employees in array
router.get('/employees', function (req, res) {
    res.json(employeeArr);
   
});

router.post('/employees', function (req, res) {
    let employee = req.body;
    
   
    //creating variable to store the lowest difference in
    let lowestDifference = null;
    //creating a variable to store the employee with the lowest difference
    let bestMatch = null;
    //looping through the employee array
    for (let i = 0; i < employeeArr.length; i++) {
        //storing the current employee in a variable for use later
        let currentEmployee = employeeArr[i];
        //declaring variable for total difference to be store for comparison later
        let totalDifference = 0;
        //looping through the current employee scores
        for (let i = 0; i < currentEmployee.scores.length; i++) {
            //calculating the difference in scores between the current employee and each employee in the array
            let scoreDifference = currentEmployee.scores[i] - employee.scores[i];
            //totaling the absolute value of the score difference and assigining it to the total difference variable
            totalDifference += Math.abs(scoreDifference);
        }
        //if the total difference is less than the lowest difference or if lowest difference is null...
        if (totalDifference < lowestDifference || lowestDifference == null) {
            //...assign total difference to lowest difference...
            lowestDifference = totalDifference;
            //...and assign the current employee's photo to best match variable
            bestMatch = currentEmployee;
        }
    }

    employeeArr.push(employee);
    //display best match photo
    return res.json(bestMatch);
});


//exports express router
module.exports = router;