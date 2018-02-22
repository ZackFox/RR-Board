const jwt = require("jsonwebtoken");
const { User, Role } = require("../models");

const authController = {};

authController.signUp = (req, res) => {
  const { username, email, password } = req.body;
  User.create({
    username,
    email,
    password,
  })
    .then(user => {
      res.json(user);
    })
    .catch(err => console.log(err));
};

authController.signIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({
    where: { email },
    include: { model: Role, as: "role" },
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
        role: data.role.name,
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

authController.getUser = (req, res) => {
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

module.exports = authController;
