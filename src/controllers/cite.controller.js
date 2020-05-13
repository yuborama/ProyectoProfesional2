const petsctrl={};
const Pet = require('../models/pets');



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

petsctrl.NewCite = (req,res)=>{
    res.send('Estoy sacando mi cita');
}

petsctrl.ModifiCite = (req,res)=>{
    res.send('Estoy modificando mi cita');
}

module.exports = petsctrl;