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

    const render = () => {
        let htmlString = "";

        for(const task of tasks){
            htmlString += `
                <li class="list__item${task.done ? " list__item--done " : ""}"
                >
                    <button class="js-removeButton">Usuń Zadanie</button>
                    ${task.content}
                </li>
                `;
        }
        
        document.querySelector(".js-list").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-removeButton")
        
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                render();
            });
            
        
        });
  
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        }); 

        render();
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