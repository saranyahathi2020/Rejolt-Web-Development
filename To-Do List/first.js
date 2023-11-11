// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;

    if (taskText.trim() !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${taskText}</span><button onclick="removeTask(this)">Remove</button>`;

        // Add the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to remove a task
function removeTask(button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}
