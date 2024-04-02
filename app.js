const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)" class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function completeTask(btn) {
    const taskItem = btn.parentNode;
    taskItem.classList.toggle('completed');
}

function deleteTask(btn) {
    const taskItem = btn.parentNode;
    taskItem.remove();
}
