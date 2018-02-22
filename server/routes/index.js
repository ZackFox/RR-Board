const Router = require("express").Router();
const userController = require("../controllers/authController");
const postController = require("../controllers/postController");
const verifyToken = require("../middleware/verifyToken");

Router.post("/signup", userController.signUp);
Router.post("/signin", userController.signIn);
Router.get("/user", userController.getUser);

Router.get("/posts", postController.getPosts);

module.exports = Router;
