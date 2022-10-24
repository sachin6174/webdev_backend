const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Sachin ki Duniya!')
})

app.listen(process.env.PORT||port,  () => {
  console.log(`Example app listening on ${port} port`)
})