import Gladiator from './gladiator.js';

export default class Arena {
    constructor(name) {
        this.name = name;
        this.gladiators = [];
    }
    addGladiator(gladiators) {
        if (this.gladiators.length < 2)
            this.gladiators.push(this.gladiator);
        else
            console.log('you have more than 2 gladiators')
    }
    fight(){
        
    }

}