const add = document.querySelector("#add-task-button");
const crossOutBtns = document.querySelectorAll(".cross-out-button");
const deleteBtns = document.querySelectorAll(".delete-button");
const tasks = document.querySelector("#tasks");

function addCrossOutListener(btn) {
    btn.addEventListener(
        "click",
        () => {
            const taskText = btn.previousElementSibling;
            taskText.style.textDecoration =
                taskText.style.textDecoration === "line-through"
                    ?
                    "none"
                    :
                    "line-through";
        }
    )
}

function addDeleteListener(btn) {
    btn.addEventListener(
        "click",
        () => {
            const task = btn.parentElement;
            removeEventListener("click",  addCrossOutListener);
            removeEventListener("click", addDeleteListener);
            task.remove();
        }
    )
}

add.addEventListener(
    "click",
    () => {

        console.log("click");

        const task = document.createElement("div");
        task.classList.add("task");

        const taskName = document.createElement("h3");
        taskName.classList.add("task-name");
        taskName.innerText = document.querySelector("#add-task-name").value || "No Name";

        const crossOutBtn = document.createElement("button");
        crossOutBtn.classList.add("cross-out-button");
        const crossOutBtnIcon = document.createElement("i");
        crossOutBtnIcon.classList.add("fa-solid");
        crossOutBtnIcon.classList.add("fa-check");
        crossOutBtn.appendChild(crossOutBtnIcon);

        addCrossOutListener(crossOutBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-button");
        const deleteBtnIcon = document.createElement("i");
        deleteBtnIcon.classList.add("fa-solid");
        deleteBtnIcon.classList.add("fa-trash-can");
        deleteBtn.appendChild(deleteBtnIcon);

        addDeleteListener(deleteBtn);

        task.appendChild(taskName);
        task.appendChild(crossOutBtn);
        task.appendChild(deleteBtn);

        tasks.appendChild(task);
    }
)
