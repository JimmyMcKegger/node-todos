$(document).ready(function () {
  $.getJSON("/api/todos").then(addTodos);

  $("#todoInput").keypress(function (event) {
    let userInput = $("#todoInput").val().trim();
    if (event.which == 13 && userInput) {
      createTodo(userInput);
    }
  });

  $(".list").on("click", "li", function () {
    updateTodo($(this));
  });

  $(".list").on("click", "span", function (event) {
    event.stopPropagation();
    removeTodo($(this).parent());
  });

  
});

function addTodos(todos) {
  todos.forEach(function (todo) {
    addTodo(todo);
  });
}

function addTodo(todo) {
  let newTodo = $(`<li class='task'>${todo.name}<span>X</span></li>`);
  newTodo.data("id", todo._id);
  newTodo.data('completed', todo.completed);
  if (todo.completed) {
    newTodo.addClass("done");
  }
  $(".list").append(newTodo);
}

function createTodo(userInput) {
  $.post("/api/todos", { name: userInput })
    .then(function (newTodo) {
      $("#todoInput").val("");
      addTodo(newTodo);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function updateTodo(todo){
  let clickedId = todo.data("id");
  let updateURL = `/api/todos/${clickedId}`;

  let todoState = todo.data("completed");
  let newState = {completed: !todoState}

  $.ajax({
    method: 'PUT',
    url: updateURL,
    data: newState
  })
  .then(function(updateTodo){
    todo.toggleClass("done");
    todo.data('completed', newState);
  })

  

}

function removeTodo(todo) {
  let clickedId = todo.data("id");
  let deleteURL = `/api/todos/${clickedId}`;

  $.ajax({
    method: "DELETE",
    url: deleteURL,
  })
    .then(function () {
      todo.remove();
    })
    .catch(function (err) {
      console.log(err);
    });
}
