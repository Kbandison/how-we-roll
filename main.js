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

let getRandomNumber = function(max) {
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
    console.log('D6 Clicked');
    d6RollFunc(); 
    console.log('6 roll: ' + sixes);
});

imageDouble1.addEventListener('click', () => {
    console.log('Double1 Clicked');
    getRandomNumber();
    double1RollFunc();
    console.log(doubleSixes);
});

imageDouble2.addEventListener('click', () => {
    console.log('Double2 Clicked');
    getRandomNumber();
    double2RollFunc();
    console.log(doubleSixes);
});

imageD12.addEventListener('click', () => {
    console.log('D12 Clicked');
    d12RollFunc();
    console.log(twelves);
});

imageD20.addEventListener('click', () => {
    console.log('D20 Clicked');
    d20RollFunc();
    console.log(twenties);
});

resetButton.addEventListener('click', () => {
    console.log('Reset Clicked');
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
    console.log('Result: ' + result);
    imageD6.src = `images/d6/${result}.png`;
    sixes.push(result);
    meanD6.innerText = getMean(sixes);
}
let double1RollFunc = () => {
    let result = getRandomNumber(6);
    console.log('Result: ' + result);
    imageDouble1.src = `images/d6/${result}.png`;
    doubleSixes.push(result);
    meanDouble.innerText = getMean(doubleSixes);
}

let double2RollFunc = () => {
    let result = getRandomNumber(6);
    console.log('Result: ' + result);
    imageDouble2.src = `images/d6/${result}.png`;
    doubleSixes.push(result);
    meanDouble.innerText = getMean(doubleSixes);
}

let d12RollFunc = () => {
    let result = getRandomNumber(12);
    console.log('Result: ' + result);
    imageD12.src = `images/numbers/${result}.png`;
    twelves.push(result);
    meanD12.innerText = getMean(twelves);
}

let d20RollFunc = () => {
    let result = getRandomNumber(6);
    console.log('Result: ' + result);
    imageD20.src = `images/numbers/${result}.png`;
    twenties.push(result);
    meanD20.innerText = getMean(twenties);
}


/****************
 * MATH SECTION *
 ****************/

let getMean = arr => {
    let total = 0;

    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return Math.round((total / arr.length) * 100) / 100;
}