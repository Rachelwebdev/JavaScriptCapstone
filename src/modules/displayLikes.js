// import renderHomePage from "./renderHomePage";

const displayLike = async (likes) => {
  likes.forEach((like) => {
    const elementid = `show-${like.item_id}`;
    const showLike = document.getElementById(elementid);
    if (showLike !== null) {
      const likeCount = showLike.querySelector(".like-count");
      likeCount.innerHTML = `${like.likes}`;
    }
  });
};

export default displayLike;
