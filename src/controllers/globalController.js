export const homeController = (req, res) => {
  res.render("home", {pageTitle: "Home"});
};
export const loginController = (req, res) => {
  res.render("login", {pageTitle: "Login"});
};
export const logoutController = (req, res) => {
  res.render("logout", {pageTitle: "Logout"});
};
export const joinController = (req, res) => {
  res.render("join", {pageTitle: "Join"});
};
export const searchController = (req, res) => {
  res.render("search", {pageTitle: "Search"});
};