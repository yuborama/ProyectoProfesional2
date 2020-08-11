const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const morgan = require('morgan');
const multer = require('multer');


// Initializations
const app = express();
require('./config/passport');

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  helpers:{
    calculation: function(value){
      return value+7;
    },
    Autention: function(value,options){
      if (value.rol=="Usuario") {
        return options.fn({rolus:true, rolve:false,rolad:false});  
      }else if (value.rol=="Veterinario") {
        return options.fn({rolus:false, rolve:true,rolad:false});  
      } else {
        return options.fn({rolus:false, rolve:false,rolad:true});  
      }
      
    }
  },  
  extname: '.hbs'
  
}));
app.set('view engine', '.hbs');

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) => {
      cb(null, file.originalname);
  }
});

app.use(multer({
  storage,
  dest: path.join(__dirname, 'public/uploads'),
  limits: {fileSize: 2000000},
  fileFilter: (req, file, cb) =>{
      const filetypes = /jpeg|jpg|png|gif/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname));
      if (mimetype & extname){
          return cb(null, true);
      }
      cb("Error: Archivo debe ser una imagen validad");
  }
}).single('image'));

// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
   next();
});

// routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/admin.routes'));
app.use(require('./routes/user.routes'));
app.use(require('./routes/veterinario.routes'));
// static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;