import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));


const PORT = process.env.PORT;

app.use(cookieParser());


app.use("/auth",proxy(process.env.AUTH_SERVICE_URL));

app.get("/", (req, res) => {
  res.send("Gateway server is running");
});
app.listen(PORT, () => {
  console.log(`Gateway server is running on port ${PORT}`);
})
