const express = require("express");
const cors = require('cors')
const app = express();
const port = 3002;
const product = require('./Routes/getRoutes');
const cart = require('./Routes/getRoutes')
const addDetail = require('./Routes/getRoutes');
const userRoute = require('./Routes/userRoutes')
const mongoose = require('mongoose');

 app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // parse incoming Request Object if object, with nested objects, or generally any type.
// app.use(express.urlencoded({ extended: false }))  //can only parse incoming Request Object if strings or arrays
mongoose.connect('mongodb://localhost:27017/fooddelivery')
console.log("Connected to Mongodb");

app.use((req,res,next)=>{
  console.log("Time:",Date.now())
  next();
})
app.use("/api",product );
app.use('/api',userRoute)
console.log("listening")
app.use('/cart',cart);
app.use('/demo',addDetail);

app.listen(port, () => {
  console.log(`Server running successfully at port ${port}`);
});
