const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter product name'],
        trim:true
    },
    description:{
        type:String,
        required:[true,'Please enter product description'],
    },
    price:{
        type:Number,
        required:[true,'Please enter product price'],
        maxLength:[6,'Price cannot exceed 6 characters'],
        default:0.0
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,'Please select product catagory'],
    },
    stock:{
        type:Number,
        required:[true,'Please enter product stock'],
        maxLength:[4,'Stock cannot exceed 4 characters'],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews: [
        {
          user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          rating: {
            type: Number,
            required: true,
          },
          comment: {
            type: String,
            required: true,
          },
        },
      ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Product',productSchema);