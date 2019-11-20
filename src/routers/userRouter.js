import express from "express";
import { routers } from "../routes";
import { userDetailController, editProfileController, changePasswordController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routers.changePassword, changePasswordController);
userRouter.get(routers.editProfile, editProfileController);
userRouter.get(routers.userDetail, userDetailController);

export default userRouter;