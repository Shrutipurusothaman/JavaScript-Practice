const input=document.querySelector("input");
const addbutton=document.querySelector(".addbtn");
const container = document.querySelector(".container");
addbutton.addEventListener("click",()=>{
   const task = input.value.trim();
        if (task === "") {
            alert("Please enter a task");
            return;
        }
        const listBox = document.createElement("div");
        listBox.className = "list-box";
        listBox.innerHTML = `
            <span class="task-name">${task}</span>
            <button class="editbtn">Edit</button>
            <button class="dltbtn">Delete</button>
        `;
        container.appendChild(listBox);
        input.value = "";
    });
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("dltbtn")) {
        e.target.parentElement.remove();
    }
     if (e.target.classList.contains("editbtn")) {
        const listBox = e.target.parentElement;
        const taskName = listBox.querySelector(".task-name");
        const editBtn = e.target;
        if (editBtn.textContent === "Save") {
            const inputField = listBox.querySelector("input");
            const newText = inputField.value.trim();
            if (newText !== "") {
                taskName.textContent = newText;
                taskName.style.display = "inline";
                inputField.remove();
                editBtn.textContent = "Edit";
            }
            return;
        }
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.value = taskName.textContent;
        inputField.className = "edit-input";

        taskName.style.display = "none";
        listBox.insertBefore(inputField, editBtn);
        editBtn.textContent = "Save";
        inputField.focus();
    }
});