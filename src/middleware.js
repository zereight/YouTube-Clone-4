/* eslint-disable import/prefer-default-export */
import multer from "multer";
import {routers} from "./routes";

const multerVideo = multer({dest:"uploads/videos"});

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "YouTube";
  res.locals.routes = routers;
  res.locals.user= {
    isAuthenticated: true,
    id: 1
  }
  next();
}

export const uploadVideo = multerVideo.single("videoFile"); // videoFile이라는 것에 대해 multer를 만든다.