const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if(text !== ""){
    addTodo(text);
    todoInput.value = "";
  }
});

function addTodo(text){
  const li = document.createElement("li");
  li.className = "todo-item";

  li.innerHTML = `
    <div class="check"></div>
    <span>${text}</span>
    <div class="delete">×</div>
  `;

  todoList.appendChild(li);

  // mark completed
  const check = li.querySelector(".check");
  check.addEventListener("click", () => {
    check.classList.toggle("active");
    li.querySelector("span").style.textDecoration =
      check.classList.contains("active") ? "line-through" : "none";
  });

  // delete
  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
  });
}
