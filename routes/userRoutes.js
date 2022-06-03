const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

const {
  updateProfile,
  getUser,
  getGenderedUsers,
  addMatch,
  getUsers,
} = require("../controllers/userController");

const { getMessages } = require("../controllers/messageController");

router.route("/").put(updateProfile);
router.route("/user").get(getUser);
router.route("/gender-users").get(getGenderedUsers);
router.route("/add-match").put(addMatch);
router.route("/users").get(getUsers);
router.get("/protected", verifyToken);
router.route("/messages").get(getMessages);

module.exports = router;
