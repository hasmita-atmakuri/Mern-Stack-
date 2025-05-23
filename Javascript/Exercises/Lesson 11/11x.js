const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name:'make food',
  dueDate:'2022-12-22'
},{
  name:'sing songs',
  dueDate:'2022-12-23'
}];

renderTodoList();

function renderTodoList() {
  let todolistHTML='';
   
  for(let i=0;i<todolist.length;i++){
    const todoObject = todolist[i];
    const name=todoObject.name;
    const dueDate=todoObject.dueDate;
    const html=`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onClick="
        todolist.splice(${i},1);
        renderTodoList();
      " class="delete-todo-button">Delete</button> 
    `;
    todolistHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML=todolistHTML;
}
function addTodo(todo) {
  const inputElement=document.querySelector('.js-name-input');
  const name =inputElement.value;

  const dateInputElement=document.querySelector('.js-date-input');
  const date =dateInputElement.value;

  todolist.push(
    {
      name,
      dueDate:date
    }
  );

  inputElement.value='';

  renderTodoList();
  saveToStorage()
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}