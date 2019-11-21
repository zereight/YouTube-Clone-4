import { routers } from "../routes";

export const homeController = (req, res) => {
  res.render("home", {pageTitle: "Home", videos});
};

export const getLoginController = (req, res) => {
  res.render("login", {pageTitle: "Login"});
};
export const postLoginController = (req, res) => {
  res.redirect(routers.home);
};

export const logoutController = (req, res) => {
  res.render("logout", {pageTitle: "Logout"});
};

export const getJoinController = (req, res) => {
  res.render("join", {pageTitle: "Join"});
};
export const postJoinController = (req, res) => {
  console.log(req);

  const {body:{name, email, password1, password2}} = req;

  if( password1 !== password2 ){
    res.status(400);
    res.redirect(routers.home);
  }else{
    res.redirect(routers.home);
  }

  res.end();

};
export const searchController = (req, res) => {
  const { query: { term: searchingBy } } = req;
  res.render("search", {pageTitle: "search", searchingBy});
};
