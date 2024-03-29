const express = require("express");
const cors = require('cors');
// const router = require("./router/index")
const bodyParser = require('body-parser')
const createUser = require('./router/userRouter')
const hostelRouter = require('./router/hostelRouter')
const collegeRouter = require('./router/collegeRouter')
const adminRouter  = require('./router/adminRouter');
var cookieParser = require('cookie-parser')
const db = require("./db/db");

const app = express();
app.use(cookieParser())
const PORT = process.env.PORT || 8000;

app.use(cors());

app.use(express.json({ limit : "100mb"}));
app.use(express.urlencoded({ extended: false}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))


app.use('/user', createUser);
app.use('/college', collegeRouter)
app.use("/hostel", hostelRouter)
app.use('/admin',adminRouter);
// app.use(router);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('./client/build'))
}

app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
