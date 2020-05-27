const Servicectrl={};
const Service = require('../models/services');


Servicectrl.createService = (req,res)=>{
  res.render('services/new_service')
}
Servicectrl.addService =async (req,res)=>{
  const activo = true;
  const {Nombre,descripcion,Precio}=req.body;
  const NewService= new Service({Nombre,Precio,descripcion,activo})
  await NewService.save();
  res.redirect('/admin/all_services');
}

Servicectrl.ListServices =async (req,res)=>{
  const servicios = await Service.find().lean();
  res.render('services/all_services',{servicios})
}

Servicectrl.ModificService = (req,res)=>{
    res.send('modifica servicios');
}

Servicectrl.DeleteService = (req,res)=>{
    res.send('Elimina servicios');
}
Servicectrl.ChangeEstateService = async (req,res)=>{
  servicioes =await Service.findById(req.params.id)
  activo = !servicioes.activo;
  await Service.findByIdAndUpdate(req.params.id,{activo})
  res.redirect('/admin/all_services');
}

module.exports = Servicectrl;