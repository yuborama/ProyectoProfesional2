const petsctrl={};
const Pet = require('../models/pets');
const service = require('../models/services');
const cite = require('../models/cites');

petsctrl.createNewPet = async (req,res)=>{
  const {nombre,sexo,tamaño,tipo,descripcion}=req.body;
  const NewPet= new Pet({nombre,sexo,tamaño,tipo,descripcion})
  await NewPet.save();
  res.render('animals/registre_animal')
}

petsctrl.ModificPet = (req,res)=>{
    res.send('modifica mascota');
}

petsctrl.HistoryPet = (req,res)=>{
    res.send('Historia de mi mascota');
}

petsctrl.NewCite = async (req,res)=>{
    const servicios = await service.find().lean();
    const pet= req.params.id;
     console.log('id pet'+pet);
    res.render('cites/new_cite',{servicios,pet})
}
petsctrl.CreateCite = async (req,res)=>{
  const  pet = req.params.id;
  const { servicio,Fecha,descripcion}=req.body;
  const Newcite= new cite({pet,servicio,Fecha,descripcion})
  console.log(Newcite);
  await Newcite.save();
  res.redirect('/user/my_pets')    
}


petsctrl.ModifiCite = (req,res)=>{
    res.send('Estoy modificando mi cita');
}

module.exports = petsctrl;