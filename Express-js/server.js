
 const http = require('http');

 //import express.js
 const express =  require('express');

 const app = express();
 //import routes file that contains modules

// const routes = require('./routes');


 const server = http.createServer(app);
     //console.log(req);
     /*const url = req.url;
     const method = req.method;*/
    

 server.listen(4000);



