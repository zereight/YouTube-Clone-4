import express from "express";
import { routers } from "../routes";
import { usersController, userDetailController, userProfileController, editProfileController, changePasswordController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routers.home, usersController);
userRouter.get(routers.userDetail, userDetailController);
userRouter.get(routers.userProfile, userProfileController);
userRouter.get(routers.editProfile, editProfileController);
userRouter.get(routers.changePassword, changePasswordController);

export default userRouter;