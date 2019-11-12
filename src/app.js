import express from "express";

import morgan from "morgan";
import helmet from "helmet";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;