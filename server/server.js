const express = require('express');
const http = require("http");
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose'); // helps connect to mongodb database
const bcrypt = require('bcrypt');

const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Passport Config
// require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));




let User = require('./models/user.model');

app.use(passport.initialize())
	
passport.use(new LocalStrategy({
	usernameField: "email"
}, 
	async (email, password, cb) => {
		try {
			const user = await User.findOne({
				$or: [{ email }],
			});
				
			if (!user || !user.password) {
				console.log("Incorrect password");
				return cb(null, false, { message: 'Incorrect email or password.' });
			}
		
			bcrypt.compare(password, user.password, (err, result) => {
				if(!result){
					console.log("Incorrect password");
					return cb(null, false, { message: 'Incorrect email or password.' });
				}
				console.log("Logged in");
				return cb(null, user, { message: 'Logged In Successfully' });
			});
		} catch (err) {
			return cb(null, false, {statusCode: 400, message: err.message});
		}
	}
))

passport.use(new JWTStrategy({
	jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: "jwt_secret"
	}, 
	async (jwt_payload, done) => {

		const user = await User.findById(jwt_payload.user._id);

		if (!user || !user.password) {
			return done(null, false, {
				message: "Token not matched"
			})
		}

		if(user.id === jwt_payload.user._id){
			return done(null, user)
		} else {
			return done(null, false, {
				message: "Token not matched"
			})
		}
	}
))

app.use(express.static(path.join(__dirname, "../client", "build")));

// Routes
// app.use('/api', require('./routes/auth.js'));
app.use('/api', require('./routes/user.js'));

app.listen(5000, err => {
    if (err) return console.log(err)
    console.log("Listening at http://localhost:5000/")
})