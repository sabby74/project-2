//bring in mongoose
const mongoose = require("mongoose")



//order Schema
const orderSchema = new mongoose.Schema ({
    userId: { ref : 'User', type: mongoose.Schema.Types.ObjectId},
    products: [{ ref:'Product', type:mongoose.Schema.Types.ObjectId}],
    isComplete : Boolean,
    total : Number
    
    },
    {timestamps : true},
    )
    
    
    const Order = new mongoose.model("Order", orderSchema)
    
    
    module.exports= Order;