const { Schema, model } = require("mongoose");

const AnimalSchema = new Schema(
  {
    tipo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

module.exports = model("Animal", AnimalSchema);