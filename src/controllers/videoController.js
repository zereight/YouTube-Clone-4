export const videosController = (req, res) => {
  res.redirect("/");
};
export const uploadController = (req, res) => {
  res.render("upload");
};
export const videoDetailController = (req, res) => {
  res.render("videoDetail");
};
export const editVideoController = (req, res) => {
  res.render("editVideo");
};
export const deleteVideoController = (req, res) => {
  res.render("deleteVideo");
};