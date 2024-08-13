/*const nums = [10, 20, 30];

nums[nums.length-1] = 99;

console.log(nums);

const nums = [10, 20, 30];

function getLastValue(n) {
  console.log(n[n.length-1]);
}

getLastValue(nums);


const nums = [1, 20, 22, 24, 5];

function arraySwap(array) {
  let first = array[0];
  let last =  array[array.length-1];
  array.pop();
  array.shift()

  array.push(first);
  array.unshift(last);

  return array;
}

console.log(arraySwap(nums));


for (let i = 0; i <= 10; i+=2) {
  let newNum = i;

  console.log(newNum);  
}
  
for (let i = 5; i >= 0; i--) {
  console.log(i);
}


let i = 5;
while (i >= 0) {
  console.log(i);
  i--;
}
  
let i = 0;
while (i <= 10) {
  console.log(i);

  i+=2;
}



let nums = [1,2,3];
let newNums = [];

for (let i = 0; i < nums.length; i++) {
  let newitem = nums[i] + 1;

  newNums.push(newitem);
  
}

console.log(newNums);



function addOne(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let newitem = array[i] + 1;
  
    newArray.push(newitem);
  }

  return newArray;
}

console.log(addOne([-2, -1, 0, 99]));


function addNum(array, num) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let newItem = array[i] + 2;

    newArray.push(newItem);
  }

  return newArray;
}

console.log(addNum([-2, -1, 0, 99], 2));

function addArrays(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    let newItem = array1[i] + array2[i];

    newArray.push(newItem);
    
  }

  return newArray;
}

console.log(addArrays([1,1,2], [1,1,3]));
console.log(addArrays([1,2,3], [4,5,6]));



function countPositive(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    
    if (nums[i] > 0) {
      sum ++;
    }
    
  }

  return sum;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3,-5,7,10]));


Revisit
for (let i = 0; i < nums.length; i++) {
      if (typeof nums[i] === 'number'){
        
      }  
    
  }


function minMax(nums) {

  if (nums.length == 0) {
    let object = {
      min: null,
      max: null,
    }
    return object;
  }
   if (nums.length == 1) {
    let object = {
      min: nums[0],
      max: nums[0],
    }
    return object;
  }

  let object = {
    min: 0,
    max: 0,
  };
let min = nums[0];
let max = nums[0];

  for (let i = 0; i < nums.length; i++) {

    if ( nums[i] < min ) {
      min = nums[i];
    }

    if( nums[i] >= max) {
      max = nums[i]
    }
    
  }

  object.min = min;
  object.max = max;


  return object;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2,3,-5,7,10]));
console.log(minMax([]));
console.log(minMax([3,2]));
console.log(minMax([3]));



function countWords(words) {
    let result = {};

    for (let i = 0; i < words.length; i++) {
    const word  = words[i];

    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++
    }
      
    }

    return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple', 'grape']));

*/

const array = ['search', 'morning', 'tom', 'franklin'];
let search = 'search';

let index = -1;

for (let i = 0; i < array.length; i++) {
  const word = array[i];

  if (word === search) {
    index = 1;
  } 
}

console.log(index);
