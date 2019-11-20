/* eslint-disable import/prefer-default-export */
import {routers} from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "YouTube";
  res.locals.routes = routers;
  next();
}