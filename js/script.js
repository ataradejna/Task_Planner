{
    const tasks = [
        {
            content: "Podlać kwiaty",
            done: true,
        },
        {
            content: "Zrobić zakupy",
            done: false,
        },
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

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="list__item${task.done ? " list__item--done " : ""}"
                >   
                    <button class="js-doneButton">Zrobione</button>
                    <button class="js-removeButton">Usuń Zadanie</button>
                    ${task.content}
                </li>
                `;
        }

        document.querySelector(".js-list").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-removeButton")

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

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSubmit)
    };

    init();
}