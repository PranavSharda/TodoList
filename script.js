document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const priorityCheckbox = document.getElementById("priority");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const isPriority = priorityCheckbox.checked;
            addTask(taskText, isPriority);
            taskInput.value = "";
            priorityCheckbox.checked = false; // Reset the checkbox
        }
    });

    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });

    taskList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-icon")) {
            event.target.parentElement.remove();
        }
    });

    function addTask(taskText, isPriority) {
        const timestamp = new Date().toLocaleTimeString();
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <span class="timestamp">${timestamp}</span>
            <i class="fas fa-times-circle delete-icon"></i>
        `;
        if (isPriority) {
            listItem.classList.add("priority-task"); // Apply priority style
        }
        taskList.appendChild(listItem);
    }
});
