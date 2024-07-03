class Task {

    id: number; // property or attribute
    title: string; // property or attribute
    description: string; // property or attribute
    completed: boolean;// property or attribute
    

    constructor(
        idProvidedByUser: number,
        title: string,
        description: string,
        completed: boolean
    ) {

        this.id = idProvidedByUser;
        this.title = title;
        this.description = description;
        this.completed = completed;

    }

    complete() { // method
        this.completed = true;
    }

    inComplete() { // method
        this.completed = false;
    }
}


const taskOne = new Task(1, "walk", "walk to school", false);
console.log(taskOne);
taskOne.complete();
console.log(taskOne);

const taskTwo = new Task(2,"eat lunch", "eat lunch with friends", false);
console.log(taskTwo);
taskTwo.complete();
console.log(taskTwo);