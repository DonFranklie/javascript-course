/*
function countPositive(nums) {
  let howMany = 0;

  nums.forEach(element => {
    if (element > 0) {
      howMany++;
      
    }
    
  });

  return howMany;
}

console.log(countPositive([1,-3,5]));

console.log(countPositive([-2, 3, -5, 7, 10]));




const multiply = (num1, num2) =>  num1 * num2;

console.log(multiply(4, 5));



const array = [1, 2, 3] 

function addNum(array, num) {
  let newArray;
  newArray = array.map(value => {
    return value + num;
  });

  return newArray;
}

console.log(addNum(array, 2));

*/

function removeEggs(foods) {
  let newArray = [];
  let num = 0;

  newArray = foods.filter((value) => {
    
    if (value === 'egg'){
      num++;
    }


    if (!(value === 'egg') || num > 2) {
      return true;
    }
    
  
  });

  return newArray;
}

console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']));

