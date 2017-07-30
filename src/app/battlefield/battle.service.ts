import { Injectable } from '@angular/core';


@Injectable()
export class BattleService {
  constructor() { }
  calculateNoHitsRequiredToKillEnemy(enemyObj : any , armyObj : any , enemyCount : number){
    return Math.ceil(enemyObj.health/ armyObj.damagePerHit) * enemyCount;
  }
  calculateEnemyCount(battleObj: any, enemy){
   let count= 0;
   for(let enemyObj of  battleObj.battleComposition[enemy]){
       count = count + battleObj.fieldModel[enemyObj.type];
   }
   return count;
  }
}
