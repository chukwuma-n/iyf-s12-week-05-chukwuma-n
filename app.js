
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const itemsLeft = document.querySelector("#items-left");
const todoFilters = document.querySelector("#todo-filters");
const clearCompletedButton = document.querySelector("#clear-completed");

let todos = [];
let nextId = 1;
let currentFilter = "all";

// Highlight the selected filter button
function updateFilterButtons() {
    const buttons = todoFilters.querySelectorAll("button[data-filter]");

    buttons.forEach(function (button) {
        const isSelected = button.dataset.filter === currentFilter;

        button.classList.toggle("active-filter", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
    });
}

// Display tasks
function render() {
    todoList.textContent = "";

    const remaining = todos.filter(function (todo) {
        return !todo.completed;
    }).length;

    itemsLeft.textContent =
        `${remaining} ${remaining === 1 ? "item" : "items"} left`;

    const filteredTodos = todos.filter(function (todo) {
        if (currentFilter === "active") {
            return !todo.completed;
        }

        if (currentFilter === "completed") {
            return todo.completed;
        }

        return true;
    });

    filteredTodos.forEach(function (todo) {
        const li = document.createElement("li");
        li.dataset.id = todo.id;

        if (todo.completed) {
            li.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.classList.add("complete-task");
        checkbox.setAttribute("aria-label", "Mark task complete");

        const span = document.createElement("span");
        span.textContent = todo.text;
        span.title = "Double-click to edit";
        span.classList.add("task-text");

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-task");

        li.append(checkbox, span, deleteButton);
        todoList.appendChild(li);
    });

    updateFilterButtons();
}

// Add a task
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText === "") {
        input.focus();
        return;
    }

    todos.push({
        id: nextId++,
        text: taskText,
        completed: false
    });

    input.value = "";
    render();
    input.focus();
});

// Complete or delete tasks using event delegation
todoList.addEventListener("click", function (event) {
    const li = event.target.closest("li");

    if (!li || !todoList.contains(li)) {
        return;
    }

    const taskId = Number(li.dataset.id);

    if (event.target.matches(".delete-task")) {
        todos = todos.filter(function (todo) {
            return todo.id !== taskId;
        });

        render();
        return;
    }

    if (event.target.matches(".complete-task")) {
        const task = todos.find(function (todo) {
            return todo.id === taskId;
        });

        if (task) {
            task.completed = event.target.checked;
            render();
        }
    }
});

// Switch between All, Active and Completed
todoFilters.addEventListener("click", function (event) {
    if (!event.target.matches("button[data-filter]")) {
        return;
    }

    currentFilter = event.target.dataset.filter;
    render();
});

// Remove all completed tasks
clearCompletedButton.addEventListener("click", function () {
    todos = todos.filter(function (todo) {
        return !todo.completed;
    });

    render();
});

// Edit a task by double-clicking its text
todoList.addEventListener("dblclick", function (event) {
    if (!event.target.matches(".task-text")) {
        return;
    }

    const span = event.target;
    const li = span.closest("li");
    const taskId = Number(li.dataset.id);

    const task = todos.find(function (todo) {
        return todo.id === taskId;
    });

    if (!task) {
        return;
    }

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = task.text;
    editInput.classList.add("edit-task-input");
    editInput.setAttribute("aria-label", "Edit task");

    span.replaceWith(editInput);
    editInput.focus();
    editInput.select();

    let editingFinished = false;

    function finishEditing(saveChanges) {
        if (editingFinished) {
            return;
        }

        editingFinished = true;

        if (saveChanges) {
            const newText = editInput.value.trim();

            if (newText !== "") {
                task.text = newText;
            }
        }

        render();
    }

    editInput.addEventListener("keydown", function (keyEvent) {
        if (keyEvent.key === "Enter") {
            keyEvent.preventDefault();
            finishEditing(true);
        }

        if (keyEvent.key === "Escape") {
            finishEditing(false);
        }
    });

    editInput.addEventListener("blur", function () {
        finishEditing(true);
    });
});

// Display the initial page
render();
