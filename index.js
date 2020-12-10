const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// crear el servidor:
const app = express();

// Conectar a la base de datos:
conectarDB();

// habilitar cors:
app.use(cors());

// Habilitar express.json, se usa para leer datos que el usuario coloque
app.use(express.json({extended: true}));


// creando el puerto:
const port = process.env.port || 4000;

// importar rutas
// ruta para la creacion de usuarios:
app.use('/api/usuarios', require('./routes/usuarios'));
// autenticacion de usuarios:
app.use('/api/auth', require('./routes/auth'));
// rutas de proyectos:
app.use('/api/proyectos', require('./routes/proyectos'));
// rutas de las tareas
app.use('/api/tareas', require('./routes/tareas'));


// definir la pagina principal:
app.get('/', (req, res) => {
    
})

// arrancar la app:
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});