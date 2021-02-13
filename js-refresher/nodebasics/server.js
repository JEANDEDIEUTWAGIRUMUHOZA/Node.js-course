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
 const server = http.createServer((req, res) => {
     console.log(req);
     //process.exit(); => to stop the server
     //CTRL + C to quit running Node.js server
     //if made changes, think restart the server

     //set response
     res.setHeader('Content-Type', 'text/html');
     res.write('<html>');
     res.write('<head><title>First page</title></head>');
     res.write('<body><h1>Hello World form Node.js</h1></body>')
     res.write('</html>');

     //we tell node that we have finished our HTML code, we can't put code after
     res.end();

 });

 server.listen(3000);



