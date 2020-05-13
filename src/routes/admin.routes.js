const express = require("express");
const router = express.Router();

const {  
    createNewPet,
    ModificPet,
    HistoryPet,
    NewCite,
    ModifiCite
 } = require('../controllers/pet.controller');

 //preuba------------------------------------------
// router.get('/user/new_pet', rederAlltype);

/////////------------------------------------------


//router.post('/animals/new_animal', createNewtype);
//router.get('/admin/add_animal', rederNewanimal);

module.exports=router;