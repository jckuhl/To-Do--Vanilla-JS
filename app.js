(function() {
    const task = document.getElementById("task");
    const submit = document.querySelector("button");
    const markAll = document.getElementById("markall");
    const taskContainer = document.getElementById("task-container");

    function createListItem(taskName) {
        return `<p><input type="checkbox" name="complete">${taskName}
                <button class="btn btn-danger btn-right">X</button</p>`;
    }

    submit.addEventListener("click", (e)=> {

        e.preventDefault();
    
        if((task.value) && (task.value.trim() !== "")) {
            const taskItemHTML = createListItem(task.value.trim());
            const taskItem = document.createElement("div");
            taskItem.classList.add("checkbox");
            taskItem.innerHTML = taskItemHTML;
            taskContainer.appendChild(taskItem);
            taskItem.addEventListener("click", (e)=> {
                if(e.target.tagName == "BUTTON") {
                    taskContainer.removeChild(taskItem);
                }
            });
        }
    });

    markall.addEventListener("click", (e)=> {
        const completed = document.querySelectorAll(`input[name="complete"]`);
        completed.forEach( (checkbox)=> checkbox.checked = markall.checked ? true : false );
    });

})();