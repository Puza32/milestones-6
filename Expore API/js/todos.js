// function loadTodos(){
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res =>res.json())
// .then(todos => displayTodos(todos))
// }

// function displayTodos(todos){
//     const todoContainer = document.getElementById('todos-container');
//     for(const todo of todos){
//         const todoDiv = document.createElement('div');
//         todoDiv.innerHTML = `
//         <h3>title: ${todo.title}</h3>
//         <p>User: ${todo.userId}</h3>
//         <p>Is Completed: ${todo.completed}</p>
//         `;
//         todoContainer.appendChild(todoDiv);
//     }
// }
// loadTodos();

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);