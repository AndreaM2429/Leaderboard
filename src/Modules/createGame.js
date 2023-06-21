const newGame = async () => {
  const dataplayer = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: 'Saydin nore-sar',
    }),
  });
  const sendComplete = await dataplayer.json();
  return sendComplete;
};

export default newGame;