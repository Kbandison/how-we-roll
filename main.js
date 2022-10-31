/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

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

let medianD6 = document.querySelector('#d6-rolls-median');
let medianDouble = document.querySelector('#double-d6-rolls-median');
let medianD12 = document.querySelector('#d12-rolls-median');
let medianD20 = document.querySelector('#d20-rolls-median');


/*******************
 * EVENT LISTENERS *
 *******************/
imageD6.addEventListener('click', () => {
    d6RollFunc();
    console.log(sixes)
});

imageDouble1.addEventListener('click', () => {
    double1RollFunc();
    console.log(doubleSixes)
});

imageDouble2.addEventListener('click', () => {
    double2RollFunc();
    console.log(doubleSixes)
});

imageD12.addEventListener('click', () => {
    d12RollFunc();
    console.log(twelves)
});

imageD20.addEventListener('click', () => {
    d20RollFunc();
    console.log(twenties)
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
    medianD6.innerText = 'N/A';
    medianDouble.innerText = 'N/A';
    medianD12.innerText = 'N/A';
    medianD20.innerText = 'N/A';
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
    medianD6.innerText = getMedian(sixes);
}
let double1RollFunc = () => {
    let result = getRandomNumber(6);
    imageDouble1.src = `images/d6/${result}.png`;
    doubleSixes.push(result);
    meanDouble.innerText = getMean(doubleSixes);
    medianDouble.innerText = getMedian(doubleSixes);
}

let double2RollFunc = () => {
    let result = getRandomNumber(6);
    imageDouble2.src = `images/d6/${result}.png`;
    doubleSixes.push(result);
    meanDouble.innerText = getMean(doubleSixes);
    medianDouble.innerText = getMedian(doubleSixes);
}

let d12RollFunc = () => {
    let result = getRandomNumber(12);
    imageD12.src = `images/numbers/${result}.png`;
    twelves.push(result);
    meanD12.innerText = getMean(twelves);
    medianD12.innerText = getMedian(twelves);
}

let d20RollFunc = () => {
    let result = getRandomNumber(6);
    imageD20.src = `images/numbers/${result}.png`;
    twenties.push(result);
    meanD20.innerText = getMean(twenties);
    medianD20.innerText = getMedian(twenties);
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

let getMedian = arr => {
    let total = 0;
    let mid = Math.floor(arr.length / 2);

    sixes.sort();
    doubleSixes.sort();
    twelves.sort();
    twenties.sort();

    for (let i = 0; i < arr.length; i++) {
        if (arr.length % 2 === 0){
            return total += (arr[mid] + arr[mid - 1]) / 2;
        } else if (arr.length % 2 != 0){
            return total += arr[mid];
        } 
    }

}