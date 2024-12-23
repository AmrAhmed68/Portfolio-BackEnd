const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());

const adminRoutes = require("./controllers/admin");
const projectRoutes = require("./controllers/project");
const skillsRoutes = require("./controllers/skills");

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'https://portfolio-seven-opal-43.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", 'https://portfolio-seven-opal-43.vercel.app'); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api" , adminRoutes  );
app.use("/api", projectRoutes );
app.use("/api", skillsRoutes  );

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;
