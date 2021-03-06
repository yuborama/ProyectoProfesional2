const Servicectrl={};
const Service = require('../models/services');


Servicectrl.createService = (req,res)=>{
  res.render('services/new_service')
}
Servicectrl.addService =async (req,res)=>{
  const activo = true;
  const {Nombre,descripcion,Precio}=req.body;
  image='/uploads/'+req.file.originalname;
  console.log(image);
  const NewService= new Service({Nombre,Precio,image,descripcion,activo})
  await NewService.save();
  req.flash('success_msg','servicio agregado');
  res.redirect('/admin/all_services');
}

Servicectrl.ListServices =async (req,res)=>{
  const servicios = await Service.find().lean();
  console.log(servicios);
  res.render('services/all_services',{servicios})
}

Servicectrl.ListadodeServices =async (req,res)=>{
  const servicios = await Service.find({activo:true}).lean();
  res.json(servicios)
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