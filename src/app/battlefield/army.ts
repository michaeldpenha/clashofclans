import {Soldier} from './soldier';

export class Army {
    troops : any = [];
    health : number = 0;
    damagePerHit : number = 0;
    constructor (armyName,armyComp){
        this.calculateTotalArmyStrength(this.armyComposition(armyName,armyComp));
    }
    private calculateTotalArmyStrength(troopsArray) {
        for(let obj of troopsArray){
           this.health = this.health + obj.health;
           this.damagePerHit = this.damagePerHit + obj.damagePerHit;
        }
    }
    private armyComposition(armyName,armyComp){
        let teamAry = [];
        for(let obj of armyComp[armyName]){
            teamAry.push(new Soldier(obj));
        }
        return teamAry;
    }
}