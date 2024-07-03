"use strict";
const task = {
    id: 1,
    title: "Run a marathon",
    description: "task 1 description",
    completed: false,
    dueDate: "2024-08-10",
    complete: function () {
        this.completed = true;
    }
};
const task2 = {
    id: 2,
    title: "Coding preparation",
    description: "task 1 description",
    completed: false,
    dueDate: "2024-08-10",
    complete: function () {
        this.completed = true;
    }
};
const task3 = {
    id: 3,
    title: "Coding preparation",
    description: "task 1 description",
    completed: false,
    dueDate: "2024-08-10",
    complete: function () {
        this.completed = true;
    }
};
console.log(task2);
task2.complete();
console.log(task2);
console.log(this);
