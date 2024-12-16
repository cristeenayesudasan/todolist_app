document.addEventListener("DOMContentLoaded", () => {
    // Login Form Handling
    const loginForm = document.getElementById("loginForm");
    const loginError = document.getElementById("loginError");
  
    if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
  
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        if (username === "admin" && password === "12345") {
          window.location.href = "index.html";
        } else {
          loginError.style.display = "block";
        }
      });
    }
  
    // Todo List Page Functionality
    const todoTableBody = document.getElementById("todoTableBody");
    if (todoTableBody) {
      let completedCount = 0;
  
      const fetchTodos = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await response.json();
  
        todos.forEach((todo) => {
          const row = document.createElement("tr");
  
          const idCell = document.createElement("td");
          idCell.textContent = todo.id;
          row.appendChild(idCell);
  
          const titleCell = document.createElement("td");
          titleCell.textContent = todo.title;
          row.appendChild(titleCell);
  
          const completedCell = document.createElement("td");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = todo.completed;
  
          checkbox.addEventListener("change", () => {
            completedCount += checkbox.checked ? 1 : -1;
            checkCompletion(completedCount);
          });
  
          if (todo.completed) completedCount++;
          completedCell.appendChild(checkbox);
          row.appendChild(completedCell);
  
          todoTableBody.appendChild(row);
        });
      };
   
      const checkCompletion = (count) => {
        return new Promise((resolve) => {
          if (count === 5) {
            resolve();
          }
        }).then(() => {
          alert("Congrats. 5 Tasks have been Successfully Completed.");
        });
      };
  
      fetchTodos();
    }
  
    // Logout Functionality
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        alert("Logged out successfully!");
      });
    }
  });
  