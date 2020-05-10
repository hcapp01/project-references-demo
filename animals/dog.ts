/// <reference path="animal.ts"/>
/// <reference path="../core/utilities.ts"/>
interface Dog extends Animal {
    woof(): void;
    name: string;
}

function createDog(): Dog {
    return ({
        size: "medium",
        woof: function(this: Dog) {
            console.log(`${this.name} says "Woof"!`);
        },
        name: makeRandomName()
    });
}

