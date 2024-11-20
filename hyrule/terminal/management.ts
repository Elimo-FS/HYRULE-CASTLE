import { exit } from 'process';
import { Char } from '../character';

export const lookHpMore: string = '❤️ ';
export const lookHpLess: string = '🖤';

export function endGame(response: string): void {
  if (response === '0') {
    console.log('Bye! Maybe see you again...\n');
    exit(1);
  }
}

export function printLife(player: Char, mob: Char): void {
  console.log(`\x1b[1;35m${mob.name}\x1b[0m`);
  console.log(`\x1b[1;31mHP\x1b[0m \x1b[1m:\x1b[0m ${lookHpMore.repeat(mob.hp)}${lookHpLess.repeat(mob.maxHp - mob.hp)} ${mob.hp}\x1b[1m/${mob.maxHp}\x1b[0m\n`);

  console.log(`\x1b[1;34m${player.name}\x1b[0m`);
  console.log(`\x1b[1;31mHP\x1b[0m \x1b[1m:\x1b[0m ${lookHpMore.repeat(player.hp)}${lookHpLess.repeat(player.maxHp - player.hp)} ${player.hp}\x1b[1m/${player.maxHp}\x1b[0m\n`);
}
