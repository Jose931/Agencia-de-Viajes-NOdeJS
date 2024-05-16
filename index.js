import express from 'express';
import router from './routes/index.js';

const app = express();

//Definir puerto
const port = process.env.port || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Agregar Router
app.use('/', router);


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})