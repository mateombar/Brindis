const express = require('express');
const app = express();
const path = require('path'); //there is no hassle with url bars
const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.connect('mongodb://mongodb+srv://brindis:<brindissies>@cluster0-wyxdg.mongodb.net/test?retryWrites=true&w=majority')
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));

//Importing routes
const indexRoutes = require('./routes/index-routes.js')

//settings
app.set('port', process.env.PORT || 3000); // A la constante port le agrego el puerto
app.set('views',path.join(__dirname,'views')); 
app.set('view engine', 'ejs')// what template engine I'm going to use
app.engine('html', require('ejs').renderFile); //render file from html to ejs
//middlewares
app.use(express.urlencoded({extended:false}));//module that understands the data sent by a form
app.use('/',indexRoutes);
app.use(morgan('dev'));
//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//listening the server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});