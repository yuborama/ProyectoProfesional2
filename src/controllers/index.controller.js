const indexctrl={};

indexctrl.rederIndex =(req,res)=>{
    res.render('index')
}

indexctrl.rederAbout =(req,res)=>{
    res.render('about')
}

 module.exports = indexctrl;