let inputEl = document.getElementById("input-todos-text")
const submitEl = document.getElementById("input-todos-submit")
const todosWrapper = document.querySelector(".todos-wrapper")


submitEl.addEventListener('click', function () {
    event.preventDefault();
    const li = document.createElement('li')
    li.innerText = inputEl.value
    todosWrapper.appendChild(li)
    li.classList.add("todo-element")
    inputEl.value = ""
    li.addEventListener('click', function() {
        li.style.textDecoration = "line-through";
    })
    li.addEventListener("dblclick", function() {
        todosWrapper.removeChild(li)
    })
})









// récupérer la value qui est insérée, et l'enregistrer dans une variable, écouter le click
// assigner cette variable à la création d'un élément avec une classe définie dans css
// gérer les bouttons pour modifier et supprimer

