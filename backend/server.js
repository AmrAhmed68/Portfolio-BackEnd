const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
const jwt = require("jsonwebtoken"); 

const adminRoutes = require("./controllers/admin");
const projectRoutes = require("./controllers/project");
const skillsRoutes = require("./controllers/skills");

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["https://portfolio-back-end-rust.vercel.app"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded; 
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

app.use("/api", authenticate ,  adminRoutes  );
app.use("/api", projectRoutes , authenticate);
app.use("/api", skillsRoutes , authenticate );


app.use("/secure-route", authenticate , (req, res) => {
  res.json({ message: "You have access!" });
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
