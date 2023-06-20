import './style.css';
import displayScores from './Modules/loader.js';

class Leaderboard {
  static init() {
    const newLeader = new Leaderboard();
    return newLeader;
  }

  constructor() {
    displayScores();
  }
}

Leaderboard.init();