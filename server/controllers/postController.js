const jwt = require("jsonwebtoken");
const { User, Post } = require("../models");

const postController = {};

postController.getPosts = (req, res) => {
  Post.all({
    attributes: ["id", "thumbnail", "title", "text", "createdAt"],
    include: {
      model: User,
      as: "user",
      attributes: ["id", "username", "avatar"],
    },
  })
    .then(posts => {
      res.json({ posts });
    })
    .catch(err => console.log(err));
};

postController.getPost = (req, res) => {
  Post.findOne()
    .then(post => {
      res.status(200).json({ message: "success" });
    })
    .catch(err => {
      console.log(err);
    });
};

postController.createPost = (req, res) => {
  // const { email, password } = req.body;
  Post.findOne()
    .then(post => {
      res.status(200).json({ message: "success" });
    })
    .catch(err => {
      console.log(err);
    });
};

postController.deletePost = (req, res) => {
  // const { email, password } = req.body;
  Post.findOne()
    .then(post => {
      res.status(200).json({ message: "success" });
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = postController;
