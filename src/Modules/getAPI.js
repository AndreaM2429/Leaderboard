import displayScores from './loader.js';
import sort from './sort.js';

const getAPI = async () => {
  const requestData = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lnOTY3pQ8ZWWUEXQqBlg/scores/');
  const data = await requestData.json();
  const resultData = data.result;

  const orderData = sort(resultData);
  displayScores(orderData);
};

export default getAPI;