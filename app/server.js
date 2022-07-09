// 1. Import Dependencies
const express = require("express");
const cors = require("cors");
require("dotenv").config(); 

// 2. Setup and Middleware:
const app = express();
app.use(cors());
app.use(express.json());

// 4. Import router:
const wmlRoutes = require("./routes/api/wml");
app.use("/api/wml", wmlRoutes);

// 3. Start server:
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});