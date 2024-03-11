import express from 'express';

import { conn } from './database/connection/connection';

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Rodando');
});

server.post('/users', (req, res) => {

  const query = `INSERT INTO users (name, email, password) VALUES ('Cezar', 'cezarguimaraes@gmail.com', '123456');`;

  conn.query(query, (err) => console.log(err));

  res.send('Deu certo');
})

conn.connect((err) => {
  if (err) {
    console.log(err);
  }

  console.log('Database has been connected');
  server.listen(3333, () => {console.log('Running on port: 3333')});
})


