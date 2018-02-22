const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./server/models");
const routes = require("./server/routes");

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/", routes);
app.use("/", (req, res) => {
  res.send("here render index page");
});

sequelize
  .authenticate()
  .then(() => {
    app.listen(app.get("port"));
    console.log(`Server is started on port ${app.get("port")}.`);
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
