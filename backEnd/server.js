const express = require("express");
const app = express();
const port = 8000;
app.use(express.json(), express.urlencoded({extended:true}));   //Posts can't work without it.

//These 2 lines are needed for communication between front and back ends
const cors = require("cors");
app.use(cors());

require("./server/config/mongoose.config");
require("./server/routes/products.routes")(app);

app.listen(port,()=>console.log(`running on port ${port}, ok, some products from the server!`));