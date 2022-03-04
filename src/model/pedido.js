const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema({
  dataEntrada: {
    type: Date,
    default: Date.now,
  },
  nome: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: String,
    default: false,
    required: true,
  },
  instagram: {
    type: String,
    default: false,
    required: true,
  },
  pedido: {
    filme: {
      nomeFilme: {
        type: String,
        required: true,
      },
      tipoDigi: {
        type: String,
        required: true,
      },
      formatoArquivo: {
        type: String,
        required: true,
      },
      tipoFilme: {
        type: String,
        required: true,
      },
      puxada: {
        type: String,
        required: true,
      }
    },
   obs: {
     type: String
   }
  },
});

module.exports = mongoose.model("Pedido", PedidoSchema);
