export class Soldier {
    type : string;
    damagePerHit : number;
    health : number;
    constructor (soldierObj){
        this.type = soldierObj.type;
        this.damagePerHit = soldierObj.damagePerHit;
        this.health = soldierObj.health;
    }
}