const express = require("express");
const router = express.Router();

const {  
    createNewtype,
    rederAlltype,
    rederNewanimal
 } = require('../controllers/admin.controller');

 const {  
    createNewPet,
    ListAllPets,
    ListAlltype,
 } = require('../controllers/pet.controller');


//tipos de animales------------------------------------------------
router.post('/animals/new_animal', createNewtype);
router.get('/admin/add_animal', rederNewanimal);

 //Mascota------------------------------------------
 router.get('/user/my_pets', ListAllPets);
 router.get('/user/new_pet', ListAlltype);


 router.post('/user/new_pet', createNewPet);


 router.get('/user/modific_pet/:id', rederAlltype);

 //citas -------------------------------------------
router.get('/user/new_cite', rederAlltype);

router.get('/user/modific_cite/:id', rederAlltype);

router.get('/user/pet-history', rederAlltype);




module.exports=router;