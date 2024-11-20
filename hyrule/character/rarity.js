"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rarity = rarity;
exports.getCharFromArray = getCharFromArray;
function rarity() {
    var pourc = Math.random();
    if (pourc < 0.5) {
        return 1;
    }
    if (pourc < 0.8) {
        return 2;
    }
    if (pourc < 0.95) {
        return 3;
    }
    if (pourc < 0.99) {
        return 4;
    }
    return 5;
}
function getCharFromArray(jsonCharacter) {
    var dice = rarity();
    var characterList = jsonCharacter.filter(function (elem) { return elem.rarity === dice; });
    return characterList[Math.floor(Math.random() * characterList.length)];
}
