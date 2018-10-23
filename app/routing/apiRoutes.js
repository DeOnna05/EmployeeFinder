const express = require('express');
const router = express.Router();
const employeeArr = require('../data/employees');


router.get('/employees', function(req, res){
    res.send('JSON of all possible employees')
});

router.post('/employee',async function(req, res){
    let employee = req.body;


   let bestMatch = await findMatch(employee);
   console.log(bestMatch, "this is the best match")
    employeeArr.push(employee);
  
    res.send(bestMatch);
});

function findMatch(employee){
    let lowestDifference = null;
    let bestMatch = null;
    for( let i = 0; i < employeeArr.length; i++ ){
        let currentEmployee = employeeArr[i];
        let totalDifference = 0;
        for( let i = 0; i < currentEmployee.scores.length; i++){
            let scoreDifference = currentEmployee.scores[i] - employee.scores[i];
            totalDifference += Math.abs(scoreDifference);
        }

        if( totalDifference < lowestDifference || lowestDifference == null) {
            lowestDifference = totalDifference;
            bestMatch = currentEmployee.photo;
        }

    }

    return bestMatch;

}



module.exports = router;