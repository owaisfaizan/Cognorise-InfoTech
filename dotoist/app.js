document.addEventListener("DOMContentLoaded", () =>{
  const storedtasks = JSON.parse(localStorage.getItem("tasks"));

  if(storedtasks){
    storedtasks.forEach((task) => tasks.push(task));
    updateTaskList();
    updatestart();
    savetasks();
  }
});


let tasks = [];

const savetasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

const addTask = () => {
    const taskInput = document.getElementById("taskinput");
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        updateTaskList();
        updatestart();
        savetasks();
    }
};

const toggleTaskComplete = (index) => {
    
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
    updatestart();
    savetasks();

};
const deleteTask = (index) => {
       
       tasks.splice(index, 1);
       updateTaskList();
       updatestart();
       savetasks();
};
const updatestart = ()=>{
  const completetasks = tasks.filter(task=> task.completed).length;
  const totaltask = tasks.length;
  const prog = (completetasks / totaltask) * 100;
  const progressBar = document.getElementById("progress");
  
  progressBar.style.width = `${prog}%`;
  progressBar.style.height = `${100}%`;

  document.getElementById("numbers").innerText= `${completetasks} / ${totaltask}`;

  if (tasks.length && completetasks === totaltask) {
    celebconfeti();
    
  }
};

const editTask = (index) => {
    const taskInput = document.getElementById("taskinput")
    taskInput.value= tasks[index].text;

    tasks.splice(index, 1);
    updateTaskList();
    updatestart();
    savetasks();
};
const updateTaskList = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
        <div class="taskitem">
          <div class="task ${task.completed ? "completed" : ""}">
            <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} />
            <p>${task.text}</p>
          </div>
          <div class="icons">
            <img src="./edit.png" onClick="editTask(${index})" />
            <img src="./bin.png" onClick="deleteTask(${index})" />
          </div>
        </div>
        `;

        listItem.querySelector(".checkbox").addEventListener('change', () => toggleTaskComplete(index));
        taskList.append(listItem);
    });
};

document.getElementById("newtask").addEventListener('click', function (e) {
    e.preventDefault();
    addTask();
});

const celebconfeti = () => {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
  };
  
  function shoot() {
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 1.2,
      shapes: ["circle", "square"],
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    });
  
    confetti({
      ...defaults,
      particleCount: 20,
      scalar: 2,
      shapes: ["emoji"],
      shapeOptions: {
        emoji: {
          value: ["🦄", "🌈"],
        },
      },
    });
  }
  
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}


