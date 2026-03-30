const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json()); // VERY IMPORTANT (lets you read JSON)

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.post("/complaint", (req, res) => {
  const data = req.body;

  console.log("Received complaint:", data);

  res.json({
    message: "Complaint received successfully"
  });
});