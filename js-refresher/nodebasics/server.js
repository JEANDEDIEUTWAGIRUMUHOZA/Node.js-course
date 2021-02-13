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
 const fs = require('fs');
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
     //console.log(req);
     const url = req.url;
     const method = req.method;
     if (url === '/'){

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        
        return res.end();
     }
     /*if page is /message in post, we want to redirect
     *the user to '/'
      */

     if(url === '/message' &&  method === 'POST'){
         fs.writeFileSync('message.txt','DUMMY');
         res.statusCode = 302;
         res.setHeader('Location','/');
         return res.end();

     }
 
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



