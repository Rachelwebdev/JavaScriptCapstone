// import renderHomePage from "./renderHomePage";
import getLikes from "./getLikeData.js";

const displayLike = async (likes) => {
  console.log(likes);
  likes.forEach((like) => {
    const elementid = `show-${like.item_id}`;
    const showLike = document.getElementById(elementid);
    if (showLike !== null) {
      const likeCount = showLike.querySelector(".like-count");
      likeCount.innerHTML = `(${like.likes})`;
    }
  });
};

export default displayLike;
