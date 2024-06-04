const db = require('../db');

exports.getPedidos = (req, res) => {
  const sql = 'SELECT * FROM pedidos WHERE entregado = 0';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
};

exports.getPedidosEntregados = (req, res) => {
  const sql = 'SELECT * FROM pedidos WHERE entregado = 1';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
};


exports.createPedido = (req, res) => {
  const { titulo, descripcion } = req.body;
  const sql = 'INSERT INTO pedidos (titulo, descripcion) VALUES (?, ?)';
  db.query(sql, [titulo, descripcion], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ id: result.insertId, titulo, descripcion });
    }
  });
};

exports.marcarComoEntregado = (req, res) => {
  const { id } = req.params;
  const sql = 'UPDATE pedidos SET entregado = 1 WHERE entregado = 0';
  db.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: 'Pedido marcado como entregado' });
    }
  });
};
