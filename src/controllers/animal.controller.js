const adminctrl = {};
const Animal = require('../models/animals');


adminctrl.createNewtype = async (req, res) => {
    const { tipo, descripcion,color } = req.body;
    image='../src/uploads/'+req.file.originalname;
    const NewAmimal = new Animal({tipo,image,color,descripcion})
    await NewAmimal.save();
    res.render('animals/new_animal')
}

adminctrl.rederAlltype = async (req, res) => {
    const tipos = await Animal.find().lean();
    console.log(tipos);
    res.render('animals/registre_animal', {tipos})
}

adminctrl.RederNewAnimal = (req, res) => {
    res.render('animals/new_animal')
}

adminctrl.ActivateAnimal = (req, res) => {
    res.render('Activar animal')
}

adminctrl.DeactivateAnimal = (req, res) => {
    res.render('Desactivar animal')
}

module.exports = adminctrl;