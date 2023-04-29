const mongoose = require('mongoose')

const { Schema } = mongoose;
const OrderSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true,
        default: 'defaultorderid'
    },
    paymentInfo:{
        type: String,
        default: ''
    },
    product: [{ 
        productId: { 
            type: String, 
            required: true 
        },
        quantity: { 
            type: String, 
            default: 1 
        } 
    }],
    address: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Pending',
        required: true
    }
}, { timestamps: true });
mongoose.models = {}

const Order = mongoose.model('Order', OrderSchema)
module.exports = Order