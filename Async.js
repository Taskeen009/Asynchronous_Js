const preheatOven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const preheat = true;

            if (preheat)
                resolve("Preheat oven");
            else
                reject("Failed to preheat oven");
        }, 1000);
    });
}

const addSugarAndChocoChips = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addChoco = true;

            if (addChoco)
                resolve("Add sugar and choco chips");
            else
                reject("Failed to add sugar and choco chips");
        }, 1000);
    });
}

const addFlour = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addSalt = true;

            if (addSalt)
                resolve("Add salt and flour");
            else
                reject("Failed to add salt and flour");
        }, 1000);
    });
}

const bake = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bakeMixture = true;

            if (bakeMixture)
                resolve("Bake the thing");
            else
                reject("Failed to bake");
        }, 1000);
    });
}

const bakingPart = async () => {
    try {
        const taskOne = await preheatOven();
        console.log(taskOne);
        
        const taskTwo = await addSugarAndChocoChips();
        console.log(taskTwo);

        const taskThree = await addFlour();
        console.log(taskThree);

        const taskFour = await bake();
        console.log(taskFour);

    } catch (error) {
        console.error(error);
    }
}

bakingPart();
