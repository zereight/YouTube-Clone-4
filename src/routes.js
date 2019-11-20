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
  userDetail: "/:userId",
  editProfile: "/editProfile",
  changePassword: "/changePassword",

  // video
  videos: "/videos",
  upload: "/upload",
  videoDetail :"/:videoId",
  editVideo: "/:videoId/edit",
  deleteVideo : "/:videoId/deleteVideo",

};