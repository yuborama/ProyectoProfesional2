const express = require("express");
const router = express.Router();

const { rederIndex, rederAbout,rederSingup,Singup } = require('../controllers/index.controller');

router.get('/', rederIndex);

router.get('/about',rederAbout);

router.get('/singup',rederSingup);
router.post('/singup',Singup);

module.exports=router;