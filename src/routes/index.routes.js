const express = require("express");
const router = express.Router();

const { rederIndex, rederAbout,rederSingin } = require('../controllers/index.controller');

const { NewUser,renderSingup } = require('../controllers/user.controller');



router.get('/', rederIndex);



router.get('/about',rederAbout);

router.get('/new_user',renderSingup);
router.get('/singin',rederSingin);


//router.post('/singup',Singup);
//router.post('/singin',Singin);

router.post('/singup',NewUser);


module.exports=router;