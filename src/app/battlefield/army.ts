import {Soldier} from './soldier';

export class Army {
    troops : any = [];
    health : number = 0;
    damagePerHit : number = 0;
    armyAvailbale : any = {'Attack' : [{type : 'Barbarians',health : 45 , damagePerHit : 8}],'Defense':[{type : 'Cannons',health : 390 , damagePerHit : 10}]};
    constructor (armyName){
        this.calculateTotalArmyStrength(this.armyComposition(armyName));
    }
    private calculateTotalArmyStrength(troopsArray) {
        for(let obj of troopsArray){
           this.health = this.health + obj.health;
           this.damagePerHit = this.damagePerHit + obj.damagePerHit;
        }
    }
    public armyComposition(armyName){
        let teamAry = [];
        for(let obj of this.armyAvailbale[armyName]){
            teamAry.push(new Soldier(obj));
        }
        return teamAry;
    }
}