const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el middleware cors
const app = express();
const path = require('path');
const port =  3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
}));

// Configura las rutas de la API
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);
app.use('/imagenes/jugadores', express.static(path.join(__dirname, 'imagenes/jugadores')));

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});