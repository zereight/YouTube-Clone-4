import express from "express";
import { routers } from "../routes";
import { usersController, userDetailController, editProfileController, changePasswordController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routers.home, usersController);
userRouter.get(routers.changePassword, changePasswordController);
userRouter.get(routers.editProfile, editProfileController);
userRouter.get(routers.userDetail, userDetailController);

export default userRouter;