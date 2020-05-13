const Servicectrl={};
const Service = require('../models/services');


petsctrl.createService = (req,res)=>{
  res.send('Creando servicio')
}

petsctrl.ModificService = (req,res)=>{
    res.send('modifica servicios');
}

petsctrl.DeleteService = (req,res)=>{
    res.send('Elimina servicios');
}


module.exports = petsctrl;