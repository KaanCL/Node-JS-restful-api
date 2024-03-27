const db = require('mongoose');

const ProductSchema = new db.Schema({
      
    name : {type:String , required:true},
    price : {type:Number , required:true},
    description : {type:String , required:true},
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = db.model("Product",ProductSchema);