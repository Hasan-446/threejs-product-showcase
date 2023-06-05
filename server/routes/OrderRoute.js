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

export default router;
