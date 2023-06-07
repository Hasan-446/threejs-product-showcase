import express, { response } from "express";
import Order from "../Model/OrderSchema.js";

const router = express.Router();

router.post("/addOrder", async (req, res) => {
  const order = req.body;

  const newOrder = new Order(order);
  try {
    await newOrder.save();
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

router.get("/allOrder", async (req, res) => { 
  try {
    const orders = await Order.find({})
    res.status(200).json(orders)
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
})

export default router;
