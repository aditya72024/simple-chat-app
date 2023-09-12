const express = require('express');
const router = express.Router();
const fs = require('fs');

const localStorage = require("localStorage")



router.get('/',(req,res,next)=>{

    let data = fs.readFileSync("./messages/messages.txt","utf-8");
    if(data == ""){
        data = "Nothing to view";
    }


    res.send(`${data}<br><form action='/saveMessage' method='POST'><input type='text' name='message' class='form' placeholder='Message'><input type='submit' value='submit'></form>`)
     
})

router.post('/saveMessage', (req,res,next)=>{
    const message = {...req.body}

    const username = localStorage.getItem('username');

    console.log(username, message.message);

    fs.appendFileSync('./messages/messages.txt', ` ${username} : ${message.message}`);

    res.redirect('/');
})


module.exports = router;