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

const {
  getMessages,
  postMessage,
} = require("../controllers/messageController");

router.route("/").put(updateProfile);
router.route("/user").get(verifyToken, getUser);
router.route("/gender-users").get(getGenderedUsers);
router.route("/add-match").put(addMatch);
router.route("/users").get(getUsers);
router.get("/protected", verifyToken);
router.route("/messages").get(getMessages);
router.route("/message").post(postMessage);

module.exports = router;
