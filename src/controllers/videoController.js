
export const uploadController = (req, res) => {
  res.render("upload", {pageTitle: "upload"});
};
export const videoDetailController = (req, res) => {
  res.render("videoDetail", {pageTitle: "videoDetail"});
};
export const editVideoController = (req, res) => {
  res.render("editVideo", {pageTitle: "editVideo"});
};
export const deleteVideoController = (req, res) => {
  res.render("deleteVideo", {pageTitle: "deleteVideo"});
};