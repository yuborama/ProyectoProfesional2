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
    ModificPet,
    UpdatePet
 } = require('../controllers/pet.controller');

const{
   NewCite,
   CreateCite
} = require('../controllers/cite.controller')


//tipos de animales------------------------------------------------
router.post('/animals/new_animal', createNewtype);
router.get('/admin/add_animal', rederNewanimal);

 //Mascota------------------------------------------
 router.get('/user/my_pets', ListAllPets);
 router.get('/user/new_pet', ListAlltype);


 router.post('/user/new_pet', createNewPet);


 router.get('/user/modific_pet/:id', ModificPet);
 router.put('/user/modific_pet/:id', UpdatePet);
 router.delete('/user/prueba', ModificPet);

 //citas -------------------------------------------
router.get('/user/new_cite/:id', NewCite);

router.post('/user/new_cite', CreateCite);

router.get('/user/modific_cite/', rederAlltype);

router.get('/user/pet-history', rederAlltype);




module.exports=router;