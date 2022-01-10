var express = require("express");
var router = express.Router();

router.use(express.json());
router.post("/", (req, res, next) => {
  let data = req.body;
  res.send(
    `Your email is ${data["email"]} and your password is ${data["password"]}`
  );
});

// Placeholder/test. Login should receive plain-text password to be compared with the hash of the user using bcrypt.compare().

module.exports = router;
