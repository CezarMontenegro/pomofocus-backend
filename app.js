const express = require('express');
const app = express();
require('dotenv').config();
const DBConnection = require('./connection/connection');
const tasks = require('./routes/tasks');

//middlewares
app.use(express.json())


//routes
app.get('/', (req, res) => {
  res.send('To Do List Home Page')
})

app.use('/api/v1/tasks', tasks);


//server
const PORT = 3000;

//Server is only started if the DB connection has worked
const startServer = async () => {
  try {
    DBConnection(process.env.CONNECTION_URI);
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
  } catch (error) {
    console.log(error)
  }
}
startServer();

