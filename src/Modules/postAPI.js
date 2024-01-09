const sendData = async (player, points) => {
  const dataplayer = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lnOTY3pQ8ZWWUEXQqBlg/scores/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: player,
      score: points,
    }),
  });
  const sendComplete = await dataplayer.json();
  return sendComplete;
};

export default sendData;
