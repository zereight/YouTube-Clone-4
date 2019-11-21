import express from "express";
import { routers } from "../routes";
import { homeController, logoutController, getJoinController, searchController, postJoinController, getLoginController, postLoginController } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routers.home, homeController);
globalRouter.get(routers.login, getLoginController);
globalRouter.post(routers.login, postLoginController);
globalRouter.get(routers.logout, logoutController);
globalRouter.get(routers.join, getJoinController);
globalRouter.post(routers.join, postJoinController);
globalRouter.get(routers.search, searchController);

export default globalRouter;