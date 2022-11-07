const arrWorkers = [
    {
        name:"Wayne Barnett",
        task:"Founder & CEO",	
        photo:`<img src="img/wayne-barnett-founder-ceo.jpg">`,

    },

    {
        name:"Angela Caroll",
        task:"Chief Editor",	
        photo:`<img src="img/angela-caroll-chief-editor.jpg">`, 
    },

    {
        name:"Walter Gordon",
        task:"Office Manager",	
        photo:`<img src="img/walter-gordon-office-manager.jpg">`,
    },

    {
        name:"Angela Lopez",
        task:"Social Media Manager",	
        photo:`<img src="img/angela-lopez-social-media-manager.jpg">`,
    },

    {
        name:"Scott Estrada",
        task:"Developer",	
        photo:`<img src="img/scott-estrada-developer.jpg">`,
    },

    {
        name:"Barbara Ramos",
        task:"Graphic Designer",	
        photo:`<img src="img/barbara-ramos-graphic-designer.jpg">`,
    },
]

console.log(arrWorkers);

const printText = document.querySelector(".cards");

for (let i = 0; i < arrWorkers.length; i++) {
    
    const workerImg = document.createElement("div");
    workerImg.classList.add("photo");

    workerImg.innerHTML += `${arrWorkers[i].photo}`;
    printText.append(workerImg);

    const workerName = document.createElement("div");
    workerName.classList.add("name");

    workerName.innerHTML += `${arrWorkers[i].name}`;
    printText.append(workerName);

    const workerTask = document.createElement("div");
    workerTask.classList.add("task");

    workerTask.innerHTML += `${arrWorkers[i].task}`;
    printText.append(workerTask);

} 
		















































