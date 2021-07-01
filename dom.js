var textfield = document.getElementById("new-task-textfield");
var tasks = document.getElementById("tasks");
var btn = document.getElementById("add-task-btn");
var emptyImage = document.getElementById("empty-image");

tasks.addEventListener("click",deleteTask);
btn.addEventListener("click",addTask);

function imageChecker(){
    if(tasks.children.length == 1){
        emptyImage.style.display = "block";
    }else{
        emptyImage.style.display = "none";
    }
}

function deleteTask(e){
    if(e.target.className == "fa fa-close"){
        if(confirm("Are You Sure?")){
            var task = e.target.parentElement;
            tasks.removeChild(task);
        }
    }
    imageChecker();
}

function addTask(e){
    if(textfield.value != ""){
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
    tasks.appendChild(li);

    //clear textfield
    textfield.value = "";
    }else{
        alert('Please Add The Task');
    }
    imageChecker();
}

function pDebug(){
    console.log("working");
}
