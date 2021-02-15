
//My code

/*const http = require('http');

 //import express.js
 const express =  require('express');
 const bodyParser = require('body-parser');//after body parser installation

 const app = express();

 //import admin Routes

 const adminRoutes = require('./routes/admin');

 //import shop routes

 const shopRoutes =  require('./routes/shop');

 //use admin Routes

 app.use('/admin',adminRoutes);

 //use sho Routes

 app.use(shopRoutes);
 
 app.use(bodyParser.urlencoded({extended: false}));//after body parser installation

 //handling request and return response using Middleware


/*a specific route: /contact-form
app.use('/contact-form',(req, res, next) => {
    console.log('In an other the middleware');
    res.send('Contact Form</h1>');//send a response and attach a body of any type, here will be a text one
    //next();//allows the request to continue to the next middleware in line, here we don't need it as it will be a different page
});*/


/* app.use('/',(req, res, next) => {
   // console.log('In an other the middleware');
    res.send('<h1>Hello from Express.js</h1>');//send a response and attach a body of any type, here will be a text one
    //next();//allows the request to continue to the next middleware in line
});*/


 //import routes file that contains modules

// const routes = require('./routes');



     //console.log(req);
     /*const url = req.url;
     const method = req.method;
 //const server = http.createServer(app);

 //sendin error 404 page not found
 app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
 });
 app.listen(4000);


*/


//Max code 

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

//serve pages statically

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(4000);



