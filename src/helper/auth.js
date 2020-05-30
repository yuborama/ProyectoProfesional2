const helpers={}

helpers.Autentacion = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }
    req.flash('error_msg','no tiene los permisos suficientes')
    res.redirect('/')
}

helpers.Autentacionuser = (req,res,next)=>{
    if(req.isAuthenticated()){
        console.log("logueado");
        if (req.user.rol=='Usuario') {
        console.log("entro al if");
            return next()
        }
        console.log("no entro al if");
    }
    req.flash('error_msg','no tiene los permisos suficientes')
    res.redirect('/')
}
module.exports = helpers;