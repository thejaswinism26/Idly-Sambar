const express = require("express");
const cors = require("cors");

const app = express();  // ← MUST be here BEFORE any app.get/app.post

app.use(cors());
app.use(express.json());

// ROOT route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Example POST API
app.post("/api/complaint", (req, res) => {
  res.json({ message: "POST /complaint working!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const insightsRoutes = require("./routes/insights");

app.use("/insights", insightsRoutes);
