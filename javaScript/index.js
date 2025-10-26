const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="buttons">
      <button class="complete">✔️</button>
      <button class="edit">✏️</button>
      <button class="delete">🗑️</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  // Mark as completed
  li.querySelector(".complete").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Edit task
  li.querySelector(".edit").addEventListener("click", () => {
    const newText = prompt("Edit your task:", li.querySelector(".task-text").textContent);
    if (newText !== null && newText.trim() !== "") {
      li.querySelector(".task-text").textContent = newText.trim();
    }
  });

  // Delete task
  li.querySelector(".delete").addEventListener("click", () => {
    taskList.removeChild(li);
  });
});
