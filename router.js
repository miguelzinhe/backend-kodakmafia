const router = require("express").Router();
const { getPedido } = require("./src/controllers/pedido");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/pedido", getPedido);

module.exports = router;
