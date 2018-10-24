//requirements
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
const apiRoutes = require('./app/routing/apiRoutes.js');
const htmlRoutes = require('./app/routing/htmlRoutes.js');


// Sets up our server to parse our request body for post/put/delete requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//using express and path to find files
//DO I NEED PATH.JOIN/DIRNAME HERE?
app.use(express.static(path.join(__dirname, '/app/public')));

//link to routes pages - tells app to use these routes
app.use('/api', apiRoutes);
app.use('*', htmlRoutes);

//server listener
app.listen(PORT, function(){
    console.log(`App is listening on ${PORT}`)
}) 