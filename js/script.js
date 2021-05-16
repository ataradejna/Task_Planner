{
    const tasks = [
       
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-removeButton");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });

        });

        const toggleDoneButtons = document.querySelectorAll(".js-doneButton")

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);

            });
        });
    };

    const inputFocus = (newTask) => {
        newTask.focus(newTask);
    };

    const clearInput = (newTask) => {
        newTask.value="";
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="list__item"> 

                    <button class=" list__button list__button--done js-doneButton">
                    ${task.done ? "✔" : " "}
                    </button>
                    
                    <span class="${task.done ? "list__item--done " : ""}">
                    ${task.content}
                    </span>
            
                    <button class="list__button list__button--delete js-removeButton">🗑️</button>
                    
                </li>
                `;
        };

        document.querySelector(".js-list").innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = document.querySelector(".js-newTask");
        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
        clearInput(newTask);
        inputFocus(newTask);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSubmit)
    };

    init();
}
