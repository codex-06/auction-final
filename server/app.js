const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const cors = require('cors');



const app =express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors({ origin: 'http://localhost:3000' }));
// Route
const User = require('./Routes/userRoutes');
const Product = require('./Routes/Product');




// async function main() {
//   await mongoose.connect('mongodb+srv://admin:admin@atlascluster.cziwjkx.mongodb.net/test?retryWrites=true&w=majority');

// }
//   main().catch(err => console.log(err));


  //  Router  user
app.use("/user",User);
app.use("/product",Product)


app.listen(8080,()=>{
console.log('server started on port 8080');
})