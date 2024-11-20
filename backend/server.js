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
    origin: ["https://portfolio-seven-opal-43.vercel.app"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

const allowedOrigins = [
  'https://portfolio-seven-opal-43.vercel.app'
];

// Middleware for CORS
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  res.header('Access-Control-Allow-Credentials', 'true'); // If you need to send cookies
  next();
});

// Add a preflight OPTIONS route
app.options('*', (req, res) => {
  res.sendStatus(204);
});


app.use("/api" ,  adminRoutes  );
app.use("/api", projectRoutes );
app.use("/api", skillsRoutes  );


app.use("/secure-route" , (req, res) => {
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
