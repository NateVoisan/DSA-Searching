'use strict';

function deweySearching(dewey, title, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? dewey.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = dewey[index];

    for (let i = 0; i < dewey.length; i++) {
        if (dewey[i] == title) {
            return 'found book';
        }
    }

    if (item < dewey) {
        return deweySearching(dewey, title, index + 1, end);
    }
    else if (item > dewey) {
        return deweySearching(dewey, title, start, index - 1);
    }
}
console.log(deweySearching(['be', 'he', 'hi'], 'hi'));

const eggDrop = (eggs = 0, breakPoint = Math.floor(100 * Math.random()), currFloor, step) => {
    if (eggs === 0) {
        console.log(`Highest floor you can drop without a break is ${currFloor}, Break Point = ${breakPoint}`);
        return;
    }
    if (eggs === 1) {
        if (currFloor >= breakPoint) {
            eggs--;
            eggDrop(eggs, breakPoint, currFloor - step, step);
        }
        else {
            eggDrop(eggs, breakPoint, currFloor + step, step);
        }
    }
    if (eggs > 1) {
        if (currFloor > breakPoint) {
            eggs--;
            eggDrop(eggs, breakPoint, currFloor - step - 1, 1);
        }
        else {
            eggDrop(eggs, breakPoint, currFloor + step, step - 1);
        }
    }
};

let numEggs = 2;
let breakPoint = Math.floor(100 * Math.random());
let step = 14;

eggDrop(numEggs, breakPoint, step, step);