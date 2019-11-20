
export const userDetailController = (req, res) => {
  res.render("userDetail", {pageTitle: "userDetail"});
};
export const editProfileController = (req, res) => {
  res.render("editProfile", {pageTitle: "editProfile"});
};
export const changePasswordController = (req, res) => {
  res.render("changePassword", {pageTitle: "changePassword"});
};