//in this file, we will put the code that will help us to code the admin side
const express = require('express');
const app = express();

const router = express.Router();

 //a specific route: /add-product using router
 router.get('/add-product',(req, res, next) => {

    res.send('<form action="/product" method="POST"><input type="text"  name="title" value="male"><button type="submit">Add product</button></form>'
    
    );//send a response and attach a body of any type, here will be a text one
    //next();//allows the request to continue to the next middleware in line, here we don't need it as it will be a different page
});

//app.post
router.post('/product',(req, res, next) =>{
    //getting body of incoming request
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;