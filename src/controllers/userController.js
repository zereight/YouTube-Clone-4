import { routers } from "../routes";

export const userDetailController = (req, res) => {
  const {params: id}= req;
  res.render(routers.userDetail(id), {pageTitle: "userDetail"});
};
export const editProfileController = (req, res) => {
  res.render("editProfile", {pageTitle: "editProfile"});
};
export const changePasswordController = (req, res) => {
  res.render("changePassword", {pageTitle: "changePassword"});
};