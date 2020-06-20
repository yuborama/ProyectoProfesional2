const express = require("express");
const router = express.Router();

const{
    createService,
    addService,
    ListServices,
    ChangeEstateService
} = require('../controllers/service.controller')

const{
    renderNAdmin,
    renderNVeterinary
}=require('../controllers/user.controller')

const {
    RederNewAnimal,
    createNewtype
}=require('../controllers/animal.controller');
const {  } = require("../controllers/admin.controller");


 //servicies------------------------------------------
router.get('/admin/all_services', ListServices);
router.get('/admin/new_service', createService);
router.post('/admin/new_service', addService);
//<------- cambio de estado---------->
router.get('/admin/estatechange/:id', ChangeEstateService)

//creacion de nuevos usuarios------------------------------
router.get('/admin/new_veterinary',renderNVeterinary);
router.get('/admin/new_admin',renderNAdmin);



router.post('/animals/new_animal', createNewtype);
router.get('/admin/add_animal', RederNewAnimal);

module.exports=router;