/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDb = require("./config/db");
const userModel = require('./models/userModel')
// Create Express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDb();

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*", // Allow requests from all origins
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Specify the allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization", "shopifyStoredomain", "shopifyAccessToken"], // Specify the allowed headers
  })
);
app.use(morgan("dev")); // Log HTTP requests



// Define API routes
app.use("/api/test", require("./routes/testRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/profile", require("./routes/userRoutes"));
app.use("/api/product", require("./routes/imageRoutes"));
app.use("/api/data", require("./routes/customizerRoutes"));
app.use("/api/data", require("./routes/layerDataRoutes"));
app.use("/api/data", require("./routes/ProductDataRoutes"));
app.use("/api/shopify", require("./routes/shopifyRoutes"));

userModel.createSuperAdminIfNeeded();


// Set the port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.white.bgMagenta);
});
