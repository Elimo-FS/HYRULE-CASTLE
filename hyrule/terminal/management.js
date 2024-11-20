"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookHpLess = exports.lookHpMore = void 0;
exports.endGame = endGame;
exports.printLife = printLife;
var process_1 = require("process");
exports.lookHpMore = '❤️ ';
exports.lookHpLess = '🖤';
function endGame(response) {
    if (response === '0') {
        console.log('Bye! Maybe see you again...\n');
        (0, process_1.exit)(1);
    }
}
function printLife(player, mob) {
    console.log("\u001B[1;35m".concat(mob.name, "\u001B[0m"));
    console.log("\u001B[1;31mHP\u001B[0m \u001B[1m:\u001B[0m ".concat(exports.lookHpMore.repeat(mob.hp)).concat(exports.lookHpLess.repeat(mob.maxHp - mob.hp), " ").concat(mob.hp, "\u001B[1m/").concat(mob.maxHp, "\u001B[0m\n"));
    console.log("\u001B[1;34m".concat(player.name, "\u001B[0m"));
    console.log("\u001B[1;31mHP\u001B[0m \u001B[1m:\u001B[0m ".concat(exports.lookHpMore.repeat(player.hp)).concat(exports.lookHpLess.repeat(player.maxHp - player.hp), " ").concat(player.hp, "\u001B[1m/").concat(player.maxHp, "\u001B[0m\n"));
}
