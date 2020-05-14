const petsctrl={};
const Pet = require('../models/pets');
const Animal = require('../models/animals');


petsctrl.ListAlltype= async (req,res)=>{
    const tipos = await Animal.find().lean();
    res.render('animals/new_pet',{tipos})
}

petsctrl.ListAllPets= async (req,res)=>{
    const mascotas = await Pet.find().lean();
    res.render('users/mypets',{mascotas})
}

petsctrl.createNewPet = async (req,res)=>{
  const {nombre,sexo,tamaño,tipo,descripcion}=req.body;
  console.log(req.body);
  const NewPet= new Pet({nombre,sexo,tamaño,tipo,descripcion})
  console.log(NewPet);
  await NewPet.save();
  res.redirect('/user/my_pets')
}

petsctrl.ModificPet = async (req,res)=>{
    const tipos = await Animal.find().lean();
    const pet = await Pet.findById(req.params.id).lean();
    console.log(pet);
    res.render('pets/editpet',{tipos,pet})
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