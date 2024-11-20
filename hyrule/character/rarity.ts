import { Char } from '.';

export function rarity() : number {
  const pourc: number = Math.random();
  if (pourc < 0.5) {
    return 1;
  } if (pourc < 0.8) {
    return 2;
  } if (pourc < 0.95) {
    return 3;
  } if (pourc < 0.99) {
    return 4;
  }
  return 5;
}

export function getCharFromArray(jsonCharacter: Char[]) {
  const dice = rarity();
  const characterList = jsonCharacter.filter((elem: Char) => elem.rarity === dice);

  return characterList[Math.floor(Math.random() * characterList.length)];
}
