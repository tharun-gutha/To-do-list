//selectors
let inputTask=document.querySelector(".inputTask");
let todoButton=document.querySelector(".todobutton");
let taskContainer=document.querySelector(".task-container");
//event listeners
todoButton.addEventListener('click',addTodo);
inputTask.addEventListener('keyup',function (event){
  if(event.key==='Enter')
  {
      addTodo();
  }
});
taskContainer.addEventListener('click',deleteCheck);



//functions
function addTodo()
{
    let todoDiv=document.createElement('div');
    todoDiv.classList.add('todo');
    let newTodo=document.createElement("li");
    newTodo.innerText=inputTask.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    let completedButton=document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check"></a>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    let trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></a>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    taskContainer.appendChild(todoDiv);
    inputTask.value='';

}

function deleteCheck(e){
     let item=e.target;
     //delete todo
    if(item.classList[0]==="trash-btn")
    {
        let removableItem=item.parentElement;
        removableItem.remove();
    }
    if(item.classList[0]==='complete-btn')
    {
      let completingButton=item.parentElement;
      completingButton.classList.toggle('completed');
      
    }
}