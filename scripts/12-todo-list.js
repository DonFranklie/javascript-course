const todoList = [
  {name: 'make dinner', dueDate: '2022-12-22'},
  {name: 'make dinner', dueDate: '2022-12-22'}
];
  const inputElement = document.querySelector('.input-element');
  const todoListDisplay = document.querySelector('.js-todo-list');
  const dateElement = document.querySelector('.date-input');

  renderTodoList();
  function addTask() {
    const name = inputElement.value
    const dueDate = dateElement.value;
    todoList.push({name, dueDate});

    renderTodoList();
    dateElement.value = '';
    
    inputElement.value = '';

  }

  

  function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
      const { name, dueDate } = todoObject;
      // const dueDate = todoObject.dueDate;

      const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      " class = "delete-button">Delete</button>
      `
      todoListHTML += html;
      
    });

    todoListDisplay.innerHTML = todoListHTML;
  }