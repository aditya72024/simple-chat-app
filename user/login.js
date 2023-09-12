const express = require('express');
const router = express.Router();
const localStorage = require("localStorage")

router.get('/login', (req,res,next) => {
    
    res.send("<form action='/saveUser' method='POST'><input type='text' name='username' placeholder='Username'><input type='submit' value='submit'></form>")
});

router.post('/saveUser', (req,res,next) => {
    
    const user = {...req.body};
    
    localStorage.setItem('username',user.username);

    console.log(localStorage.getItem('username'))
    res.redirect('/');


});

module.exports = router;