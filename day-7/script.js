const noteForm = document.getElementById("noteForm");
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");
const errorMsg = document.getElementById("errorMsg");
let notes = JSON.parse(localStorage.getItem("notes")) || [];
let editIndex = null;
displayNotes();
noteForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const noteText = noteInput.value.trim();
    if (noteText === "") {
        errorMsg.textContent = "Note cannot be empty!";
        return;
    }
    errorMsg.textContent = "";
    if (editIndex !== null) {
        notes[editIndex] = noteText;
        editIndex = null;
    } else {
        notes.push(noteText);
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    displayNotes();
});
function displayNotes() {
    notesList.innerHTML = "";

    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.textContent = note;
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";
        editBtn.addEventListener("click", function () {
            noteInput.value = note;
            editIndex = index;
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", function () {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            displayNotes();
        });

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        notesList.appendChild(li);
    });
}
