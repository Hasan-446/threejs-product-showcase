import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openAi= new OpenAIApi(config);

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello World! dall e routes" });
});

router.route("/").post(async(req, res) => {
  try {
    const {prompt}= req.body;
    
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Something went wrong"})
  }
})

export default router;
