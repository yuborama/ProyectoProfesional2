const indexctrl={};

indexctrl.rederIndex =(req,res)=>{
    res.render('index')
}

indexctrl.rederAbout =(req,res)=>{
    res.render('about')
}

indexctrl.rederSingup =(req,res)=>{
    res.render('users/singup')
}

indexctrl.Singup =(req,res)=>{
    res.send('users/singup')
}

 module.exports = indexctrl;