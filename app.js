const express = require('express');
const app = express();
require('dotenv').config();
const DBConnection = require('./connection/connection')

//middlewares
app.use(express.json())


//routes
app.get('/', (req, res) => {
  res.send('To Do List Home Page')
})

app.post('/test', (req, res) => {
  const teste = req.body
  model.create(teste)
  res.status(200).json({ msg: "funcionou" })
})


//server
const PORT = 3000;

const startServer = async () => {
  try {
    DBConnection(process.env.CONNECTION_URI)
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
  } catch (error) {
    console.log(error)
  }
}

startServer();

