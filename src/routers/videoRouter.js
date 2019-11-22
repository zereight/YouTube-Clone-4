import express from "express";
import { routers } from "../routes";
import {  videoDetailController, editVideoController, deleteVideoController, getUploadController, postUploadController } from "../controllers/videoController";
import {uploadVideo} from "../middleware";

const videoRouter = express.Router();

videoRouter.get(routers.upload, getUploadController);
videoRouter.post(routers.upload, uploadVideo ,postUploadController);
videoRouter.get(routers.videoDetail(), videoDetailController);
videoRouter.get(routers.editVideo, editVideoController);
videoRouter.get(routers.deleteVideo, deleteVideoController);

export default videoRouter;