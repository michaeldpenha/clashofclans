import {Soldier} from './soldier';

export class Army {
    troops : any = [];
    health : number = 0;
    damagePerHit : number = 0;
    constructor (armyName,battleComp){
        this.calculateTotalArmyStrength(this.armyComposition(armyName,battleComp));
    }
    private calculateTotalArmyStrength(troopsArray) {
        for(let obj of troopsArray){
           this.health = this.health + obj.health;
           this.damagePerHit = this.damagePerHit + obj.damagePerHit;
        }
    }
    private armyComposition(armyName,battleComp){
        let teamAry = [];
        for(let obj of battleComp[armyName]){
            teamAry.push(new Soldier(obj));
        }
        return teamAry;
    }
}