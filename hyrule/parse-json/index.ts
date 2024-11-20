/* eslint-disable import/prefer-default-export */
const fs = require('fs');

export function readJson(path : string) {
  const data: string = fs.readFileSync(`${path}`, 'utf-8');

  return JSON.parse(data);
}
