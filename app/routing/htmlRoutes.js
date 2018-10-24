const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '/../public/home.html'))

    console.log('this is working')
});

router.get('/survey', function (req, res){
    res.sendFile(path.join(__dirname,'/../public/survey.html'))
    
});

// router.get('*', function(req, res){
//     res.sendFile(path.join(__dirname, ))
// });

module.exports = router;
