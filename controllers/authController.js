const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  // Our register logic starts here
  try {
    // Get user input
    const { userName, email, password } = req.body;

    // Validate user input
    if (!(email && password && userName)) {
      res.status(400).send("All input is required");
    }

    // check if username already exist
    const oldUserName = await User.findOne({ userName });

    if (oldUserName) {
      return res
        .status(409)
        .send("Username Already Exist. Please Provide Another One");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      userName,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // return new user
    res.status(201).json({ msg: "Account is created. Please Login!" });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { id: user._id, username: user.username, role: user.role },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );

      // user
      res
        .cookie("token", token, {
          /* httpOnly: true, */
          sameSite: "none",
          secure: true,
        })
        .status(200)
        .json({ msg: "Logged in successfully", user, token });
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
};

const logout = async (req, res) => {
  return res
    .clearCookie("token", {
      /* httpOnly: true, */
      sameSite: "Lax",
      secure: true,
    })
    .status(200)
    .json({ message: "Successfully logged out 😏 🍀" });
};

module.exports = { register, login, logout };
