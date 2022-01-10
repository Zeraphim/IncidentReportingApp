var express = require("express");
var router = express.Router();

router.use(express.json());
router.post("/", (req, res, next) => {
  let data = req.body;
  res.send(
    `Your email is ${data["email"]} and your password is ${data["password"]}`
  );
});

module.exports = router;
