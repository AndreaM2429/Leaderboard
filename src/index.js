import './style.css';
import sendData from './Modules/postAPI.js';
import getAPI from './Modules/getAPI.js';

const submitData = document.querySelector('form');
const user = document.querySelector('#player');
const score = document.querySelector('#score');
const refreshButton = document.querySelector('#refresh');
const refreshMessage = document.querySelector('#refreshMessage');

class Leaderboard {
  static init() {
    const newLeader = new Leaderboard();
    return newLeader;
  }

  constructor() {
    submitData.addEventListener('submit', (event) => {
      event.preventDefault();
      sendData(user.value, score.value);
      setTimeout(() => {
        getAPI();
      }, 300);
      user.value = '';
      score.value = '';
    });
    refreshButton.addEventListener('click', () => {
      getAPI();
      refreshMessage.style.display = 'flex';
      setTimeout(() => {
        refreshMessage.style.display = 'none';
      }, 1000);
    });
    getAPI();
  }
}

Leaderboard.init();