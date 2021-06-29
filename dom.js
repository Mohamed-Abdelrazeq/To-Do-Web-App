var textfield = document.getElementById("new-task-textfield");
var tasks = document.getElementsByClassName("tasks");
var btn = document.getElementById("add-task-btn");

btn.addEventListener("click",addTask);

function addTask(e){
    //create element
    var li = document.createElement("div");
    //add classes to it
    li.className = "task";
    //add text to it
    li.appendChild( document.createTextNode(textfield.value));


    //create delete icon
    var deleteIcon = document.createElement('i');
    // add classess
    deleteIcon.className = "fa fa-close";
    //add delete icon to the task card
    li.appendChild(deleteIcon);

    //append it to list of items
    tasks[0].appendChild(li);
}