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

// app.use(
//   cors({
//     origin: ["https://portfolio-seven-opal-43.vercel.app"], 
//     credentials: true,
//   })
// );

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

// Custom handler
const handler = (req, res) => {
  const d = new Date();
  res.end(d.toString());
};

// Use the CORS middleware
app.use((req, res, next) => allowCors(handler)(req, res, next));

app.use("/api" ,  adminRoutes , handler );
app.use("/api", projectRoutes , handler );
app.use("/api", skillsRoutes  , handler );

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
