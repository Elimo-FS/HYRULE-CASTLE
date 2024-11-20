/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable max-classes-per-file */

export interface Char {
  maxHp: number;
  id: number,
  name: string,
  hp: number,
  mp: number,
  str: number,
  int: number,
  def: number,
  res: number,
  spd: number,
  luck: number,
  race: number,
  class: number,
  rarity: number,
}


export class Character {
  id!: number;

  name!: string;

  hp!: number;

  maxHp!: number;

  mp!: number;

  str!: number;

  int!: number;

  def!: number;

  res!: number;

  spd!: number;

  luck!: number;

  race!: number;

  class!: number;

  rarity!: number;

  constructor(data: Char) {
    Object.assign(this, data);
    this.maxHp = this.hp;
  }

  attack(character: Character) {
    character.hp -= Math.floor(this.str - this.str * (character.def / 100));
  }

  heal() {
    this.hp += Math.floor(this.maxHp / 2);
    if (this.hp > this.maxHp) this.hp = this.maxHp;
  }
}