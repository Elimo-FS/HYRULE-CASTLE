"use strict";
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable max-classes-per-file */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
var Character = /** @class */ (function () {
    function Character(data) {
        Object.assign(this, data);
        this.maxHp = this.hp;
    }
    Character.prototype.attack = function (character) {
        character.hp -= Math.floor(this.str - this.str * (character.def / 100));
    };
    Character.prototype.heal = function () {
        this.hp += Math.floor(this.maxHp / 2);
        if (this.hp > this.maxHp)
            this.hp = this.maxHp;
    };
    return Character;
}());
exports.Character = Character;
