const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  const inputElement = document.querySelector('.input-element');
  const todoListDisplay = document.querySelector('.js-todo-list');

  

  renderTodoList();
  function addTask() {
    let task = inputElement.value;
    todoList.push(task);

    renderTodoList();
    
    inputElement.value = '';

    localStorage.setItem('todoList', JSON.stringify(todoList));

  }

  

  function renderTodoList() {
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
      const todo = todoList[i];
      const html = `<p>${todo}</p>`
      todoListHTML += html;
    }

    todoListDisplay.innerHTML = todoListHTML;

  }