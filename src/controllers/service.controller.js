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
petsctrl.ActivateService = (req,res)=>{
  res.send('Activando servicios');
}
petsctrl.DeactivateService = (req,res)=>{
  res.send('Desactivar servicios');
}


module.exports = petsctrl;