const { Schema, model } = require("mongoose");

const CiteSchema = new Schema(
  {
    pet: { type: Schema.Types.ObjectId, ref: 'Pet', required: true },
    servicio: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    descripcion: { type: String, required: false },
    atencion: { type: String, required: false },
    Fecha: { type: Date, required: false },
    activa: { type: Boolean, default: true }
  },
  {
    timestamps: true
  }
);

module.exports = model("Cite", CiteSchema);