"use strict";
class Task {
    id; // property or attribute
    title; // property or attribute
    description; // property or attribute
    completed; // property or attribute
    constructor(idProvidedByUser, title, description, completed) {
        this.id = idProvidedByUser;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    complete() {
        this.completed = true;
    }
    inComplete() {
        this.completed = false;
    }
}
const taskOne = new Task(1, "walk", "walk to school", false);
console.log(taskOne);
taskOne.complete();
console.log(taskOne);
const taskTwo = new Task(2, "eat lunch", "eat lunch with friends", false);
console.log(taskTwo);
taskTwo.complete();
console.log(taskTwo);
