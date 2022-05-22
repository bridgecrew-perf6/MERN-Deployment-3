// This file shouldn't change except for the database connection and maybe your messages

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/productManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("yo yo you're connected to mongo!!!"))
    .catch(err=>console.log("DB Connection failed!!!!", err))