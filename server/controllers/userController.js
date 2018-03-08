const jwt = require("jsonwebtoken");
const models = require("../models");
const { user, role, vote } = require("../models");

const userController = {};

userController.signUp = (req, res) => {
  const { username, email, password } = req.body;
  user
    .create({
      username,
      email,
      password,
    })
    .then(user => {
      res.json(user);
    })
    .catch(err => console.log(err));
};

userController.signIn = (req, res) => {
  const { email, password } = req.body;
  user
    .findOne({
      where: { email },
      attributes: [
        "id",
        "username",
        "email",
        "avatar",
        "password",
        [models.sequelize.col("name"), "role_name"],
        "createdAt",
      ],
      include: { model: role, attributes: [] },
    })
    .then(data => {
      if (!data) {
        return res
          .status(401)
          .json({ message: "Полозователь не зарегистрирован" });
      }

      if (!data.checkPassword(password, data.password)) {
        return res.status(403).json({ message: "Неверный пароль" });
      }

      const user = {
        id: data.id,
        username: data.username,
        email: data.email,
        role_name: data.role_name,
      };

      const token = jwt.sign(user, "spiderman", { expiresIn: 60 * 60 });

      console.log(data.get({ plain: true }));

      res.status(200).json({
        message: "success",
        token,
        user,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

userController.getCurrentUser = (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.split(" ")[1] : null;

  if (token) {
    let userData;
    try {
      const { id, username, email, role } = jwt.verify(token, "spiderman");
      res.status(200).json({
        message: "success",
        user: { id, username, email, role },
      });
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  }
};

userController.getUser = (req, res) => {
  const id = req.params.id;
  user
    .findOne({
      where: { id },
      attributes: [
        "id",
        "username",
        "email",
        "avatar",
        "createdAt",
        [models.sequelize.fn("AVG", models.sequelize.col("rate")), "rating"],
      ],
      include: [
        { model: role, attributes: ["name"] },
        { model: vote, attributes: [] },
      ],
      group: ["user.id", "role.id"],
    })
    .then(user => {
      res.status(200).json({ user });
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = userController;
