const passport = require('passport')
const localstrategy = require('passport-local').Strategy

const User = require('../models/users')

passport.use(new localstrategy({
    usernameField: 'email',
    passwordField: 'password'
},async (email, password, done) => {
    //consulta a la db 
    const user = await User.findOne({ email })
    if (!user) {
        return done(null, false, { message: 'el usuario no existe' })
    } else {
        const macht= await User.matchPassword(password)
        if(macht){
            return done(null,User)
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