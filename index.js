const express = require("express");
const router = express.Router();

const app = express();

const port = 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use((req, res, next) => {
  res.send("Welcome to Express");
});

router.get("/login", (req, res, next) => {
  // get placeholder
});

router.get("/signup", (req, res, next) => {
  // get placeholder
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
