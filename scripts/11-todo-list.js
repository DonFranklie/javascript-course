const todoList = [
{name: 'make dinner', dueDate: '2022-12-22'},
{name: 'wash car', dueDate: '2022-12-23'}];

renderTodoList();

function renderTodoList() {
  let todoListHtml = '';

  for (let i = 0; i < todoList.length; i++){
  const toDo = todoList[i].name;
  const toDoDate = todoList[i].dueDate;
  const htmlCode = `
  <div>${toDo}</div>
  <div>${toDoDate}</div>
   
  <button class="delete-btn" onclick="
    todoList.splice(${i}, 1);
    renderTodoList()
  ">Delete</button>`
  todoListHtml += htmlCode;   
    
  }

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHtml 
}

function addTodo(){
    let inputElement = document.querySelector('.js-name-input');
    const todoName = inputElement.value.trim();

    let dateElement = document.querySelector('#js-todo-date');
    const todoDate = dateElement.value

    todoObject = {
      name: todoName,
      dueDate: todoDate
    }


    todoList.push(todoObject);

    inputElement.value = "";
    dateElement.value='';

    renderTodoList();
}