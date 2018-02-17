const express = require("express");
const bodyParser = require("body-parser");
const { sequelize, User } = require("./server/models");

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", (req, res) => {
  User.create({
    username: "tom",
    email: "vakanda",
    password: "12345",
  })
    .then(user => {
      console.log(user);
      res.send("пользователь");
    })
    .catch(err => console.log(err));
});

app.use("*", (req, res) => {
  User.all()
    .then(users => {
      res.json({ users });
    })
    .catch(err => console.log(err));
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection is successfull.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(app.get("port"), () => {
  console.log(`The server is running at localhost:${app.get("port")}`);
});
