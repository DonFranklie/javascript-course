 /*
const add = function() {
  console.log(2+3);
};



function runTwice(fun) {
  fun();
  fun();
}

runTwice(add);

*/

document.title = 'App';

let intervalId;
let isDisplayingNotification = true;

let messageNumber = 2;

showNotification();

function addMessages() {
  messageNumber++;
}
function reduceMessages() { 
  if (messageNumber > 0){
  messageNumber--;
  showNotification();
  } else if (messageNumber === 0){
    document.title = 'App';
  }
}

function showNotification() {
  intervalId = setInterval(function(){
    if (document.title === 'App'){
      if (messageNumber === 0){
        document.title = 'App';
    
    } else {
      document.title = `(${messageNumber}) new messages`;
    }
  } else {
    document.title = 'App';
  }
  }, 1000)
}
