let activities = [
    { id: 1, name: "Wake up early", completed: false },
    { id: 2, name: "Exercise", completed: false },
    { id: 3, name: "Study JavaScript", completed: false },
    { id: 4, name: "Build Project", completed: false }
];

const activityList = document.getElementById("activityList");
const progressText = document.getElementById("progress");

function renderActivities() {
    activityList.innerHTML = "";

    activities.forEach((activity) => {
        let li = document.createElement("li");

        if (activity.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            ${activity.name}
            <button onclick="toggleStatus(${activity.id})">
                ${activity.completed ? "Completed" : "Mark Done"}
            </button>
        `;

        activityList.appendChild(li);
    });

    updateProgress();
}

function toggleStatus(id) {
    activities = activities.map(activity => {
        if (activity.id === id) {
            return { ...activity, completed: !activity.completed };
        }
        return activity;
    });

    renderActivities();
}

function updateProgress() {
    let completedCount = activities.filter(a => a.completed).length;
    progressText.innerText = `${completedCount} out of ${activities.length} activities completed`;
}

renderActivities();