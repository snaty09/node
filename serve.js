const express = require('express');
const cors = require('cors');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();
const port = 3000;

// Configurar CORS para permitir solicitudes desde el frontend
app.use(cors());
app.use(express.json());

// Usar las rutas de pedidos
app.use('/api/pedidos', pedidoRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
