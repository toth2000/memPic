const express = require("express");

const { signIn, signUp } = require("../controller/users");  

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users Route");
});

router.post("/signIn", signIn);
router.post("/signUp", signUp);

module.exports = router;
