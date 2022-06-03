const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

const {
  updateProfile,
  getUser,
  getGenderedUsers,
  addMatch,
} = require("../controllers/userController");

router.route("/").put(updateProfile);
router.route("/user").get(verifyToken, getUser);
router.route("/gender-users").get(getGenderedUsers);
router.route("/add-match").put(addMatch);
router.get("/protected", verifyToken);

module.exports = router;
