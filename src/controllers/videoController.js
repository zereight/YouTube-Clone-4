import { routers } from "../routes";
import Video from "../models/Video";

export const getUploadController = (req, res) => {
  res.render("upload", {pageTitle: "upload"});
};
export const postUploadController = async (req, res) => {
  try{
    
    const {
      body: { title, description },
      file: {path}
    } = req;

    const newVideo = await Video.create({
      fileUrl: path,
      title,
      description
    });

    res.redirect( routers.videoDetail(newVideo.id) );

  }catch(error){
    console.log(error);
    res.redirect(routers.home);
  }
  
};

export const videoDetailController = async (req, res) => {

  const {params: {videoId}} = req;
  
  try{
    const video = await Video.findById(videoId);
    res.render("videoDetail", {pageTitle: "Video Detail", video});
  }catch(error){
    res.redirect(routers.home);
  }
};

export const editVideoController = (req, res) => {
  res.render("editVideo", {pageTitle: "editVideo"});
};
export const deleteVideoController = (req, res) => {
  res.render("deleteVideo", {pageTitle: "deleteVideo"});
};