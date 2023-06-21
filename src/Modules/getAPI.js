import displayScores from './loader.js';

const getting = async () => {
  const requestData = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lnOTY3pQ8ZWWUEXQqBlg/scores/');
  const data = await requestData.json();
  const resultData = data.result;

  displayScores(resultData);
};

export default getting;