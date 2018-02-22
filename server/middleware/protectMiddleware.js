import jwt from "jsonwebtoken";
// import config from "../config/config";

export default (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.split(" ")[1] : null;

  if (token) {
    let user;
    try {
      user = jwt.verify(token, "spiderman");
      console.log(user);
      req.user = user;
      next();
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  } else {
    next();
  }
};
