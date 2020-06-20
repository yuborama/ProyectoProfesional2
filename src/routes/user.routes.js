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

const{Autentacion,Autentacionuser}=require('../helper/auth')
//tipos de animales------------------------------------------------
//router.post('/animals/new_animal',Autentacionuser, createNewtype);
//router.get('/admin/add_animal',Autentacionuser, rederNewanimal);

 //Mascota------------------------------------------
 router.get('/user/my_pets',Autentacionuser, ListAllPets);
 router.get('/user/new_pet',Autentacionuser, ListAlltype);


 router.post('/user/new_pet',Autentacionuser, createNewPet);


 router.get('/user/modific_pet/:id',Autentacionuser, ModificPet);
 router.put('/user/modific_pet/:id',Autentacionuser, UpdatePet);
 router.delete('/user/prueba',Autentacionuser, ModificPet);

 //citas -------------------------------------------
router.get('/user/new_cite/:id',Autentacionuser, NewCite);

router.post('/user/new_cite/:id',Autentacionuser, CreateCite);

router.get('/user/modific_cite/', rederAlltype);

router.get('/user/pet-history', rederAlltype);




module.exports=router;