import getLikes from './getLikeData.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XStiGEvTbIVhBJcUTGCN/likes/';

const postLike = async (id) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  getLikes();
};

export default postLike;
