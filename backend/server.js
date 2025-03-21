const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const peliculasRoutes = require('./routes/peliculasRoutes');
const paquetes = require('./routes/paquetesRoutes')
const paquetescompra = require('./routes/compraPaquetesRouter')
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/api/auth', authRoutes);
app.use('/api', usuariosRoutes);
app.use('/api/peliculas', peliculasRoutes);
app.use('/api/paquetes', paquetes);
app.use('/api/compra-paquetes', paquetescompra);


app.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});
