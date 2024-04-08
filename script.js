const taskInput = document.getElementById("task-input");
const taskTime = document.getElementById("task-time");

const addTaskBtn = document.getElementById("add-task-btn");
const addTimeBtn = document.getElementById("add-time-btn");

const taskList = document.getElementById("task-list");
const timeList = document.getElementById("time-list");

addTaskBtn.addEventListener("click", function() {

  const taskText = taskInput.value;

  if (taskText.trim() !== "") {

    const taskItem = document.createElement("li");

    taskItem.innerText = taskText;

    taskItem.addEventListener("click", function() {

      taskItem.remove();

    });

    taskList.appendChild(taskItem);

    taskInput.value = "";

  }

});


taskList.addEventListener("click", function(event2) {

  if (event2.target.tagName.toLowerCase() === "li") {

    event2.target.remove();

  }

});







addTimeBtn.addEventListener("click", function() {

  const timeText = taskTime.value;

  if (timeText.trim() !== "") {

    const timeItem = document.createElement("li");

    timeItem.innerText = timeText;

    timeItem.addEventListener("click", function() {

      timeItem.remove();

    });

    timeList.appendChild(timeItem);

    taskTime.value = "";

  }

});


timeList.addEventListener("click", function(event) {

  if (event.target.tagName.toLowerCase() === "li") {

    event.target.remove();

  }

});