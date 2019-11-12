import express from "express";

const videoRouter = express.Router();

videoRouter.get("/", (req,res)=>{
  res.send("video Router");
})

export default videoRouter;