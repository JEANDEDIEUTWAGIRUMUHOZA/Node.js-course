const http = require('http');

 //import express.js
 const express =  require('express');
 const bodyParser = require('body-parser');//after body parser installation

 const app = express();
 
 app.use(bodyParser.urlencoded());//after body parser installation

 //handling request and return response using Middleware

 //a specific route: /add-product
 app.use('/add-product',(req, res, next) => {
    console.log('In an other the middleware');
    res.send('<form action="/product" method="POST"><input type="text"  name="title" value="male"><button type="submit">Add product</button></form>');//send a response and attach a body of any type, here will be a text one
    //next();//allows the request to continue to the next middleware in line, here we don't need it as it will be a different page
});

//app.post
app.post('/product',(req, res, next) =>{
    //getting body of incoming request
    console.log(req.body);
    res.redirect('/');
});

/*a specific route: /contact-form
app.use('/contact-form',(req, res, next) => {
    console.log('In an other the middleware');
    res.send('Contact Form</h1>');//send a response and attach a body of any type, here will be a text one
    //next();//allows the request to continue to the next middleware in line, here we don't need it as it will be a different page
});*/


 app.use('/',(req, res, next) => {
    console.log('In an other the middleware');
    res.send('<h1>Hello from Express.js</h1>');//send a response and attach a body of any type, here will be a text one
    next();//allows the request to continue to the next middleware in line
});


 //import routes file that contains modules

// const routes = require('./routes');


 const server = http.createServer(app);
     //console.log(req);
     /*const url = req.url;
     const method = req.method;*/
    

 app.listen(4000);



