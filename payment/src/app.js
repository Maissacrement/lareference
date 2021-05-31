const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const { PORT } = process.env

// Middleware call
const header = (_, res, next ) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization, Accept"
  );
  next();
};
  
app.use(header)
app.use(cors())
  
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/json' }))
   
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
  
// Session and Cookies
app.use(cookieParser())
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'FakePasswordTest',
  cookie: { secure: true }
}))

app.use(router)

app.listen(PORT, () => console.log(`https://localhost:${PORT}`))