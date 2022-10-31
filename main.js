/**********
 * DATA *
 **********/

let sixes = [1];
let doubleSixes = [2];
let twelves = [3];
let twenties = [4];

/********************
 * HELPER FUNCTIONS *
********************/

let getRandomNumber = function (max) {
    let rand = Math.random();
    let range = rand * max;
    let result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/
let resetButton = document.querySelector('#reset-button');

let imageD6 = document.querySelector('#d6-roll');
let imageDouble1 = document.querySelector('#double-d6-roll-1');
let imageDouble2 = document.querySelector('#double-d6-roll-2');
let imageD12 = document.querySelector('#d12-roll');
let imageD20 = document.querySelector('#d20-roll');

let meanD6 = document.querySelector('#d6-rolls-mean');
let meanDouble = document.querySelector('#double-d6-rolls-mean');
let meanD12 = document.querySelector('#d12-rolls-mean');
let meanD20 = document.querySelector('#d20-rolls-mean');


/*******************
 * EVENT LISTENERS *
 *******************/
imageD6.addEventListener('click', () => {
    d6RollFunc();
});

imageDouble1.addEventListener('click', () => {
    double1RollFunc();
});

imageDouble2.addEventListener('click', () => {
    double2RollFunc();
});

imageD12.addEventListener('click', () => {
    d12RollFunc();
});

imageD20.addEventListener('click', () => {
    d20RollFunc();
});

resetButton.addEventListener('click', () => {
    reset();
});



/******************
 * RESET FUNCTION *
 ******************/

let reset = () => {
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
    imageD6.src = 'images/start/d6.png';
    imageDouble1.src = 'images/start/d6.png';
    imageDouble2.src = 'images/start/d6.png';
    imageD12.src = 'images/start/d12.jpeg';
    imageD20.src = 'images/start/d20.jpg';
    meanD6.innerText = 'N/A';
    meanDouble.innerText = 'N/A';
    meanD12.innerText = 'N/A';
    meanD20.innerText = 'N/A';
}

reset();


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

let d6RollFunc = () => {
    let result = getRandomNumber(6);
    imageD6.src = `images/d6/${result}.png`;
    sixes.push(result);
    meanD6.innerText = getMean(sixes);
}
let double1RollFunc = () => {
    let result = getRandomNumber(6);
    imageDouble1.src = `images/d6/${result}.png`;
    doubleSixes.push(result);
    meanDouble.innerText = getMean(doubleSixes);
}

let double2RollFunc = () => {
    let result = getRandomNumber(6);
    imageDouble2.src = `images/d6/${result}.png`;
    doubleSixes.push(result);
    meanDouble.innerText = getMean(doubleSixes);
}

let d12RollFunc = () => {
    let result = getRandomNumber(12);
    imageD12.src = `images/numbers/${result}.png`;
    twelves.push(result);
    meanD12.innerText = getMean(twelves);
}

let d20RollFunc = () => {
    let result = getRandomNumber(6);
    imageD20.src = `images/numbers/${result}.png`;
    twenties.push(result);
    meanD20.innerText = getMean(twenties);
}


/****************
 * MATH SECTION *
 ****************/

let getMean = arr => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return Math.round((total / arr.length) * 100) / 100;
}