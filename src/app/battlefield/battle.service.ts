import { Injectable } from '@angular/core';


@Injectable()
export class BattleService {
  constructor() { }
  calculateNoHitsRequiredToKillEnemy(enemyObj : any , armyObj : any , enemyCount : number){
    return Math.ceil(enemyObj.health/ armyObj.damagePerHit) * enemyCount;
  }
}
