
function get() {
  let Todo = document.getElementById("toDo").value;

  if (Todo === "") {
    document.getElementById("alert").innerHTML =
      "Please enter a task to add to your to-do list.";
    return;
  } else {
    document.getElementById("alert").innerHTML = "";
  }

  Todo = `<label><p onclick="check(this)" id="todotask"><input type="checkbox">${Todo}<a onclick="remove(this);" id="close">X</a></p></label>`;

  document.getElementById("results").innerHTML += Todo;
}

function check(element) {
  if (element.style.textDecoration === "line-through") {
    element.style.textDecoration = "none";
  } else {
    element.style.textDecoration = "line-through";
  }
}

function remove(element) {
  closeTask = element.parentElement;

  closeTask.style.display = "none";
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    get();
  }
}