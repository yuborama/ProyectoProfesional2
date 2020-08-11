const indexctrl = {};
const Animal = require('../models/animals');
const services = require('../models/services');

/* indexctrl.rederIndex = (req, res) => {
    res.render('index')
} */
indexctrl.rederIndex = async (req, res) => {
    const tipos = await Animal.find().lean();
    const servicios = await services.find().lean();
    console.log(tipos);
    res.render('index', { tipos,servicios })
}

indexctrl.rederAbout = (req, res) => {
    res.render('about')
}

indexctrl.rederSingin = (req, res) => {
    res.render('users/singin')
}

module.exports = indexctrl;