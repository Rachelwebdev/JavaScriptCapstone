// import renderHomePage from "./renderHomePage";
import getLikes from "./getLikeData.js";

const displayLike = async (likes) => {
  console.log(likes);
  likes.forEach((like) => {
    console.log(like.likes);
    const showLike = document.getElementById(like.item_id);
    if (showLike !== null) {
      const likeCount = showLike.querySelector(".like-count");
      likeCount.textContent = `(${like.likes})`;
    }
  });
};

export default displayLike;
