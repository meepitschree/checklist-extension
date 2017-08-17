var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var allTasks = document.getElementById("tasks");
var taskEdit = document.getElementById("");

//add new task to list
var addNewTask = function(userInput) {

  //new list item
  var task = document.createElement("li");

  var checkBox = document.createElement("input"); // checkbox
  checkBox.type = "checkbox";

  var label = document.createElement("label"); //to add to task list
  label.innerText = userInput;

  var editInput = document.createElement("input"); // text
  editInput.type = "text";

  //button.edit
  var editButton = document.createElement("button");
  editButton.innerHTML = '<img src="edit.png" width=20px>';
  editButton.className = "edit";

  //button.delete
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<img src="exit.png" width=15px>';
  deleteButton.className = "delete";
  
    
// each element needs appending
  task.appendChild(checkBox);
  task.appendChild(label);
  task.appendChild(deleteButton);
  task.appendChild(editInput);
  task.appendChild(editButton);

  return task;
}

var addTask = function() {
  var task = addNewTask(taskInput.value);

  //append task to allTasks
  allTasks.appendChild(task);
  bindTaskEvents(task, taskEditor); 
  taskInput.value = "";   
}

var editTask = function() {
  console.log("editing");
  var task = this.parentNode;
  
  var editInput = task.querySelector("input[type=text]")
  var label = task.querySelector("label");
  
  var containsClass = task.classList.contains("editMode");

  //edit editMode
  if(containsClass) {
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }
  
  // Toggle .editMode on the parent
  task.classList.toggle("editMode");
 
}

var taskIncomplete = function() {
  var task = this.parentNode;
  allTasks.appendChild(task);
  bindTaskEvents(task, taskEditor);
}

var deleteTask = function() {
  console.log("Delete task...");
  var task = this.parentNode;
  var ul = task.parentNode;
  
  ul.removeChild(task);
}

var taskEditor = function() {
  var task = this.parentNode;
  bindTaskEvents(task, taskIncomplete);
}

var bindTaskEvents = function(currTask, checkBoxEventHandler) {
  //select currTask's children
  var checkBox = currTask.querySelector("input[type=checkbox]");
  var editButton = currTask.querySelector("button.edit");
  var deleteButton = currTask.querySelector("button.delete");
  
  //function binding
  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
}


var addingTask = function() {
  console.log("adding new task");
}

addButton.addEventListener("click", addTask);
addButton.addEventListener("click", addingTask);


for(var i = 0; i <  allTasks.children.length; i++) {
    //bind events to list
  bindTaskEvents(allTasks.children[i], taskEditor);
}
