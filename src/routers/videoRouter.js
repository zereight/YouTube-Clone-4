import express from "express";
import { routers } from "../routes";
import {  videoDetailController, deleteVideoController, getUploadController, postUploadController, getEditVideoController, postEditVideoController } from "../controllers/videoController";
import {uploadVideo} from "../middleware";

const videoRouter = express.Router();

videoRouter.get(routers.upload, getUploadController);
videoRouter.post(routers.upload, uploadVideo ,postUploadController);
videoRouter.get(routers.videoDetail(), videoDetailController);
videoRouter.get(routers.editVideo(), getEditVideoController);
videoRouter.post(routers.editVideo(), postEditVideoController);
videoRouter.get(routers.deleteVideo, deleteVideoController);

export default videoRouter;