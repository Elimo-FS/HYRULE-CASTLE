import * as rl from 'readline-sync';
import { exit } from 'process';
import { Char, Character } from './character/index';
import { getCharFromArray } from './character/rarity';
import { readJson } from './parse-json/index';
import { endGame, printLife } from './terminal/management';

const players: Char[] = readJson('json/players.json');
const enemies: Char[] = readJson('json/enemies.json');
const bosses: Char[] = readJson('json/bosses.json');
const commands = readJson('json/configGame.json');
const baseGameMode = readJson('json/baseGame.json');

const running: boolean = true;
let baseGame: boolean = false;
let floor: number = 1;
let fight: number = 1;
let savePlayerData: Char;
let saveEnemyData: Char;
let saveBossData: Char;
let player: Character;
let enemy: Character;
let boss: Character;

function main(): void {
  console.log('                                                    \n _____             _        _____         _   _     \n|  |  |_ _ ___ _ _| |___   |     |___ ___| |_| |___ \n|     | | |  _| | | | -_|  |   --| . |_ -|  _| | -_|\n|__|__|_  |_| |___|_|___|  |_____|__,|___|_| |_|___|\n      |___|                             \x1b[1m\n                  Link & company\x1b[0m\n\n             - Choice your Game Mode: -');
  let gameMode = `${commands.gameMode}`

  endGame(gameMode);

  if (gameMode === "Base_Game") {
    console.log('You choose the Base Game')
    savePlayerData = baseGameMode[0];
    saveEnemyData = baseGameMode[1];
    saveBossData = baseGameMode[2];
    
    baseGame = true;
  } else if (gameMode === "Base_Game+") {
    console.log('You choose the Base \x1b[1;31mGame+\x1b[0m')
    savePlayerData = getCharFromArray(players);
    saveEnemyData = getCharFromArray(enemies);
    saveBossData = getCharFromArray(bosses);
    baseGame = false;
  }
  player = new Character(savePlayerData);
  enemy = new Character(saveEnemyData);
  boss = new Character(saveBossData);
  let mob = enemy

  while (running) {
  
    if (fight === 1) {
      if (floor === 1){
        console.log(`A new ${mob.name} just appeared!`);
      }
      console.log(`                 \x1b[1;33m=== FLOOR ${floor} ===\x1b[0m`);
    }
    printLife(player, mob);
    const response = rl.keyIn('[1] \x1b[1;31mAttack\x1b[0m [2] \x1b[1;34mHeal\x1b[0m [0] \x1b[1;33mQuit\x1b[0m:\n', { limit: '$<0-2>' });
    
    endGame(response);
    
    if (response === '1') {
      player.attack(mob);
      console.log(`You deal \x1b[1;31m${Math.floor(player.str - player.str * (mob.def / 100))} damages\x1b[0m and ${mob.name} inflict \x1b[1;31m${Math.floor(mob.str - enemy.str * (player.def / 100))} damages\x1b[0m\n`);
      mob.attack(player);
    }
    
    if (response === '2') {
      player.heal();
      mob.attack(player);
      console.log(`You just healed yourself from \x1b[1;34m${player.maxHp / 2} HP\x1b[0m and the ${enemy.name} inflict \x1b[1;31m${Math.floor(enemy.str - enemy.str * (player.def / 100))} damages\x1b[0m\n`);
    }
    
    if (player.hp <= 0) {
      console.log(`${player.name} just died`);
      exit(1);
    }
    
    if (mob.hp <= 0) {
      if (mob === boss) {
        console.log(`Congrats ${player.name}, you kill the boss ${mob.name}!\n`);
        mob = enemy
      } else {
        console.log(`${mob.name} just died!\n`);
        if (baseGame === false) {
          saveEnemyData = getCharFromArray(enemies);
          saveBossData = getCharFromArray(bosses);
        }
      } 
      floor += 1;
      fight = 0;
      if (floor === 10) {
        console.log(`${boss.name} just appeared!`);
        mob = boss;
      } else if (floor === commands.floorNb + 1) {
        console.log(`You allready reach the ${commands.floorNb} floor!`);
        console.log(`Congratulation ${player.name}`);
        exit(1);
      } else {
        mob = new Character(saveEnemyData);
        console.log(`A new ${mob.name} just appeared!`);
      }
    }
    fight += 1;
  }
}

main();
