const { Schema, model } = require("mongoose");

const CiteSchema = new Schema(
  {
   
    pet: {
        type: Integer,
        required: true
    },  
    servicio: {
      type: Integer,
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