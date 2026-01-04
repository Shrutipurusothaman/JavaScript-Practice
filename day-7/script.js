const noteForm = document.getElementById("noteForm");
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");
const errorMsg = document.getElementById("errorMsg");
let notes = JSON.parse(localStorage.getItem("notes")) || [];
displayNotes();
noteForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const noteText = noteInput.value.trim();
    if (noteText === "") {
        errorMsg.textContent = "Note cannot be empty!";
        return;
    }
    errorMsg.textContent = "";
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    displayNotes();
});
function displayNotes() {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.textContent = note;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", function () {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            displayNotes();
        });
        li.appendChild(deleteBtn);
        notesList.appendChild(li);
    });
}