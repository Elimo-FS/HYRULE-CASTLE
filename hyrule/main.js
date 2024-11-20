"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var process_1 = require("process");
var index_1 = require("./character/index");
var rarity_1 = require("./character/rarity");
var index_2 = require("./parse-json/index");
var management_1 = require("./terminal/management");
var players = (0, index_2.readJson)('json/players.json');
var enemies = (0, index_2.readJson)('json/enemies.json');
var bosses = (0, index_2.readJson)('json/bosses.json');
var commands = (0, index_2.readJson)('json/configGame.json');
var baseGameMode = (0, index_2.readJson)('json/baseGame.json');
var running = true;
var baseGame = false;
var floor = 1;
var fight = 1;
var savePlayerData;
var saveEnemyData;
var saveBossData;
var player;
var enemy;
var boss;
function main() {
    console.log('                                                    \n _____             _        _____         _   _     \n|  |  |_ _ ___ _ _| |___   |     |___ ___| |_| |___ \n|     | | |  _| | | | -_|  |   --| . |_ -|  _| | -_|\n|__|__|_  |_| |___|_|___|  |_____|__,|___|_| |_|___|\n      |___|                             \x1b[1m\n                  Link & company\x1b[0m\n\n             - Choice your Game Mode: -');
    var gameMode = "".concat(commands.gameMode);
    console.log("                                                    ".concat(gameMode));
    (0, management_1.endGame)(gameMode);
    if (gameMode === "Base_Game") {
        savePlayerData = baseGameMode[0];
        saveEnemyData = baseGameMode[1];
        saveBossData = baseGameMode[2];
        baseGame = true;
    }
    else if (gameMode === "Base_Game+") {
        savePlayerData = (0, rarity_1.getCharFromArray)(players);
        saveEnemyData = (0, rarity_1.getCharFromArray)(enemies);
        saveBossData = (0, rarity_1.getCharFromArray)(bosses);
        baseGame = false;
    }
    player = new index_1.Character(savePlayerData);
    enemy = new index_1.Character(saveEnemyData);
    boss = new index_1.Character(saveBossData);
    var mob = enemy;
    while (running) {
        if (fight === 1) {
            console.log("                 \u001B[1;33m=== FLOOR ".concat(floor, " ===\u001B[0m"));
        }
        (0, management_1.printLife)(player, mob);
        var response = rl.keyIn('[1] \x1b[1;31mAttack\x1b[0m [2] \x1b[1;34mHeal\x1b[0m [0] \x1b[1;33mQuit\x1b[0m:\n', { limit: '$<0-2>' });
        (0, management_1.endGame)(response);
        if (response === '1') {
            player.attack(mob);
            console.log("You deal \u001B[1;31m".concat(Math.floor(player.str - player.str * (mob.def / 100)), " damages\u001B[0m and ").concat(mob.name, " inflict \u001B[1;31m").concat(Math.floor(mob.str - enemy.str * (player.def / 100)), " damages\u001B[0m\n"));
            mob.attack(player);
        }
        if (response === '2') {
            player.heal();
            mob.attack(player);
            console.log("You just healed yourself from \u001B[1;34m".concat(player.maxHp / 2, " HP\u001B[0m and the ").concat(enemy.name, " inflict \u001B[1;31m").concat(Math.floor(enemy.str - enemy.str * (player.def / 100)), " damages\u001B[0m\n"));
        }
        if (player.hp <= 0) {
            console.log("".concat(player.name, " just died"));
            (0, process_1.exit)(1);
        }
        if (mob.hp <= 0) {
            if (mob === boss) {
                console.log("Congrats ".concat(player.name, ", you kill the boss ").concat(mob.name, "!\n"));
                mob = enemy;
            }
            else {
                console.log("".concat(mob.name, " just died!\n"));
                if (baseGame === false) {
                    saveEnemyData = (0, rarity_1.getCharFromArray)(enemies);
                    saveBossData = (0, rarity_1.getCharFromArray)(bosses);
                }
            }
            floor += 1;
            fight = 0;
            if (floor === 10) {
                console.log("".concat(boss.name, " just appeared!"));
                mob = boss;
            }
            else if (floor === commands.floorNb + 1) {
                mob = new index_1.Character(saveEnemyData);
                console.log("A new ".concat(mob.name, " just appeared!"));
            }
            else {
                mob = new index_1.Character(saveEnemyData);
                console.log("A new ".concat(mob.name, " just appeared!"));
            }
        }
        fight += 1;
    }
}
main();
