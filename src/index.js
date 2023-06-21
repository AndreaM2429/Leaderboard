import './style.css';
import sending from './Modules/postAPI.js';
import getting from './Modules/getAPI.js';

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
      sending(user.value, score.value);
      setTimeout(() => {
        getting();
      }, 300);
      user.value = '';
      score.value = '';
    });
    refreshButton.addEventListener('click', () => {
      getting();
      refreshMessage.style.display = 'flex';
      setTimeout(() => {
        refreshMessage.style.display = 'none';
      }, 1000);
    });
    getting();
  }
}

Leaderboard.init();