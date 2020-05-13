const { Schema, model } = require("mongoose");

const ServiceSchema = new Schema(
  {
    Nombre: {
        type: Nombre,
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