const express = require('express')
const db = require("./config/db")
const userroute = require("./route/userroute")
const app = express()
const port = 3000



db()

app.get('/', (req, res) => {
  res.send('welcome to my api')
})

app.use(express.json());

app.use("/api/users", userroute)




app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})