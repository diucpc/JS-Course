let scores, activePlayer, roundScore, gamePlaying;

// GAME STARTS
init();

// NEW BUTTON
document.querySelector('.btn-new').addEventListener('click', init);

// ROLL BUTTON
document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    // random dice
    let dice = Math.floor(Math.random() * 6 + 1);
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = `./img/dice-${dice}.png`;
  }

  // update score
  if (dice != 1) {
    roundScore = roundScore + dice;
    document.querySelector(
      `#current-score-${activePlayer}`
    ).textContent = roundScore;
  } else {
    nextPlayer();
  }
});

// FUNCTIONS
function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.querySelector('#score-0').textContent = '0';
  document.querySelector('#score-1').textContent = '0';

  document.querySelector('#current-score-0').textContent = '0';
  document.querySelector('#current-score-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}
