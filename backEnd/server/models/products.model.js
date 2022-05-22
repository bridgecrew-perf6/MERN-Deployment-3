const mongoose = require("mongoose");

const ProductManagerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        minlength: [3, "Title must be at least 3 characters."],
        validate: {
            validator: (value)=>{
                //return true for valid and false for not valid
                return !value.toLowerCase().includes("ballet");
            },
            message: " We do NOT sell ballet items because ballet is not a sport!"
        }

    },    
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price must be at least a dollar."],
        max: [300, "Price cannot exceed $300."]
    },    
    description: {
        type: String,
        required: [true, "Description is required."],
        minlength: [5, "Description must be at least 5 characters."]
    }
}, {timestamps:true})

const Products = mongoose.model("Products", ProductManagerSchema);

module.exports = Products;