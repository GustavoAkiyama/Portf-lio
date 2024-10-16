const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask() {
    if (inputBox.value === '') {
        alert("Você deve escrever algo!");
    } else {
        let li = document.createElement("li");

        // Cria o ícone de "check" ao lado esquerdo
        let checkIcon = document.createElement("i");
        checkIcon.className = "fas fa-check-circle check-icon";
        li.appendChild(checkIcon);

        // Adiciona o texto da tarefa
        let taskText = document.createTextNode(inputBox.value);
        li.appendChild(taskText);

        // Cria o botão de exclusão
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Símbolo "×"
        li.appendChild(span);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("check-icon")) {
        e.target.parentElement.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove o item ao clicar no botão "×"
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

loadData();
