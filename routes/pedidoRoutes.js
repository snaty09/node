const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.get('/', pedidoController.getPedidos);
router.get('/getPedidosEntregados', pedidoController.getPedidosEntregados);

router.post('/', pedidoController.createPedido);
router.put('/:id/entregado', pedidoController.marcarComoEntregado);


module.exports = router;
