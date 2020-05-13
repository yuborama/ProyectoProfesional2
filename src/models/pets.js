const { Schema, model } = require("mongoose");

const PetSchema = new Schema(
  {
    nombre: {
        type: String,
        required: true
      },
    sexo: {
        type: String,
        required: true
      },
    tamaño: {
        type: String,
        required: true
      },

    tipo: {
      type: String,
      required: true
    },
    
    descripcion: {
      type: String,
      required: false
    },
  },
  {
    timestamps: true
  }
);

module.exports = model("Pet", PetSchema);