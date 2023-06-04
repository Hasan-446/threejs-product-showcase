import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
    size: String,
    quantity: Number,
    deliveryMethod: String,
    email: String,
    fullName: String,
    address: String,
    paymentMethod: String,
})

export default mongoose.models.order || mongoose.model("order",OrderSchema)