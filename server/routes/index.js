const Router = require("express").Router();
const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const verifyToken = require("../middleware/verifyToken");

Router.post("/signup", userController.signUp);
Router.post("/signin", userController.signIn);

Router.get("/user", userController.getCurrentUser);
Router.get("/user/:id", userController.getUser);

Router.get("/posts", postController.all);
Router.get("/post/:id", postController.getOne);

module.exports = Router;
