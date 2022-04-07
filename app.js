const express = require("express");
const morgen = require('morgan');
const bodyParser = require('body-parser');
const produst = require('./api/routes/products');
const app = express();
const mongoos = require('mongoose');
const user = require("./api/routes/users");
const auth = require("./api/routes/auth");
const todos =require('./api/routes/todo')
const email = require("./api/routes/send_email");
const cors = require("cors");


mongoos.connect('mongodb+srv://sumit:sumit97249@cluster0.zobio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(
res=>{
    console.log('database conected');
    console.log("http://localhost:3000/");
}
).catch(
    err =>{
        console.log("database not conected");
    }
)
app.use(morgen('dev'))
app.use('/uplode',express.static('uplode'))
// app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(cors({
    origin:"*"
}))
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});




// app.use((res,req,next)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if (req.method === "OPTIONS") {
//       res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//       return res.status(200).json({});
//     }
//     next();
// }
// )
app.use('/auth', auth)
app.use('/email', email)
app.use('/api/products', produst);
app.use('/api/user', user);
app.use('/api/todo', todos);
;
app.use((res,req,next)=>{
    const err = new Error('404 Not Found');
    err.status = 404;
    next(err);
})

app.use( (err, req, res, next)=> {

  res.status(err.status || 500)
  res.json(
      {
          error:{
              message:err.message
          }
      }
  )
});

module.exports = app;

 // mongodb+srv://Sumitpatel:<password>@cluster0.nt5gi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority