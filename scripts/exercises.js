/*
const stringArray = ['hello', 'welcome', 'search', 'hello'];

let word = 'search';
let index = -1
for (let i = 0; i < stringArray.length; i++) {
  const arrayItem = stringArray[i];
  if (arrayItem === word){
    index = i;
  }
  
}

console.log(index);



const array = ['green', 'red', 'blue', 'red'];

function findIndex(array, word) {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    const newWord = array[i];

    if (newWord === word) {
      index = i;
      break;
    }
    
  }

  return index;
}

console.log(findIndex(array, 'yellow'));



function removeEgg(foods) {
  const newArray = [];
  
  for (let i = 0; i < foods.length; i++) {
    const food = foods[i];
    
    if (!(food === 'egg')) {
      newArray.push(food);
    }
  }

  return newArray;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

function removeEgg(foods) {
  const newArray = [];
  let appearance = 0;
  foods.reverse();
  
  for (let i = 0; i < foods.length; i++) {
    const food = foods[i];
    
    if (!(food === 'egg')) {
      newArray.push(food);
    } else if (food === 'egg') {
      appearance++;
      if (appearance > 2) {
        newArray.push(food);
      }
    }
  }

  return newArray.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


function removeEgg(foods) {
  const newArray = [];
  let appearance = 0;
  let slicedFoods = foods.slice();
  
  for (let i = 0; i < slicedFoods.length; i++) {
    const food = slicedFoods[i];
    
    if (!(food === 'egg')) {
      newArray.push(food);
    } else if (food === 'egg') {
      appearance++;
      if (appearance > 2) {
        newArray.push(food);
      }
    }
  }

  return newArray.reverse();
}

const foods = ['egg', 'apple', 'egg', 'egg', 'ham']
console.log(removeEgg(foods));
console.log(foods);



for (let i = 1; i <= 20; i++) {

  if (i % 3 === 0 && i % 5) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
  
}

*/


function findIndex(array, word) {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    const newWord = array[i];

    if (newWord === word) {
      index = i;
      break;
    }
    
  }

  return index;
}

// console.log(findIndex(array, 'yellow'));

function unique(array) {
  let cleanArray = [];

  for (let i = 0; i < array.length; i++) {
    const arrayItem = array[i];

    if (findIndex(cleanArray, arrayItem) == -1) {
      cleanArray.push(arrayItem);
    } else {
      continue;
    }
    
  }

  return cleanArray;
}

const array = ['green', 'red', 'blue', 'red'];

console.log(unique(array));

