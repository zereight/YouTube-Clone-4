import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res)=> {
  res.send("User Page");
})

export default userRouter;