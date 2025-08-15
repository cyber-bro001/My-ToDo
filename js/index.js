const inputBox = document.getElementById("input-box");
const todoContainer = document.getElementById("ul-container");

const addTask = () => {
  if (inputBox.value === "" || inputBox.value === null) {
    alert("You must write something");
    console.log("Input Box is empty");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    todoContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "×";
    li.appendChild(span);
    console.log("New element has been created successfully!");
  }
  inputBox.value = "";
  saveData();
};

todoContainer.addEventListener(
  "click",
  e => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      console.log("Check button is toggled");
saveData();
    } else {
      if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        console.log("Item has been removed successfully!");
saveData();
      }
    }
  },
  false
);

const saveData = ()=>{
  localStorage.setItem("data", todoContainer.innerHTML);
  console.log("Item saved successfully!");
};

const showData = ()=>{
  todoContainer.innerHTML = localStorage.getItem("data");
  console.log("Data displayed!");
};

showData();