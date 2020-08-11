const express = require("express");
const router = express.Router();

const {  RenderCitesofday} = require('../controllers/veterinary.controller');
const { ListadodeServices } = require("../controllers/service.controller");
const { listadonimales } = require("../controllers/animal.controller");
router.get('/veterinary/citesday',RenderCitesofday);
router.get('/listadeservicios',ListadodeServices)
router.get('/listadeanimales',listadonimales)
module.exports=router;