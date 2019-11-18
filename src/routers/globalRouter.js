import express from "express";
import { routers } from "../routes";
import { homeController, loginController, logoutController, joinController, searchController } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routers.home, homeController);
globalRouter.get(routers.login, loginController);
globalRouter.get(routers.logout, logoutController);
globalRouter.get(routers.join, joinController);
globalRouter.get(routers.search, searchController);

export default globalRouter;