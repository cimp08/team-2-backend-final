const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const { updateProfile } = require("../controllers/userController");

router.route("/").put(updateProfile);

module.exports = router;
