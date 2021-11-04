const express = require("express");
const cookieSession = require("cookie-session");
const usersRepo = require("./repositories/users");
const users = require("./repositories/users");
const { reset } = require("nodemon");
const { comparePasswords } = require("./repositories/users");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cookieSession({
    keys: ["key1"],
  })
);

app.listen(3000, () => {
  console.log("Listening");
});
