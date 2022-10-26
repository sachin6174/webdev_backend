const express = require('express')
const app = express()

const path = require("path");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }));
const port = 3000


app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
})

app.post('/', (req, res) => {
    // res.send(req.body)
    res.render('next.pug',req.body)
    console.log(req.body)
})



app.listen(port, () => {
  console.log(`Example app listening on ${port} port`)
})