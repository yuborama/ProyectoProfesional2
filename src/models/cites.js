const { Schema, model } = require("mongoose");

const CiteSchema = new Schema(
  {
   
    pet: {
        type: String,
        required: true
    },  
    servicio: {
      type: String,
      required: true
    },
    descripcion: {
        type: String,
        required: false
      },
    Fecha: {
        type: Date,
        required: false
    },
  },
  {
    timestamps: true
  }
);

module.exports = model("Cite", CiteSchema);