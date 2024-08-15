let jsResult = document.querySelector('.js-result');
let jsMoves = document.querySelector('.js-moves');

let score = JSON.parse(localStorage.getItem('score')) 
|| {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  updateScoreElement();

  function confirmResetScore() {
    const resetQuestionContainer = document.querySelector('.js-reset-confirm');

    resetQuestionContainer.classList.add('display-block');
    const yesButton = document.querySelector('.js-yes-button');
    const noButton = document.querySelector('.js-no-button');

    yesButton.addEventListener('click', () => {
      resetScore();
      resetQuestionContainer.classList.remove('display-block');
    });

    noButton.addEventListener('click', () => {
      resetQuestionContainer.classList.remove('display-block');
    });

    

  }

  function resetScore() {
    
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    jsResult.innerHTML = '';
    jsMoves.innerHTML = '';

} 


  let isAutoPlaying = false;
  let intervalId;

  document.querySelector('.js-reset-score-button')
    .addEventListener('click', confirmResetScore);

  const autoPlayButton = document.querySelector('.js-auto-play-button');

      autoPlayButton.addEventListener('click', autoPlay);
  
  function autoPlay() {
    if (!isAutoPlaying) {
      intervalId = setInterval(() =>  {
        const playerMove = pickComputerMove();
        playGame(playerMove)
      }, 1000);

      isAutoPlaying = true;

      autoPlayButton.innerHTML = 'Stop Auto Playing';
    } else {
      clearInterval(intervalId)
      isAutoPlaying = false;

      autoPlayButton.innerHTML = 'Auto Play';
    }
       
  }

  document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
  });

  document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors');
  });

  document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper');
  });

  document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r'){
      playGame('rock');
    } else if(event.key === 'p'){
      playGame('paper');
    } else if(event.key === 's'){
      playGame('scissors');
    } else if(event.key === 'a'){
      autoPlay();
    } else if(event.key === 'Backspace'){
      resetScore();
    }
  });


  function playGame(playerMove){
      const computerMove = pickComputerMove();

      let result = '';

      if (playerMove === 'scissors'){ 

          if (computerMove === 'rock') {
              result = 'You lose.';
          } else if (computerMove === 'paper') {
              result = 'You win.';
          } else if (computerMove === 'scissors') {
              result = 'Tie.';
          }

      } else if (playerMove === 'paper'){
          if (computerMove === 'rock') {
              result = 'You win.';
          } else if (computerMove === 'paper') {
              result = 'Tie.';
          } else if (computerMove === 'scissors') {
              result = 'You lose.';
          }
          
      } else if(playerMove === 'rock'){
          if (computerMove === 'rock') {
              result = 'Tie.';
          } else if (computerMove === 'paper') {
              result = 'You lose.';
          } else if (computerMove === 'scissors') {
              result = 'You win.';
          }

      }



      if (result === 'You win.') {
        score.wins += 1;
      } else if ( result === 'You lose.') {
        score.losses += 1;
      } else if ( result === 'Tie.') {
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      jsResult.innerHTML = result;
      jsMoves.innerHTML = `You picked <img src="/assets/${playerMove}-emoji.png" alt="rock-emoji" class="move-icon"> Computer picked <img src="/assets/${computerMove}-emoji.png" class="move-icon" alt="">
      <p class="js-moves moves">`;

      updateScoreElement();
      
  }

  function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function pickComputerMove() {
      const randomNumber = Math.random();

      let computerMove = '';
      
      if (randomNumber >= 0 && randomNumber < 1/3) {
          computerMove = 'rock';
      } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
          computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
      }

      return computerMove;
  }
 