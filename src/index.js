import express from 'express';
import ejs from 'ejs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import indexRoute from './routes/index.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(join(__dirname, 'views'));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(indexRoute);

app.use(express.static(join(__dirname,'public')));



console.log('El Servidor is running on port ', process.env.Port || 3000 );
app.listen(process.env.Port || 3000);



/*
app.listen(3000, () => {
    console.log('El Servidor is running on port 3000');
} ); */