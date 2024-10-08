interface Fruit  {
    name: string,
    mass: number,
    color: string,
}

const banana: Fruit = {
    name: 'banana',
    mass: 183,
    color: 'yellow',
}

// ? Value
function Fruit (kind: string) {
    switch(kind) {
        case 'banana':
            return banana
        default:
            throw new Error(`fruit type ${kind} not found`);
    }
}


// ? Namespace
namespace Fruit {
    export function createBanana(): Fruit {
        return Fruit('banana')
    }
}

// NOTE: Shift + k on names
export const isAValue = 4;
export type isAType = {};
export namespace isANamespace {
    export const foo = 4;
}

// namespace
Fruit.createBanana();

// type
export const straberry: Fruit = {
    name: 'straw',
    mass: 23,
    color: 'red',
}

// function
Fruit('banana');


// NOTE: Fruit will be alias for 3 things, interface, function  and a namespace
export { banana, Fruit }

class Fruit2 {
    public name: string;
    constructor () {
        this.name = 'asda'
    }
}

const def = Fruit2;
console.log(def.name)

const newFruit: Fruit2 = {name: 'something'};
console.log(newFruit.name)
// WARN: I think this is a bad idea but cool to learn.
