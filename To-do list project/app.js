//Selectors - Selectors are used to target specific HTML elements on a web page, so that you can manipulate them using javascript.
const todoInput = document.querySelector(".todoinput");
const todoButton = document.querySelector(".todosubmit");
const todoList = document.querySelector(".todolist");


//Event Listeners - Event listeners are used to detect and respond to user interactions with a web page, such as clicking a button or typing in a text input.
todoButton.addEventListener('click',addTodo);
//Event Listeners - to delete the deleteCheck button
todoList.addEventListener('click',deleteCheck);


//Functions - Functions are reusable blocks of code that can be executed multiple times within a javaScript program and interacting with API's
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //todo DIV multiply times(like bottom and multiple delete functions)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create LI(list)
    const newTodo =  document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Check Trash Button
    const trashButton = document.createElement('botton');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to List
    todoList.appendChild(todoDiv);

    //Clear Todo Input VALUE
    todoInput.value="";
}

function deleteCheck(e){
    const item = e.target;
    //DELETE TODO
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }
    //CHECK MARK
    if(item.classList[0]==="complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    
}