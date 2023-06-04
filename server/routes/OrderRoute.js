import express, { response } from "express";
import Order from "../Model/OrderSchema.js";

const router = express.Router();

router.post("/", async(req, res) => {
    const order = req.body;

    const newOrder = new Order(order);
    try {
        await newOrder.save();
        response.status(200).json(newOrder);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
})

export default router;