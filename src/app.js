import express from "express";

import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { routers } from "./routes";
import { localMiddleware } from "./middleware";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname,"views") );

app.use("/uploads", express.static("uploads")); // https://expressjs.com/ko/starter/static-files.html
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(localMiddleware);

app.use("/", globalRouter);
app.use(routers.users, userRouter);
app.use(routers.videos, videoRouter);

export default app;