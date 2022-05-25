const modifyBtn = document.getElementById("todo-modify");
const deleteBtn = document.getElementById("todo-delete")
let inputEl = document.getElementById("input-todos-text")
const submitEl = document.getElementById("input-todos-submit")
const todosWrapper = document.querySelector(".todos-wrapper")


submitEl.addEventListener("click", function (event) {
    if (event === "click") {
        const toDo = inputEl.value;
    }   if (toDo != " ") {
        addTodo(toDo);
    }
    inputEl.value = " ";
})

function addTodo (toDo) {
    const text =  `<div id="todo-element">
                        <li id="todo-description">${toDo}</li>
                        <div id="input-wrapper">
                            <input type="button" value="Modify" id="todo-modify">
                            <input type="button" value="Delete" id="todo-delete">
                        </div>
                   </div>
                  `
    todosWrapper.insertAdjacentHTML("afterbegin", text)
}
addTodo("Manger")
addTodo("Boire")










// récupérer la value qui est insérée, et l'enregistrer dans une variable, écouter le click
// assigner cette variable à la création d'un élément avec une classe définie dans css
// gérer les bouttons pour modifier et supprimer

