import express from "express";
import { routers } from "../routes";
import { uploadController, videoDetailController, editVideoController, deleteVideoController } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routers.upload, uploadController);
videoRouter.get(routers.videoDetail, videoDetailController);
videoRouter.get(routers.editVideo, editVideoController);
videoRouter.get(routers.deleteVideo, deleteVideoController);

export default videoRouter;