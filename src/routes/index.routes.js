const express = require("express");
const router = express.Router();

const { rederIndex, rederAbout,rederSingin } = require('../controllers/index.controller');

const { NewUser,renderSingup,signin,logout } = require('../controllers/user.controller');



router.get('/', rederIndex);



router.get('/about',rederAbout);

router.get('/new_user',renderSingup);
router.get('/singin',rederSingin);
router.get('/logout',logout)
router.post('/singin',signin);

//router.post('/singup',Singup);
//router.post('/singin',Singin);

router.post('/singup',NewUser);


module.exports=router;