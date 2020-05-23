const indexctrl = {};
const User = require('../models/users');

indexctrl.rederIndex = (req, res) => {

    res.render('index')
}

indexctrl.rederAbout = (req, res) => {
    res.render('about')
}

indexctrl.rederSingup = (req, res) => {
    res.render('users/singup')
}

indexctrl.Singup = async (req, res) => {
    console.log(req.body);
    const { nombre, email, password } = req.body;
    console.log('------------------------------------------------------')
    const NewUser = User({ nombre, email, password })
    console.log(NewUser)
    console.log('----------------------------1--------------------------')
    NewUser.password=await NewUser.encryptPassword(password);
    console.log('-----------------------------2-------------------------')
    await NewUser.save();
    console.log('------------------------------3------------------------')
    res.send('se guardo')
}

module.exports = indexctrl;