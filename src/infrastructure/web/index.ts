import express from "express";
import dotenv from "dotenv";
import connectDB from "../db/mongo/connection";
import excuseRouter from "../web/routes";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/excuse", excuseRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    throw error;
  }
};

startServer();
