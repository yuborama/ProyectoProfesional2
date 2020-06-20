const adminctrl={};
const Animal = require('../models/animals');


/* adminctrl.createNewtype = async(req,res)=>{
    console.log('----------------llega aca-----------------');
    const {tipo,descripcion,color}=req.body;
    const {image}=req.file
    console.log(color);
    console.log(image);
  const NewAmimal= new Animal({tipo,color,descripcion,image})
   await NewAmimal.save(); 
  res.render('animals/registre_animal')
}
*/

adminctrl.rederAlltype=async (req,res)=>{
    const tipos = await Animal.find().lean();
    console.log(tipos);
    res.render('animals/registre_animal',{tipos})
}

adminctrl.rederNewanimal=(req,res)=>{
    res.render('animals/new_animal')
}

 module.exports = adminctrl;