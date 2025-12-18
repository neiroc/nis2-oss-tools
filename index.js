const express = require("express");
const app = express();

app.use(express.json());

// Intentionally simple endpoint
app.get("/", (req, res) => {
  res.send("NIS2 Secure Node App is running");
});

// Example risky pattern (for SAST demo)
app.post("/eval", (req, res) => {
  const userInput = req.body.input;
  const result = eval(userInput); // ❌ SAST should flag this
  res.json({ result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
