import displayLikes from "./displayLikes.js";

const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XStiGEvTbIVhBJcUTGCN/likes/";
const getLikes = async () => {
  let likes = [];
  const response = await fetch(url);
  likes = await response.json();
  displayLikes(likes);
};

export default getLikes;
