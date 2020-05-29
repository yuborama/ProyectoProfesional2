const indexctrl = {};
const User = require('../models/users');

indexctrl.rederIndex = (req, res) => {
    res.render('index')
}

indexctrl.rederAbout = (req, res) => {
    res.render('about')
}

indexctrl.rederSingin = (req, res) => {
    res.render('users/singin')
}

module.exports = indexctrl;