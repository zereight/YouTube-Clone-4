export const usersController = (req, res) => {
  res.redirect("/");
};
export const userDetailController = (req, res) => {
  res.render("userDetail");
};
export const editProfileController = (req, res) => {
  res.render("editProfile");
};
export const changePasswordController = (req, res) => {
  res.render("changePassword");
};