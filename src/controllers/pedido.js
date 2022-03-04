const Pedido = require("../model/pedido");

const createPedido = (req, res) => {
  const pedido = new Pedido({
    dataEntrada: req.body.dataEntrada,
    nome: req.body.nome,
    whatsapp: req.body.whatsapp,
    instagram: req.body.instagram,
    pedido: {
      filme: {
        nomeFilme: req.body.nomeFilme,
        tipoDigi: req.body.tipoDigi,
        formatoArquivo: req.body.formatoArquivo,
        tipoFilme: req.body.tipoFilme,
        puxada: req.body.puxada
      },
      obs: req.body.obs
    }
  });

  pedido.save((err, pedido) => {
    if (err) {
      res.send(err);
    }
    res.json(pedido);
  });
};

const getPedido = (req, res) => {
  res.send("I am the get pedido route");
};

module.exports = {
  createPedido,
  getPedido,
};
