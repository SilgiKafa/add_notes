let add = document.getElementById("add");
let inp = document.getElementById("inp");
let list = document.getElementById("list")

add.addEventListener("click", () => {
    var notes = document.createElement("li");
    notes.innerHTML = inp.value;
    list.appendChild(notes);
})