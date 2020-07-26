// Object for all attributes
const attributes = {
    str: 0,
    strModifier: 0,
    dex: 0,
    dexModifier: 0,
    int: 0,
    intModifier: 0
};

// Array containing objects of all the ranges that change the modifier for the stat
const ranges = [
    { min: 6, max: 7, modifier: 5},
    { min: 8, max: 9, modifier: 10},
    { min: 10, max: 10, modifier: 15},
    { min: 11, max: 12, modifier: 20},
    { min: 13, max: 14, modifier: 25},
    { min: 15, max: 15, modifier: 30},
    { min: 16, max: 17, modifier: 35},
    { min: 18, max: 19, modifier: 40},
    { min: 20, max: Math.infinity, modifier: 45},
];

// Iterates over the ranges array comparing the stat it was given. If
// it falls within the range given in the for loop, it returns that modifier value
// in the object. If none of the values match up, it returns 0 for the modifier.
const getModifier = (stat, ranges) => {
    for (const range of ranges) {
        if (stat >= range.min && stat <= range.max) {
            return range.modifier;
        }
    }
    return 0;
}

attributes.str = parseInt(prompt("What is your STR?"), 10);
attributes.strModifier = getModifier(attributes.str, ranges)
attributes.dex = parseInt(prompt("What is your DEX?"), 10);
attributes.dexModifier = getModifier(attributes.dex, ranges)
attributes.int = parseInt(prompt("What is your INT?"), 10);
attributes.intModifier = getModifier(attributes.int, ranges)



const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const d100 = () => getRandomInt(1, 100);




