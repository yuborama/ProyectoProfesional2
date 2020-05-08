const adminctrl={};
const Animal = require('../models/animals');


adminctrl.createNewtype = async(req,res)=>{
    const {tipo,descripcion}=req.body;
  const NewAmimal= new Animal({tipo,descripcion})
  await NewAmimal.save();
  res.render('animals/registre_animal')
}

adminctrl.rederAlltype=async (req,res)=>{
    const tipos = await Animal.find().lean();
    console.log(tipos);
    res.render('animals/registre_animal',{tipos})
}

adminctrl.rederNewanimal=(req,res)=>{
    res.render('animals/new_animal')
}

 module.exports = adminctrl;