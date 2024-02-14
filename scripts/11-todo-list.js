const todoList = ['make dinner', 'wash car'];

let todoListHtml = '';

for (let i = 0; i < todoList.length; i++){
 const toDo = todoList[i];
 const htmlCode = `<p>${toDo}</p>`
 todoListHtml += htmlCode;   
  
}

console.log(todoListHtml)

document.querySelector('.js-todo-list')
.innerHTML = todoListHtml 

function addTodo(){
  let inputElement = document.querySelector('.js-name-input');
  const todoName = inputElement.value.trim();


  todoList.push(todoName);

  console.log(todoList);

  inputElement.value = "";
}