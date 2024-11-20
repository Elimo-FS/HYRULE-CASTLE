"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJson = readJson;
/* eslint-disable import/prefer-default-export */
var fs = require('fs');
function readJson(path) {
    var data = fs.readFileSync("".concat(path), 'utf-8');
    return JSON.parse(data);
}
