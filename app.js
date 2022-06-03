//Express
const express = require("express");
const app = express();

require("dotenv").config(); // To load environment variables from .env

//Cors
const cors = require("cors");
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://magenta-naiad-e18a89.netlify.app/",
    ],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://funny-croquembouche-d10144.netlify.app"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header(
    "Access-Control-Expose-Headers",
    "https://funny-croquembouche-d10144.netlify.app"
  );
  next();
});

const cookieParser = require("cookie-parser");

//Database
const connectDB = require("./db/connect");

//Routers
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");

app.use(express.json()); //To be able to access req.body
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

const auth = require("./middleware/auth");

app.get("/", (req, res) => {
  res.send("DoggyMatch");
});

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
