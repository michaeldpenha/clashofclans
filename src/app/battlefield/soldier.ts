export class Soldier {
    type : string;
    damagePerHit : number;
    health : number;
    constructor (type,damagePerHit,health){
        this.type = type;
        this.damagePerHit = damagePerHit;
        this.health = health;
    }
}