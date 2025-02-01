// Run the script after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input and remove extra spaces

        if (taskText === "") {
            alert("Please enter a task!"); // Alert if empty input
            return;
        }

        // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // Add event listener to remove task when button is clicked
        removeBtn.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        // Append remove button to task item, then add task to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field after adding task
        taskInput.value = "";
    }

    // Add event listener for button click
    addButton.addEventListener('click', addTask);

    // Add event listener for 'Enter' keypress
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
