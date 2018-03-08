const jwt = require("jsonwebtoken");
const { user, post } = require("../models");

const postController = {};

postController.all = (req, res) => {
  post
    .all({
      attributes: ["id", "thumbnail", "title", "text", "createdAt"],
      include: {
        model: user,
        as: "user",
        attributes: ["id", "username", "avatar"],
      },
    })
    .then(posts => {
      res.json({ posts });
    })
    .catch(err => console.log(err));
};

postController.getOne = (req, res) => {
  const id = req.params.id;
  post
    .findOne({
      where: { id },
      attributes: ["id", "thumbnail", "title", "text", "createdAt"],
      include: {
        model: user,
        as: "user",
        attributes: ["id", "username", "avatar"],
      },
    })
    .then(post => {
      res.status(200).json({ post });
    })
    .catch(err => {
      console.log(err);
    });
};

postController.create = (req, res) => {
  post
    .findOne()
    .then(post => {
      res.status(200).json({ message: "success" });
    })
    .catch(err => {
      console.log(err);
    });
};

postController.delete = (req, res) => {
  // const { email, password } = req.body;
  post
    .findOne()
    .then(post => {
      res.status(200).json({ message: "success" });
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = postController;
