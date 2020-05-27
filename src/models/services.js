const { Schema, model } = require("mongoose");

const ServiceSchema = new Schema(
  {
    Nombre: {
      type: String,
      required: true
    },
    Precio: {
      type: Number,
      required: true
    },
    descripcion: {
      type: String,
      required: false
    },
    activo: {
      type: Boolean,
      required: false
    },
  },
  {
    timestamps: true
  }
);

module.exports = model("Service", ServiceSchema);