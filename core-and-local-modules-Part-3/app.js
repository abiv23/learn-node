Dog = require('./dog');
Cat = require('./cat');

let fight = (dog, cat) => {
    if (dog.toothStrength > cat.clawStrength){
        console.log(`${dog.name} wins!`);
    } else if (dog.toothStrength < cat.clawStrength){
        console.log(`${cat.name} wins!`)
    } else {
        console.log(`${dog.name} and ${cat.name} are equally skilled fighters!`)
    }
}

const myDog = new Dog('Quimby', Math.random());
const myCat = new Cat('Chairmen', Math.random());

fight (myDog, myCat);