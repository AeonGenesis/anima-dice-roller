const attributes = {
    str: 0,
    strModifer: 0,
    dex: 0,
    dexModifier: 0,
    int: 0,
    intModifier: 0
};

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

const getModifier = (stat, ranges) => {
    console.log(stat, ranges);
    for (const range of ranges) {
        console.log(range);
        if (stat >= range.min && stat <= range.max) {
            return range.modifier;
        }
    }
    return 0;
}

attributes.str = parseInt(prompt("What is your STR?"), 10);
attributes.strModifier = getModifier(attributes.str, ranges)

// attributes.dex = prompt("What is your DEX?");
// attributes.int = prompt("What is your INT?");

// if(attributes.str === 6 || attributes.str === 7) {
//     attributes.strModifer = 5;
// } else if (attributes.str === 8 || attributes.str === 9) {
//     attributes.strModifer = 10;
// } else if (attributes.str === 10) {
//     attributes.strModifier = 15; 
// } else if (attributes.str === 11 || attributes.str === 12) {
//         attributes.strModifier = 20;
// } else if (attributes.str === 13 || attributes.str === 14) {
//     attributes.strModifier = 25
// } else if (attributes.str === 15 || attributes.str === 16) {
//     attributes.strModfier = 30;
// } else if (attributes.str === 16 || attributes.str === 17) {
//     attributes.strModifier = 35;
// } else if (attributes.str === 18 || attributes.str === 19) {
//     attributes.strModifer = 40;
// } else if (attributes.str === 20) {
//     attributes.strModifer = 45;
// };


attributes.str = parseInt(prompt("What is your STR?"), 10);

const d100 = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

d100(1, 100);



