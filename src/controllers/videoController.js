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
    res.render("videoDetail", {pageTitle: video.title, video});
  }catch(error){
    res.redirect(routers.home);
  }
};

export const getEditVideoController = async (req, res) => {
  const {
    params: {
      videoId
    }
  } = req;

  try{
    const video = await Video.findById( videoId );
    res.status(200);
    res.render("editVideo", {pageTitle: `Edit ${video.title}`, video});
  }catch(error){
    res.status(400);
    console.log(error);
    res.redirect(routers.home);
  }
};
export const postEditVideoController = async (req,res) => {
  const{
    params: {videoId},
    body: {title, description}
  } = req;

  try{
    await Video.findOneAndUpdate({_id: videoId}, {title, description});
    res.redirect(routers.videoDetail(videoId));
  }catch(error){
    res.status(400);
    res.redirect(routers.home);
  }
}

export const deleteVideoController = async (req, res) => {
  const { params: { videoId } } = req;

  try{
    await Video.findByIdAndRemove({_id:videoId});
  }catch(error){
    console.log(error);
  }
  res.redirect(routers.home);
};