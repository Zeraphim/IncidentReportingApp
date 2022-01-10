const express = require("express"),
  login = require("./routes/login");
signup = require("./routes/signup");

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
app.use("/login", login);
app.use("/signup", signup);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
