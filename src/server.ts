import { log } from 'console';
import express from 'express';
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Rodando');
});

server.listen(3333, () => {console.log('Rodando na porta 3333')});

