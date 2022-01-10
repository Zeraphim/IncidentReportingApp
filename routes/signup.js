var express = require("express");
var router = express.Router();

router.use(express.json());
router.post("/", (req, res, next) => {
  let data = req.body;
  res.send(`Sign up data received with password ${data["password"]}`);
});

// the data in req.body contains the JSON form data from the signup page.
// FORMAT:
/* {
    city: string,
    date-input: Date,
    email: string,
    fname: string,
    lname, string,
    password, string (IMPORTANT: SAVE STRING AS IS. Any modification will render the hash invalid upon comparison.)
}*/

module.exports = router;
