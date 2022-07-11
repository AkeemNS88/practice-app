import foods from './foods'

// const randomFruit = Math.floor(Math.random() * foods.length);

function choice(items) {
    // select random fruit from array of fruits
    let index = Math.floor(Math.random() * items.length);
    return items[index];
}

function remove(items, item) {
    // loop through the array
    for (let i = 0; i < items.length; i++) {
        // check each item in the array for matching item
        if (items[i] === item) {
            // return two slices of the array, up to and after the item being removed and combine into new array
            return [ ...items.slice(0, i), ...items.slice(i + 1) ];
        }
    }
}

export {choice, remove};