const passport = require('passport')
const localstrategy = require('passport-local').Strategy

const User = require('../models/users')

passport.use(new localstrategy({
    usernameField: 'email',
    passwordField: 'password'
},async (email, password, done) => {
    //consulta a la db 
    console.log('revisa el usuario');
    const user = await User.findOne({ email })
    console.log('despues de revisar el usuario');
    if (!user) {
        console.log('el usuario no existe');
        return done(null, false, { message: 'el usuario no existe' })
    } else {
        console.log('revisando contraseña del usuario');
        const macht= await user.matchPassword(password)
        console.log('despues de revisar contraseña');
        if(macht){
            return done(null,user)
        }else{
            return done(null,false,{message: 'Contraseña incorrecta'})
        }
    }
}
))


passport.serializeUser((User,done)=>{
    done(null,User.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id,(err,User)=>{
        done(err,User)
    })
})