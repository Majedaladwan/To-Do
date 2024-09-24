const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-contaner");

function addTask() {
  if (inputBox.value === "") {
    alert("you must write somethings!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
         if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false,
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function getRandomGradient() {
 
  function getRandomColor() {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      return `rgb(${red}, ${green}, ${blue})`;
  }

  const color1 = getRandomColor(); 
  const color2 = getRandomColor(); 
  const angle = Math.floor(Math.random() * 360);  

  return `linear-gradient(${angle}deg, ${color1}, ${color2})`; 
}

document.getElementById('changeBtn').addEventListener('click', function() {
  const randomGradient = getRandomGradient(); 
  document.body.style.backgroundImage = randomGradient; 
});
