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

        for (const task of tasks) {
            htmlString += `
            <li>
                ${task.content}
            </li>
            `; 
         }

         document.querySelector(".js-tasksList").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
}