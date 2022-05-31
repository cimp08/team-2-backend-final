const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  updateProfile,
  getUser,
  getGenderedUsers,
} = require("../controllers/userController");

router.route("/").put(updateProfile);
router.route("/user").get(getUser);
router.route("/gender-users").get(getGenderedUsers);

module.exports = router;
