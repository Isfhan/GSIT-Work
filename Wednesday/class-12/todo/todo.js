let tasks = [];
export function addTask(task) {
    tasks.push(task);
    console.log(`Task "${task}" added to the list.`);
    console.log(`---------------------------`);
}
export function showTasks() {
    console.log('********************************');
    console.log("To-Do List:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
    console.log('********************************');
}
