const fs = require('fs');

const requestHandler = (req, res) => {
     const url = req.url;
     const method = req.method

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
    
     if (url === '/message' &&  method === 'POST') {
         //listen to the data event to buffer the incoming data
         const body = [];
         req.on('data', (chunk) =>{//function to be executed when a piece of data comes in, chunck: gros morceau
             console.log(chunk);
             body.push(chunk);//we push our data in the body array
            
         });
    
         req.on('end', ()=>{
             const parseBody = Buffer.concat(body).toString();
             const message = parseBody.split('=')[1];
             //use writeFile() for non-blocking code
             fs.writeFileSync('message2.txt',message, err => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();

             });//error on this section
             //console.log(message);
         });
  
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

}

//exporting

module.exports = {
    handler : requestHandler,
    someText : 'Du texte pour tester les modules'


} 

//An other way of exporting modules

/*module.exports.handler = requestHandler;
module.exports.someText = 'Du texte pour tester';*/