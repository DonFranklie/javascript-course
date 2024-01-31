const gameButton = document.querySelector('.game-button');
const musicButton = document.querySelector('.music-button');
const techButton = document.querySelector('.tech-button');

function toggle(button){
  if(!button.classList.contains("clicked-button")){
    button.classList.add("clicked-button");
  }else if(button.classList.contains("clicked-button")){
    button.classList.remove("clicked-button");
  }
}