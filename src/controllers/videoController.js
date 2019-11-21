import { routers } from "../routes";

export const getUploadController = (req, res) => {
  res.render("upload", {pageTitle: "upload"});
};
export const postUploadController = (req, res) => {
  const{
    body: {file, title, description}
  } = req;
  res.redirect(routers.videoDetail(324393));
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