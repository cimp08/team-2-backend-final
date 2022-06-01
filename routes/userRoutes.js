const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  updateProfile,
  getUser,
  getGenderedUsers,
  addMatch,
  getUsers,
} = require("../controllers/userController");

router.route("/").put(updateProfile);
router.route("/user").get(getUser);
router.route("/gender-users").get(getGenderedUsers);
router.route("/add-match").put(addMatch);
router.route("/users").get(getUsers);

module.exports = router;
