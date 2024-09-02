let tasks = [];

// Function to add a task
function addTask() {
    const date = document.getElementById('taskDate').value;
    const details = document.getElementById('taskDetails').value;

    if (!date || !details) {
        alert('Both date and task details are required!');
        return;
    }

    tasks.push({ date, details, completed: false });
    sortAndRenderTasks();
    document.getElementById('taskDate').value = '';
    document.getElementById('taskDetails').value = '';
}

// Function to complete a task
function completeTask(index) {
    tasks[index].completed = true;
    sortAndRenderTasks();
}

// Function to delete a task
function deleteTask(index) {
    if (tasks[index].completed) {
        tasks.splice(index, 1);
        sortAndRenderTasks();
    } else {
        alert('Only completed tasks can be deleted!');
    }
}

// Function to sort tasks and render the task list
function sortAndRenderTasks() {
    // Sort tasks by date
    tasks.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Render tasks
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    // Separate incomplete and completed tasks
    const incompleteTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    // Append incomplete tasks
    incompleteTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${task.date}: ${task.details}
            <span>
                <button class="btn btn-success btn-sm" onclick="completeTask(${tasks.indexOf(task)})">完了</button>
            </span>
        `;
        taskList.appendChild(li);
    });

    // Append completed tasks
    completedTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center list-group-item-secondary';
        li.innerHTML = `
            ${task.date}: ${task.details}
            <span>
                <button class="btn btn-danger btn-sm" onclick="deleteTask(${tasks.indexOf(task)})">削除</button>
            </span>
        `;
        taskList.appendChild(li);
    });
}
