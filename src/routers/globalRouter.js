import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res)=>{
  res.send("globalRouter");
});

export default globalRouter;