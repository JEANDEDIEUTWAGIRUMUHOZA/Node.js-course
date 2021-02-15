//Creating Node.js server

//we have to import some functionnalities



//Core modules

/**These are core modules in our Node.js server
 * http: launch a server
 * https: launch SSL server
 * fs
 * path
 * os
 */

 //As we don't change the variables of our server, we can declare them as constants

 const http = require('http');

/*
 //function to listen a request
 //Listen request and return a response
 //2 argument req for request and res for response
 function rqListener(req,res){

 }
 
 //creteServer() is a bulitin method
 //we tell the server to use our function for requests and responses
 http.createServer(rqListener);*/

 //call back function for server to listen requests and return responses

 //import routes file that contains modules

 const routes = require('./routes');

 
 console.log(routes.someText);
 const server = http.createServer(routes.handler);
     //console.log(req);
     /*const url = req.url;
     const method = req.method;*/
    



 server.listen(3000);



