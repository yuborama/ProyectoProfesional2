const petsctrl = {};
const Pet = require('../models/pets');
const Animal = require('../models/animals');
const Cite = require('../models/cites')


petsctrl.ListAlltype = async (req, res) => {
    const tipos = await Animal.find().lean();
    res.render('animals/new_pet', { tipos })
}

petsctrl.ListAllPets = async (req, res) => {
    const mascotas = await Pet.find({ user: req.user.id }).populate({ path: 'tipo', select: 'tipo color -_id' }).lean();
    console.log(mascotas);
    const citesM = await Cite.find({ activa: true }).select('Fecha').populate({ path: 'pet', match: { user: req.user.id }, select: 'nombre' }).populate({ path: 'servicio', select: 'Nombre' }).lean();
    res.render('pets/mypest', { mascotas, citesM })
}

petsctrl.createNewPet = async (req, res) => {
    const { nombre, sexo, tamaño, tipo, descripcion } = req.body;
    console.log(req.body);
    const NewPet = new Pet({ nombre, sexo, tamaño, tipo, descripcion })
    NewPet.user = req.user.id;
    console.log(NewPet);
    await NewPet.save();
    req.flash('success_msg', 'Mascota agregada')
    res.redirect('/user/my_pets')
}

petsctrl.ModificPet = async (req, res) => {
    const tipos = await Animal.find().lean();
    const pet = await Pet.findById(req.params.id).lean();
    if (pet.user != req.user.id) {
        req.flash('error_msg', 'solo uedes modificar tus mascotas')
        res.redirect('/user/my_pets')
    }
    console.log(pet);
    res.render('pets/editpet', { tipos, pet })
}

petsctrl.UpdatePet = async (req, res) => {
    const { nombre, sexo, tamaño, tipo, descripcion } = req.body;
    await Pet.findByIdAndUpdate(req.params.id, { nombre, sexo, tamaño, tipo, descripcion})
    res.redirect('/user/my_pets');
}

petsctrl.HistoryPet = (req, res) => {
    res.send('Historia de mi mascota');
}

petsctrl.NewCite = (req, res) => {
    res.send('Estoy sacando mi cita');
}

petsctrl.ModifiCite = (req, res) => {
    res.send('Estoy modificando mi cita');
}

module.exports = petsctrl;