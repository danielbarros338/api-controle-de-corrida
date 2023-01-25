const jwt = require("jsonwebtoken");
//import { AppError } from "../errors/appError";

export const authUser = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  const token = bearerToken.split(" ")[1];
  if (!token) throw new AppError("Invalid token", 401);

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) throw new AppError("Invalid token", err);
    req.user = { id: decoded.sub };
    next();
  });
};
