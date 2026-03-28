const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use(express.json());
app.use(cors());


app.use(cors({
  origin: "https://expenso-delta.vercel.app/"
}));


const transactionRoutes = require("./routes/transactionRoutes");
app.use("/api/v1", transactionRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

