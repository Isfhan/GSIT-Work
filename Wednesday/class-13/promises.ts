function checkWeather_2(): Promise<void> {

    return new Promise((resolve, reject) => {

        console.log("Checking the weather...");

        setTimeout(() => {

            console.log("Weather is clear!");

            resolve();

        }, 500);

    });
}


function prepareBurger(): Promise<void> {

    return new Promise((resolve, reject) => {

        console.log("Preparing Burger...");

        setTimeout(() => {

            console.log("Burger is ready!");

            resolve();

        }, 2000);

    });
}


function packBags_3(): Promise<void> {

    return new Promise((resolve, reject) => {

        console.log("Packing stuff like drinks, snacks, and water bottles etc...");

        setTimeout(() => {

            console.log("Bags are packed!");

            resolve();

        }, 1500);

    });

}


function loadCar_2(): Promise<void> {

    return new Promise((resolve, reject) => {

        console.log("Loading the car...");

        setTimeout(() => {

            console.log("Car is loaded!");

            resolve();

        }, 1000);

    });

}

checkWeather_2()
    .then(prepareBurger)
    .then(packBags_3)
    .then(loadCar_2)
    .then(() => console.log("All done! we can go now"))
    .catch((err) => console.log(err));
    