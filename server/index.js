import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from "./routes/dalle.router.js";
import OrderRoute from "./routes/OrderRoute.js";
import Connection from "./database/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/dalle", dalleRoutes);
app.use("/", OrderRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

const userName = process.env.DB_USERNAME;
const Password = process.env.DB_PASSWORD;
Connection(userName, Password);

app.listen(8080, () => console.log("server is running on port 8080"));
