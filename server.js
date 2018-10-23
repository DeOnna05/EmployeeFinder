const express = require('express');
const app = express();
const path = require('path');
const http = require('http'); //Do I need this?
const PORT = 8080;
const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');

//Do I need a mysql connection here?




// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//using express and path to find files
app.use(express.static(path.join(__dirname, '/app/public')));

//link to routes pages
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

//server listener
app.listen(PORT, function(){
    console.log(`App is listening on ${PORT}`)
}) 