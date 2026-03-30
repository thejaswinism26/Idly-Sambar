// server.js
const express = require("express");
const cors = require("cors");
const app = express();  // ← must come BEFORE app.get or app.post

app.use(cors());
app.use(express.json());

// ROOT route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// POST /complaint (dummy, no DB yet)
app.post("/api/complaint", (req, res) => {
  const { description, location } = req.body;

  const newComplaint = {
    complaintId: "CMP" + Math.floor(Math.random() * 1000),
    description,
    location,
    status: "Submitted",
    createdAt: new Date()
  };

  res.status(201).json(newComplaint);
});

// GET /complaint/:id (dummy)
app.get("/api/complaint/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    complaintId: id,
    description: "Test complaint",
    location: "Test location",
    status: "Submitted",
    createdAt: new Date()
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
