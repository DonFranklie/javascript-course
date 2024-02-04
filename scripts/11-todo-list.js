const todoList = [];

function addTodo(){
  let inputElement = document.querySelector('.js-name-input');
  const todoName = inputElement.value.trim();


  todoList.push(todoName);

  console.log(todoList);

  inputElement.value = "";
}