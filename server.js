//https://expressjs.com/en/starter/hello-world.html
/*
Multiline
comment
*/
// js behave like python but syntax is like c++
const express = require('express');
const { dirname } = require('path');
const app = express()// return object
const port = 5000

app.get('/', function(req,res){
    res.sendFile(__dirname+"/index.html")
}  );

app.listen(port, () => {
  console.log(`Example app listening on port ${port} ${dirname}`)
})