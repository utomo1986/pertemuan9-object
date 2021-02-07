/*
Exercise 3

let todos = [
  {id: 1, todo: "belajar coding"},
  {id: 2, todo: "nanti tidur"}
]

Buatlah function CRUD sederhana pada data di atas

printAll(), hasil:
1, "belajar coding"
2, "nanti tidur"

printByID(id), hasil
1, "belajar coding"

add(newTodo), hasil
1, "belajar coding"
2, "nanti tidur"
3, "ngerjain tugas"

deleteByID(id), hasil
1, "belajar coding"
3, "ngerjain tugas"

updateByID(newTodo), hasil
1, "belajar CRUD"
3, "ngerjain tugas"

*/

let todos = [
  {id:1, todo: "belajar coding"},
  {id:2, todo: "nanti tidur"}
]

const printAll = () => {
  todos.map((todo) => {
    console.log(todo.id, todo.todo)
  })
}

const printById = () => {
  console.log(todos[0].id, todos[0].todo)
}

const addTodos = (newTodo) => {
  todos.push({
    id: todos.length+1,
    todo: newTodo
  })
  printAll()
}
const deleteByID = (id) => {
  delete todos[id-1];
  printAll()
}

const updateByID = (id, newTodo) => {
  todos[id-1].todo = newTodo;
  printAll()
}

printAll();
printById();
addTodos("ngerjain tugas");
deleteByID(1)
updateByID(3, "belajar CRUD")