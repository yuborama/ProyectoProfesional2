const Veterinaryctrl = {};
const Cite = require('../models/cites');



Veterinaryctrl.RenderCitesofday = async (req, res) => {
  const citesM = await Cite.find({ activa: true }).select('Fecha descripcion').populate({ path: 'pet', select: 'nombre sexo tamaño' }).populate({ path: 'tipo' }).populate({ path: 'servicio', select: 'Nombre' }).lean();
  console.log(citesM);
  /*   console.log('user'+citesM.pet.user);  */
  res.render('veterinary/veterinary', {citesM})
}


module.exports = Veterinaryctrl;