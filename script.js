const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskContainer = document.getElementById("tasks");


let task;

document.addEventListener("keyup", (event) => {
    const key = event.key;
    task = (taskInput.value).trim();
    if(key === "Enter" && task != undefined && task != "") {
        addTask(task);
    } else if(key == "Enter" && (task === undefined || task == "")) {
        alert("Enter a task...");
    }
});


addBtn.addEventListener("click", () => {
    task = (taskInput.value).trim();
    if(task != undefined && task != "") {
        addTask(task);
    } else {
        alert("Enter a task...");
    }
});

function addTask(task) {
  // container
  const div = document.createElement("div");
  div.classList.add("task");
  // task element
  const taskEle = document.createElement("p");
  // task-text element
  const taskText = document.createTextNode(task);

  taskEle.appendChild(taskText);
  div.appendChild(taskEle);
  taskContainer.appendChild(div);

    // clears the input field for next input
    taskInput.value = "";

    // finishing tasks
    taskEle.addEventListener("click", (event) => {
        const finishedTask = event.target;
        finishedTask.classList.toggle("strike");
    });
}

