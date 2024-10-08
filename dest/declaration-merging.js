"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.banana = exports.straberry = exports.isANamespace = exports.isAValue = void 0;
exports.Fruit = Fruit;
const banana = {
    name: 'banana',
    mass: 183,
    color: 'yellow',
};
exports.banana = banana;
// ? Value
function Fruit(kind) {
    switch (kind) {
        case 'banana':
            return banana;
        default:
            throw new Error(`fruit type ${kind} not found`);
    }
}
// ? Namespace
(function (Fruit) {
    function createBanana() {
        return Fruit('banana');
    }
    Fruit.createBanana = createBanana;
})(Fruit || (exports.Fruit = Fruit = {}));
// NOTE: Shift + k on names
exports.isAValue = 4;
var isANamespace;
(function (isANamespace) {
    isANamespace.foo = 4;
})(isANamespace || (exports.isANamespace = isANamespace = {}));
// namespace
Fruit.createBanana();
// type
exports.straberry = {
    name: 'straw',
    mass: 23,
    color: 'red',
};
// function
Fruit('banana');
class Fruit2 {
    constructor() {
        this.name = 'asda';
    }
}
const def = Fruit2;
console.log(def.name);
const newFruit = { name: 'something' };
console.log(newFruit.name);
// WARN: I think this is a bad idea but cool to learn.
