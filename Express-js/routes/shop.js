const express = require('express');
const router = express.Router();
router.get('/',(req, res, next) => {
    //console.log('In an other the middleware');
    res.send('<h1>Hello from Express.js</h1>');//send a response and attach a body of any type, here will be a text one
  
});
module.exports = router;