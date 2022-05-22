const Products = require("../models/products.model");

module.exports.testResponse = (req,res)=>{
    res.json({message: "Hi!  Responding with products from the controller!!!"})
}

module.exports.findAllProducts = (req,res) => {
    Products.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"Didn't work",err}))
}

module.exports.newProduct = (req,res) => {
    Products.create(req.body)
        .then(results=> res.json(results))
        .catch(err=> res.status(400).json({message:"Didn't work",err}))
}

module.exports.findOneProduct = (req,res) => {
    Products.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err=> res.status(400).json({message:"Didn't work!!!",err}))
}

module.exports.deleteOneProduct = (req,res) => {
    Products.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err=> res.status(400).json({message:"Didn't work!!!",err}))
}

module.exports.updateOneProduct = (req,res) => {
    Products.updateOne({_id: req.params._id}, req.body, {runValidators:true})        
        .then(results => res.json(results))
        .catch(err=> res.status(400).json({message:"Didn't work!!!",err}))
}