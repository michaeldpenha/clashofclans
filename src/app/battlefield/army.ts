export class Army {
    troops : any = [];
    health : number = 0;
    damagePerHit : number = 0;
    constructor (troops){
        this.calculateTotalArmyStrength(troops);
    }
    private calculateTotalArmyStrength(troopsArray) {
        for(let obj of troopsArray){
           this.health = this.health + obj.health;
           this.damagePerHit = this.damagePerHit + obj.damagePerHit;
        }
    }
}