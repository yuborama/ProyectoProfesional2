const passport = require('passport')
const Userctrl={};
const User = require('../models/users');


Userctrl.renderSingup = (req, res) => {
    const rol = 'Usuario'
    res.render('users/singup', { rol })
}
Userctrl.renderNVeterinary = (req, res) => {
    const rol = 'Veterinario'
    res.render('users/singup', { rol })
}
Userctrl.renderNAdmin = (req, res) => {
    const rol = 'Admin'
    res.render('users/singup', { rol })
}

Userctrl.signin = passport.authenticate('local', {
    successRedirect: '/user/my_pets',
    failureRedirect: '/singin',
    failureFlash: true
  });

Userctrl.NewUser = async (req, res) => {
    const { nombre, email,rol, password } = req.body;
    const NewUser = User({ nombre,rol, email, password, })
    console.log(NewUser)
    NewUser.password = await NewUser.encryptPassword(password);
    await NewUser.save();
    res.redirect('/')
}


Userctrl.NewAdmin = async (req, res) => {
    const rol='Admin'
    const { nombre, email, password } = req.body;
    const NewUser = User({ nombre,rol, email, password, })
    console.log(NewUser)
    NewUser.password = await NewUser.encryptPassword(password);
    await NewUser.save();
    res.send('se guardo')
}

module.exports = Userctrl;