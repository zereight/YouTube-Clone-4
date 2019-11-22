/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
export const routers = {
  // global
  home : "/",
  login: "/login",
  logout: "/logout",
  join: "/join",
  search: "/search",
  
  // user
  users: "/users",
  userDetail: (id) => {
    if(id){
      return `/users/${id}`;
    }else{
      return "/:userId";
    }
  },
  editProfile: "/editProfile",
  changePassword: "/changePassword",

  // video
  videos: "/videos",
  upload: "/upload",
  videoDetail : (id)=>{
    if(id){
      return `/videos/${id}`;
    }else{
      return "/:videoId";
    }
  },
  editVideo: (id) => {
    if(id){
      return `/${id}/edit`;
    }else{
      return "/:videoId/edit";
    }
  },
  deleteVideo : (id)=>{
    if(id){
      return `/${id}/deleteVideo`;
    }else{
      return "/:videoId/deleteVideo";
    }
  },

};