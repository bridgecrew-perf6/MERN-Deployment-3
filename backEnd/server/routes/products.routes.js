const ProductsController = require("../controllers/products.controller");

module.exports = app => {
    app.get("/api/test", ProductsController.testResponse);

    app.get("/api/products/all", ProductsController.findAllProducts);

    app.post("/api/products/new",ProductsController.newProduct);

    app.get("/api/products/:_id", ProductsController.findOneProduct);

    app.delete("/api/products/:_id/delete",ProductsController.deleteOneProduct);

    app.patch("/api/products/:_id/update", ProductsController.updateOneProduct);

}    