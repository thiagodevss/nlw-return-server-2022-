import express from 'express';
import { routes } from './routes';
import cors from 'cors';
const app = express();


app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(3333, () => {
  console.log('HTTP server running!')
})


//GET POST PUT PATCH DELETE

//GET = Buscar informacoes
//POST = Cadastrar informacoes
//PUT = Atualizar informacoes de uma entidade
//PATCH = Atualizar informacao unica de uma entidade
//DELETE = Deletar uma informacao