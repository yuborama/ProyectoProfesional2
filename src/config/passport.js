 const passport = require('passport')
 const localstrategy= require('passport-local').Strategy

 const User = require('../models/users')

    passport.use(new localstrategy({
        usernameField: 'email',
        passwordField: 'password'
    },(email, password,done)=>{
        //consulta a la db 
        const user = await User.findOne({email})
        if(!user){
            return done(null)
        }
    }
    ))