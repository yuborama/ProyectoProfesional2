const express = require("express");
const router = express.Router();

const { rederIndex, rederAbout } = require('../controllers/index.controller');

router.get('/', rederIndex);

router.get('/about',rederAbout);

module.exports=router;